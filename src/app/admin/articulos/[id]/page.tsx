import { notFound } from "next/navigation";
import { getById } from "@/lib/articles";
import { AdminHeader } from "../../_components/AdminHeader";
import { ArticleEditor } from "../../_components/ArticleEditor";

export const dynamic = "force-dynamic";

export default async function EditarArticulo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getById(Number(id));
  if (!article) notFound();

  return (
    <>
      <AdminHeader />
      <main className="adm-main">
        <ArticleEditor article={article} />
      </main>
    </>
  );
}
