import Link from "next/link";
import type { Piece } from "@/lib/collection";
import ColorDots from "./ColorDots";

interface PieceCardProps {
  piece: Piece;
}

export default function PieceCard({ piece }: PieceCardProps) {
  return (
    <Link href={`/collection/${piece.slug}`} className="group block">
      <div
        className="w-full overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          aspectRatio: "3/4",
          backgroundColor: piece.placeholderColor,
        }}
      />
      <div className="mt-4 space-y-2">
        <p className="font-body text-label uppercase tracking-[0.1em] text-stone">
          {piece.number} &middot; {piece.category}
        </p>
        <h3 className="font-display text-display-md">{piece.name}</h3>
        <ColorDots colors={piece.colors} size="sm" />
      </div>
    </Link>
  );
}
