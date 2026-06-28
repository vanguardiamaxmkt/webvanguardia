import { NextResponse } from "next/server";
import {
  getById,
  updateArticle,
  deleteArticle,
  slugExists,
} from "@/lib/articles";
import type { ArticleInput } from "@/types/article";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  const { id } = await params;
  const article = await getById(Number(id));
  if (!article) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json(article);
}

export async function PUT(req: Request, { params }: Ctx) {
  const { id } = await params;
  const input = (await req.json()) as ArticleInput;
  if (!input.title?.trim() || !input.slug?.trim()) {
    return NextResponse.json(
      { error: "El título y el slug son obligatorios." },
      { status: 400 },
    );
  }
  if (await slugExists(input.slug, Number(id))) {
    return NextResponse.json({ error: "Ya existe otro artículo con ese slug." }, { status: 409 });
  }
  await updateArticle(Number(id), input);
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const { id } = await params;
  await deleteArticle(Number(id));
  return NextResponse.json({ ok: true });
}
