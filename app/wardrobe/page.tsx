import ScrollReveal from "@/components/ScrollReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { outfits } from "@/lib/wardrobe";

export const metadata = {
  title: "Wardrobe System \u2014 AZZOY",
  description: "Eight pieces, five months. Every combination uses only Collection One pieces.",
};

export default function WardrobePage() {
  return (
    <main className="bg-parch text-espresso">
      {/* Header */}
      <section className="px-6 pt-section pb-section-sm max-w-content mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-display-lg text-espresso mb-6">
            Wardrobe System
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-body text-body-lg text-ash max-w-prose">
            Eight pieces, five months. Every combination uses only Collection One pieces.
          </p>
        </ScrollReveal>
      </section>

      {/* Outfits */}
      <section className="px-6 max-w-content mx-auto">
        {outfits.map((outfit, index) => (
          <div key={outfit.name}>
            <div className="py-section-sm">
              {/* Full-bleed image */}
              <ScrollReveal>
                <ImagePlaceholder
                  aspect="3/2"
                  color={outfit.placeholderColor}
                  label={outfit.name}
                />
              </ScrollReveal>

              {/* Outfit details */}
              <div className="mt-10">
                <ScrollReveal delay={0.1}>
                  <h2 className="font-display text-display-md text-espresso mb-3">
                    {outfit.name}
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <p className="font-body text-label uppercase tracking-[0.1em] text-stone mb-6">
                    {outfit.season} \u00b7 {outfit.temperature}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="mb-6">
                    {outfit.garments.map((garment) => (
                      <p
                        key={garment}
                        className="font-body text-body-lg text-espresso"
                      >
                        {garment}
                      </p>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <p className="font-body text-body-md max-w-prose opacity-70">
                    {outfit.description}
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Divider between outfits */}
            {index < outfits.length - 1 && (
              <div className="border-t border-stone/10" />
            )}
          </div>
        ))}
      </section>

      {/* Collection Logic */}
      <section className="px-6 py-section max-w-content mx-auto">
        <ScrollReveal>
          <div className="bg-parch border border-stone/10 rounded p-8">
            <h3 className="font-display text-display-md text-espresso mb-8">
              Collection Logic
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ScrollReveal delay={0.1}>
                  <p className="font-body text-body-md text-ash mb-6">
                    Layer pieces (half-zip, crewneck) appear in 4 of 6 combinations \u2014 the most-worn pieces in the system.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="font-body text-body-md text-ash">
                    Foundation pieces (trousers) come in two registers \u2014 brushed cotton for everyday, drawstring wool for evening.
                  </p>
                </ScrollReveal>
              </div>
              <div>
                <ScrollReveal delay={0.2}>
                  <p className="font-body text-body-md text-ash mb-6">
                    Core pieces (polo, band-collar) move between layered and standalone, formal and casual.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.25}>
                  <p className="font-body text-body-md text-ash">
                    Two registers of polo \u2014 long-sleeve for layering, short-sleeve for heat. Together they cover October through February without overlap.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Bottom spacing */}
      <div className="pb-section" />
    </main>
  );
}
