import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviciosPages, findPage, SILO_PARENT } from "@/content/pages";
import { LandingPage } from "@/components/templates/LandingPage";
import { ServicePage } from "@/components/templates/ServicePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviciosPages.map((p) => ({ slug: p.content.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = findPage("servicios", slug);
  if (!entry) return {};
  const m = entry.content.meta;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: m.canonical },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findPage("servicios", slug);
  if (!entry) notFound();
  return entry.kind === "landing" ? (
    <LandingPage content={entry.content} />
  ) : (
    <ServicePage content={entry.content} parent={SILO_PARENT.servicios} />
  );
}
