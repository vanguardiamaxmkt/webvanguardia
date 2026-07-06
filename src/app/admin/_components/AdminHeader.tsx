import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export function AdminHeader() {
  return (
    <header className="adm-header">
      <div className="adm-header-in">
        <Link href="/admin" className="adm-brand">
          VanguardiaMax · Artículos
        </Link>
        <nav className="adm-nav">
          <Link href="/admin">Artículos</Link>
          <Link href="/admin/reclamaciones">Reclamaciones</Link>
          <Link href="/articulos" target="_blank">
            Ver blog ↗
          </Link>
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
