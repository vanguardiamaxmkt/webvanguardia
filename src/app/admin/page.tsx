import Link from "next/link";
import { listAll } from "@/lib/articles";
import type { Article } from "@/types/article";
import { AdminHeader } from "./_components/AdminHeader";
import { DeleteButton } from "./_components/DeleteButton";

export const dynamic = "force-dynamic";

function fmtDate(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("es-PE", { year: "numeric", month: "short", day: "numeric" });
}

export default async function AdminHome() {
  let articles: Article[] = [];
  let dbError: string | null = null;
  try {
    articles = await listAll();
  } catch (e) {
    dbError = e instanceof Error ? e.message : "Error de conexión a la base de datos.";
  }

  return (
    <>
      <AdminHeader />
      <main className="adm-main">
        <div className="adm-row">
          <div>
            <div className="adm-h1">Artículos</div>
            <div className="adm-sub">{articles.length} artículo(s)</div>
          </div>
          <Link className="adm-btn adm-btn-primary" href="/admin/articulos/nuevo">
            + Nuevo artículo
          </Link>
        </div>

        {dbError && (
          <div className="adm-notice">
            No se pudo conectar a MySQL: <b>{dbError}</b>
            <br />
            Verifica que <code>MYSQL_HOST</code> esté configurado en <code>.env.local</code> y que el
            Remote MySQL de Hostinger autorice la IP del servidor.
          </div>
        )}

        {!dbError && articles.length === 0 ? (
          <div className="adm-card adm-empty">
            Aún no hay artículos. Crea el primero con “+ Nuevo artículo”.
          </div>
        ) : (
          !dbError && (
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Estado</th>
                  <th>Categoría</th>
                  <th>Publicado</th>
                  <th>Actualizado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a) => (
                  <tr key={a.id}>
                    <td>
                      <Link href={`/admin/articulos/${a.id}`}>{a.title}</Link>
                      <div className="adm-sub">/articulos/{a.slug}</div>
                    </td>
                    <td>
                      <span className={`adm-badge ${a.status === "publicado" ? "adm-badge-pub" : "adm-badge-draft"}`}>
                        {a.status}
                      </span>
                    </td>
                    <td>{a.category || "—"}</td>
                    <td>{fmtDate(a.published_at)}</td>
                    <td>{fmtDate(a.updated_at)}</td>
                    <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                      <Link className="adm-tool" href={`/admin/articulos/${a.id}`}>
                        Editar
                      </Link>
                      <DeleteButton id={a.id} title={a.title} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        )}
      </main>
    </>
  );
}
