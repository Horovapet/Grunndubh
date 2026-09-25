// Cloudflare Pages Function: POST /api/checkout
// Creates a Stripe Checkout Session and returns { url }. The secret key lives
// only in the Cloudflare env var STRIPE_SECRET_KEY, never in this repo.

import shipping from "../../assets/shipping.json";

// Server-side source of truth for what is sold and at what price. Keep the
// amounts in sync with PRODUCTS in assets/js/i18n.js (which only displays them).
const PRODUCTS = {
  obsidian: {
    name: { cz: "Obsidian", en: "Obsidian" },
    amounts: { czk: 420, eur: 18 },
    status: "made-to-order",
  },
};

// Delivery prices live in assets/shipping.json (shared with the storefront).
// Whole units per currency; the server always recomputes them, never trusts the browser.
function resolveShipping(country, methodId) {
  if (country === shipping.domestic.country) {
    const method = shipping.domestic.methods.find((m) => m.id === methodId);
    return method ? { id: method.id, pickup: method.pickup, czk: method.czk, eur: method.eur } : null;
  }
  const entry = shipping.eu.countries[country];
  if (!entry) return null;
  if (methodId === "packeta-point") {
    return entry.pickup ? { id: methodId, pickup: true, czk: entry.pickup.czk, eur: entry.pickup.eur } : null;
  }
  return methodId === shipping.eu.id ? { id: methodId, pickup: false, czk: entry.czk, eur: entry.eur } : null;
}

const SHIPPING_NAMES = {
  "packeta-point": { cz: "Zásilkovna – výdejní místo", en: "Zásilkovna – pickup point" },
  "packeta-point-eu": { cz: "Z-Point / Z-Box – výdejní místo", en: "Z-Point / Z-Box pickup point" },
  "ceska-posta": { cz: "Česká pošta", en: "Česká pošta" },
  ppl: { cz: "PPL", en: "PPL" },
  "eu-home": { cz: "Doručení na adresu", en: "Delivery to your address" },
};

const TERMS_VERSION = "2026-09-18";

const TEXT = {
  cz: {
    recipient: "Jméno příjemce zásilky",
    shipping: "Doprava",
    submit: "Kliknutím na Zaplatit odesíláte objednávku s povinností platby.",
  },
  en: {
    recipient: "Recipient name for the parcel",
    shipping: "Delivery",
    submit: "By clicking Pay you place an order with an obligation to pay.",
  },
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const clip = (value, max) => String(value ?? "").slice(0, max);

export async function onRequestPost({ request, env }) {
  const origin = new URL(request.url).origin;
  const requestOrigin = request.headers.get("Origin");
  if (requestOrigin && requestOrigin !== origin) return json({ error: "forbidden" }, 403);

  if (!env.STRIPE_SECRET_KEY) return json({ error: "not_configured" }, 500);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  const product = PRODUCTS[body.productId];
  const lang = body.lang === "cz" ? "cz" : "en";
  const currency = lang === "cz" ? "czk" : "eur";
  const country = clip(body.country, 2).toUpperCase();
  const ship = resolveShipping(country, clip(body.method, 30));
  const point = body.packetaPoint || {};
  const pointId = clip(point.id, 40);
  const pointCountry = clip(point.country, 2).toLowerCase();

  if (!product) return json({ error: "unknown_product" }, 400);
  if (product.status === "sold-out") return json({ error: "sold_out" }, 409);
  if (body.consent !== true) return json({ error: "consent_required" }, 400);
  if (!ship) return json({ error: "invalid_shipping" }, 400);
  if (ship.pickup && (!pointId || pointCountry !== country.toLowerCase())) return json({ error: "pickup_point_required" }, 400);

  const text = TEXT[lang];
  const params = new URLSearchParams();
  const add = (key, value) => params.append(key, String(value));

  add("mode", "payment");
  add("locale", lang === "cz" ? "cs" : "en");
  add("success_url", `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`);
  add("cancel_url", `${origin}/product.html?id=${encodeURIComponent(body.productId)}`);
  add("phone_number_collection[enabled]", "true");
  add("custom_text[submit][message]", text.submit);

  if (ship.pickup) {
    add("custom_fields[0][key]", "recipient_name");
    add("custom_fields[0][label][type]", "custom");
    add("custom_fields[0][label][custom]", text.recipient);
    add("custom_fields[0][type]", "text");
  } else {
    add("shipping_address_collection[allowed_countries][0]", country);
  }

  add("line_items[0][quantity]", 1);
  add("line_items[0][price_data][currency]", currency);
  add("line_items[0][price_data][unit_amount]", product.amounts[currency] * 100);
  add("line_items[0][price_data][product_data][name]", product.name[lang]);

  if (ship[currency] > 0) {
    add("line_items[1][quantity]", 1);
    add("line_items[1][price_data][currency]", currency);
    add("line_items[1][price_data][unit_amount]", ship[currency] * 100);
    add("line_items[1][price_data][product_data][name]", `${text.shipping}: ${SHIPPING_NAMES[ship.id === "packeta-point" && country !== shipping.domestic.country ? "packeta-point-eu" : ship.id][lang]} (${country})`);
  }

  const metadata = {
    product_id: body.productId,
    lang,
    shipping_method: ship.id,
    shipping_country: country,
    shipping_price: `${ship[currency]} ${currency.toUpperCase()}`,
    ...(ship.pickup && {
      packeta_point_id: pointId,
      packeta_point_name: clip(point.name, 200),
      packeta_point_city: clip(point.city, 100),
      packeta_point_street: clip(point.street, 150),
      packeta_point_country: pointCountry,
    }),
    terms_version: TERMS_VERSION,
    terms_accepted_at: new Date().toISOString(),
  };
  for (const [key, value] of Object.entries(metadata)) {
    add(`metadata[${key}]`, value);
    add(`payment_intent_data[metadata][${key}]`, value);
  }
  add("payment_intent_data[description]", `Grunndubh - ${product.name.en}`);

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
  const session = await response.json();

  if (!response.ok || !session.url) return json({ error: "stripe_error" }, 502);
  return json({ url: session.url });
}

export const onRequest = () => json({ error: "method_not_allowed" }, 405);
