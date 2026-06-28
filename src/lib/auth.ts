/**
 * Sesión del panel /admin: cookie firmada con HMAC-SHA256 usando Web Crypto
 * (compatible con Edge Runtime —middleware— y Node, sin dependencias externas).
 * Formato del token: `<payloadB64Url>.<sigB64Url>`.
 */

export const SESSION_COOKIE = "vmax_admin";

const encoder = new TextEncoder();

function toB64Url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromB64Url(input: string): Uint8Array {
  let s = input.replace(/-/g, "+").replace(/_/g, "/");
  s += "=".repeat((4 - (s.length % 4)) % 4);
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/** Devuelve un ArrayBuffer (BufferSource estable para Web Crypto). */
function ab(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
}

async function getKey(): Promise<CryptoKey> {
  const secret = process.env.SESSION_SECRET || "dev-insecure-secret-change-me";
  return crypto.subtle.importKey(
    "raw",
    ab(encoder.encode(secret)),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function createSession(user: string): Promise<string> {
  const payload = { user, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 };
  const data = toB64Url(encoder.encode(JSON.stringify(payload)));
  const key = await getKey();
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, ab(encoder.encode(data))));
  return `${data}.${toB64Url(sig)}`;
}

export async function verifySession(
  token: string | undefined | null,
): Promise<{ user: string } | null> {
  if (!token || !token.includes(".")) return null;
  const [data, sig] = token.split(".");
  try {
    const key = await getKey();
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      ab(fromB64Url(sig)),
      ab(encoder.encode(data)),
    );
    if (!valid) return null;
    const payload = JSON.parse(new TextDecoder().decode(fromB64Url(data)));
    if (typeof payload.exp === "number" && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return { user: String(payload.user) };
  } catch {
    return null;
  }
}

/** Valida usuario/contraseña contra las variables de entorno. */
export function checkCredentials(user: string, pass: string): boolean {
  return (
    !!process.env.ADMIN_PASSWORD &&
    user === process.env.ADMIN_USER &&
    pass === process.env.ADMIN_PASSWORD
  );
}
