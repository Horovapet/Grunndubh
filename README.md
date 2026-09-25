# Grunndubh

Static one-page site for Grunndubh — slow-made eco jewellery from reclaimed
coffee grounds. Plain HTML + Tailwind CSS (via the Tailwind CDN script), no
build step, no framework. Ready to deploy to Cloudflare Pages as-is.

## Structure

```
index.html        Home page (all 9 sections)
returns.html       Returns policy (real EN/CZ copy)
refunds.html       Refunds & disputes policy (real EN/CZ copy)
terms.html         Terms & Conditions (LEGAL PLACEHOLDER — see below)
privacy.html       Privacy Policy / GDPR (LEGAL PLACEHOLDER — see below)
assets/css/styles.css   Small custom layer on top of Tailwind utilities
assets/js/i18n.js       All EN/CZ copy + the two product data objects
assets/js/main.js       Product rendering, nav, forms, animations — no backend
assets/images/          Drop real photos here (see Placeholders below)
```

## How the language toggle works

`assets/js/i18n.js` holds one `translations` object keyed `en` / `cz`. Every
translatable element in the HTML has a `data-i18n="some.key"` (or
`data-i18n-html` / `data-i18n-placeholder`) attribute. Clicking EN/CZ in the
header calls `setLang()`, which re-walks the DOM and swaps text, and stores
the choice in `localStorage` so it persists across pages.

To finish the Czech translation, open `assets/js/i18n.js` and replace every
string still prefixed `[CZ]` with real copy. No HTML changes are needed;
the structure is already wired up. `returns.html` and `refunds.html`
already have your real Czech copy in place.

## Product data (for the future Stripe integration)

Product data lives in `assets/js/i18n.js` as a flat array:

```js
const PRODUCTS = [
  { id: "speckled-ivory", image: "...", price: null, status: "in-stock" },
  { id: "obsidian", image: "...", price: null, status: "made-to-order" },
];
```

Names/descriptions are translated separately under
`translations[lang].products[id]`. `assets/js/main.js` renders the shop grid
from this array (`renderProducts()`), including a disabled "Buy" button and
a consent checkbox per card. Every place that needs real checkout logic is
marked with a `TODO(stripe)` comment in `main.js` and `index.html`. The
newsletter and contact forms are marked `TODO(newsletter)` / `TODO(contact)`
the same way — both currently just `console.log` and reset on submit.

## Local preview

No build step — just serve the folder over HTTP (not `file://`, since the
browser needs a real origin for `fetch`/`localStorage` to behave normally):

```bash
python -m http.server 4173
```

Then open http://localhost:4173.

## Deploying to Cloudflare Pages (free *.pages.dev URL)

1. **Initialize git and push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial Grunndubh site"
   ```

   Create a new empty repo on GitHub (via github.com/new — do NOT
   initialize it with a README), then:

   ```bash
   git remote add origin https://github.com/<your-username>/grunndubh.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect Cloudflare Pages:**
   - Go to the Cloudflare dashboard → **Workers & Pages** → **Create** →
     **Pages** → **Connect to Git**.
   - Authorize Cloudflare to access your GitHub account and pick the
     `grunndubh` repo.
   - Build settings: this is a plain static site, so set:
     - **Framework preset:** None
     - **Build command:** (leave empty)
     - **Build output directory:** `/` (the repo root)
   - Click **Save and Deploy**.
3. Cloudflare will give you a live URL like `grunndubh.pages.dev` within
   about a minute. Every future push to `main` auto-deploys.

No custom domain is needed for this — the free `*.pages.dev` URL works
immediately. You can attach a custom domain later from the same Pages
project settings once you have one.

## Checkout (Stripe + Packeta)

- The home page only shows photo, name and short text per piece; each card opens `product.html?id=<id>`,
  which has the photos and the whole purchase flow. Extra photos: add them to `images` in `PRODUCTS`.
- Purchase flow: consent checkbox -> Packeta pickup-point map -> "Order with obligation to pay" -> Stripe Checkout.
  Currency follows the language toggle (CZ = CZK, EN = EUR).
- `functions/api/checkout.js` is a Cloudflare Pages Function (`POST /api/checkout`). It holds the real product
  prices (`PRODUCTS`) and reads shipping from the JSON and creates the Stripe session. Prices are also shown from
  `PRODUCTS` in `assets/js/i18n.js` - change both places together.
- **Secret key:** in Cloudflare -> your Pages project -> Settings -> Variables and Secrets, add
  `STRIPE_SECRET_KEY` (start with the `sk_test_...` key, add a live key only when going live). Never commit it.
- The pickup point and terms acceptance are saved as metadata on the Stripe payment, so you can create the
  Packeta parcel from it. Turn on customer receipts in Stripe (Settings -> Emails).
- Delivery prices live in `assets/shipping.json` (used by both the storefront and the function): three options
  in the Czech Republic (Packeta pickup point, Ceska posta, PPL) and one EU option with a price per country
  (Packeta home delivery x 1.21 VAT, see the note in the JSON). Malta and Cyprus are not offered. Packeta pickup points (Z-Point / Z-Box) are offered in CZ, PL, HU and SK; to add a country, add a `pickup` price to it in the JSON. Ceska posta, PPL and EU delivery collect the address on the Stripe page.

## Contact and newsletter forms

- `functions/api/contact.js` and `functions/api/newsletter.js` e-mail the messages to grunndubh@gmail.com
  through Resend (https://resend.com). Newsletter sign-ups arrive as an e-mail with the consent time.
- Setup: create a free Resend account **with the e-mail grunndubh@gmail.com**, create an API key and add it in
  Cloudflare (Pages project -> Settings -> Variables and Secrets) as the secret `RESEND_API_KEY`, then redeploy.
  Without a verified domain Resend only delivers to the account's own address, which is exactly what we need.
- Optional variable `MAIL_TO` changes the receiving address.
- The privacy policy names Resend as a recipient (sections 4.5 and 5.1).

## Placeholders still needed before this goes live

- **Photos** — drop real files at these exact paths (the page will pick
  them up automatically; nothing else needs to change):
  - `assets/images/hero.jpg`
  - `assets/images/product-speckled-ivory.jpg`
  - `assets/images/product-obsidian.jpg`
- **Prices** — each product in `assets/js/i18n.js` (`PRODUCTS`) has fixed `price_czk` and `price_eur`
  (Obsidian: CZK 420 set, EUR still `null`; a null price is simply hidden on the card).
- **Czech translations** — every string prefixed `[CZ]` in
  `assets/js/i18n.js` needs real copy (returns/refunds are already done).
- **Terms & Conditions / Privacy Policy** — `terms.html` and `privacy.html`
  are visible legal placeholders only. Do not launch checkout until a
  lawyer-reviewed version replaces them.
- **Packeta** — carrier is named in Terms 5.1 / Privacy 4.2. The public widget key is in `assets/js/config.js` (not yet loaded).
- **Stripe checkout** — every "Buy" button is disabled on purpose. See the
  `TODO(stripe)` comments in `index.html` and `assets/js/main.js`.
- **Custom domain** (optional) — add later in Cloudflare Pages once you
  have one; the `*.pages.dev` URL works fine until then.
