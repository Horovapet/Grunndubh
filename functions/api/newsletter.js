// Cloudflare Pages Function: POST /api/newsletter
// Sends the shop owner a note about a new subscriber (the list is kept in the
// owner's inbox, as described in the privacy policy). The consent time is included.
import { json, clip, isEmail, guard, sendMail } from "./_mail.js";

export async function onRequestPost({ request, env }) {
  const rejected = guard(request, env);
  if (rejected) return rejected;

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  if (clip(body.website, 200)) return json({ ok: true });

  const email = clip(body.email, 254);
  if (!isEmail(email)) return json({ error: "invalid" }, 400);
  if (body.consent !== true) return json({ error: "consent_required" }, 400);

  const ok = await sendMail(env, {
    subject: "Novy odberatel newsletteru",
    replyTo: email,
    text: `E-mail: ${email}\nSouhlas udelen: ${new Date().toISOString()}\nJazyk: ${body.lang === "cz" ? "cz" : "en"}\n`,
  });
  return ok ? json({ ok: true }) : json({ error: "mail_failed" }, 502);
}

export const onRequest = () => json({ error: "method_not_allowed" }, 405);
