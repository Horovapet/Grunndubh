/**
 * Grunndubh \u2014 site behaviour
 * Product rendering, language toggle wiring, mobile nav, scroll-in
 * animation, image-placeholder fallback, and the Packeta + Stripe checkout
 * flow (the server side lives in functions/api/checkout.js).
 */

// imgFallback() is defined inline in each page's <head> \u2014 see the
// comment there for why (it must exist before any placeholder <img>
// can 404, which can happen before this file finishes loading).

function renderProducts(lang) {
  const grid = document.getElementById("shop-grid");
  if (!grid) return;

  // Center a lone card instead of leaving an empty second column.
  grid.classList.toggle("sm:grid-cols-2", PRODUCTS.length > 1);
  grid.classList.toggle("max-w-sm", PRODUCTS.length === 1);
  grid.classList.toggle("mx-auto", PRODUCTS.length === 1);

  grid.innerHTML = PRODUCTS.map((product) => {
    const copy = translations[lang].products[product.id];
    const statusLabel = t(`shop.status.${product.status}`, lang);
    const statusColor = STATUS_COLORS[product.status];
    const fmt = (n) => Number(n).toLocaleString("cs-CZ");
    const prices = [
      product.price_czk ? `${fmt(product.price_czk)}\u00a0K\u010d` : null,
      product.price_eur ? `${fmt(product.price_eur)}\u00a0\u20ac` : null,
    ].filter(Boolean);
    const priceLabel = prices.length ? prices.join(" / ") : t("shop.priceComingSoon", lang);
    const consentId = `consent-${product.id}`;

    return `
      <article class="flex flex-col" data-animate data-product="${product.id}">
        <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F0E8D9]">
          <img
            src="${product.image}"
            alt="${copy.name}"
            class="w-full h-full object-cover"
            onerror="imgFallback(this)"
          />
          <div class="absolute inset-0 hidden items-center justify-center text-center p-6">
            <div>
              <p class="text-xs tracking-[0.2em] uppercase text-[#8A6E52]">Photo placeholder</p>
              <p class="text-sm text-[#8A6E52] mt-1">${product.image}</p>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 mt-5">
          <span class="w-1.5 h-1.5 rounded-full" style="background-color:${statusColor}"></span>
          <span class="text-xs tracking-[0.15em] uppercase text-[#5C4430]">${statusLabel}</span>
        </div>

        <h3 class="font-serif text-2xl text-[#3B2B1E] mt-2">${copy.name}</h3>
        <p class="text-[#8A6E52] mt-1 leading-relaxed">${copy.description}</p>
        <p class="text-[#5C4430] mt-3">${priceLabel}</p>

        <p class="text-xs text-[#8A6E52] mt-1" data-role="currency-note">${t("shop.pickup.chargedIn", lang)}</p>

        <label class="flex items-start gap-2 mt-5 text-sm text-[#8A6E52] cursor-pointer" for="${consentId}">
          <input type="checkbox" id="${consentId}" data-action="consent" class="mt-0.5 accent-[#AD8A54]" />
          <span>
            <span data-i18n="shop.consentLabel">${t("shop.consentLabel", lang)}</span>
            <a href="terms.html" class="underline hover:text-[#5C4430]" data-i18n="shop.consentLink">${t("shop.consentLink", lang)}</a>
          </span>
        </label>

        <div class="mt-4">
          <button type="button" data-action="pick" class="text-sm underline text-[#8A6E52] hover:text-[#5C4430]"></button>
          <p class="text-sm text-[#5C4430] mt-1" data-role="point"></p>
        </div>

        <button
          type="button"
          data-action="buy"
          class="mt-4 w-full py-3 rounded-full text-sm tracking-wide uppercase transition-colors"
        ></button>
        <p class="text-xs text-[#8A6E52] mt-2 min-h-[1rem]" data-role="hint" aria-live="polite"></p>
      </article>
    `;
  }).join("");
  grid.querySelectorAll("[data-product]").forEach(syncCard);
}

// Per-product checkout state; survives re-renders (e.g. language switch).
const checkoutState = {};
const stateFor = (id) => (checkoutState[id] ||= { consent: false, point: null, busy: false, message: "" });

function syncCard(card) {
  const id = card.getAttribute("data-product");
  const state = stateFor(id);
  const lang = getLang();
  const buy = card.querySelector('[data-action="buy"]');
  const ready = state.consent && state.point && !state.busy;

  card.querySelector('[data-action="consent"]').checked = state.consent;
  card.querySelector('[data-action="pick"]').textContent = t(state.point ? "shop.pickup.change" : "shop.pickup.choose", lang);
  card.querySelector('[data-role="point"]').textContent = state.point
    ? [state.point.name, state.point.city].filter(Boolean).join(", ")
    : t("shop.pickup.none", lang);

  buy.textContent = t("shop.buy", lang);
  buy.disabled = !ready;
  buy.className =
    "mt-4 w-full py-3 rounded-full text-sm tracking-wide uppercase transition-colors " +
    (ready
      ? "bg-[#3B2B1E] text-[#FDFCFA] hover:bg-[#5C4430]"
      : "border border-[#AD8A54] text-[#AD8A54] opacity-60 cursor-not-allowed");

  let hint = state.message;
  if (!hint && !state.consent) hint = t("shop.pickup.hintConsent", lang);
  else if (!hint && !state.point) hint = t("shop.pickup.hintPoint", lang);
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
    { country: PACKETA_COUNTRIES, language: lang === "cz" ? "cs" : "en", view: "modal" }
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
      body: JSON.stringify({ productId: id, lang, consent: state.consent, packetaPoint: state.point }),
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
  const grid = document.getElementById("shop-grid");
  if (!grid) return;

  grid.addEventListener("change", (event) => {
    const card = event.target.closest("[data-product]");
    if (!card || event.target.getAttribute("data-action") !== "consent") return;
    const state = stateFor(card.getAttribute("data-product"));
    state.consent = event.target.checked;
    state.message = "";
    syncCard(card);
  });

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    const card = event.target.closest("[data-product]");
    if (!button || !card) return;
    const action = button.getAttribute("data-action");
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

function initNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // TODO(newsletter): send the submitted email to your list provider
    // (e.g. Mailchimp, Buttondown, a Cloudflare Worker + KV, etc).
    // No backend is wired up yet \u2014 this is a front-end stub only.
    const emailInput = form.querySelector("input[type=email]");
    console.log("Newsletter signup (not yet wired up):", emailInput ? emailInput.value : null);
    form.reset();
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // TODO(contact): send this submission somewhere (e.g. a Cloudflare
    // Pages Function, Formspree, or an email API). No backend is wired
    // up yet \u2014 this is a front-end stub only.
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Contact form submission (not yet wired up):", data);
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  initMobileNav();
  initShopEvents();
  initNewsletterForm();
  initContactForm();
  applyLang(getLang());
  initScrollAnimations();
});

document.addEventListener("langchange", (event) => {
  renderProducts(event.detail.lang);
  // Re-observe any freshly rendered product cards for the scroll-in effect.
  initScrollAnimations();
});
