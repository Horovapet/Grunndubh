// Cloudflare Pages Function: POST /api/checkout
// Creates a Stripe Checkout Session and returns { url }. The secret key lives
// only in the Cloudflare env var STRIPE_SECRET_KEY, never in this repo.

// Server-side source of truth for what is sold and at what price. Keep the
// amounts in sync with PRODUCTS in assets/js/i18n.js (which only displays them).
const PRODUCTS = {
  obsidian: {
    name: { cz: "Obsidian", en: "Obsidian" },
    amounts: { czk: 420, eur: 18 },
    status: "made-to-order",
  },
};

// Shipping charged to the customer, per currency, in whole units.
// TODO: set what you want to charge for Packeta (0 = free shipping).
const SHIPPING = { czk: 0, eur: 0 };

// Keep in sync with PACKETA_COUNTRIES in assets/js/config.js.
const ALLOWED_COUNTRIES = new Set(["cz", "sk"]);

const TERMS_VERSION = "2026-09-18";

const TEXT = {
  cz: {
    recipient: "Jméno příjemce zásilky",
    shipping: "Doprava Packeta",
    submit: "Kliknutím na Zaplatit odesíláte objednávku s povinností platby.",
  },
  en: {
    recipient: "Recipient name for the parcel",
    shipping: "Packeta delivery",
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
  const point = body.packetaPoint || {};
  const pointId = clip(point.id, 40);
  const pointCountry = clip(point.country, 2).toLowerCase();

  if (!product) return json({ error: "unknown_product" }, 400);
  if (product.status === "sold-out") return json({ error: "sold_out" }, 409);
  if (body.consent !== true) return json({ error: "consent_required" }, 400);
  if (!pointId || !ALLOWED_COUNTRIES.has(pointCountry)) return json({ error: "pickup_point_required" }, 400);

  const text = TEXT[lang];
  const params = new URLSearchParams();
  const add = (key, value) => params.append(key, String(value));

  add("mode", "payment");
  add("locale", lang === "cz" ? "cs" : "en");
  add("success_url", `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`);
  add("cancel_url", `${origin}/index.html#shop`);
  add("phone_number_collection[enabled]", "true");
  add("custom_text[submit][message]", text.submit);

  add("custom_fields[0][key]", "recipient_name");
  add("custom_fields[0][label][type]", "custom");
  add("custom_fields[0][label][custom]", text.recipient);
  add("custom_fields[0][type]", "text");

  add("line_items[0][quantity]", 1);
  add("line_items[0][price_data][currency]", currency);
  add("line_items[0][price_data][unit_amount]", product.amounts[currency] * 100);
  add("line_items[0][price_data][product_data][name]", product.name[lang]);

  if (SHIPPING[currency] > 0) {
    add("line_items[1][quantity]", 1);
    add("line_items[1][price_data][currency]", currency);
    add("line_items[1][price_data][unit_amount]", SHIPPING[currency] * 100);
    add("line_items[1][price_data][product_data][name]", text.shipping);
  }

  const metadata = {
    product_id: body.productId,
    lang,
    packeta_point_id: pointId,
    packeta_point_name: clip(point.name, 200),
    packeta_point_city: clip(point.city, 100),
    packeta_point_street: clip(point.street, 150),
    packeta_point_country: pointCountry,
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
