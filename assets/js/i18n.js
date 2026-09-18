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
      shop: "Obchod",
      story: "P\u0159\u00edb\u011bh",
      sustainability: "Udr\u017eitelnost",
      journal: "Journal",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Pomalu vyr\u00e1b\u011bn\u00e9 eco \u0161perky",
      title: "Grunndubh",
      mission: "\u0160perky vyroben\u00e9 z toho, co ostatn\u00ed vyhodili.",
      question: "M\u016f\u017ee n\u011bco, co u\u017e jednou poslou\u017eilo, b\u00fdt znovu kr\u00e1sn\u00e9?",
      cta: "Prohl\u00e9dnout kolekci",
      imageLabel: "\u00davodn\u00ed fotka",
      imagePath: "assets/images/hero.jpg",
    },
    mission: {
      text: "Neza\u010d\u00edn\u00e1me s nov\u00fdm materi\u00e1lem. Za\u010d\u00edn\u00e1me s t\u00edm, co u\u017e jednou dob\u0159e poslou\u017eilo \u2014 a d\u00e1v\u00e1me tomu nov\u00fd \u017eivot, ru\u010dn\u011b tvarovan\u00fd.",
    },
    shop: {
      eyebrow: "Kolekce",
      heading: "Obchod",
      intro: "Dva tvary, vyr\u00e1b\u011bn\u00e9 pomalu, v mal\u00fdch s\u00e9ri\u00edch.",
      buy: "Koupit",
      priceComingSoon: "Cena bude brzy",
      consentLabel: "Souhlas\u00edm s",
      consentLink: "obchodn\u00edmi podm\u00ednkami",
      status: {
        "in-stock": "Skladem",
        "made-to-order": "Na zak\u00e1zku",
        "sold-out": "Vyprod\u00e1no",
      },
    },
    products: {
      "speckled-ivory": {
        name: "Speckled Ivory",
        description: "Kr\u00e9mov\u00e1, k\u00e1vou skvrnit\u00e1 slza, dopln\u011bn\u00e1 klad\u00edvkovan\u00fdm zlat\u00fdm krou\u017ekem.",
      },
      obsidian: {
        name: "Obsidian",
        description: "Leskl\u00e1 \u010dern\u00e1 slza, dopln\u011bn\u00e1 r\u00fdhovan\u00fdm zlat\u00fdm krou\u017ekem.",
      },
    },
    story: {
      eyebrow: "N\u00e1\u0161 proces",
      heading: "Od k\u00e1vov\u00e9 sedliny ke \u0161perku",
      steps: {
        reclaim: {
          title: "Z\u00e1chrana",
          text: "Sb\u00edr\u00e1me pou\u017eitou k\u00e1vovou sedlinu z m\u00edstn\u00edch kav\u00e1ren, ne\u017e skon\u010d\u00ed jako odpad.",
        },
        bind: {
          title: "V\u00e1z\u00e1n\u00ed",
          text: "Sedlina se su\u0161\u00ed a ru\u010dn\u011b, pomalu, spojuje s p\u0159\u00edrodn\u00ed prysky\u0159ic\u00ed.",
        },
        shape: {
          title: "Tvarov\u00e1n\u00ed",
          text: "Ka\u017ed\u00fd kus je tvarov\u00e1n a lit jednotliv\u011b \u2014 \u017e\u00e1dn\u00e9 dva nejsou \u00fapln\u011b stejn\u00e9.",
        },
        finish: {
          title: "Dokon\u010den\u00ed",
          text: "Fin\u00e1ln\u00ed le\u0161t\u011bn\u00ed, zlat\u00e9 detaily a tich\u00e1 kontrola, ne\u017e kus opust\u00ed na\u0161e ruce.",
        },
      },
    },
    sustainability: {
      eyebrow: "Udr\u017eitelnost",
      heading: "Mal\u00e9 z rozhodnut\u00ed",
      text: "Vyr\u00e1b\u00edme v mal\u00fdch s\u00e9ri\u00edch, pokud mo\u017eno na zak\u00e1zku, aby nic nez\u016fst\u00e1valo neno\u0161en\u00e9 ve skladu. Recyklovan\u00e1 k\u00e1vov\u00e1 sedlina nahrazuje nov\u00fd materi\u00e1l. Nesna\u017e\u00edme se b\u00fdt v\u0161ude \u2014 jen b\u00fdt up\u0159\u00edmn\u00ed v tom, co d\u011bl\u00e1me a pro\u010d.",
      pillars: {
        material: {
          title: "Recyklovan\u00fd materi\u00e1l",
          text: "Pro jeden n\u00e1u\u0161nicov\u00fd p\u00e1r se net\u011b\u017e\u00ed ani nep\u011bstuje \u017e\u00e1dn\u00fd nov\u00fd zdroj.",
        },
        batches: {
          title: "Mal\u00e9 s\u00e9rie",
          text: "Vyr\u00e1b\u00edme na zak\u00e1zku, kde to jde, aby vznikalo co nejm\u00e9n\u011b odpadu.",
        },
        packaging: {
          title: "Obal bez plastu",
          text: "To, co doraz\u00ed k va\u0161im dve\u0159\u00edm, lze znovu pou\u017e\u00edt nebo kompostovat.",
        },
      },
    },
    journal: {
      eyebrow: "Journal",
      heading: "Journal",
      text: "Ji\u017e brzy \u2014 pozn\u00e1mky o procesu, materi\u00e1lu a pomal\u00e9 v\u00fdrob\u011b.",
    },
    newsletter: {
      heading: "Z\u016fsta\u0148te v kontaktu",
      text: "Ob\u010dasn\u00e9 zpr\u00e1vy o nov\u00fdch kousc\u00edch a dopln\u011bn\u00ed skladu. \u017d\u00e1dn\u00fd hluk.",
      placeholder: "Va\u0161e e-mailov\u00e1 adresa",
      button: "Odeb\u00edrat",
    },
    contact: {
      heading: "Ozv\u011bte se n\u00e1m",
      text: "Dotazy ke kousku, objedn\u00e1vce nebo cokoliv jin\u00e9ho \u2014 r\u00e1di si je vyslechneme.",
      name: "Jm\u00e9no",
      email: "E-mail",
      message: "Zpr\u00e1va",
      button: "Odeslat zpr\u00e1vu",
      emailNote: "Preferujete e-mail? Napi\u0161te n\u00e1m p\u0159\u00edmo na",
    },
    footer: {
      tagline: "\u0160perky vyroben\u00e9 z toho, co ostatn\u00ed vyhodili.",
      navHeading: "Prozkoumat",
      policiesHeading: "Z\u00e1sady",
      policies: {
        returns: "Vr\u00e1cen\u00ed zbo\u017e\u00ed",
        refunds: "Vr\u00e1cen\u00ed pen\u011bz a reklamace",
        terms: "Obchodn\u00ed podm\u00ednky",
        privacy: "Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f (GDPR)",
      },
      rights: "V\u0161echna pr\u00e1va vyhrazena.",
    },
    common: {
      backHome: "Zp\u011bt na Grunndubh",
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
  // "speckled-ivory" temporarily removed — no product photo yet.
  // Re-add once a photo exists at assets/images/product-speckled-ivory.jpg:
  // { id: "speckled-ivory", image: "assets/images/product-speckled-ivory.jpg", price: null, status: "in-stock" },
  {
    id: "obsidian",
    image: "assets/images/product-obsidian.png",
    price: "420 Kč",
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
