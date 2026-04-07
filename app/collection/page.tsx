import { pieces } from "@/lib/collection";
import PieceCard from "@/components/PieceCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function CollectionPage() {
  return (
    <div className="max-w-content mx-auto px-6">
      {/* Header */}
      <ScrollReveal>
        <section className="py-section">
          <h1 className="font-display text-display-lg">Collection One</h1>
          <p className="font-body text-label uppercase tracking-[0.1em] text-stone mt-4">
            October 2026 \u2014 February 2027
          </p>
          <p className="font-body text-body-lg text-espresso/80 mt-8 max-w-prose">
            Eight pieces designed for Cairo from October through February \u2014
            daytime highs of 18\u201332&deg;C, cool evenings dropping to 12&deg;C.
            Every piece earns its place. No filler, no trend plays. The
            collection is a system: each piece works with at least four others.
          </p>
          <div className="mt-8">
            <span className="inline-block bg-stone/10 px-4 py-2 rounded font-body text-label uppercase tracking-[0.08em] text-stone">
              Fine cotton &middot; Brushed cotton &middot; Tropical wool &middot;
              Cotton-cashmere &middot; Wool-cashmere
            </span>
          </div>
        </section>
      </ScrollReveal>

      {/* Piece Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-section">
        {pieces.map((piece, i) => (
          <ScrollReveal key={piece.slug} delay={i * 0.08}>
            <PieceCard piece={piece} />
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}
