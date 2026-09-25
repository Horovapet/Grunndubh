// Shared helpers for the contact and newsletter functions (not a route itself).
// Mail is sent with Resend (https://resend.com). Cloudflare env vars:
//   RESEND_API_KEY  (secret, required)
//   MAIL_TO         (optional, defaults to the shop address below)

export const DEFAULT_MAIL_TO = "grunndubh@gmail.com";

export const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export const clip = (value, max) => String(value ?? "").trim().slice(0, max);

export const isEmail = (value) => /^[^\s@<>()]+@[^\s@<>()]+\.[^\s@<>()]{2,}$/.test(value) && value.length <= 254;

// Returns a Response to send back when the request must be rejected, otherwise null.
export function guard(request, env) {
  const origin = new URL(request.url).origin;
  const requestOrigin = request.headers.get("Origin");
  if (requestOrigin && requestOrigin !== origin) return json({ error: "forbidden" }, 403);
  if (!env.RESEND_API_KEY) return json({ error: "not_configured" }, 500);
  return null;
}

export async function sendMail(env, { subject, text, replyTo }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Grunndubh web <onboarding@resend.dev>",
      to: [env.MAIL_TO || DEFAULT_MAIL_TO],
      subject,
      text,
      ...(replyTo && { reply_to: replyTo }),
    }),
  });
  return response.ok;
}
