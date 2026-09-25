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
      buy: "Order with obligation to pay",
      ship: {
        country: "Delivery country",
        methods: {
          "packeta-point": "Zásilkovna – pickup point",
          "packeta-point-eu": "Z-Point / Z-Box pickup point",
          "ceska-posta": "\u010cesk\u00e1 po\u0161ta \u2013 to your address",
          ppl: "PPL \u2013 to your address",
          "eu-home": "Delivery to your address",
        },
        itemLabel: "Item",
        deliveryLabel: "Delivery",
        totalLabel: "Total",
        addressNote: "You will enter your address at payment.",
        dispatch: "We ship within {days} working days. Delivery time then depends on the country and carrier.",
      },
      pickup: {
        choose: "Choose a Zásilkovna pickup point",
        chooseEu: "Choose a Z-Point / Z-Box",
        change: "Change pickup point",
        none: "No pickup point chosen yet.",
        hintConsent: "Please agree to the Terms & Conditions to continue.",
        hintPoint: "Choose a pickup point to continue.",
        chargedIn: "You will pay in \u20ac.",
        redirecting: "Redirecting to secure payment\u2026",
        error: "Something went wrong. Please try again or write to grunndubh@gmail.com.",
        widgetError: "The pickup point map could not be loaded. Please try again.",
      },
      priceComingSoon: "Price coming soon",
      view: "View",
      back: "Back to the collection",
      notFound: "We could not find that piece.",
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
      ochre: {
        name: "Ochre",
        description: "A warm bronze-brown teardrop flecked with gold pigment, paired with a hammered gold oval stud.",
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
      consent: "I agree to receive occasional e-mails from Grunndubh. How we use your data:",
      consentLink: "Privacy Policy",
      sending: "Sending\u2026",
      success: "Thank you, you are signed up.",
      error: "Something went wrong. Please try again or write to grunndubh@gmail.com.",
    },
    contact: {
      heading: "Get in touch",
      text: "Questions about a piece, an order, or anything else \u2014 we'd like to hear from you.",
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send message",
      sending: "Sending\u2026",
      success: "Thank you, your message has been sent.",
      error: "Something went wrong. Please try again or write to grunndubh@gmail.com.",
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
    cart: {
      nav: "Cart",
      title: "Your cart",
      empty: "Your cart is empty.",
      continue: "Continue shopping",
      add: "Add to cart",
      added: "Added to your cart.",
      viewCart: "View cart",
      qty: "Quantity",
      remove: "Remove",
    },
    success: {
      title: "Thank you",
      text: "Your order is confirmed and payment went through. A receipt is on its way to your e-mail. Each piece is made by hand, so we will write to you once it is on its way.",
      note: "Questions about your order? Write to grunndubh@gmail.com.",
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
        body: [
          "Grunndubh online shop",
          "Convenience translation \u2014 the Czech-language version is the legally binding text; this English translation is provided for orientation only.",
          "Petra Bentley, sole trader (OSV\u010c) operating under a Czech trade licence<br>Registered address: Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika<br>Business ID (I\u010cO): 24113336<br>Registered in the Trade Licensing Register (not the Commercial Register)<br>Selling via the online shop at https://grunndubh.pages.dev/ (the \u201cwebsite\u201d)<br>Contact e-mail: grunndubh@gmail.com",
          "## 1. Introductory provisions",
          "1.1 These Terms &amp; Conditions (the \u201cTerms\u201d) of Petra Bentley, a sole trader with registered address at Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika, I\u010cO: 24113336, registered in the Trade Licensing Register (the \u201cSeller\u201d), govern, under Section 1751(1) of Act No. 89/2012 Coll., the Civil Code, as amended (the \u201cCivil Code\u201d), the mutual rights and obligations of the parties arising from or in connection with a purchase contract concluded between the Seller and a private individual (the \u201cBuyer\u201d) through the Grunndubh online shop at https://grunndubh.pages.dev/ (the \u201cwebsite\u201d).",
          "1.2 These Terms do not apply where the buyer is a legal entity, or a person ordering goods in the course of their own business or professional activity.",
          "1.3 Any provisions agreed individually in a purchase contract take precedence over these Terms.",
          "1.4 These Terms form an integral part of the purchase contract. The purchase contract and these Terms are drawn up in Czech, and the contract may be concluded in Czech. The Seller also makes an English translation of these Terms available on the website purely to help international customers; in the event of any conflict between the Czech and English versions, the Czech version prevails.",
          "1.5 The Seller may amend or supplement these Terms. This does not affect rights and obligations that arose while an earlier version was in effect.",
          "## 2. Conclusion of the purchase contract",
          "2.1 The website displays information about the goods, including individual prices and the cost of returning goods that cannot, by their nature, be returned by ordinary post. Prices are final and include all related fees, and remain valid for as long as they are displayed on the website. The Seller is not registered for VAT.",
          "2.2 The website also shows packaging and delivery costs and the delivery method and timeframe. Goods are delivered within the European Union; the exact shipping cost varies by destination country and is always shown before the order is completed.",
          "2.3 To place an order, the Buyer adds the chosen goods to the shopping cart and completes the order form, stating the goods ordered, the payment method, the requested delivery method, and the related costs (the \u201corder\u201d).",
          "2.4 Before submitting the order, the Buyer can check and correct the data entered. The order is submitted by clicking the \u201cOrder with obligation to pay\u201d button. Data entered in the order is treated by the Seller as correct. The Seller confirms receipt of the order by e-mail without undue delay.",
          "2.5 The contract is formed once the order is delivered to the Seller, except where stock has been exhausted or the Seller is unable to perform, in which case the Buyer is informed promptly.",
          "2.6 The Buyer agrees to the use of remote means of communication when concluding the contract. Any costs the Buyer incurs in using them (e.g. internet access) are borne by the Buyer at standard rates.",
          "## 3. Price and payment",
          "3.1 The purchase price and delivery costs are paid by card, or another payment method supported by Stripe (e.g. Apple Pay or Google Pay).",
          "3.2 Payments are processed through Stripe. The Seller never sees or stores the Buyer's card details; Stripe processes them under its own terms and privacy policy.",
          "3.3 The purchase price is due immediately on submitting the order; the order is fulfilled and the goods dispatched only once payment has been received.",
          "3.4 Discounts offered by the Seller cannot be combined unless expressly stated otherwise.",
          "3.5 The Seller is not registered for VAT. A proof of purchase is issued after payment and sent electronically to the Buyer's e-mail address.",
          "## 4. Right to cancel (withdrawal)",
          "4.1 A consumer Buyer has the right, under Section 1829(1) of the Civil Code, to withdraw from the contract without giving a reason within fourteen (14) days of receiving the goods.",
          "4.2 Under Section 1837 of the Civil Code, this right does not apply to goods made or adapted to the Buyer's specific request (for example, a piece made to a custom size or engraving). Standard, unmodified stock items are not subject to this exception.",
          "4.3 To withdraw, the Buyer may use the model withdrawal form attached to these Terms, or send a clear statement of withdrawal to grunndubh@gmail.com or to the Seller's registered address Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika.",
          "4.4 On withdrawal, the contract is cancelled from the outset. The Buyer must send the goods back without undue delay, and no later than fourteen (14) days after withdrawal. Return shipping costs are borne by the Buyer.",
          "4.5 The Seller will refund all payments received within fourteen (14) days of the withdrawal, using the same payment method the Buyer used, but not before receiving the returned goods or proof that they have been sent back.",
          "4.6 The Seller may offset any claim for damage to the goods against the Buyer's refund claim.",
          "4.7 The Seller may withdraw from the contract at any time before the Buyer receives the goods, in particular if stock has been exhausted, and will refund the price without undue delay.",
          "## 5. Shipping and delivery",
          "5.1 Within the Czech Republic, goods are delivered by Z\u00e1silkovna s.r.o. (Packeta, pickup points), \u010cesk\u00e1 po\u0161ta, s.p. or PPL CZ s.r.o. To other EU member states, goods are delivered by Z\u00e1silkovna s.r.o. (Packeta) to your address, which uses its partner carriers for the final delivery, or, in Poland, Hungary and Slovakia, to a Packeta pickup point. The delivery method and estimated timeframe are shown when the order is placed.",
          "5.2 If a delivery method is agreed at the Buyer's specific request, the Buyer bears the risk and any related additional costs.",
          "5.3 The Buyer must accept the goods on delivery. Where re-delivery or a different delivery method becomes necessary for reasons on the Buyer's side, the Buyer bears the related costs.",
          "5.4 On receiving the goods from the carrier, the Buyer must check the packaging is intact and report any damage to the carrier without delay. This does not affect the Buyer's rights arising from defective performance.",
          "## 6. Liability for defects (warranty)",
          "6.1 The parties' rights and obligations regarding defects are governed by applicable law, in particular Sections 1914\u20131925, 2099\u20132117 and 2161\u20132174b of the Civil Code and Act No. 634/1992 Coll., on Consumer Protection.",
          "6.2 The Seller warrants that, on delivery, the goods are free of defects \u2014 in particular, that they match the agreed description, type, quantity and quality, are fit for the purpose the Buyer requires, and are delivered with any agreed accessories and instructions.",
          "6.3 Because each piece is handmade from a recycled material (coffee grounds), small natural variations in colour, texture, or speckling between individual pieces are not considered a defect where this is described or evident from the nature of the product.",
          "6.4 If a defect appears within one year of delivery, it is presumed to have existed at the time of delivery, unless this is inconsistent with the nature of the goods or the defect.",
          "6.5 The Buyer may raise a defect that appears within two (2) years of delivery.",
          "6.6 The right does not apply where the Buyer caused the defect themselves, or to wear and tear from normal use.",
          "6.7 Where goods are defective, the Buyer may request a replacement or repair, a reasonable price reduction, or \u2014 under the conditions set out in the Civil Code \u2014 withdraw from the contract.",
          "6.8 Defects may be raised at grunndubh@gmail.com or at the Seller's registered address Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika. The Seller will issue written confirmation of the claim, stating the date raised, its content, and the resolution requested.",
          "6.9 A claim, including any repair, must be resolved and the Buyer informed within thirty (30) days of it being raised, unless the parties agree a longer period. If this deadline is missed, the Buyer may withdraw from the contract or request a reasonable price reduction.",
          "6.10 The Seller may offer a quality guarantee beyond the Buyer's statutory rights.",
          "## 7. Other rights and obligations",
          "7.1 Ownership of the goods passes to the Buyer on payment of the full purchase price.",
          "7.2 The Seller is not bound by any code of conduct within the meaning of Section 1820(1)(n) of the Civil Code.",
          "7.3 Consumer complaints are handled by the Seller at grunndubh@gmail.com; the Buyer is informed of the outcome at the e-mail address they provided.",
          "7.4 The Czech Trade Inspection Authority (\u010cesk\u00e1 obchodn\u00ed inspekce, \u010cOI), registered address Gorazdova 1969/24, Nov\u00e9 M\u011bsto, 120 00 Prague 2, I\u010cO: 000 20 869, website: https://coi.gov.cz/mimosoudni-reseni-spotrebitelskych-sporu-adr, is competent for out-of-court resolution of consumer disputes.",
          "7.5 The European Consumer Centre Czech Republic, registered address \u0160t\u011bp\u00e1nsk\u00e1 567/15, 120 00 Prague 2, website: http://www.evropskyspotrebitel.cz, is the contact point for cross-border consumer disputes within the EU.",
          "7.6 The Buyer may also contact the relevant supervisory authority. The Seller sells goods under a trade licence, supervised by the relevant Trade Licensing Office; data protection is supervised by the Office for Personal Data Protection.",
          "7.7 The Buyer assumes the risk of a change of circumstances within the meaning of Section 1765(2) of the Civil Code.",
          "## 8. Personal data",
          "8.1 Information on the processing of the Buyer's personal data under Article 13 GDPR is provided in the Seller's separate Privacy Policy, available on the website.",
          "## 9. Marketing communications and cookies",
          "9.1 Consent to marketing communications under Section 7(2) of Act No. 480/2004 Coll., and related data processing information, is set out in the separate Privacy Policy.",
          "9.2 Cookie-related obligations are set out in Section 8 of the Privacy Policy, available on the website.",
          "## 10. Delivery of notices",
          "10.1 Notices to the Buyer may be delivered to the e-mail address given in the order.",
          "## 11. Final provisions",
          "11.1 Where the relationship under the purchase contract has an international element, it is governed by Czech law. This choice of law does not deprive a consumer Buyer of the protection of any mandatory provisions that would otherwise apply under Article 6(1) of Regulation (EC) No 593/2008 (Rome I).",
          "11.2 If any provision of these Terms is or becomes invalid or ineffective, it will be replaced by a provision whose meaning comes as close as possible to the invalid one. The invalidity of one provision does not affect the validity of the others.",
          "11.3 The purchase contract, including these Terms, is archived electronically by the Seller.",
          "11.4 A model withdrawal form is attached to these Terms as an annex.",
          "11.5 Seller's contact details: registered address Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika, e-mail grunndubh@gmail.com. No other means of online communication is offered.",
          "At \u010cesk\u00e1 L\u00edpa, on 18 September 2026",
          "## ANNEX \u2014 Model withdrawal form",
          "(complete and send this form only if you wish to withdraw from the contract)",
          "To: Petra Bentley, Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika, grunndubh@gmail.com",
          "I/We(*) hereby give notice that I/we withdraw from my/our contract for the sale of the following goods: ..........................................",
          "Ordered on ................... / received on(*) ...................",
          "Name of consumer(s): ..........................................",
          "Address of consumer(s): ..........................................",
          "Signature of consumer(s) (only if this form is submitted on paper): ..........................................",
          "Date: ..........................................",
          "(*) Delete as applicable.",
        ],
      },
      privacy: {
        title: "Privacy Policy",
        body: [
          "Grunndubh online shop",
          "Convenience translation \u2014 the Czech-language version is the legally binding text; this English translation is provided for orientation only.",
          "Petra Bentley, sole trader (OSV\u010c) operating under a Czech trade licence<br>Registered address: Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika<br>Business ID (I\u010cO): 24113336<br>Contact e-mail: grunndubh@gmail.com<br>(the \u201cController\u201d)",
          "## 1. Introduction",
          "1.1 The Controller processes personal data in accordance with Regulation (EU) 2016/679 (GDPR) and Act No. 110/2019 Coll., on the processing of personal data. This Privacy Policy describes the personal data collected in connection with the Grunndubh online shop, the purposes for which it is used, who it is shared with, and the rights available to the data subject (the buyer or website visitor, \u201cyou\u201d).",
          "1.2 This Policy fulfils the Controller's information obligation to buyers under Article 13 GDPR, referred to in Section 8.1 of the Terms &amp; Conditions.",
          "## 2. What personal data we process",
          "2.1 Order data: name, delivery and (where applicable) billing address, e-mail address, phone number (if required by the carrier), and order contents.",
          "2.2 Payment data: payments are processed exclusively via Stripe. The Controller never sees or stores card numbers or other sensitive payment data \u2014 Stripe processes these as an independent controller/processor under its own privacy policy.",
          "2.3 Newsletter: if you sign up for updates, we process your e-mail address. Sign-ups are currently handled directly from the Controller's own inbox, not through a separate third-party mailing platform.",
          "2.4 Technical (cookie) data: see Section 8 below.",
          "2.5 Communication: if you contact us by e-mail (for example, with a complaint or question), we process the content of that communication and your contact details.",
          "## 3. Purposes and legal basis",
          "3.1 Processing your order, delivering goods, and performing the purchase contract \u2014 legal basis: performance of a contract (Article 6(1)(b) GDPR).",
          "3.2 Issuing tax and accounting documents and meeting other statutory obligations (e.g. under accounting and tax law) \u2014 legal basis: compliance with a legal obligation (Article 6(1)(c) GDPR).",
          "3.3 Handling complaints and warranty claims \u2014 legal basis: performance of a contract and compliance with a legal obligation.",
          "3.4 Sending the newsletter \u2014 legal basis: your consent (Article 6(1)(a) GDPR), which you may withdraw at any time via the unsubscribe link or by e-mailing grunndubh@gmail.com.",
          "3.5 Protecting the Controller's legitimate interests (e.g. defending against legal claims) \u2014 legal basis: legitimate interest (Article 6(1)(f) GDPR).",
          "3.6 Providing the personal data needed to conclude and perform the purchase contract is a contractual requirement \u2014 without it, the order cannot be fulfilled. Providing an e-mail address for the newsletter is entirely voluntary.",
          "## 4. Who we share personal data with",
          "4.1 Stripe, our payment service provider, for payment processing.",
          "4.2 The carriers delivering the goods \u2014 \u010cesk\u00e1 po\u0161ta, s.p., PPL CZ s.r.o. and Z\u00e1silkovna s.r.o. (Packeta), to the extent needed to deliver the parcel. For deliveries to EU countries other than the Czech Republic, the parcel may also be handed to another carrier providing international transport.",
          "4.3 The Controller's accountant or tax adviser, where necessary to meet statutory obligations.",
          "4.4 The provider hosting the website's infrastructure Cloudflare, Inc..",
          "4.5 The e-mail service provider Resend (Resend, Inc., USA), through which messages from the contact form and newsletter sign-ups are delivered to the Controller's inbox.",
          "4.6 Personal data is not shared with any other third parties, nor sold for third-party marketing purposes.",
          "## 5. International data transfers",
          "5.1 Stripe is established outside the European Economic Area (in the USA); transfers of personal data to the USA are safeguarded by the European Commission's Standard Contractual Clauses or another adequate mechanism under Article 46 GDPR, as described in Stripe's own privacy policy. The same applies to Resend, Inc. (USA).",
          "5.2 Other than as described above, the Controller does not transfer personal data outside the European Economic Area.",
          "## 6. How long we keep your data",
          "6.1 Order data and tax documents are kept for the period required by law (in particular accounting and tax legislation), generally 10 years from the end of the tax period to which they relate.",
          "6.2 Data processed to defend against legal claims is kept for the duration of the relevant limitation period.",
          "6.3 Your e-mail address for the newsletter is kept until you withdraw consent (unsubscribe).",
          "6.4 After the applicable period, personal data is securely deleted or anonymised.",
          "## 7. Your rights",
          "7.1 In connection with the processing of your personal data, you have the right to:",
          "a) access your personal data (Article 15 GDPR);",
          "b) have inaccurate data corrected (Article 16 GDPR);",
          "c) have your data erased once it is no longer needed, or if you withdraw consent (Article 17 GDPR);",
          "d) request restriction of processing (Article 18 GDPR);",
          "e) data portability (Article 20 GDPR);",
          "f) object to processing based on legitimate interest (Article 21 GDPR);",
          "g) withdraw consent at any time, without affecting the lawfulness of processing before withdrawal;",
          "h) lodge a complaint with the supervisory authority \u2014 the Office for Personal Data Protection (\u00da\u0159ad pro ochranu osobn\u00edch \u00fadaj\u016f), Pplk. Sochora 27, 170 00 Prague 7, website: www.uoou.cz.",
          "7.2 You can exercise these rights by e-mailing grunndubh@gmail.com or writing to the Controller's registered address Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika.",
          "## 8. Cookies",
          "8.1 Cookies are small text files stored on your device by the website to allow it to function correctly (for example, keeping your shopping cart contents between steps of an order).",
          "8.2 The Grunndubh website uses strictly necessary (technical) cookies, needed to operate the site and complete orders, for which visitor consent is not required under Section 89 of Act No. 127/2005 Coll., on Electronic Communications.",
          "8.3 If you click to choose a Packeta pickup point when ordering, the map widget of Z\u00e1silkovna s.r.o. (Packeta) is loaded on the page. This widget is provided by a third party and may store its own cookies, including cookies of an analytical nature, independently of the Controller. The widget is loaded only when you choose to select a pickup point, not automatically when you visit the website. Before these cookies are stored, you will be offered the choice to accept or decline directly in the widget. Information about the cookies used by Z\u00e1silkovna s.r.o. is available in its own privacy policy at <a href='https://www.zasilkovna.cz' class='underline' target='_blank' rel='noopener'>www.zasilkovna.cz</a>.",
          "8.4 Apart from the cookies described in Section 8.3, the website does not currently use any other analytics or marketing cookies (such as Google Analytics or the Meta/Facebook Pixel). If the Controller starts using other analytics or marketing cookies in future, this Policy will be updated accordingly, and visitors will be asked to give or decline consent through a cookie-management tool (a cookie banner) before such cookies are used.",
          "8.5 Most browsers can be set to refuse cookies or warn before they are stored; restricting strictly necessary cookies may affect the website's functionality, including the ability to complete an order.",
          "## 9. Security",
          "9.1 The Controller has implemented appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or misuse, including encrypted (HTTPS) data transmission and restricted access to data.",
          "## 10. Changes to this Policy",
          "10.1 The Controller may update this Policy from time to time, in particular to reflect changes in the law or in how the website operates. The current version is always available on the website.",
          "## 11. Contact",
          "11.1 If you have any questions about how your personal data is processed, please contact us at grunndubh@gmail.com.",
          "At \u010cesk\u00e1 L\u00edpa, on 18 September 2026",
        ],
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
      buy: "Objednat s povinnost\u00ed platby",
      ship: {
        country: "Zem\u011b doru\u010den\u00ed",
        methods: {
          "packeta-point": "Z\u00e1silkovna \u2013 v\u00fddejn\u00ed m\u00edsto",
          "packeta-point-eu": "Z-Point / Z-Box \u2013 v\u00fddejn\u00ed m\u00edsto",
          "ceska-posta": "\u010cesk\u00e1 po\u0161ta \u2013 na adresu",
          ppl: "PPL \u2013 na adresu",
          "eu-home": "Doru\u010den\u00ed na adresu",
        },
        itemLabel: "Zbo\u017e\u00ed",
        deliveryLabel: "Doprava",
        totalLabel: "Celkem",
        addressNote: "Adresu zad\u00e1te p\u0159i platb\u011b.",
        dispatch: "Odes\u00edl\u00e1me do {days} pracovn\u00edch dn\u016f. Doba doru\u010den\u00ed pak z\u00e1vis\u00ed na zemi a dopravci.",
      },
      pickup: {
        choose: "Vybrat v\u00fddejn\u00ed m\u00edsto Z\u00e1silkovny",
        chooseEu: "Vybrat Z-Point / Z-Box",
        change: "Zm\u011bnit v\u00fddejn\u00ed m\u00edsto",
        none: "V\u00fddejn\u00ed m\u00edsto zat\u00edm nen\u00ed vybr\u00e1no.",
        hintConsent: "Pro pokra\u010dov\u00e1n\u00ed pros\u00edm souhlaste s obchodn\u00edmi podm\u00ednkami.",
        hintPoint: "Pro pokra\u010dov\u00e1n\u00ed vyberte v\u00fddejn\u00ed m\u00edsto.",
        chargedIn: "Platba prob\u011bhne v K\u010d.",
        redirecting: "P\u0159esm\u011brov\u00e1v\u00e1m na zabezpe\u010denou platbu\u2026",
        error: "N\u011bco se nepovedlo. Zkuste to pros\u00edm znovu nebo napi\u0161te na grunndubh@gmail.com.",
        widgetError: "Mapu v\u00fddejn\u00edch m\u00edst se nepoda\u0159ilo na\u010d\u00edst. Zkuste to pros\u00edm znovu.",
      },
      priceComingSoon: "Cena bude brzy",
      view: "Zobrazit",
      back: "Zp\u011bt ke kolekci",
      notFound: "Tuto n\u00e1u\u0161nici jsme nena\u0161li.",
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
      ochre: {
        name: "Ochre",
        description: "Tepl\u00e1 bronzov\u011b hn\u011bd\u00e1 slza s t\u0159pytkami zlat\u00e9ho pigmentu, dopln\u011bn\u00e1 klad\u00edvkovan\u00fdm zlat\u00fdm ov\u00e1lkem.",
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
      consent: "Souhlas\u00edm se zas\u00edl\u00e1n\u00edm ob\u010dasn\u00fdch e-mail\u016f od Grunndubh. Jak zach\u00e1z\u00edme s \u00fadaji:",
      consentLink: "Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f",
      sending: "Odes\u00edl\u00e1m\u2026",
      success: "D\u011bkujeme, jste p\u0159ihl\u00e1\u0161eni k odb\u011bru.",
      error: "N\u011bco se nepovedlo. Zkuste to pros\u00edm znovu nebo napi\u0161te na grunndubh@gmail.com.",
    },
    contact: {
      heading: "Ozv\u011bte se n\u00e1m",
      text: "Dotazy ke kousku, objedn\u00e1vce nebo cokoliv jin\u00e9ho \u2014 r\u00e1di si je vyslechneme.",
      name: "Jm\u00e9no",
      email: "E-mail",
      message: "Zpr\u00e1va",
      button: "Odeslat zpr\u00e1vu",
      sending: "Odes\u00edl\u00e1m\u2026",
      success: "D\u011bkujeme, zpr\u00e1va byla odesl\u00e1na.",
      error: "N\u011bco se nepovedlo. Zkuste to pros\u00edm znovu nebo napi\u0161te na grunndubh@gmail.com.",
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
    cart: {
      nav: "Ko\u0161\u00edk",
      title: "V\u00e1\u0161 ko\u0161\u00edk",
      empty: "V\u00e1\u0161 ko\u0161\u00edk je pr\u00e1zdn\u00fd.",
      continue: "Pokra\u010dovat v n\u00e1kupu",
      add: "P\u0159idat do ko\u0161\u00edku",
      added: "P\u0159id\u00e1no do ko\u0161\u00edku.",
      viewCart: "Zobrazit ko\u0161\u00edk",
      qty: "Mno\u017estv\u00ed",
      remove: "Odebrat",
    },
    success: {
      title: "D\u011bkujeme",
      text: "Va\u0161e objedn\u00e1vka je potvrzen\u00e1 a platba prob\u011bhla. Doklad v\u00e1m p\u0159ijde na e-mail. Ka\u017ed\u00fd kus vyr\u00e1b\u00edme ru\u010dn\u011b, ozveme se v\u00e1m, a\u017e bude na cest\u011b.",
      note: "Dotazy k objedn\u00e1vce? Napi\u0161te na grunndubh@gmail.com.",
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
        body: [
          "internetov\u00e9ho obchodu Grunndubh",
          "Petra Bentley, podnikaj\u00edc\u00ed fyzick\u00e1 osoba na z\u00e1klad\u011b \u017eivnostensk\u00e9ho opr\u00e1vn\u011bn\u00ed<br>se s\u00eddlem: Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika<br>identifika\u010dn\u00ed \u010d\u00edslo (I\u010cO): 24113336<br>zapsan\u00e1 v \u017eivnostensk\u00e9m rejst\u0159\u00edku (nikoli v obchodn\u00edm rejst\u0159\u00edku)<br>pro prodej zbo\u017e\u00ed prost\u0159ednictv\u00edm on-line obchodu um\u00edst\u011bn\u00e9ho na internetov\u00e9 adrese https://grunndubh.pages.dev/ (d\u00e1le jen \u201ewebov\u00e1 str\u00e1nka\u201c)<br>kontaktn\u00ed e-mail: grunndubh@gmail.com",
          "## 1. \u00daVODN\u00cd USTANOVEN\u00cd",
          "1.1 Tyto obchodn\u00ed podm\u00ednky (d\u00e1le jen \u201eobchodn\u00ed podm\u00ednky\u201c) Petra Bentley, podnikaj\u00edc\u00ed fyzick\u00e9 osoby, se s\u00eddlem Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika, I\u010cO: 24113336, zapsan\u00e9 v \u017eivnostensk\u00e9m rejst\u0159\u00edku (d\u00e1le jen \u201eprod\u00e1vaj\u00edc\u00ed\u201c), upravuj\u00ed v souladu s ustanoven\u00edm \u00a7 1751 odst. 1 z\u00e1kona \u010d. 89/2012 Sb., ob\u010dansk\u00fd z\u00e1kon\u00edk, ve zn\u011bn\u00ed pozd\u011bj\u0161\u00edch p\u0159edpis\u016f (d\u00e1le jen \u201eob\u010dansk\u00fd z\u00e1kon\u00edk\u201c), vz\u00e1jemn\u00e1 pr\u00e1va a povinnosti smluvn\u00edch stran vznikl\u00e9 v souvislosti nebo na z\u00e1klad\u011b kupn\u00ed smlouvy (d\u00e1le jen \u201ekupn\u00ed smlouva\u201c) uzav\u00edran\u00e9 mezi prod\u00e1vaj\u00edc\u00edm a jinou fyzickou osobou (d\u00e1le jen \u201ekupuj\u00edc\u00ed\u201c) prost\u0159ednictv\u00edm internetov\u00e9ho obchodu Grunndubh provozovan\u00e9ho na webov\u00e9 str\u00e1nce um\u00edst\u011bn\u00e9 na internetov\u00e9 adrese https://grunndubh.pages.dev/, a to prost\u0159ednictv\u00edm rozhran\u00ed webov\u00e9 str\u00e1nky (d\u00e1le jen \u201ewebov\u00e9 rozhran\u00ed obchodu\u201c).",
          "1.2 Obchodn\u00ed podm\u00ednky se nevztahuj\u00ed na p\u0159\u00edpady, kdy osoba, kter\u00e1 m\u00e1 v \u00famyslu nakoupit zbo\u017e\u00ed od prod\u00e1vaj\u00edc\u00edho, je pr\u00e1vnickou osobou \u010di osobou, je\u017e jedn\u00e1 p\u0159i objedn\u00e1v\u00e1n\u00ed zbo\u017e\u00ed v r\u00e1mci sv\u00e9 podnikatelsk\u00e9 \u010dinnosti nebo v r\u00e1mci sv\u00e9ho samostatn\u00e9ho v\u00fdkonu povol\u00e1n\u00ed.",
          "1.3 Ustanoven\u00ed odchyln\u00e1 od obchodn\u00edch podm\u00ednek je mo\u017en\u00e9 sjednat v kupn\u00ed smlouv\u011b. Odchyln\u00e1 ujedn\u00e1n\u00ed v kupn\u00ed smlouv\u011b maj\u00ed p\u0159ednost p\u0159ed ustanoven\u00edmi obchodn\u00edch podm\u00ednek.",
          "1.4 Ustanoven\u00ed obchodn\u00edch podm\u00ednek jsou ned\u00edlnou sou\u010d\u00e1st\u00ed kupn\u00ed smlouvy. Kupn\u00ed smlouva a obchodn\u00ed podm\u00ednky jsou vyhotoveny v \u010desk\u00e9m jazyce. Kupn\u00ed smlouvu lze uzav\u0159\u00edt v \u010desk\u00e9m jazyce. Prod\u00e1vaj\u00edc\u00ed zp\u0159\u00edstup\u0148uje na webov\u00e9 str\u00e1nce rovn\u011b\u017e anglick\u00fd p\u0159eklad t\u011bchto obchodn\u00edch podm\u00ednek, a to v\u00fdhradn\u011b pro usnadn\u011bn\u00ed orientace zahrani\u010dn\u00edch z\u00e1kazn\u00edk\u016f; v p\u0159\u00edpad\u011b jak\u00e9hokoli rozporu mezi \u010desk\u00fdm a anglick\u00fdm zn\u011bn\u00edm je rozhodn\u00e9 \u010desk\u00e9 zn\u011bn\u00ed.",
          "1.5 Zn\u011bn\u00ed obchodn\u00edch podm\u00ednek m\u016f\u017ee prod\u00e1vaj\u00edc\u00ed m\u011bnit \u010di dopl\u0148ovat. T\u00edmto ustanoven\u00edm nejsou dot\u010dena pr\u00e1va a povinnosti vznikl\u00e1 po dobu \u00fa\u010dinnosti p\u0159edchoz\u00edho zn\u011bn\u00ed obchodn\u00edch podm\u00ednek.",
          "## 2. UZAV\u0158EN\u00cd KUPN\u00cd SMLOUVY",
          "2.1 Webov\u00e9 rozhran\u00ed obchodu obsahuje informace o zbo\u017e\u00ed, v\u010detn\u011b cen jednotliv\u00e9ho zbo\u017e\u00ed a n\u00e1klad\u016f za navr\u00e1cen\u00ed zbo\u017e\u00ed, jestli\u017ee toto zbo\u017e\u00ed ze sv\u00e9 podstaty nem\u016f\u017ee b\u00fdt navr\u00e1ceno obvyklou po\u0161tovn\u00ed cestou. Ceny zbo\u017e\u00ed jsou uvedeny jako kone\u010dn\u00e9, v\u010detn\u011b v\u0161ech souvisej\u00edc\u00edch poplatk\u016f, a z\u016fst\u00e1vaj\u00ed v platnosti po dobu, kdy jsou zobrazov\u00e1ny ve webov\u00e9m rozhran\u00ed obchodu. Prod\u00e1vaj\u00edc\u00ed nen\u00ed pl\u00e1tcem dan\u011b z p\u0159idan\u00e9 hodnoty. T\u00edmto ustanoven\u00edm nen\u00ed omezena mo\u017enost prod\u00e1vaj\u00edc\u00edho uzav\u0159\u00edt kupn\u00ed smlouvu za individu\u00e1ln\u011b sjednan\u00fdch podm\u00ednek.",
          "2.2 Webov\u00e9 rozhran\u00ed obchodu d\u00e1le obsahuje informace o n\u00e1kladech spojen\u00fdch s balen\u00edm a dod\u00e1n\u00edm zbo\u017e\u00ed a o zp\u016fsobu a dob\u011b dod\u00e1n\u00ed. Zbo\u017e\u00ed je doru\u010dov\u00e1no do \u010dlensk\u00fdch st\u00e1t\u016f Evropsk\u00e9 unie; konkr\u00e9tn\u00ed v\u00fd\u0161e dopravn\u00edch n\u00e1klad\u016f se li\u0161\u00ed podle zem\u011b dod\u00e1n\u00ed a je kupuj\u00edc\u00edmu v\u017edy zobrazena p\u0159ed dokon\u010den\u00edm objedn\u00e1vky.",
          "2.3 Pro objedn\u00e1n\u00ed zbo\u017e\u00ed vlo\u017e\u00ed kupuj\u00edc\u00ed vybran\u00e9 zbo\u017e\u00ed do elektronick\u00e9ho n\u00e1kupn\u00edho ko\u0161\u00edku webov\u00e9ho rozhran\u00ed obchodu a vypln\u00ed objedn\u00e1vkov\u00fd formul\u00e1\u0159, kter\u00fd obsahuje zejm\u00e9na \u00fadaje o objedn\u00e1van\u00e9m zbo\u017e\u00ed, zp\u016fsobu \u00fahrady kupn\u00ed ceny, po\u017eadovan\u00e9m zp\u016fsobu doru\u010den\u00ed a n\u00e1kladech s t\u00edm spojen\u00fdch (d\u00e1le jen \u201eobjedn\u00e1vka\u201c).",
          "2.4 P\u0159ed odesl\u00e1n\u00edm objedn\u00e1vky je kupuj\u00edc\u00edmu umo\u017en\u011bno zkontrolovat a m\u011bnit vstupn\u00ed \u00fadaje, v\u010detn\u011b mo\u017enosti zjistit a opravit chyby vznikl\u00e9 p\u0159i zad\u00e1v\u00e1n\u00ed dat. Objedn\u00e1vku ode\u0161le kupuj\u00edc\u00ed prod\u00e1vaj\u00edc\u00edmu kliknut\u00edm na tla\u010d\u00edtko \u201eObjednat s povinnost\u00ed platby\u201c. \u00dadaje uveden\u00e9 v objedn\u00e1vce jsou prod\u00e1vaj\u00edc\u00edm pova\u017eov\u00e1ny za spr\u00e1vn\u00e9. Prod\u00e1vaj\u00edc\u00ed neprodlen\u011b po obdr\u017een\u00ed objedn\u00e1vky toto obdr\u017een\u00ed kupuj\u00edc\u00edmu potvrd\u00ed elektronickou po\u0161tou na adresu uvedenou v objedn\u00e1vce.",
          "2.5 Smluvn\u00ed vztah mezi prod\u00e1vaj\u00edc\u00edm a kupuj\u00edc\u00edm vznik\u00e1 doru\u010den\u00edm objedn\u00e1vky prod\u00e1vaj\u00edc\u00edmu, s v\u00fdjimkou p\u0159\u00edpad\u016f, kdy do\u0161lo k vy\u010derp\u00e1n\u00ed z\u00e1sob nebo ke ztr\u00e1t\u011b schopnosti prod\u00e1vaj\u00edc\u00edho plnit; v takov\u00e9m p\u0159\u00edpad\u011b prod\u00e1vaj\u00edc\u00ed kupuj\u00edc\u00edho neprodlen\u011b informuje.",
          "2.6 Kupuj\u00edc\u00ed souhlas\u00ed s pou\u017eit\u00edm komunika\u010dn\u00edch prost\u0159edk\u016f na d\u00e1lku p\u0159i uzav\u00edr\u00e1n\u00ed kupn\u00ed smlouvy. N\u00e1klady vznikl\u00e9 kupuj\u00edc\u00edmu p\u0159i jejich pou\u017eit\u00ed (nap\u0159. n\u00e1klady na internetov\u00e9 p\u0159ipojen\u00ed) si hrad\u00ed kupuj\u00edc\u00ed s\u00e1m a tyto n\u00e1klady se neli\u0161\u00ed od z\u00e1kladn\u00ed sazby.",
          "## 3. CENA ZBO\u017d\u00cd A PLATEBN\u00cd PODM\u00cdNKY",
          "3.1 Kupn\u00ed cenu zbo\u017e\u00ed a n\u00e1klady spojen\u00e9 s jeho dod\u00e1n\u00edm hrad\u00ed kupuj\u00edc\u00ed bezhotovostn\u011b platebn\u00ed kartou nebo jin\u00fdm platebn\u00edm prost\u0159edkem podporovan\u00fdm platebn\u00ed br\u00e1nou Stripe (nap\u0159. Apple Pay \u010di Google Pay).",
          "3.2 Platby jsou zpracov\u00e1v\u00e1ny prost\u0159ednictv\u00edm platebn\u00ed br\u00e1ny Stripe. Prod\u00e1vaj\u00edc\u00ed neuvid\u00ed ani neukl\u00e1d\u00e1 \u00fadaje o platebn\u00ed kart\u011b kupuj\u00edc\u00edho; jejich zpracov\u00e1n\u00ed se \u0159\u00edd\u00ed vlastn\u00edmi podm\u00ednkami a z\u00e1sadami ochrany osobn\u00edch \u00fadaj\u016f spole\u010dnosti Stripe.",
          "3.3 Kupn\u00ed cena je splatn\u00e1 okam\u017eikem odesl\u00e1n\u00ed objedn\u00e1vky; objedn\u00e1vka je prod\u00e1vaj\u00edc\u00edm vy\u0159\u00edzena a zbo\u017e\u00ed expedov\u00e1no a\u017e po p\u0159ips\u00e1n\u00ed platby ve prosp\u011bch prod\u00e1vaj\u00edc\u00edho.",
          "3.4 P\u0159\u00edpadn\u00e9 slevy z ceny zbo\u017e\u00ed poskytnut\u00e9 prod\u00e1vaj\u00edc\u00edm kupuj\u00edc\u00edmu nelze vz\u00e1jemn\u011b kombinovat, nen\u00ed-li v\u00fdslovn\u011b uvedeno jinak.",
          "3.5 Prod\u00e1vaj\u00edc\u00ed nen\u00ed pl\u00e1tcem dan\u011b z p\u0159idan\u00e9 hodnoty. Doklad o koupi vystav\u00ed prod\u00e1vaj\u00edc\u00ed kupuj\u00edc\u00edmu po uhrazen\u00ed ceny zbo\u017e\u00ed a za\u0161le jej v elektronick\u00e9 podob\u011b na e-mailovou adresu kupuj\u00edc\u00edho.",
          "## 4. ODSTOUPEN\u00cd OD KUPN\u00cd SMLOUVY",
          "4.1 Kupuj\u00edc\u00ed, kter\u00fd je spot\u0159ebitelem, m\u00e1 v souladu s \u00a7 1829 odst. 1 ob\u010dansk\u00e9ho z\u00e1kon\u00edku pr\u00e1vo odstoupit od kupn\u00ed smlouvy bez ud\u00e1n\u00ed d\u016fvodu, a to do \u010dtrn\u00e1cti (14) dn\u016f ode dne, kdy kupuj\u00edc\u00ed nebo j\u00edm ur\u010den\u00e1 t\u0159et\u00ed osoba (jin\u00e1 ne\u017e dopravce) p\u0159evezme zbo\u017e\u00ed.",
          "4.2 Pr\u00e1vo na odstoupen\u00ed se v souladu s \u00a7 1837 ob\u010dansk\u00e9ho z\u00e1kon\u00edku nevztahuje na zbo\u017e\u00ed, kter\u00e9 bylo upraveno podle p\u0159\u00e1n\u00ed kupuj\u00edc\u00edho nebo pro jeho osobu (nap\u0159. v\u00fdslovn\u011b objednan\u00fd individu\u00e1ln\u00ed rozm\u011br \u010di grav\u00edrov\u00e1n\u00ed na zak\u00e1zku). Standardn\u00ed kusy nab\u00edzen\u00e9 v e-shopu bez takov\u00e9 \u00fapravy tomuto omezen\u00ed nepodl\u00e9haj\u00ed.",
          "4.3 Pro odstoupen\u00ed od smlouvy m\u016f\u017ee kupuj\u00edc\u00ed vyu\u017e\u00edt vzorov\u00fd formul\u00e1\u0159, kter\u00fd tvo\u0159\u00ed p\u0159\u00edlohu t\u011bchto obchodn\u00edch podm\u00ednek, p\u0159\u00edpadn\u011b zaslat jasn\u00e9 prohl\u00e1\u0161en\u00ed o odstoupen\u00ed na e-mailovou adresu prod\u00e1vaj\u00edc\u00edho grunndubh@gmail.com nebo na adresu jeho s\u00eddla Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika.",
          "4.4 V p\u0159\u00edpad\u011b odstoupen\u00ed se kupn\u00ed smlouva od po\u010d\u00e1tku ru\u0161\u00ed. Kupuj\u00edc\u00ed za\u0161le nebo p\u0159ed\u00e1 zbo\u017e\u00ed zp\u011bt prod\u00e1vaj\u00edc\u00edmu bez zbyte\u010dn\u00e9ho odkladu, nejpozd\u011bji do \u010dtrn\u00e1cti (14) dn\u016f od odstoupen\u00ed. N\u00e1klady spojen\u00e9 s vr\u00e1cen\u00edm zbo\u017e\u00ed nese kupuj\u00edc\u00ed.",
          "4.5 Prod\u00e1vaj\u00edc\u00ed vr\u00e1t\u00ed kupuj\u00edc\u00edmu p\u0159ijat\u00e9 pen\u011b\u017en\u00ed prost\u0159edky do \u010dtrn\u00e1cti (14) dn\u016f od odstoupen\u00ed od smlouvy, a to stejn\u00fdm zp\u016fsobem, jak\u00fdm je od kupuj\u00edc\u00edho p\u0159ijal, ne v\u0161ak d\u0159\u00edve, ne\u017e obdr\u017e\u00ed vr\u00e1cen\u00e9 zbo\u017e\u00ed nebo ne\u017e mu kupuj\u00edc\u00ed prok\u00e1\u017ee, \u017ee zbo\u017e\u00ed odeslal zp\u011bt.",
          "4.6 N\u00e1rok na n\u00e1hradu \u0161kody vznikl\u00e9 na zbo\u017e\u00ed je prod\u00e1vaj\u00edc\u00ed opr\u00e1vn\u011bn jednostrann\u011b zapo\u010d\u00edst proti n\u00e1roku kupuj\u00edc\u00edho na vr\u00e1cen\u00ed kupn\u00ed ceny.",
          "4.7 Prod\u00e1vaj\u00edc\u00ed je opr\u00e1vn\u011bn od kupn\u00ed smlouvy odstoupit kdykoliv do doby p\u0159evzet\u00ed zbo\u017e\u00ed kupuj\u00edc\u00edm, zejm\u00e9na v p\u0159\u00edpad\u011b vy\u010derp\u00e1n\u00ed z\u00e1sob. V takov\u00e9m p\u0159\u00edpad\u011b vr\u00e1t\u00ed kupuj\u00edc\u00edmu kupn\u00ed cenu bez zbyte\u010dn\u00e9ho odkladu.",
          "## 5. P\u0158EPRAVA A DOD\u00c1N\u00cd ZBO\u017d\u00cd",
          "5.1 Zbo\u017e\u00ed je doru\u010dov\u00e1no v r\u00e1mci \u010cesk\u00e9 republiky prost\u0159ednictv\u00edm Z\u00e1silkovny s.r.o. (Packeta, v\u00fddejn\u00ed m\u00edsta), \u010cesk\u00e9 po\u0161ty, s.p. nebo PPL CZ s.r.o. Do ostatn\u00edch \u010dlensk\u00fdch st\u00e1t\u016f Evropsk\u00e9 unie je zbo\u017e\u00ed doru\u010dov\u00e1no prost\u0159ednictv\u00edm Z\u00e1silkovny s.r.o. (Packeta) na adresu, kter\u00e1 pro kone\u010dn\u00e9 doru\u010den\u00ed vyu\u017e\u00edv\u00e1 sv\u00e9 partnersk\u00e9 p\u0159epravce, nebo v Polsku, Ma\u010farsku a na Slovensku na v\u00fddejn\u00ed m\u00edsto Z\u00e1silkovny. Zp\u016fsob a p\u0159edpokl\u00e1dan\u00e1 doba dod\u00e1n\u00ed jsou kupuj\u00edc\u00edmu zobrazeny p\u0159i dokon\u010dov\u00e1n\u00ed objedn\u00e1vky.",
          "5.2 Je-li zp\u016fsob dopravy sjedn\u00e1n na z\u00e1klad\u011b zvl\u00e1\u0161tn\u00edho po\u017eadavku kupuj\u00edc\u00edho, nese kupuj\u00edc\u00ed riziko a p\u0159\u00edpadn\u00e9 dodate\u010dn\u00e9 n\u00e1klady s t\u00edmto zp\u016fsobem spojen\u00e9.",
          "5.3 Kupuj\u00edc\u00ed je povinen zbo\u017e\u00ed p\u0159i dod\u00e1n\u00ed p\u0159evz\u00edt. Vy\u017eaduje-li si z d\u016fvod\u016f na stran\u011b kupuj\u00edc\u00edho opakovan\u00e9 doru\u010den\u00ed nebo doru\u010den\u00ed jin\u00fdm zp\u016fsobem, ne\u017e bylo v objedn\u00e1vce uvedeno, je kupuj\u00edc\u00ed povinen uhradit n\u00e1klady s t\u00edm spojen\u00e9.",
          "5.4 P\u0159i p\u0159evzet\u00ed zbo\u017e\u00ed od p\u0159epravce je kupuj\u00edc\u00ed povinen zkontrolovat neporu\u0161enost obalu a p\u0159\u00edpadn\u00e9 z\u00e1vady neprodlen\u011b ozn\u00e1mit p\u0159epravci. T\u00edm nejsou dot\u010dena pr\u00e1va kupuj\u00edc\u00edho z vadn\u00e9ho pln\u011bn\u00ed.",
          "## 6. PR\u00c1VA Z VADN\u00c9HO PLN\u011aN\u00cd",
          "6.1 Pr\u00e1va a povinnosti stran ohledn\u011b pr\u00e1v z vadn\u00e9ho pln\u011bn\u00ed se \u0159\u00edd\u00ed p\u0159\u00edslu\u0161n\u00fdmi obecn\u011b z\u00e1vazn\u00fdmi p\u0159edpisy, zejm\u00e9na \u00a7 1914 a\u017e 1925, \u00a7 2099 a\u017e 2117 a \u00a7 2161 a\u017e 2174b ob\u010dansk\u00e9ho z\u00e1kon\u00edku a z\u00e1konem \u010d. 634/1992 Sb., o ochran\u011b spot\u0159ebitele.",
          "6.2 Prod\u00e1vaj\u00edc\u00ed odpov\u00edd\u00e1 kupuj\u00edc\u00edmu, \u017ee v\u011bc p\u0159i p\u0159evzet\u00ed nem\u00e1 vady, zejm\u00e9na \u017ee odpov\u00edd\u00e1 ujednan\u00e9mu popisu, druhu, mno\u017estv\u00ed a jakosti, je vhodn\u00e1 k \u00fa\u010delu, pro kter\u00fd ji kupuj\u00edc\u00ed po\u017eaduje, a je dod\u00e1na s ujednan\u00fdm p\u0159\u00edslu\u0161enstv\u00edm a pokyny k pou\u017eit\u00ed.",
          "6.3 Vzhledem k ru\u010dn\u00ed v\u00fdrob\u011b zbo\u017e\u00ed z recyklovan\u00fdch materi\u00e1l\u016f (k\u00e1vov\u00e9 sedliny) se drobn\u00e9 p\u0159irozen\u00e9 odchylky v barv\u011b, struktu\u0159e nebo kresb\u011b jednotliv\u00e9ho kusu nepova\u017euj\u00ed za vadu, byly-li tyto vlastnosti pops\u00e1ny nebo z povahy v\u011bci a nab\u00eddky z\u0159ejm\u00e9.",
          "6.4 Projev\u00ed-li se vada v pr\u016fb\u011bhu jednoho roku od p\u0159evzet\u00ed, m\u00e1 se za to, \u017ee v\u011bc byla vadn\u00e1 ji\u017e p\u0159i p\u0159evzet\u00ed, leda\u017ee to povaha v\u011bci nebo vady vylu\u010duje.",
          "6.5 Kupuj\u00edc\u00ed m\u016f\u017ee vytknout vadu, kter\u00e1 se na v\u011bci projev\u00ed v dob\u011b dvou (2) let od p\u0159evzet\u00ed.",
          "6.6 Pr\u00e1vo z vadn\u00e9ho pln\u011bn\u00ed kupuj\u00edc\u00edmu nen\u00e1le\u017e\u00ed, pokud vadu s\u00e1m zp\u016fsobil, ani jde-li o opot\u0159eben\u00ed v\u011bci zp\u016fsoben\u00e9 jej\u00edm obvykl\u00fdm u\u017e\u00edv\u00e1n\u00edm.",
          "6.7 M\u00e1-li v\u011bc vadu, m\u016f\u017ee kupuj\u00edc\u00ed po\u017eadovat jej\u00ed odstran\u011bn\u00ed dod\u00e1n\u00edm nov\u00e9 v\u011bci bez vady nebo opravou, p\u0159im\u011b\u0159enou slevu z kupn\u00ed ceny, nebo za podm\u00ednek stanoven\u00fdch ob\u010dansk\u00fdm z\u00e1kon\u00edkem odstoupit od smlouvy.",
          "6.8 Vadu lze vytknout prod\u00e1vaj\u00edc\u00edmu na e-mailov\u00e9 adrese grunndubh@gmail.com \u010di na adrese jeho s\u00eddla Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika. Prod\u00e1vaj\u00edc\u00ed vyd\u00e1 kupuj\u00edc\u00edmu p\u0159i uplatn\u011bn\u00ed reklamace p\u00edsemn\u00e9 potvrzen\u00ed s uveden\u00edm data uplatn\u011bn\u00ed, obsahu reklamace a po\u017eadovan\u00e9ho zp\u016fsobu vy\u0159\u00edzen\u00ed.",
          "6.9 Reklamace, v\u010detn\u011b odstran\u011bn\u00ed vady, mus\u00ed b\u00fdt vy\u0159\u00edzena a kupuj\u00edc\u00ed o tom informov\u00e1n nejpozd\u011bji do t\u0159iceti (30) dn\u016f ode dne jej\u00edho uplatn\u011bn\u00ed, nedohodnou-li se strany na del\u0161\u00ed lh\u016ft\u011b. Po marn\u00e9m uplynut\u00ed t\u00e9to lh\u016fty m\u016f\u017ee kupuj\u00edc\u00ed od smlouvy odstoupit nebo po\u017eadovat p\u0159im\u011b\u0159enou slevu.",
          "6.10 Prod\u00e1vaj\u00edc\u00ed m\u016f\u017ee kupuj\u00edc\u00edmu poskytnout nad r\u00e1mec jeho z\u00e1konn\u00fdch pr\u00e1v z vadn\u00e9ho pln\u011bn\u00ed tak\u00e9 z\u00e1ruku za jakost.",
          "## 7. DAL\u0160\u00cd PR\u00c1VA A POVINNOSTI SMLUVN\u00cdCH STRAN",
          "7.1 Kupuj\u00edc\u00ed nab\u00fdv\u00e1 vlastnictv\u00ed ke zbo\u017e\u00ed zaplacen\u00edm cel\u00e9 kupn\u00ed ceny.",
          "7.2 Prod\u00e1vaj\u00edc\u00ed nen\u00ed ve vztahu ke kupuj\u00edc\u00edmu v\u00e1z\u00e1n \u017e\u00e1dn\u00fdmi kodexy chov\u00e1n\u00ed ve smyslu \u00a7 1820 odst. 1 p\u00edsm. n) ob\u010dansk\u00e9ho z\u00e1kon\u00edku.",
          "7.3 St\u00ed\u017enosti spot\u0159ebitel\u016f vy\u0159izuje prod\u00e1vaj\u00edc\u00ed prost\u0159ednictv\u00edm e-mailov\u00e9 adresy grunndubh@gmail.com; o vy\u0159\u00edzen\u00ed st\u00ed\u017enosti bude kupuj\u00edc\u00ed informov\u00e1n na j\u00edm uvedenou e-mailovou adresu.",
          "7.4 K mimosoudn\u00edmu \u0159e\u0161en\u00ed spot\u0159ebitelsk\u00fdch spor\u016f z kupn\u00ed smlouvy je p\u0159\u00edslu\u0161n\u00e1 \u010cesk\u00e1 obchodn\u00ed inspekce, se s\u00eddlem Gorazdova 1969/24, Nov\u00e9 M\u011bsto, 120 00 Praha 2, I\u010cO: 000 20 869, internetov\u00e1 adresa: https://coi.gov.cz/mimosoudni-reseni-spotrebitelskych-sporu-adr.",
          "7.5 Evropsk\u00e9 spot\u0159ebitelsk\u00e9 centrum \u010cesk\u00e1 republika, se s\u00eddlem \u0160t\u011bp\u00e1nsk\u00e1 567/15, 120 00 Praha 2, internetov\u00e1 adresa: http://www.evropskyspotrebitel.cz, je kontaktn\u00edm m\u00edstem pro p\u0159eshrani\u010dn\u00ed spot\u0159ebitelsk\u00e9 spory v r\u00e1mci Evropsk\u00e9 unie.",
          "7.6 Kupuj\u00edc\u00ed se m\u016f\u017ee se st\u00ed\u017enost\u00ed obr\u00e1tit i na org\u00e1n dohledu nebo st\u00e1tn\u00edho dozoru. Prod\u00e1vaj\u00edc\u00ed je opr\u00e1vn\u011bn k prodeji zbo\u017e\u00ed na z\u00e1klad\u011b \u017eivnostensk\u00e9ho opr\u00e1vn\u011bn\u00ed; \u017eivnostenskou kontrolu prov\u00e1d\u00ed p\u0159\u00edslu\u0161n\u00fd \u017eivnostensk\u00fd \u00fa\u0159ad. Dozor nad ochranou osobn\u00edch \u00fadaj\u016f vykon\u00e1v\u00e1 \u00da\u0159ad pro ochranu osobn\u00edch \u00fadaj\u016f.",
          "7.7 Kupuj\u00edc\u00ed t\u00edmto p\u0159eb\u00edr\u00e1 na sebe nebezpe\u010d\u00ed zm\u011bny okolnost\u00ed ve smyslu \u00a7 1765 odst. 2 ob\u010dansk\u00e9ho z\u00e1kon\u00edku.",
          "## 8. OCHRANA OSOBN\u00cdCH \u00daDAJ\u016e",
          "8.1 Informace o zpracov\u00e1n\u00ed osobn\u00edch \u00fadaj\u016f kupuj\u00edc\u00edho ve smyslu \u010dl. 13 Na\u0159\u00edzen\u00ed Evropsk\u00e9ho parlamentu a Rady (EU) 2016/679 (GDPR) prod\u00e1vaj\u00edc\u00ed poskytuje prost\u0159ednictv\u00edm samostatn\u00fdch Z\u00e1sad ochrany osobn\u00edch \u00fadaj\u016f dostupn\u00fdch na webov\u00e9 str\u00e1nce.",
          "## 9. ZAS\u00cdL\u00c1N\u00cd OBCHODN\u00cdCH SD\u011aLEN\u00cd A UKL\u00c1D\u00c1N\u00cd COOKIES",
          "9.1 Souhlas kupuj\u00edc\u00edho se zas\u00edl\u00e1n\u00edm obchodn\u00edch sd\u011blen\u00ed podle \u00a7 7 odst. 2 z\u00e1kona \u010d. 480/2004 Sb. a informace o zpracov\u00e1n\u00ed osobn\u00edch \u00fadaj\u016f pro tyto \u00fa\u010dely upravuj\u00ed samostatn\u00e9 Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f.",
          "9.2 Z\u00e1konn\u00e9 povinnosti souvisej\u00edc\u00ed s ukl\u00e1d\u00e1n\u00edm cookies na za\u0159\u00edzen\u00ed kupuj\u00edc\u00edho pln\u00ed prod\u00e1vaj\u00edc\u00ed prost\u0159ednictv\u00edm \u010dl. 8 Z\u00e1sad ochrany osobn\u00edch \u00fadaj\u016f dostupn\u00fdch na webov\u00e9 str\u00e1nce.",
          "## 10. DORU\u010cOV\u00c1N\u00cd",
          "10.1 Kupuj\u00edc\u00edmu m\u016f\u017ee b\u00fdt doru\u010dov\u00e1no na e-mailovou adresu, kterou uvedl v objedn\u00e1vce.",
          "## 11. Z\u00c1V\u011aRE\u010cN\u00c1 USTANOVEN\u00cd",
          "11.1 Obsahuje-li vztah zalo\u017een\u00fd kupn\u00ed smlouvou mezin\u00e1rodn\u00ed prvek, \u0159\u00edd\u00ed se tento vztah \u010desk\u00fdm pr\u00e1vem. Volbou pr\u00e1va nen\u00ed kupuj\u00edc\u00ed-spot\u0159ebitel zbaven ochrany poskytovan\u00e9 mu ustanoven\u00edmi pr\u00e1vn\u00edho \u0159\u00e1du, od nich\u017e se nelze smluvn\u011b odch\u00fdlit, a je\u017e by se jinak pou\u017eila podle \u010dl. 6 odst. 1 Na\u0159\u00edzen\u00ed (ES) \u010d. 593/2008 (\u0158\u00edm I).",
          "11.2 Je-li n\u011bkter\u00e9 ustanoven\u00ed obchodn\u00edch podm\u00ednek neplatn\u00e9 nebo ne\u00fa\u010dinn\u00e9, nastoup\u00ed nam\u00edsto n\u011bj ustanoven\u00ed, jeho\u017e smysl se neplatn\u00e9mu ustanoven\u00ed co nejv\u00edce p\u0159ibli\u017euje. Neplatnost jednoho ustanoven\u00ed se nedot\u00fdk\u00e1 platnosti ostatn\u00edch.",
          "11.3 Kupn\u00ed smlouva v\u010detn\u011b obchodn\u00edch podm\u00ednek je prod\u00e1vaj\u00edc\u00edm archivov\u00e1na v elektronick\u00e9 podob\u011b.",
          "11.4 P\u0159\u00edlohou t\u011bchto obchodn\u00edch podm\u00ednek je vzorov\u00fd formul\u00e1\u0159 pro odstoupen\u00ed od kupn\u00ed smlouvy.",
          "11.5 Kontaktn\u00ed \u00fadaje prod\u00e1vaj\u00edc\u00edho: s\u00eddlo Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika, e-mail grunndubh@gmail.com. Prod\u00e1vaj\u00edc\u00ed neposkytuje jin\u00fd prost\u0159edek on-line komunikace.",
          "V \u010cesk\u00e9 L\u00edp\u011b dne 18. 9. 2026",
          "## P\u0158\u00cdLOHA \u2014 Vzorov\u00fd formul\u00e1\u0159 pro odstoupen\u00ed od kupn\u00ed smlouvy",
          "(vypl\u0148te a za\u0161lete tento formul\u00e1\u0159 pouze v p\u0159\u00edpad\u011b, \u017ee chcete odstoupit od smlouvy)",
          "Adres\u00e1t: Petra Bentley, Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika, grunndubh@gmail.com",
          "Oznamuji/oznamujeme(*), \u017ee t\u00edmto odstupuji/odstupujeme(*) od smlouvy o n\u00e1kupu tohoto zbo\u017e\u00ed: ..........................................",
          "Datum objedn\u00e1n\u00ed ................... / datum obdr\u017een\u00ed(*) ...................",
          "Jm\u00e9no a p\u0159\u00edjmen\u00ed spot\u0159ebitele/spot\u0159ebitel\u016f: ..........................................",
          "Adresa spot\u0159ebitele/spot\u0159ebitel\u016f: ..........................................",
          "Podpis spot\u0159ebitele/spot\u0159ebitel\u016f (pouze pokud je tento formul\u00e1\u0159 zas\u00edl\u00e1n v listinn\u00e9 podob\u011b): ..........................................",
          "Datum: ..........................................",
          "(*) Nehod\u00edc\u00ed se \u0161krtn\u011bte nebo \u00fadaje dopl\u0148te.",
        ],
      },
      privacy: {
        title: "Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f (GDPR)",
        body: [
          "internetov\u00e9ho obchodu Grunndubh",
          "Petra Bentley, podnikaj\u00edc\u00ed fyzick\u00e1 osoba na z\u00e1klad\u011b \u017eivnostensk\u00e9ho opr\u00e1vn\u011bn\u00ed<br>se s\u00eddlem: Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika<br>identifika\u010dn\u00ed \u010d\u00edslo (I\u010cO): 24113336<br>kontaktn\u00ed e-mail: grunndubh@gmail.com<br>(d\u00e1le jen \u201espr\u00e1vce\u201c)",
          "## 1. \u00davod",
          "1.1 Spr\u00e1vce zpracov\u00e1v\u00e1 osobn\u00ed \u00fadaje v souladu s Na\u0159\u00edzen\u00edm Evropsk\u00e9ho parlamentu a Rady (EU) 2016/679 (GDPR) a z\u00e1konem \u010d. 110/2019 Sb., o zpracov\u00e1n\u00ed osobn\u00edch \u00fadaj\u016f. Tyto Z\u00e1sady popisuj\u00ed, jak\u00e9 osobn\u00ed \u00fadaje spr\u00e1vce shroma\u017e\u010fuje v souvislosti s provozem internetov\u00e9ho obchodu Grunndubh, k jak\u00fdm \u00fa\u010del\u016fm je pou\u017e\u00edv\u00e1, komu je p\u0159ed\u00e1v\u00e1 a jak\u00e1 pr\u00e1va m\u00e1 subjekt \u00fadaj\u016f (kupuj\u00edc\u00ed \u010di n\u00e1v\u0161t\u011bvn\u00edk webov\u00e9 str\u00e1nky, d\u00e1le jen \u201evy\u201c).",
          "1.2 Tyto Z\u00e1sady se vztahuj\u00ed na osobn\u00ed \u00fadaje fyzick\u00fdch osob a na z\u00e1klad\u011b \u010dl. 13 GDPR pln\u00ed informa\u010dn\u00ed povinnost spr\u00e1vce v\u016f\u010di kupuj\u00edc\u00edm podle \u010dl. 8.1 Obchodn\u00edch podm\u00ednek.",
          "## 2. Jak\u00e9 osobn\u00ed \u00fadaje zpracov\u00e1v\u00e1me",
          "2.1 \u00dadaje z objedn\u00e1vky: jm\u00e9no a p\u0159\u00edjmen\u00ed, doru\u010dovac\u00ed a p\u0159\u00edpadn\u011b faktura\u010dn\u00ed adresa, e-mailov\u00e1 adresa, telefonn\u00ed \u010d\u00edslo (je-li vy\u017eadov\u00e1no p\u0159epravcem), obsah objedn\u00e1vky.",
          "2.2 Platebn\u00ed \u00fadaje: platby jsou zpracov\u00e1v\u00e1ny v\u00fdhradn\u011b platebn\u00ed br\u00e1nou Stripe. Spr\u00e1vce nevid\u00ed ani neukl\u00e1d\u00e1 \u010d\u00edslo platebn\u00ed karty ani jin\u00e9 citliv\u00e9 platebn\u00ed \u00fadaje \u2014 tyto zpracov\u00e1v\u00e1 Stripe jako samostatn\u00fd spr\u00e1vce/zpracovatel podle vlastn\u00edch z\u00e1sad ochrany osobn\u00edch \u00fadaj\u016f.",
          "2.3 Newsletter: pokud se p\u0159ihl\u00e1s\u00edte k odb\u011bru novinek, zpracov\u00e1v\u00e1me va\u0161i e-mailovou adresu. Odb\u011br v tuto chv\u00edli spr\u00e1vce vy\u0159izuje p\u0159\u00edmo ze sv\u00e9 e-mailov\u00e9 schr\u00e1nky, nikoli prost\u0159ednictv\u00edm samostatn\u00e9 rozes\u00edlac\u00ed platformy t\u0159et\u00ed strany.",
          "2.4 Technick\u00e9 (cookies) \u00fadaje: viz \u010dl\u00e1nek 8 n\u00ed\u017ee.",
          "2.5 Komunikace: pokud n\u00e1s kontaktujete e-mailem (nap\u0159. s reklamac\u00ed nebo dotazem), zpracov\u00e1v\u00e1me obsah t\u00e9to komunikace a va\u0161e kontaktn\u00ed \u00fadaje.",
          "## 3. \u00da\u010dely a pr\u00e1vn\u00ed d\u016fvody zpracov\u00e1n\u00ed",
          "3.1 Vy\u0159\u00edzen\u00ed objedn\u00e1vky, dod\u00e1n\u00ed zbo\u017e\u00ed a pln\u011bn\u00ed kupn\u00ed smlouvy \u2014 pr\u00e1vn\u00ed d\u016fvod: pln\u011bn\u00ed smlouvy (\u010dl. 6 odst. 1 p\u00edsm. b) GDPR).",
          "3.2 Vystaven\u00ed da\u0148ov\u00fdch a \u00fa\u010detn\u00edch doklad\u016f a pln\u011bn\u00ed dal\u0161\u00edch z\u00e1konn\u00fdch povinnost\u00ed (nap\u0159. dle z\u00e1kona o \u00fa\u010detnictv\u00ed a da\u0148ov\u00fdch p\u0159edpis\u016f) \u2014 pr\u00e1vn\u00ed d\u016fvod: spln\u011bn\u00ed pr\u00e1vn\u00ed povinnosti (\u010dl. 6 odst. 1 p\u00edsm. c) GDPR).",
          "3.3 Vy\u0159izov\u00e1n\u00ed reklamac\u00ed a uplat\u0148ov\u00e1n\u00ed pr\u00e1v z vadn\u00e9ho pln\u011bn\u00ed \u2014 pr\u00e1vn\u00ed d\u016fvod: pln\u011bn\u00ed smlouvy a spln\u011bn\u00ed pr\u00e1vn\u00ed povinnosti.",
          "3.4 Zas\u00edl\u00e1n\u00ed newsletteru \u2014 pr\u00e1vn\u00ed d\u016fvod: v\u00e1\u0161 souhlas (\u010dl. 6 odst. 1 p\u00edsm. a) GDPR), kter\u00fd m\u016f\u017eete kdykoli odvolat kliknut\u00edm na odhla\u0161ovac\u00ed odkaz v e-mailu nebo zpr\u00e1vou na grunndubh@gmail.com.",
          "3.5 Ochrana opr\u00e1vn\u011bn\u00fdch z\u00e1jm\u016f spr\u00e1vce (nap\u0159. obrana proti pr\u00e1vn\u00edm n\u00e1rok\u016fm) \u2014 pr\u00e1vn\u00ed d\u016fvod: opr\u00e1vn\u011bn\u00fd z\u00e1jem (\u010dl. 6 odst. 1 p\u00edsm. f) GDPR).",
          "3.6 Poskytnut\u00ed osobn\u00edch \u00fadaj\u016f nutn\u00fdch k uzav\u0159en\u00ed a pln\u011bn\u00ed kupn\u00ed smlouvy je smluvn\u00edm po\u017eadavkem; bez jejich poskytnut\u00ed nelze objedn\u00e1vku vy\u0159\u00eddit. Poskytnut\u00ed e-mailu pro newsletter je \u010dist\u011b dobrovoln\u00e9.",
          "## 4. Komu osobn\u00ed \u00fadaje p\u0159ed\u00e1v\u00e1me",
          "4.1 Poskytovateli platebn\u00edch slu\u017eeb Stripe za \u00fa\u010delem zpracov\u00e1n\u00ed plateb.",
          "4.2 P\u0159epravc\u016fm zaji\u0161\u0165uj\u00edc\u00edm doru\u010den\u00ed zbo\u017e\u00ed \u2014 \u010cesk\u00e1 po\u0161ta, s.p., PPL CZ s.r.o. a Z\u00e1silkovna s.r.o. (Packeta), v rozsahu nutn\u00e9m pro doru\u010den\u00ed z\u00e1silky. V p\u0159\u00edpad\u011b doru\u010den\u00ed do zem\u00ed Evropsk\u00e9 unie mimo \u010ceskou republiku m\u016f\u017ee b\u00fdt z\u00e1silka p\u0159ed\u00e1na i jin\u00e9mu p\u0159epravci zaji\u0161\u0165uj\u00edc\u00edmu mezin\u00e1rodn\u00ed p\u0159epravu.",
          "4.3 P\u0159\u00edpadn\u011b \u00fa\u010detn\u00ed/da\u0148ov\u00e9 poradkyni spr\u00e1vce, je-li to nutn\u00e9 pro spln\u011bn\u00ed z\u00e1konn\u00fdch povinnost\u00ed.",
          "4.4 Poskytovateli webhostingu, na jeho\u017e infrastruktu\u0159e je webov\u00e1 str\u00e1nka provozov\u00e1na Cloudflare, Inc..",
          "4.5 Poskytovateli e-mailov\u00fdch slu\u017eeb Resend (Resend, Inc., USA), prost\u0159ednictv\u00edm kter\u00e9ho se zpr\u00e1vy z kontaktn\u00edho formul\u00e1\u0159e a p\u0159ihl\u00e1\u0161en\u00ed k newsletteru doru\u010duj\u00ed do e-mailov\u00e9 schr\u00e1nky spr\u00e1vce.",
          "4.6 Osobn\u00ed \u00fadaje nejsou p\u0159ed\u00e1v\u00e1ny \u017e\u00e1dn\u00fdm dal\u0161\u00edm t\u0159et\u00edm osob\u00e1m ani prod\u00e1v\u00e1ny pro marketingov\u00e9 \u00fa\u010dely t\u0159et\u00edch stran.",
          "## 5. P\u0159ed\u00e1v\u00e1n\u00ed osobn\u00edch \u00fadaj\u016f do zahrani\u010d\u00ed",
          "5.1 Stripe je spole\u010dnost se s\u00eddlem mimo Evropsk\u00fd hospod\u00e1\u0159sk\u00fd prostor (USA); p\u0159enos osobn\u00edch \u00fadaj\u016f do USA je zaji\u0161t\u011bn standardn\u00edmi smluvn\u00edmi dolo\u017ekami schv\u00e1len\u00fdmi Evropskou komis\u00ed nebo jin\u00fdm odpov\u00eddaj\u00edc\u00edm mechanismem podle \u010dl. 46 GDPR, jak je pops\u00e1no v z\u00e1sad\u00e1ch ochrany osobn\u00edch \u00fadaj\u016f spole\u010dnosti Stripe. Tot\u00e9\u017e plat\u00ed pro spole\u010dnost Resend, Inc. (USA).",
          "5.2 Krom\u011b v\u00fd\u0161e uveden\u00e9ho spr\u00e1vce osobn\u00ed \u00fadaje mimo Evropsk\u00fd hospod\u00e1\u0159sk\u00fd prostor nep\u0159ed\u00e1v\u00e1.",
          "## 6. Doba uchov\u00e1n\u00ed osobn\u00edch \u00fadaj\u016f",
          "6.1 \u00dadaje z objedn\u00e1vek a da\u0148ov\u00e9 doklady jsou uchov\u00e1v\u00e1ny po dobu stanovenou pr\u00e1vn\u00edmi p\u0159edpisy (zejm\u00e9na z\u00e1konem o \u00fa\u010detnictv\u00ed a da\u0148ov\u00fdmi p\u0159edpisy), zpravidla po dobu 10 let od konce zda\u0148ovac\u00edho obdob\u00ed, k n\u011bmu\u017e se vztahuj\u00ed.",
          "6.2 \u00dadaje zpracov\u00e1van\u00e9 za \u00fa\u010delem obrany proti pr\u00e1vn\u00edm n\u00e1rok\u016fm jsou uchov\u00e1v\u00e1ny po dobu trv\u00e1n\u00ed p\u0159\u00edslu\u0161n\u00e9 proml\u010dec\u00ed lh\u016fty.",
          "6.3 E-mailov\u00e1 adresa pro newsletter je uchov\u00e1v\u00e1na do odvol\u00e1n\u00ed souhlasu (odhl\u00e1\u0161en\u00ed odb\u011bru).",
          "6.4 Po uplynut\u00ed p\u0159\u00edslu\u0161n\u00e9 doby jsou osobn\u00ed \u00fadaje bezpe\u010dn\u011b zlikvidov\u00e1ny nebo anonymizov\u00e1ny.",
          "## 7. Va\u0161e pr\u00e1va",
          "7.1 V souvislosti se zpracov\u00e1n\u00edm osobn\u00edch \u00fadaj\u016f m\u00e1te pr\u00e1vo:",
          "a) na p\u0159\u00edstup ke sv\u00fdm osobn\u00edm \u00fadaj\u016fm (\u010dl. 15 GDPR);",
          "b) na opravu nep\u0159esn\u00fdch \u00fadaj\u016f (\u010dl. 16 GDPR);",
          "c) na v\u00fdmaz osobn\u00edch \u00fadaj\u016f, pokud ji\u017e nejsou pot\u0159ebn\u00e9 nebo pokud odvol\u00e1te souhlas (\u010dl. 17 GDPR);",
          "d) na omezen\u00ed zpracov\u00e1n\u00ed (\u010dl. 18 GDPR);",
          "e) na p\u0159enositelnost \u00fadaj\u016f (\u010dl. 20 GDPR);",
          "f) vzn\u00e9st n\u00e1mitku proti zpracov\u00e1n\u00ed zalo\u017een\u00e9mu na opr\u00e1vn\u011bn\u00e9m z\u00e1jmu (\u010dl. 21 GDPR);",
          "g) kdykoli odvolat ud\u011blen\u00fd souhlas, ani\u017e je t\u00edm dot\u010dena z\u00e1konnost zpracov\u00e1n\u00ed p\u0159ed jeho odvol\u00e1n\u00edm;",
          "h) podat st\u00ed\u017enost u dozorov\u00e9ho \u00fa\u0159adu, kter\u00fdm je \u00da\u0159ad pro ochranu osobn\u00edch \u00fadaj\u016f, se s\u00eddlem Pplk. Sochora 27, 170 00 Praha 7, internetov\u00e1 adresa: www.uoou.cz.",
          "7.2 Sv\u00e1 pr\u00e1va m\u016f\u017eete uplatnit e-mailem na adrese grunndubh@gmail.com nebo p\u00edsemn\u011b na adrese s\u00eddla spr\u00e1vce Na J\u00edlech 2639, \u010cesk\u00e1 L\u00edpa, 47006, \u010cesk\u00e1 Republika.",
          "## 8. Cookies",
          "8.1 Cookies jsou mal\u00e9 textov\u00e9 soubory, kter\u00e9 webov\u00e1 str\u00e1nka ukl\u00e1d\u00e1 do va\u0161eho za\u0159\u00edzen\u00ed a kter\u00e9 umo\u017e\u0148uj\u00ed jej\u00ed spr\u00e1vn\u00e9 fungov\u00e1n\u00ed (nap\u0159. udr\u017een\u00ed obsahu n\u00e1kupn\u00edho ko\u0161\u00edku mezi jednotliv\u00fdmi kroky objedn\u00e1vky).",
          "8.2 Webov\u00e1 str\u00e1nka Grunndubh pou\u017e\u00edv\u00e1 technick\u00e9 (nezbytn\u011b nutn\u00e9) cookies, kter\u00e9 jsou nutn\u00e9 pro provoz webu a vy\u0159\u00edzen\u00ed objedn\u00e1vky a k jejich\u017e pou\u017eit\u00ed se nevy\u017eaduje souhlas n\u00e1v\u0161t\u011bvn\u00edka podle \u00a7 89 z\u00e1kona \u010d. 127/2005 Sb., o elektronick\u00fdch komunikac\u00edch.",
          "8.3 Pokud p\u0159i objedn\u00e1vce kliknete na v\u00fdb\u011br v\u00fddejn\u00edho m\u00edsta Z\u00e1silkovny (Packeta), na\u010dte se na str\u00e1nce mapov\u00fd n\u00e1stroj (widget) spole\u010dnosti Z\u00e1silkovna s.r.o. (Packeta). Tento widget je poskytov\u00e1n t\u0159et\u00ed stranou a m\u016f\u017ee ukl\u00e1dat vlastn\u00ed cookies, v\u010detn\u011b cookies analytick\u00e9 povahy, nez\u00e1visle na spr\u00e1vci. Widget se na\u010d\u00edt\u00e1 a\u017e ve chv\u00edli, kdy v\u00fdb\u011br v\u00fddejn\u00edho m\u00edsta zvol\u00edte, nikoli automaticky p\u0159i n\u00e1v\u0161t\u011bv\u011b webov\u00e9 str\u00e1nky. P\u0159ed ulo\u017een\u00edm t\u011bchto cookies v\u00e1m bude p\u0159\u00edmo ve widgetu nab\u00eddnuta mo\u017enost ud\u011blit nebo odm\u00edtnout souhlas. Informace o cookies pou\u017e\u00edvan\u00fdch spole\u010dnost\u00ed Z\u00e1silkovna s.r.o. naleznete v jej\u00edch vlastn\u00edch z\u00e1sad\u00e1ch ochrany osobn\u00edch \u00fadaj\u016f na <a href='https://www.zasilkovna.cz' class='underline' target='_blank' rel='noopener'>www.zasilkovna.cz</a>.",
          "8.4 Mimo cookies uveden\u00e9 v \u010dl. 8.3 webov\u00e1 str\u00e1nka v tuto chv\u00edli nepou\u017e\u00edv\u00e1 \u017e\u00e1dn\u00e9 dal\u0161\u00ed analytick\u00e9 ani marketingov\u00e9 cookies (nap\u0159. Google Analytics, Meta/Facebook Pixel apod.). Pokud spr\u00e1vce v budoucnu za\u010dne pou\u017e\u00edvat dal\u0161\u00ed analytick\u00e9 \u010di marketingov\u00e9 cookies, budou tyto Z\u00e1sady odpov\u00eddaj\u00edc\u00edm zp\u016fsobem aktualizov\u00e1ny a n\u00e1v\u0161t\u011bvn\u00edk\u016fm bude p\u0159ed jejich pou\u017eit\u00edm nab\u00eddnuta mo\u017enost ud\u011blit \u010di odm\u00edtnout souhlas prost\u0159ednictv\u00edm n\u00e1stroje pro spr\u00e1vu cookies (cookie li\u0161ty).",
          "8.5 V\u011bt\u0161inu prohl\u00ed\u017ee\u010d\u016f lze nastavit tak, aby cookies odm\u00edtaly nebo na jejich ulo\u017een\u00ed upozor\u0148ovaly; omezen\u00ed technick\u00fdch cookies v\u0161ak m\u016f\u017ee ovlivnit funk\u010dnost webov\u00e9 str\u00e1nky, v\u010detn\u011b mo\u017enosti dokon\u010dit objedn\u00e1vku.",
          "## 9. Zabezpe\u010den\u00ed osobn\u00edch \u00fadaj\u016f",
          "9.1 Spr\u00e1vce p\u0159ijal vhodn\u00e1 technick\u00e1 a organiza\u010dn\u00ed opat\u0159en\u00ed k ochran\u011b osobn\u00edch \u00fadaj\u016f p\u0159ed neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem, ztr\u00e1tou \u010di zneu\u017eit\u00edm, v\u010detn\u011b zabezpe\u010den\u00e9ho (HTTPS) p\u0159enosu dat a omezen\u00e9ho p\u0159\u00edstupu k \u00fadaj\u016fm.",
          "## 10. Zm\u011bny t\u011bchto z\u00e1sad",
          "10.1 Spr\u00e1vce m\u016f\u017ee tyto Z\u00e1sady \u010das od \u010dasu aktualizovat, zejm\u00e9na v souvislosti se zm\u011bnou pr\u00e1vn\u00edch p\u0159edpis\u016f nebo zp\u016fsobu provozu webov\u00e9 str\u00e1nky. Aktu\u00e1ln\u00ed zn\u011bn\u00ed je v\u017edy dostupn\u00e9 na webov\u00e9 str\u00e1nce.",
          "## 11. Kontakt",
          "11.1 V p\u0159\u00edpad\u011b jak\u00fdchkoli dotaz\u016f t\u00fdkaj\u00edc\u00edch se zpracov\u00e1n\u00ed osobn\u00edch \u00fadaj\u016f n\u00e1s kontaktujte na e-mailov\u00e9 adrese grunndubh@gmail.com.",
          "V \u010cesk\u00e9 L\u00edp\u011b dne 18. 9. 2026",
        ],
      },
    },
  },
};

/**
 * Product data \u2014 deliberately flat and framework-agnostic so it's
 * trivial to wire up to Stripe (or any checkout) later.
 * status: "in-stock" | "made-to-order" | "sold-out"
 * price_czk / price_eur: fixed amounts as plain numbers (e.g. 420, 17). Set both
 * to the real Stripe prices; a null/0 value is simply not shown on the card.
 */
const PRODUCTS = [
  // "speckled-ivory" temporarily removed \u2014 no product photo yet.
  // Re-add once a photo exists at assets/images/product-speckled-ivory.jpg:
  // { id: "speckled-ivory", images: ["assets/images/product-speckled-ivory.jpg"], price_czk: null, price_eur: null, status: "in-stock" },
  {
    id: "obsidian",
    images: ["assets/images/product-obsidian.png"], // first = main photo; add more for the gallery
    price_czk: 420,
    price_eur: 18,
    maxQty: 5, // keep in sync with maxQty in functions/api/checkout.js
    status: "in-stock",
  },
  {
    id: "ochre",
    images: [
      "assets/images/product-ochre-1.jpg",
      "assets/images/product-ochre-2.jpg",
      "assets/images/product-ochre-3.jpg",
    ],
    price_czk: 520,
    price_eur: 22,
    maxQty: 5,
    status: "in-stock",
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
      el.innerHTML = value
        .map((p) =>
          p.startsWith("## ")
            ? `<h3 class="font-serif text-xl text-coffeedark mt-10 mb-3">${p.slice(3)}</h3>`
            : `<p>${p}</p>`
        )
        .join("");
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
