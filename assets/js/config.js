// Public Packeta widget API key (16 chars). Safe in frontend code by design.
// Never put the separate Packeta API *password* here.
// Loaded by index.html before main.js (used by the pickup-point widget).
const PACKETA_API_KEY = "e24a7c97bba90062";

// Countries offered in the Packeta pickup-point map (comma-separated, lower-case).
// Keep in sync with ALLOWED_COUNTRIES in functions/api/checkout.js.
const PACKETA_COUNTRIES = "cz,sk";
