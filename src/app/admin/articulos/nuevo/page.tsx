import { AdminHeader } from "../../_components/AdminHeader";
import { ArticleEditor } from "../../_components/ArticleEditor";

export const dynamic = "force-dynamic";

export default function NuevoArticulo() {
  return (
    <>
      <AdminHeader />
      <main className="adm-main">
        <ArticleEditor />
      </main>
    </>
  );
}
