// Cloudflare Pages Function: POST /api/contact
// Forwards the contact form to the shop's inbox. Reply-To is the visitor's address.
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

  // Hidden honeypot field: real visitors never fill it in, bots usually do.
  if (clip(body.website, 200)) return json({ ok: true });

  const name = clip(body.name, 120);
  const email = clip(body.email, 254);
  const message = clip(body.message, 4000);
  if (!name || !message || !isEmail(email)) return json({ error: "invalid" }, 400);

  const ok = await sendMail(env, {
    subject: `Zprava z webu od ${name}`.replace(/[\r\n]+/g, " "),
    replyTo: email,
    text: `Jmeno: ${name}\nE-mail: ${email}\nJazyk: ${body.lang === "cz" ? "cz" : "en"}\n\n${message}\n`,
  });
  return ok ? json({ ok: true }) : json({ error: "mail_failed" }, 502);
}

export const onRequest = () => json({ error: "method_not_allowed" }, 405);
