import ScrollReveal from "@/components/ScrollReveal";

const doList = [
  "Use the wordmark at correct proportions",
  "Pair Cream and Stone as the primary combination",
  "Photograph on real people in real settings",
  "Name specific materials and weights",
  "Write short, direct copy",
  "Show the product in context, worn and lived-in",
  "Let silence and space do the work",
  "Use the Z mark at small sizes",
  "Keep packaging uncoated and natural",
  "Trust the customer\u2019s intelligence",
];

const dontList = [
  "Stretch, rotate, or recolor the wordmark",
  "Use gradients, drop shadows, or effects",
  "Use stock photography or AI-generated imagery",
  'Write \"luxury\" \u2014 show it instead',
  "Add logos to garment exteriors",
  "Use oversized fits or trendy silhouettes",
  "Use linen or synthetic fabrics",
  "Use Espresso or dark backgrounds on brand surfaces",
  "Add gloss, foil, or metallic finishes to packaging",
  "Use the banned words list",
  "Explain what the customer can already see or feel",
];

const photographyList = [
  "Natural light, golden hour preferred",
  "Cairo architecture and interiors as backdrop",
  "Focus on material texture and fabric hand",
  "Show the fit on the body, not on a hanger",
  "Warm color grading \u2014 never blue or cool",
  "Quiet compositions \u2014 one subject, one moment",
];

const pricingList = [
  "Price above local market, below European imports",
  "Never discount \u2014 run limited releases instead",
  'No \"sale\" language \u2014 ever',
  "Position around pleasure of wearing, not durability",
  "Never compare to other brands in copy",
  "Let the material and fit justify the price",
];

const bannedWords = [
  "timeless",
  "heritage",
  "bespoke",
  "curated",
  "elevated",
  "artisanal",
  "iconic",
  "endure",
  "ultimate",
  "journey",
  "redefine",
  "sartorial",
];

export default function StandardsPage() {
  return (
    <section className="py-section max-w-content mx-auto px-6">
      <ScrollReveal>
        <h1 className="font-display text-display-md mb-4">Standards</h1>
        <p className="font-body text-body-md text-espresso/80 max-w-prose mb-16">
          Rules that protect the brand. Every decision \u2014 by a designer, a photographer, a copywriter, or a retailer \u2014 should pass through these filters.
        </p>
      </ScrollReveal>

      {/* 2x2 Grid */}
      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Do */}
          <div className="bg-stone text-cream p-8 md:p-10">
            <h3 className="font-display text-h2 mb-6">Do</h3>
            <ul className="space-y-3">
              {doList.map((item) => (
                <li key={item} className="font-body text-body-sm text-cream/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don't */}
          <div className="bg-cream text-espresso p-8 md:p-10">
            <h3 className="font-display text-h2 mb-6">Don&rsquo;t</h3>
            <ul className="space-y-3">
              {dontList.map((item) => (
                <li key={item} className="font-body text-body-sm text-espresso/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Photography */}
          <div className="bg-stone text-cream p-8 md:p-10">
            <h3 className="font-display text-h2 mb-6">Photography</h3>
            <ul className="space-y-3">
              {photographyList.map((item) => (
                <li key={item} className="font-body text-body-sm text-cream/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Position */}
          <div className="bg-cream text-espresso p-8 md:p-10">
            <h3 className="font-display text-h2 mb-6">Pricing &amp; Position</h3>
            <ul className="space-y-3">
              {pricingList.map((item) => (
                <li key={item} className="font-body text-body-sm text-espresso/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>

      {/* Banned Words */}
      <ScrollReveal delay={0.2}>
        <div className="mt-20">
          <h3 className="font-display text-h2 mb-6">Banned Words</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {bannedWords.map((word) => (
              <span
                key={word}
                className="font-body text-caption uppercase tracking-[0.08em] px-4 py-2 rounded-full border border-stone/30 text-stone"
              >
                {word}
              </span>
            ))}
          </div>
          <p className="font-body text-body-sm text-espresso/60">
            Dead from overuse. If you reach for one, write something specific instead.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
