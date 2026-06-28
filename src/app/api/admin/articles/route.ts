import { NextResponse } from "next/server";
import { listAll, createArticle, slugExists } from "@/lib/articles";
import type { ArticleInput } from "@/types/article";

export const dynamic = "force-dynamic";

export async function GET() {
  const items = await listAll();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const input = (await req.json()) as ArticleInput;
  if (!input.title?.trim() || !input.slug?.trim()) {
    return NextResponse.json(
      { error: "El título y el slug son obligatorios." },
      { status: 400 },
    );
  }
  if (await slugExists(input.slug)) {
    return NextResponse.json({ error: "Ya existe un artículo con ese slug." }, { status: 409 });
  }
  const id = await createArticle(input);
  return NextResponse.json({ id });
}
