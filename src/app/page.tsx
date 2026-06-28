import type { Metadata } from "next";
import { home } from "@/content/home";
import { HomePage } from "@/components/templates/HomePage";

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
  alternates: { canonical: home.meta.canonical },
};

export default function Page() {
  return <HomePage />;
}
