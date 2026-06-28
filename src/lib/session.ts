import "server-only";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySession } from "./auth";

/** Devuelve la sesión actual del panel (o null) leyendo la cookie. */
export async function getSession(): Promise<{ user: string } | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return verifySession(token);
}
