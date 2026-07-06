import { listReclamaciones } from "@/lib/reclamaciones";
import type { Reclamacion } from "@/types/reclamacion";
import { AdminHeader } from "../_components/AdminHeader";
import { ReclamacionCard } from "./_ReclamacionCard";

export const dynamic = "force-dynamic";

export default async function AdminReclamaciones() {
  let items: Reclamacion[] = [];
  let dbError: string | null = null;
  try {
    items = await listReclamaciones();
  } catch (e) {
    dbError = e instanceof Error ? e.message : "Error de conexión a la base de datos.";
  }

  const pendientes = items.filter((r) => r.estado === "pendiente").length;

  return (
    <>
      <AdminHeader />
      <main className="adm-main">
        <div className="adm-row">
          <div>
            <div className="adm-h1">Libro de Reclamaciones</div>
            <div className="adm-sub">
              {items.length} registro(s) · {pendientes} pendiente(s)
            </div>
          </div>
        </div>

        {dbError && (
          <div className="adm-notice">
            No se pudo conectar a MySQL: <b>{dbError}</b>
            <br />
            Verifica <code>MYSQL_HOST</code> y que exista la tabla{" "}
            <code>reclamaciones</code> (corre <code>db/reclamaciones.sql</code>).
          </div>
        )}

        {!dbError && items.length === 0 ? (
          <div className="adm-card adm-empty">Aún no hay reclamaciones registradas.</div>
        ) : (
          !dbError && items.map((r) => <ReclamacionCard key={r.id} r={r} />)
        )}
      </main>
    </>
  );
}
