import ScrollReveal from "@/components/ScrollReveal";

const brandColors = [
  { name: "Cream", hex: "#F2EDE4", dark: false },
  { name: "Stone", hex: "#A8967A", dark: false },
];

const supportingTones = [
  { name: "Parchment", hex: "#FAF8F4", dark: false },
  { name: "Warm Sand", hex: "#E6DFD3", dark: false },
  { name: "Ash", hex: "#4A4540", dark: true },
  { name: "Nile", hex: "#5A6B48", dark: true },
];

const clothingPalette = [
  { name: "Nile Navy", hex: "#1B2838", dark: true },
  { name: "Espresso", hex: "#2C1E14", dark: true },
  { name: "Ash", hex: "#4A4540", dark: true },
  { name: "Clay", hex: "#8B7355", dark: true },
  { name: "Dusk", hex: "#706A5E", dark: true },
  { name: "Cream", hex: "#F2EDE4", dark: false },
  { name: "Stone", hex: "#A8967A", dark: false },
  { name: "Nile", hex: "#5A6B48", dark: true },
  { name: "Cacao", hex: "#6B5144", dark: true },
  { name: "Bordeaux", hex: "#5C2D35", dark: true },
];

const typeScale = [
  { name: "Display", weight: "600", size: "42\u201356px" },
  { name: "H1", weight: "400", size: "32\u201352px" },
  { name: "H2", weight: "400", size: "22\u201328px" },
  { name: "Subhead", weight: "300i", size: "18\u201324px" },
  { name: "Body", weight: "300", size: "15\u201316px" },
  { name: "Caption", weight: "400", size: "13px" },
  { name: "Label", weight: "500", size: "10px" },
];

function ZMark({ className = "w-32 h-36 md:w-48 md:h-52 text-espresso" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 180" className={className}>
      <rect x="10" y="16" width="140" height="5" rx="0.5" fill="currentColor" />
      <rect x="130" y="16" width="5" height="16" rx="0.5" fill="currentColor" />
      <polygon points="142,21 22,159 14,159 18,164 146,21" fill="currentColor" />
      <rect x="10" y="159" width="140" height="5" rx="0.5" fill="currentColor" />
      <rect x="10" y="148" width="5" height="16" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function IbisEmblem() {
  return (
    <svg viewBox="0 0 160 200" className="w-24 h-28 text-stone">
      <ellipse cx="80" cy="120" rx="36" ry="28" fill="currentColor" />
      <path d="M 68 96 C 64 80, 58 60, 52 48 C 48 40, 44 34, 40 30" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="28" r="7" fill="currentColor" />
      <path d="M 32 30 C 24 34, 16 44, 14 56" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 114 114 L 136 100 L 138 104 L 116 118 Z" fill="currentColor" />
      <path d="M 114 120 L 140 112 L 140 116 L 116 124 Z" fill="currentColor" />
      <line x1="72" y1="146" x2="68" y2="184" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="88" y1="146" x2="92" y2="184" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="184" x2="72" y2="184" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="88" y1="184" x2="100" y2="184" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function WorldPage() {
  return (
    <>
      {/* A \u2014 The Z Mark */}
      <section className="py-section max-w-content mx-auto px-6">
        <ScrollReveal>
          <p className="font-body text-label uppercase tracking-[0.12em] text-stone mb-4">
            The House Mark
          </p>
          <div className="flex justify-center py-16">
            <ZMark />
          </div>
          <div className="max-w-prose mx-auto space-y-6">
            <p className="font-body text-body-md text-espresso/80">
              A single, serifed Z \u2014 the letter that gives AZZOY its sound, its rhythm, and its visual signature. No other luxury menswear house uses a Z. It is completely ownable.
            </p>
            <p className="font-body text-body-md text-espresso/80">
              Three elements: top bar with descending serif, bold diagonal, bottom bar with rising serif. The serifs bracket the diagonal, giving the mark architectural weight at any size.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-6 mt-16">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F2EDE4" }}>
              <ZMark className="w-16 h-18 md:w-20 md:h-22 text-espresso" />
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#A8967A" }}>
              <ZMark className="w-16 h-18 md:w-20 md:h-22 text-cream" />
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FAF8F4" }}>
              <ZMark className="w-16 h-18 md:w-20 md:h-22 text-espresso" />
            </div>
          </div>
          <p className="font-body text-caption text-stone mt-8 text-center max-w-lg mx-auto">
            Clear space: Width of top bar on all sides &middot; Min size: 8mm print / 24px screen &middot; Backgrounds: Cream, Stone, or Parchment \u2014 always warm grounds
          </p>
        </ScrollReveal>
      </section>

      {/* B \u2014 The Ibis Emblem */}
      <section className="py-section max-w-content mx-auto px-6">
        <ScrollReveal>
          <p className="font-body text-label uppercase tracking-[0.12em] text-stone mb-4">
            The Ibis \u2014 Year Two
          </p>
          <div className="flex justify-center py-12">
            <IbisEmblem />
          </div>
          <div className="max-w-prose mx-auto">
            <p className="font-body text-body-md text-espresso/80">
              The sacred ibis of Thoth \u2014 god of precision, knowledge, and measured craft. Reserved for Year Two when the brand has earned recognition. The curved beak alone carries the mark at any size.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* C \u2014 Color Palette */}
      <section className="py-section max-w-content mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-display-md mb-12">Palette</h2>
        </ScrollReveal>

        {/* Brand Identity */}
        <ScrollReveal delay={0.1}>
          <p className="font-body text-label uppercase tracking-[0.12em] text-stone mb-6">
            Brand Identity
          </p>
          <div className="flex gap-6 mb-4">
            {brandColors.map((c) => (
              <div
                key={c.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-lg flex flex-col justify-end p-4"
                style={{ backgroundColor: c.hex }}
              >
                <span className={`font-body text-body-sm ${c.dark ? "text-cream" : "text-espresso"}`}>
                  {c.name}
                </span>
                <span className={`font-body text-caption ${c.dark ? "text-cream/70" : "text-espresso/60"}`}>
                  {c.hex}
                </span>
              </div>
            ))}
          </div>
          <p className="font-body text-body-md text-espresso/80 max-w-prose">
            Two colors carry the house. Every brand-facing surface is warm.
          </p>
        </ScrollReveal>

        {/* Supporting Tones */}
        <ScrollReveal delay={0.2}>
          <p className="font-body text-label uppercase tracking-[0.12em] text-stone mb-6 mt-16">
            Supporting Tones
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportingTones.map((c) => (
              <div
                key={c.name}
                className="h-24 rounded-lg flex flex-col justify-end p-3"
                style={{ backgroundColor: c.hex }}
              >
                <span className={`font-body text-body-sm ${c.dark ? "text-cream" : "text-espresso"}`}>
                  {c.name}
                </span>
                <span className={`font-body text-caption ${c.dark ? "text-cream/70" : "text-espresso/60"}`}>
                  {c.hex}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Clothing Palette */}
        <ScrollReveal delay={0.3}>
          <p className="font-body text-label uppercase tracking-[0.12em] text-stone mb-6 mt-16">
            Clothing Palette
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {clothingPalette.map((c) => (
              <div
                key={c.name + c.hex}
                className="h-24 rounded-lg flex flex-col justify-end p-3"
                style={{ backgroundColor: c.hex }}
              >
                <span className={`font-body text-body-sm ${c.dark ? "text-cream" : "text-espresso"}`}>
                  {c.name}
                </span>
                <span className={`font-body text-caption ${c.dark ? "text-cream/70" : "text-espresso/60"}`}>
                  {c.hex}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* D \u2014 Typography */}
      <section className="py-section max-w-content mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-display-md mb-12">Type System</h2>
        </ScrollReveal>

        {/* Cormorant Garamond Specimen */}
        <ScrollReveal delay={0.1}>
          <div className="border-b border-stone/20 pb-12 mb-12">
            <p className="font-body text-label uppercase tracking-[0.12em] text-stone mb-8">
              Cormorant Garamond
            </p>
            <p className="font-display font-semibold text-[56px] tracking-[0.2em] text-espresso leading-none">
              AZZOY
            </p>
            <p className="font-display italic text-[24px] text-espresso/70 mt-6">
              The pleasure of wearing something truly well made.
            </p>
            <p className="font-display font-light text-[18px] text-espresso/50 mt-6 tracking-wide">
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </p>
          </div>
        </ScrollReveal>

        {/* Inter Specimen */}
        <ScrollReveal delay={0.2}>
          <div className="border-b border-stone/20 pb-12 mb-12">
            <p className="font-body text-label uppercase tracking-[0.12em] text-stone mb-8">
              Inter
            </p>
            <p className="font-body text-body-md text-espresso/80 max-w-prose">
              Body text set in Inter at 15\u201316px, weight 300. Clean, quiet, and invisible \u2014 it carries information without competing with the display face. Used for descriptions, specifications, and interface elements.
            </p>
            <p className="font-body text-label uppercase tracking-[0.12em] text-stone mt-6">
              LABEL TEXT &middot; 10PX &middot; WEIGHT 500 &middot; TRACKING 0.12EM
            </p>
          </div>
        </ScrollReveal>

        {/* Type Scale */}
        <ScrollReveal delay={0.3}>
          <p className="font-body text-label uppercase tracking-[0.12em] text-stone mb-6">
            Scale
          </p>
          <div className="space-y-0">
            {typeScale.map((row) => (
              <div
                key={row.name}
                className="flex items-baseline justify-between py-3 border-b border-stone/10"
              >
                <span className="font-body text-body-md text-espresso">{row.name}</span>
                <div className="flex gap-8">
                  <span className="font-body text-caption text-stone w-16 text-right">{row.weight}</span>
                  <span className="font-body text-caption text-stone w-24 text-right">{row.size}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* E \u2014 Photography Direction */}
      <section className="py-section max-w-content mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-display-md mb-12">Photography &amp; Art Direction</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="h-64 rounded-lg bg-gradient-to-b from-stone/30 to-linen flex flex-col justify-end p-6">
              <p className="font-body text-label uppercase tracking-[0.12em] text-espresso mb-2">Still Life</p>
              <p className="font-body text-caption text-espresso/70">
                Single garment on natural surface. Linen, stone, warm wood. No props that compete.
              </p>
            </div>
            <div className="h-64 rounded-lg bg-gradient-to-b from-clay/30 to-cream flex flex-col justify-end p-6">
              <p className="font-body text-label uppercase tracking-[0.12em] text-espresso mb-2">Architecture</p>
              <p className="font-body text-caption text-espresso/70">
                Cairo doorways, courtyards, columns. Architecture frames the garment. The city is the set.
              </p>
            </div>
            <div className="h-64 rounded-lg bg-gradient-to-b from-dusk/30 to-parch flex flex-col justify-end p-6">
              <p className="font-body text-label uppercase tracking-[0.12em] text-espresso mb-2">The Wearer</p>
              <p className="font-body text-caption text-espresso/70">
                Cropped at neck or waist. Focus on the hand, the sleeve, the drape. The person is implied, never performed.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-body-md text-espresso/80 max-w-prose">
            Natural light only. No studio flash. Warm, desaturated grading. Minimum 40% negative space. No lifestyle. No faces in campaign imagery.
          </p>
        </ScrollReveal>
      </section>

      {/* F \u2014 Garment Labels */}
      <section className="py-section max-w-content mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-display-md mb-12">Garment Labels</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Brand Label */}
            <div>
              <div
                className="w-[200px] h-[72px] rounded-sm flex flex-col items-center justify-center border border-stone/20"
                style={{ backgroundColor: "#F2EDE4" }}
              >
                <span className="font-display font-semibold text-[16px] tracking-[0.25em]" style={{ color: "#A8967A" }}>
                  AZZOY
                </span>
                <span className="font-body text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: "#A8967A" }}>
                  Cairo
                </span>
              </div>
              <p className="font-body text-caption text-stone mt-4 max-w-[200px]">
                Woven jacquard, Cream ground, Stone thread. 70mm &times; 25mm.
              </p>
            </div>

            {/* Care Label */}
            <div>
              <div
                className="w-[80px] h-[160px] rounded-sm flex flex-col items-center justify-center gap-3 border border-stone/20 px-2"
                style={{ backgroundColor: "#F2EDE4" }}
              >
                <svg viewBox="0 0 160 180" className="w-6 h-7" style={{ color: "#A8967A" }}>
                  <rect x="10" y="16" width="140" height="5" rx="0.5" fill="currentColor" />
                  <rect x="130" y="16" width="5" height="16" rx="0.5" fill="currentColor" />
                  <polygon points="142,21 22,159 14,159 18,164 146,21" fill="currentColor" />
                  <rect x="10" y="159" width="140" height="5" rx="0.5" fill="currentColor" />
                  <rect x="10" y="148" width="5" height="16" rx="0.5" fill="currentColor" />
                </svg>
                <span className="font-display font-semibold text-[8px] tracking-[0.2em]" style={{ color: "#A8967A" }}>
                  AZZOY
                </span>
                <div className="text-center">
                  <p className="font-body text-[6px] leading-relaxed" style={{ color: "#A8967A" }}>
                    100% COTTON
                  </p>
                  <p className="font-body text-[6px] leading-relaxed" style={{ color: "#A8967A" }}>
                    MADE IN EGYPT
                  </p>
                  <p className="font-body text-[6px] leading-relaxed" style={{ color: "#A8967A" }}>
                    DRY CLEAN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
