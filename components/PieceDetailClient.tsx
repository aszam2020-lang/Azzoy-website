"use client";

import { useState } from "react";
import Link from "next/link";
import type { Piece } from "@/lib/collection";
import ScrollReveal from "./ScrollReveal";
import ColorDots from "./ColorDots";

interface PieceDetailClientProps {
  piece: Piece;
}

export default function PieceDetailClient({ piece }: PieceDetailClientProps) {
  const [activeColor, setActiveColor] = useState(piece.placeholderColor);

  return (
    <div className="max-w-content mx-auto px-6 py-section">
      {/* Back link */}
      <Link
        href="/collection"
        className="inline-block font-body text-label uppercase tracking-[0.12em] text-stone hover:text-espresso transition-colors duration-500 mb-12"
      >
        &larr; Collection
      </Link>

      <div className="space-y-16">
        {/* Image placeholder */}
        <ScrollReveal>
          <div
            className="w-full transition-colors duration-500"
            style={{
              aspectRatio: "3/4",
              backgroundColor: activeColor,
            }}
          />
        </ScrollReveal>

        {/* Color selector */}
        <ScrollReveal delay={0.1}>
          <ColorDots
            colors={piece.colors}
            size="md"
            activeColor={activeColor}
            onSelect={setActiveColor}
          />
        </ScrollReveal>

        {/* Title & Meta */}
        <ScrollReveal delay={0.15}>
          <div className="space-y-4">
            <h1 className="font-display text-display-lg">{piece.name}</h1>
            <p className="font-body text-label uppercase tracking-[0.1em] text-stone">
              {piece.number} &middot; {piece.category} &middot; {piece.role}
            </p>
          </div>
        </ScrollReveal>

        {/* Description Sections */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-xl mb-3">What it is</h2>
              <p className="font-body text-body-lg text-espresso/80 max-w-prose">
                {piece.whatItIs}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3">Why it belongs</h2>
              <p className="font-body text-body-lg text-espresso/80 max-w-prose">
                {piece.whyItBelongs}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3">Fabric logic</h2>
              <p className="font-body text-body-lg text-espresso/80 max-w-prose">
                {piece.fabricLogic}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl mb-3">
                Silhouette &amp; fit
              </h2>
              <p className="font-body text-body-lg text-espresso/80 max-w-prose">
                {piece.silhouetteFit}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Pairs with */}
        <ScrollReveal delay={0.25}>
          <div>
            <h2 className="font-display text-xl mb-3">Pairs with</h2>
            <p className="font-body text-body-lg text-espresso/80 max-w-prose">
              {piece.pairsWith}
            </p>
          </div>
        </ScrollReveal>

        {/* Wardrobe role badge */}
        <ScrollReveal delay={0.3}>
          <span className="inline-block bg-stone/10 px-4 py-2 rounded font-body text-label uppercase tracking-[0.08em]">
            {piece.wardrobeRole}
          </span>
        </ScrollReveal>

        {/* Inquire button */}
        <ScrollReveal delay={0.35}>
          <a
            href="mailto:inquire@azzoy.co"
            className="inline-block border border-stone text-stone px-8 py-3 font-body text-label uppercase tracking-[0.12em] hover:bg-stone hover:text-cream transition-colors duration-500"
          >
            Inquire
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
}
