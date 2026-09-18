/**
 * Grunndubh \u2014 i18n + product data
 *
 * All copy lives here, keyed by language ("en" / "cz").
 * Add a language by adding a new top-level key to `translations`
 * with the same shape as "en" \u2014 no HTML restructuring needed.
 */

const translations = {
  en: {
    nav: {
      shop: "Shop",
      story: "Story",
      sustainability: "Sustainability",
      journal: "Journal",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Slow-made eco jewellery",
      title: "Grunndubh",
      mission: "Jewellery made from what others discard.",
      question: "Can something that has already served its purpose become beautiful again?",
      cta: "See the collection",
      imageLabel: "Hero photo",
      imagePath: "assets/images/hero.jpg",
    },
    mission: {
      text: "We don't start with new material. We start with what's already been used well once \u2014 and give it a second life, shaped by hand.",
    },
    shop: {
      eyebrow: "The collection",
      heading: "Shop",
      intro: "Two shapes, made slowly, in small batches.",
      buy: "Buy",
      priceComingSoon: "Price coming soon",
      consentLabel: "I agree to the",
      consentLink: "Terms & Conditions",
      status: {
        "in-stock": "In stock",
        "made-to-order": "Made to order",
        "sold-out": "Sold out",
      },
    },
    products: {
      "speckled-ivory": {
        name: "Speckled Ivory",
        description: "A cream, coffee-speckled teardrop, paired with a hammered gold circle stud.",
      },
      obsidian: {
        name: "Obsidian",
        description: "A glossy black teardrop, paired with a ridged gold circle stud.",
      },
    },
    story: {
      eyebrow: "Our process",
      heading: "From grounds to jewellery",
      steps: {
        reclaim: {
          title: "Reclaim",
          text: "We collect spent coffee grounds from local caf\u00e9s, before they become waste.",
        },
        bind: {
          title: "Bind",
          text: "The grounds are dried and bound with a natural resin, slowly, by hand.",
        },
        shape: {
          title: "Shape",
          text: "Each piece is shaped and cast individually \u2014 no two are exactly alike.",
        },
        finish: {
          title: "Finish",
          text: "A final polish, gold detailing, and a quiet check before it leaves our hands.",
        },
      },
    },
    sustainability: {
      eyebrow: "Sustainability",
      heading: "Small, on purpose",
      text: "We make in small batches, to order where we can, so nothing sits unworn in a warehouse. Reclaimed coffee grounds replace new raw material. We're not trying to be everywhere \u2014 just honest about what we make and why.",
      pillars: {
        material: {
          title: "Reclaimed material",
          text: "No new resource is mined or grown for a single earring.",
        },
        batches: {
          title: "Small batches",
          text: "We make to order where we can, so little goes to waste.",
        },
        packaging: {
          title: "Plastic-free packaging",
          text: "What arrives at your door can be reused or composted.",
        },
      },
    },
    journal: {
      eyebrow: "Journal",
      heading: "Journal",
      text: "Coming soon \u2014 notes on process, material, and slow making.",
    },
    newsletter: {
      heading: "Stay close",
      text: "Occasional notes on new pieces and restocks. No noise.",
      placeholder: "Your email address",
      button: "Subscribe",
    },
    contact: {
      heading: "Get in touch",
      text: "Questions about a piece, an order, or anything else \u2014 we'd like to hear from you.",
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send message",
      emailNote: "Prefer email? Write to us directly at",
    },
    footer: {
      tagline: "Jewellery made from what others discard.",
      navHeading: "Explore",
      policiesHeading: "Policies",
      policies: {
        returns: "Returns",
        refunds: "Refunds & Disputes",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
      },
      rights: "All rights reserved.",
    },
    common: {
      backHome: "Back to Grunndubh",
    },
    policyPlaceholder: {
      notice: "Placeholder \u2014 Terms & Conditions pending legal review. Do not launch checkout until this page is replaced with final legal text.",
      noticePrivacy: "Placeholder \u2014 Privacy Policy pending legal review. Do not launch checkout until this page is replaced with final legal text.",
    },
    policies: {
      returns: {
        title: "Returns",
        body: [
          "Each piece is made by hand, in small batches, from reclaimed material \u2014 so no two are quite the same. If yours doesn't feel right, you can send it back within 14 days of delivery for a refund or exchange.",
          "To start a return, email us at grunndubh@gmail.com with your order number. Items should be unworn and in their original packaging. Made-to-order pieces are also returnable under the same terms, unless a listing says otherwise.",
          "We'll confirm once we receive the return, and process refunds within 5\u20137 business days.",
        ],
      },
      refunds: {
        title: "Refunds & disputes",
        body: [
          "Refunds are issued to your original payment method once a return is received and checked. It can take a few extra days for your bank to show it.",
          "If something arrives damaged or isn't what you ordered, tell us \u2014 we'll sort out a replacement or refund, no return shipping cost to you.",
          "If you have a concern about a charge, please reach out to us directly first at grunndubh@gmail.com. We'd rather make it right than have you go through your bank or card provider.",
        ],
      },
      terms: {
        title: "Terms & Conditions",
      },
      privacy: {
        title: "Privacy Policy",
      },
    },
  },

  cz: {
    nav: {
      shop: "[CZ] Shop",
      story: "[CZ] P\u0159\u00edb\u011bh",
      sustainability: "[CZ] Udr\u017eitelnost",
      journal: "[CZ] Journal",
      contact: "[CZ] Kontakt",
    },
    hero: {
      eyebrow: "[CZ] Slow-made eco jewellery",
      title: "Grunndubh",
      mission: "[CZ] Jewellery made from what others discard.",
      question: "[CZ] Can something that has already served its purpose become beautiful again?",
      cta: "[CZ] See the collection",
      imageLabel: "[CZ] Hero photo",
      imagePath: "assets/images/hero.jpg",
    },
    mission: {
      text: "[CZ] We don't start with new material. We start with what's already been used well once \u2014 and give it a second life, shaped by hand.",
    },
    shop: {
      eyebrow: "[CZ] The collection",
      heading: "[CZ] Shop",
      intro: "[CZ] Two shapes, made slowly, in small batches.",
      buy: "[CZ] Buy",
      priceComingSoon: "[CZ] Price coming soon",
      consentLabel: "Souhlas\u00edm s",
      consentLink: "obchodn\u00edmi podm\u00ednkami",
      status: {
        "in-stock": "[CZ] In stock",
        "made-to-order": "[CZ] Made to order",
        "sold-out": "[CZ] Sold out",
      },
    },
    products: {
      "speckled-ivory": {
        name: "Speckled Ivory",
        description: "[CZ] A cream, coffee-speckled teardrop, paired with a hammered gold circle stud.",
      },
      obsidian: {
        name: "Obsidian",
        description: "[CZ] A glossy black teardrop, paired with a ridged gold circle stud.",
      },
    },
    story: {
      eyebrow: "[CZ] Our process",
      heading: "[CZ] From grounds to jewellery",
      steps: {
        reclaim: {
          title: "[CZ] Reclaim",
          text: "[CZ] We collect spent coffee grounds from local caf\u00e9s, before they become waste.",
        },
        bind: {
          title: "[CZ] Bind",
          text: "[CZ] The grounds are dried and bound with a natural resin, slowly, by hand.",
        },
        shape: {
          title: "[CZ] Shape",
          text: "[CZ] Each piece is shaped and cast individually \u2014 no two are exactly alike.",
        },
        finish: {
          title: "[CZ] Finish",
          text: "[CZ] A final polish, gold detailing, and a quiet check before it leaves our hands.",
        },
      },
    },
    sustainability: {
      eyebrow: "[CZ] Sustainability",
      heading: "[CZ] Small, on purpose",
      text: "[CZ] We make in small batches, to order where we can, so nothing sits unworn in a warehouse. Reclaimed coffee grounds replace new raw material. We're not trying to be everywhere \u2014 just honest about what we make and why.",
      pillars: {
        material: {
          title: "[CZ] Reclaimed material",
          text: "[CZ] No new resource is mined or grown for a single earring.",
        },
        batches: {
          title: "[CZ] Small batches",
          text: "[CZ] We make to order where we can, so little goes to waste.",
        },
        packaging: {
          title: "[CZ] Plastic-free packaging",
          text: "[CZ] What arrives at your door can be reused or composted.",
        },
      },
    },
    journal: {
      eyebrow: "[CZ] Journal",
      heading: "[CZ] Journal",
      text: "[CZ] Coming soon \u2014 notes on process, material, and slow making.",
    },
    newsletter: {
      heading: "[CZ] Stay close",
      text: "[CZ] Occasional notes on new pieces and restocks. No noise.",
      placeholder: "[CZ] Your email address",
      button: "[CZ] Subscribe",
    },
    contact: {
      heading: "[CZ] Get in touch",
      text: "[CZ] Questions about a piece, an order, or anything else \u2014 we'd like to hear from you.",
      name: "[CZ] Name",
      email: "[CZ] Email",
      message: "[CZ] Message",
      button: "[CZ] Send message",
      emailNote: "[CZ] Prefer email? Write to us directly at",
    },
    footer: {
      tagline: "[CZ] Jewellery made from what others discard.",
      navHeading: "[CZ] Explore",
      policiesHeading: "[CZ] Policies",
      policies: {
        returns: "Vr\u00e1cen\u00ed zbo\u017e\u00ed",
        refunds: "Vr\u00e1cen\u00ed pen\u011bz a reklamace",
        terms: "Obchodn\u00ed podm\u00ednky",
        privacy: "Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f (GDPR)",
      },
      rights: "[CZ] All rights reserved.",
    },
    common: {
      backHome: "[CZ] Back to Grunndubh",
    },
    policyPlaceholder: {
      notice: "[Z\u00e1stupn\u00fd text \u2014 Obchodn\u00ed podm\u00ednky \u010dekaj\u00ed na pr\u00e1vn\u00ed revizi. Nespou\u0161t\u011bjte pokladnu, dokud nebude tato str\u00e1nka nahrazena fin\u00e1ln\u00edm pr\u00e1vn\u00edm textem.]",
      noticePrivacy: "[Z\u00e1stupn\u00fd text \u2014 Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f \u010dekaj\u00ed na pr\u00e1vn\u00ed revizi. Nespou\u0161t\u011bjte pokladnu, dokud nebude tato str\u00e1nka nahrazena fin\u00e1ln\u00edm pr\u00e1vn\u00edm textem.]",
    },
    policies: {
      returns: {
        title: "Vr\u00e1cen\u00ed zbo\u017e\u00ed",
        body: [
          "Ka\u017ed\u00fd kus vyr\u00e1b\u00edme ru\u010dn\u011b, v mal\u00fdch s\u00e9ri\u00edch, z recyklovan\u00e9ho materi\u00e1lu \u2014 proto se \u017e\u00e1dn\u00e9 dva \u00fapln\u011b neshoduj\u00ed. Pokud v\u00e1m kousek nesedne, m\u016f\u017eete n\u00e1m ho do 14 dn\u016f od doru\u010den\u00ed vr\u00e1tit a my v\u00e1m vr\u00e1t\u00edme pen\u00edze nebo ho vym\u011bn\u00edme.",
          "Pro vr\u00e1cen\u00ed n\u00e1m napi\u0161te na grunndubh@gmail.com a uve\u010fte \u010d\u00edslo objedn\u00e1vky. Zbo\u017e\u00ed by m\u011blo b\u00fdt neno\u0161en\u00e9 a v p\u016fvodn\u00edm obalu. Stejn\u00e9 podm\u00ednky plat\u00ed i pro kusy vyroben\u00e9 na zak\u00e1zku, pokud u konkr\u00e9tn\u00edho produktu neuv\u00e1d\u00edme jinak.",
          "Jakmile vr\u00e1cen\u00e9 zbo\u017e\u00ed obdr\u017e\u00edme, potvrd\u00edme v\u00e1m to a pen\u00edze vr\u00e1t\u00edme do 5\u20137 pracovn\u00edch dn\u00ed.",
        ],
      },
      refunds: {
        title: "Vr\u00e1cen\u00ed pen\u011bz a reklamace",
        body: [
          "Pen\u00edze vrac\u00edme na zp\u016fsob platby, kter\u00fdm jste zaplatili, jakmile vr\u00e1cen\u00e9 zbo\u017e\u00ed obdr\u017e\u00edme a zkontrolujeme. Bance m\u016f\u017ee trvat p\u00e1r dn\u00ed, ne\u017e transakci zobraz\u00ed.",
          "Pokud v\u00e1m doraz\u00ed po\u0161kozen\u00e9 zbo\u017e\u00ed nebo n\u011bco jin\u00e9ho, ne\u017e jste objednali, dejte n\u00e1m v\u011bd\u011bt \u2014 vy\u0159e\u0161\u00edme v\u00fdm\u011bnu nebo vr\u00e1cen\u00ed pen\u011bz, a to bez n\u00e1klad\u016f na zp\u011btn\u00e9 zasl\u00e1n\u00ed.",
          "Pokud m\u00e1te pochybnost ohledn\u011b platby, ozv\u011bte se n\u00e1m pros\u00edm nejd\u0159\u00edv p\u0159\u00edmo na grunndubh@gmail.com. Rad\u011bji to naprav\u00edme sami, ne\u017e abyste to museli \u0159e\u0161it p\u0159es banku nebo kartovou spole\u010dnost.",
        ],
      },
      terms: {
        title: "Obchodn\u00ed podm\u00ednky",
      },
      privacy: {
        title: "Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f (GDPR)",
      },
    },
  },
};

/**
 * Product data \u2014 deliberately flat and framework-agnostic so it's
 * trivial to wire up to Stripe (or any checkout) later.
 * status: "in-stock" | "made-to-order" | "sold-out"
 * price: fill in as a plain string (e.g. "1 200 K\u010d") once pricing is set.
 */
const PRODUCTS = [
  {
    id: "speckled-ivory",
    image: "assets/images/product-speckled-ivory.jpg",
    price: null,
    status: "in-stock",
  },
  {
    id: "obsidian",
    image: "assets/images/product-obsidian.png",
    price: null,
    status: "made-to-order",
  },
];

const STATUS_COLORS = {
  "in-stock": "#6B6A3C",
  "made-to-order": "#AD8A54",
  "sold-out": "#884F57",
};

function getLang() {
  try {
    return localStorage.getItem("grunndubh-lang") || "en";
  } catch (e) {
    return "en";
  }
}

function setLang(lang) {
  try {
    localStorage.setItem("grunndubh-lang", lang);
  } catch (e) {
    /* localStorage unavailable \u2014 language just won't persist */
  }
  applyLang(lang);
}

function t(key, lang) {
  const parts = key.split(".");
  let node = translations[lang];
  for (const part of parts) {
    if (node == null) return key;
    node = node[part];
  }
  return node == null ? key : node;
}

function applyLang(lang) {
  document.documentElement.lang = lang === "cz" ? "cs" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"), lang);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = t(el.getAttribute("data-i18n-html"), lang);
    if (Array.isArray(value)) {
      el.innerHTML = value.map((p) => `<p>${p}</p>`).join("");
    } else {
      el.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"), lang);
  });

  document.querySelectorAll("[data-lang-btn]").forEach((el) => {
    const active = el.getAttribute("data-lang-btn") === lang;
    el.setAttribute("aria-pressed", String(active));
    el.classList.toggle("text-[#3B2B1E]", active);
    el.classList.toggle("text-[#8A6E52]", !active);
    el.classList.toggle("font-medium", active);
  });

  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}
