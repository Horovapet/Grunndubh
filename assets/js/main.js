/**
 * Grunndubh \u2014 site behaviour
 * Product rendering, language toggle wiring, mobile nav, scroll-in
 * animation, image-placeholder fallback, and the Packeta + Stripe checkout
 * flow (the server side lives in functions/api/checkout.js).
 */

// imgFallback() is defined inline in each page's <head> \u2014 see the
// comment there for why (it must exist before any placeholder <img>
// can 404, which can happen before this file finishes loading).

const priceLabelFor = (product, lang) => {
  const prices = [
    product.price_czk ? Number(product.price_czk).toLocaleString("cs-CZ") + "\u00a0K\u010d" : null,
    product.price_eur ? Number(product.price_eur).toLocaleString("cs-CZ") + "\u00a0\u20ac" : null,
  ].filter(Boolean);
  return prices.length ? prices.join(" / ") : t("shop.priceComingSoon", lang);
};

const photoHtml = (src, alt) => `
  <img src="${src}" alt="${alt}" class="w-full h-full object-cover" onerror="imgFallback(this)" />
  <div class="absolute inset-0 hidden items-center justify-center text-center p-6">
    <div>
      <p class="text-xs tracking-[0.2em] uppercase text-[#8A6E52]">Photo placeholder</p>
      <p class="text-sm text-[#8A6E52] mt-1">${src}</p>
    </div>
  </div>`;

// Home page: a quiet grid of photo, name and short text. Each card opens the product page.
function renderProducts(lang) {
  const grid = document.getElementById("shop-grid");
  if (!grid) return;

  // Center a lone card instead of leaving an empty second column.
  grid.classList.toggle("sm:grid-cols-2", PRODUCTS.length > 1);
  grid.classList.toggle("max-w-sm", PRODUCTS.length === 1);
  grid.classList.toggle("mx-auto", PRODUCTS.length === 1);

  grid.innerHTML = PRODUCTS.map((product) => {
    const copy = translations[lang].products[product.id];
    return `
      <a href="product.html?id=${product.id}" class="group block" data-animate>
        <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F0E8D9] shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
          ${photoHtml(product.images[0], copy.name)}
        </div>
        <h3 class="font-serif text-2xl text-[#3B2B1E] mt-5">${copy.name}</h3>
        <p class="text-[#8A6E52] mt-1 leading-relaxed">${copy.description}</p>
        <p class="text-[#5C4430] mt-3">${priceLabelFor(product, lang)}</p>
        <span class="inline-block mt-3 text-sm underline text-[#8A6E52] group-hover:text-[#5C4430]">${t("shop.view", lang)}</span>
      </a>
    `;
  }).join("");
}

// Purchase controls (delivery, consent, buy). Filled in and kept in sync by syncCard().
function purchaseBlock(product, lang) {
  const consentId = `consent-${product.id}`;
  return `
    <p class="text-xs text-[#8A6E52]" data-role="currency-note">${t("shop.pickup.chargedIn", lang)}</p>

    <div class="mt-5">
      <label class="block text-xs tracking-[0.15em] uppercase text-[#8A6E52] mb-1" for="country-${product.id}">${t("shop.ship.country", lang)}</label>
      <select id="country-${product.id}" data-action="country" class="w-full rounded-lg border border-[#E7DBC6] bg-[#FDFCFA] px-3 py-2 text-sm text-[#5C4430] focus:outline-none focus:ring-1 focus:ring-[#AD8A54]">${countryOptions(lang, stateFor(product.id).country)}</select>
    </div>
    <fieldset class="mt-3" data-role="methods"></fieldset>

    <div class="mt-2" data-role="pickup-block">
      <button type="button" data-action="pick" class="text-sm underline text-[#8A6E52] hover:text-[#5C4430]"></button>
      <p class="text-sm text-[#5C4430] mt-1" data-role="point"></p>
    </div>

    <div class="mt-4 text-sm text-[#5C4430]" data-role="summary"></div>

    <label class="flex items-start gap-2 mt-4 text-sm text-[#8A6E52] cursor-pointer" for="${consentId}">
      <input type="checkbox" id="${consentId}" data-action="consent" class="mt-0.5 accent-[#AD8A54]" />
      <span>
        <span>${t("shop.consentLabel", lang)}</span>
        <a href="terms.html" class="underline hover:text-[#5C4430]">${t("shop.consentLink", lang)}</a>
      </span>
    </label>

    <button type="button" data-action="buy" class="mt-4 w-full py-3 rounded-full text-sm tracking-wide uppercase transition-colors"></button>
    <p class="text-xs text-[#8A6E52] mt-2 min-h-[1rem]" data-role="hint" aria-live="polite"></p>
  `;
}

// Product page (product.html?id=...): photos, description and the whole purchase flow.
function renderProductPage(lang) {
  const container = document.getElementById("product-detail");
  if (!container || !SHIPPING) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    container.innerHTML = `<p class="text-[#8A6E52]">${t("shop.notFound", lang)}</p>`;
    return;
  }

  const copy = translations[lang].products[product.id];
  document.title = `${copy.name} \u2014 Grunndubh`;
  const thumbs =
    product.images.length > 1
      ? `<div class="flex gap-3 mt-3">${product.images
          .map(
            (src, i) =>
              `<button type="button" data-action="thumb" data-src="${src}" aria-label="${copy.name} ${i + 1}" class="w-16 h-20 overflow-hidden rounded-lg bg-[#F0E8D9]"><img src="${src}" alt="" class="w-full h-full object-cover" /></button>`
          )
          .join("")}</div>`
      : "";

  container.innerHTML = `
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div data-animate>
        <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F0E8D9] shadow-sm" data-role="main-image">
          ${photoHtml(product.images[0], copy.name)}
        </div>
        ${thumbs}
      </div>
      <div data-animate>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full" style="background-color:${STATUS_COLORS[product.status]}"></span>
          <span class="text-xs tracking-[0.15em] uppercase text-[#5C4430]">${t(`shop.status.${product.status}`, lang)}</span>
        </div>
        <h1 class="font-serif text-4xl text-[#3B2B1E] mt-2">${copy.name}</h1>
        <p class="text-[#8A6E52] mt-3 leading-relaxed">${copy.description}</p>
        <p class="text-[#5C4430] text-xl mt-4">${priceLabelFor(product, lang)}</p>
        <div class="mt-8 max-w-md" data-product="${product.id}">${purchaseBlock(product, lang)}</div>
      </div>
    </div>
  `;
  container.querySelectorAll("[data-product]").forEach(syncCard);
}

// Delivery prices come from assets/shipping.json (also used by the server).
let SHIPPING = null;
function loadShipping() {
  return fetch("assets/shipping.json")
    .then((response) => response.json())
    .then((data) => {
      SHIPPING = data;
    });
}

// Per-product checkout state; survives re-renders (e.g. language switch).
const checkoutState = {};
const stateFor = (id) =>
  (checkoutState[id] ||= { consent: false, country: "CZ", method: null, point: null, busy: false, message: "" });

const currencyFor = (lang) => (lang === "cz" ? "czk" : "eur");
const money = (n, cur) => Number(n).toLocaleString("cs-CZ") + "\u00a0" + (cur === "czk" ? "K\u010d" : "\u20ac");

function availableMethods(country) {
  if (country === SHIPPING.domestic.country) return SHIPPING.domestic.methods;
  const entry = SHIPPING.eu.countries[country];
  if (!entry) return [];
  const methods = [{ id: SHIPPING.eu.id, pickup: false, czk: entry.czk, eur: entry.eur }];
  if (entry.pickup) methods.unshift({ id: "packeta-point", pickup: true, czk: entry.pickup.czk, eur: entry.pickup.eur });
  return methods;
}

function countryOptions(lang, selected) {
  const locale = lang === "cz" ? "cs" : "en";
  const names = new Intl.DisplayNames([locale], { type: "region" });
  const home = SHIPPING.domestic.country;
  const others = Object.keys(SHIPPING.eu.countries)
    .sort((a, b) => names.of(a).localeCompare(names.of(b), locale));
  return [home, ...others]
    .map((code) => `<option value="${code}"${code === selected ? " selected" : ""}>${names.of(code)}</option>`)
    .join("");
}

function syncCard(card) {
  const id = card.getAttribute("data-product");
  const product = PRODUCTS.find((p) => p.id === id);
  const state = stateFor(id);
  const lang = getLang();
  const cur = currencyFor(lang);

  const methods = availableMethods(state.country);
  if (!methods.some((m) => m.id === state.method)) state.method = methods[0].id;
  const method = methods.find((m) => m.id === state.method);

  card.querySelector('[data-role="methods"]').innerHTML = methods
    .map(
      (m) => `
      <label class="flex items-center justify-between gap-3 py-1 text-sm text-[#5C4430] cursor-pointer">
        <span class="flex items-center gap-2">
          <input type="radio" name="method-${id}" value="${m.id}" data-action="method" class="accent-[#AD8A54]"${m.id === state.method ? " checked" : ""} />
          ${t("shop.ship.methods." + (m.id === "packeta-point" && state.country !== SHIPPING.domestic.country ? "packeta-point-eu" : m.id), lang)}
        </span>
        <span class="text-[#8A6E52] whitespace-nowrap">${money(m[cur], cur)}</span>
      </label>`
    )
    .join("");

  card.querySelector('[data-role="pickup-block"]').hidden = !method.pickup;
  card.querySelector('[data-action="pick"]').textContent = t(state.point ? "shop.pickup.change" : state.country === SHIPPING.domestic.country ? "shop.pickup.choose" : "shop.pickup.chooseEu", lang);
  card.querySelector('[data-role="point"]').textContent = state.point
    ? [state.point.name, state.point.city].filter(Boolean).join(", ")
    : t("shop.pickup.none", lang);

  const item = product["price_" + cur];
  const row = (label, amount, extra = "") =>
    `<div class="flex justify-between gap-4 py-1 ${extra}"><span>${label}</span><span class="whitespace-nowrap">${amount}</span></div>`;
  card.querySelector('[data-role="summary"]').innerHTML = item
    ? row(translations[lang].products[id].name, money(item, cur)) +
      row(t("shop.ship.deliveryLabel", lang), money(method[cur], cur)) +
      row(t("shop.ship.totalLabel", lang), money(item + method[cur], cur), "mt-1 pt-2 border-t border-[#E7DBC6] font-medium text-[#3B2B1E]") +
      (method.pickup ? "" : `<p class="text-xs text-[#8A6E52] mt-2">${t("shop.ship.addressNote", lang)}</p>`) +
      `<p class="text-xs text-[#8A6E52] mt-2">${t("shop.ship.dispatch", lang).replace("{days}", SHIPPING.dispatchDays)}</p>`
    : "";

  card.querySelector('[data-action="consent"]').checked = state.consent;
  const buy = card.querySelector('[data-action="buy"]');
  const ready = Boolean(item) && state.consent && (!method.pickup || state.point) && !state.busy;
  buy.textContent = t("shop.buy", lang);
  buy.disabled = !ready;
  buy.className =
    "mt-4 w-full py-3 rounded-full text-sm tracking-wide uppercase transition-colors " +
    (ready
      ? "bg-[#3B2B1E] text-[#FDFCFA] hover:bg-[#5C4430]"
      : "border border-[#AD8A54] text-[#AD8A54] opacity-60 cursor-not-allowed");

  let hint = state.message;
  if (!hint && !state.consent) hint = t("shop.pickup.hintConsent", lang);
  else if (!hint && method.pickup && !state.point) hint = t("shop.pickup.hintPoint", lang);
  card.querySelector('[data-role="hint"]').textContent = hint;
}

function loadPacketaWidget() {
  if (window.Packeta && window.Packeta.Widget) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://widget.packeta.com/v6/www/js/library.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function pickPoint(card) {
  const state = stateFor(card.getAttribute("data-product"));
  const lang = getLang();
  try {
    await loadPacketaWidget();
  } catch (e) {
    state.message = t("shop.pickup.widgetError", lang);
    syncCard(card);
    return;
  }
  state.message = "";
  window.Packeta.Widget.pick(
    PACKETA_API_KEY,
    (point) => {
      if (point) {
        state.point = {
          id: String(point.id),
          name: point.name,
          city: point.city,
          street: point.street,
          country: point.country,
        };
      }
      syncCard(card);
    },
    { country: state.country.toLowerCase(), language: lang === "cz" ? "cs" : "en", view: "modal" }
  );
}

async function startCheckout(card) {
  const id = card.getAttribute("data-product");
  const state = stateFor(id);
  const lang = getLang();
  state.busy = true;
  state.message = t("shop.pickup.redirecting", lang);
  syncCard(card);
  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: id,
        lang,
        consent: state.consent,
        country: state.country,
        method: state.method,
        packetaPoint: state.method === "packeta-point" ? state.point : null,
      }),
    });
    const data = await response.json();
    if (!response.ok || !data.url) throw new Error(data.error || "checkout_failed");
    window.location.href = data.url;
  } catch (e) {
    state.busy = false;
    state.message = t("shop.pickup.error", lang);
    syncCard(card);
  }
}

function initShopEvents() {
  const root = document.getElementById("product-detail");
  if (!root) return;

  root.addEventListener("change", (event) => {
    const card = event.target.closest("[data-product]");
    const action = event.target.getAttribute("data-action");
    if (!card || !action) return;
    const state = stateFor(card.getAttribute("data-product"));
    if (action === "consent") state.consent = event.target.checked;
    else if (action === "country") {
      state.country = event.target.value;
      if (state.point && state.point.country !== state.country.toLowerCase()) state.point = null;
    } else if (action === "method") state.method = event.target.value;
    else return;
    state.message = "";
    syncCard(card);
  });

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.getAttribute("data-action");

    if (action === "thumb") {
      const holder = root.querySelector('[data-role="main-image"]');
      const img = holder.querySelector("img");
      img.style.display = "";
      img.nextElementSibling.style.display = "none";
      img.src = button.getAttribute("data-src");
      return;
    }

    const card = event.target.closest("[data-product]");
    if (!card) return;
    if (action === "pick") pickPoint(card);
    if (action === "buy" && !button.disabled) startCheckout(card);
  });
}

function initLangToggle() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.getAttribute("data-lang-btn"));
    });
  });
}

function initMobileNav() {
  const toggle = document.getElementById("mobile-nav-toggle");
  const menu = document.getElementById("mobile-nav");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initScrollAnimations() {
  const items = document.querySelectorAll("[data-animate]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}

// Newsletter and contact forms post to the Cloudflare functions in functions/api/.
function initApiForm(formId, endpoint, section) {
  const form = document.getElementById(formId);
  if (!form) return;
  const status = form.querySelector('[data-role="status"]');
  const button = form.querySelector('button[type="submit"]');

  const show = (key, ok) => {
    status.setAttribute("data-i18n", `${section}.${key}`);
    status.textContent = t(`${section}.${key}`, getLang());
    status.className = "text-sm mt-3 min-h-[1.25rem] " + (ok === false ? "text-[#884F57]" : ok ? "text-[#6B6A3C]" : "text-[#8A6E52]");
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (form.elements.consent) data.consent = form.elements.consent.checked;
    data.lang = getLang();
    button.disabled = true;
    show("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("request_failed");
      form.reset();
      show("success", true);
    } catch (e) {
      show("error", false);
    } finally {
      button.disabled = false;
    }
  });
}

function initNewsletterForm() {
  initApiForm("newsletter-form", "/api/newsletter", "newsletter");
}

function initContactForm() {
  initApiForm("contact-form", "/api/contact", "contact");
}

document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  initMobileNav();
  initShopEvents();
  initNewsletterForm();
  initContactForm();
  applyLang(getLang());
  if (document.getElementById("product-detail")) {
    loadShipping().then(() => {
      renderProductPage(getLang());
      initScrollAnimations();
    });
  }
  initScrollAnimations();
});

document.addEventListener("langchange", (event) => {
  renderProducts(event.detail.lang);
  renderProductPage(event.detail.lang);
  // Re-observe any freshly rendered product cards for the scroll-in effect.
  initScrollAnimations();
});
