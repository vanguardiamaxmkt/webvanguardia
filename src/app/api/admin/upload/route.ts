import { NextResponse } from "next/server";
import { uploadImage } from "@/lib/upload";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file");
  const folder = (form.get("folder") as string) || "general";
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No se recibió ningún archivo." }, { status: 400 });
  }
  try {
    const url = await uploadImage(file, folder);
    return NextResponse.json({ url });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Error al subir la imagen.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
