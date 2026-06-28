"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Cualquier URL inexistente renderiza esta página (404) y redirige a la home.
 * La redirección es del lado del cliente (el servidor mantiene el código 404,
 * que es lo correcto para SEO: Google descarta la URL inválida).
 */
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <main
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "system-ui, sans-serif",
        color: "#5b6b7a",
        gap: 6,
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <p style={{ fontSize: 18, fontWeight: 600, color: "#0f2a43" }}>
        Redirigiendo al inicio…
      </p>
      <p>
        Si no avanzas,{" "}
        <Link href="/" style={{ color: "#c8841f", textDecoration: "underline" }}>
          haz clic aquí
        </Link>
        .
      </p>
    </main>
  );
}
