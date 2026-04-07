import { getAllSlugs, getPieceBySlug } from "@/lib/collection";
import PieceDetailClient from "@/components/PieceDetailClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function PieceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const piece = getPieceBySlug(params.slug);

  if (!piece) {
    notFound();
  }

  return <PieceDetailClient piece={piece} />;
}
