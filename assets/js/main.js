/**
 * Grunndubh — site behaviour
 * Product rendering, language toggle wiring, mobile nav, scroll-in
 * animation, and image-placeholder fallback. No payment or backend
 * logic lives here — see the TODO markers for where that plugs in.
 */

// imgFallback() is defined inline in each page's <head> — see the
// comment there for why (it must exist before any placeholder <img>
// can 404, which can happen before this file finishes loading).

function renderProducts(lang) {
  const grid = document.getElementById("shop-grid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((product) => {
    const copy = translations[lang].products[product.id];
    const statusLabel = t(`shop.status.${product.status}`, lang);
    const statusColor = STATUS_COLORS[product.status];
    const priceLabel = product.price || t("shop.priceComingSoon", lang);
    const consentId = `consent-${product.id}`;

    return `
      <article class="flex flex-col" data-animate>
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

        <label class="flex items-start gap-2 mt-5 text-sm text-[#8A6E52] cursor-pointer" for="${consentId}">
          <input type="checkbox" id="${consentId}" class="mt-0.5 accent-[#AD8A54]" />
          <span>
            <span data-i18n="shop.consentLabel">${t("shop.consentLabel", lang)}</span>
            <a href="terms.html" class="underline hover:text-[#5C4430]" data-i18n="shop.consentLink">${t("shop.consentLink", lang)}</a>
          </span>
        </label>

        <!--
          TODO(stripe): wire up real checkout here.
          - Require the consent checkbox above to be checked before proceeding.
          - Replace the disabled attribute + click handler stub below with
            a call into the Stripe Checkout / Payment flow, passing product.id.
        -->
        <button
          type="button"
          disabled
          class="mt-4 w-full py-3 rounded-full border border-[#AD8A54] text-[#AD8A54] text-sm tracking-wide uppercase opacity-60 cursor-not-allowed"
        >
          <span data-i18n="shop.buy">${t("shop.buy", lang)}</span>
        </button>
      </article>
    `;
  }).join("");
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
    // No backend is wired up yet — this is a front-end stub only.
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
    // up yet — this is a front-end stub only.
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Contact form submission (not yet wired up):", data);
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  initMobileNav();
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
