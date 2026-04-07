import ScrollReveal from "@/components/ScrollReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata = {
  title: "Stories \u2014 AZZOY",
  description: "The stories behind AZZOY. From Cairo to Cambridge, from cotton fields to collection.",
};

export default function StoriesPage() {
  return (
    <main className="bg-parch text-espresso">
      {/* Page Label */}
      <section className="px-6 pt-section pb-section-sm max-w-content mx-auto">
        <ScrollReveal>
          <p className="font-body text-label uppercase tracking-[0.1em] text-stone">
            Stories
          </p>
        </ScrollReveal>
      </section>

      {/* Story 1: Azzoy */}
      <section className="px-6 pb-section-sm max-w-content mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-display-lg text-espresso mb-10">
            Azzoy
          </h2>
        </ScrollReveal>
        <div className="max-w-prose">
          <ScrollReveal delay={0.1}>
            <p className="font-body text-body-lg mb-6">
              The name AZZOY comes from two things: Azzam \u2014 Omar&rsquo;s family name \u2014 and &ldquo;enjoy,&rdquo; his father&rsquo;s philosophy. The two merged into one word.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-body-lg mb-6">
              Growing up in New Cairo, Omar&rsquo;s father repeated it constantly \u2014 on the squash court, before matches, during hard training sessions. Enjoy it. Lean into it. Find pleasure in the discipline.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-body-lg mb-6">
              It wasn&rsquo;t casual advice. It was a way of approaching everything: sport, work, life.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-body text-body-lg mb-6">
              The brand carries this word because the philosophy behind it \u2014 that the best things should be enjoyed, not endured \u2014 is the same philosophy behind every garment. Clothes should feel good. Getting dressed should be a pleasure, not a task.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-body-lg">
              Azzam + Enjoy = Azzoy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pullquote 1 */}
      <section className="py-section-sm px-6">
        <ScrollReveal>
          <blockquote className="max-w-[640px] mx-auto text-center">
            <p className="font-display italic text-display-md text-espresso opacity-70">
              &ldquo;The best things should be enjoyed, not endured.&rdquo;
            </p>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Image Break 1 */}
      <ScrollReveal>
        <ImagePlaceholder
          aspect="3/2"
          color="#A8967A"
          label="Cairo, Golden Hour"
        />
      </ScrollReveal>

      {/* Story 2: Cairo to Cambridge */}
      <section className="px-6 py-section max-w-content mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-display-lg text-espresso mb-10">
            Cairo to Cambridge
          </h2>
        </ScrollReveal>
        <div className="max-w-prose">
          <ScrollReveal delay={0.1}>
            <p className="font-body text-body-lg mb-6">
              Omar Azzam grew up in New Cairo, Egypt. He started playing squash at age 5. By 17 he was ranked No. 1 in Egypt U17, Egyptian National Junior Champion, representing Egypt at the World Junior Championships.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-body-lg mb-6">
              He went to Harvard, where he studies Psychology and Economics and plays on the varsity squash team \u2014 All-Ivy League, CSA semifinalist, PSA Tour title winner.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-body-lg mb-6">
              Between Cairo and Cambridge, he saw two worlds of menswear.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-body text-body-lg mb-6">
              In Egypt, men care deeply about how they dress \u2014 but the options are either fast fashion from malls or European luxury brands that weren&rsquo;t designed for Cairo&rsquo;s climate, Cairo&rsquo;s culture, Cairo&rsquo;s way of life.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-body-lg mb-6">
              At Harvard, he saw what quiet luxury looks like when it&rsquo;s done right \u2014 Loro Piana, Brunello Cucinelli, Zegna \u2014 and realized nobody was doing this for Egyptian men, from Egypt, with Egyptian materials.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <p className="font-body text-body-lg">
              AZZOY exists because of that gap.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pullquote 2 */}
      <section className="py-section-sm px-6">
        <ScrollReveal>
          <blockquote className="max-w-[640px] mx-auto text-center">
            <p className="font-display italic text-display-md text-espresso opacity-70">
              &ldquo;Nobody was doing this for Egyptian men, from Egypt, with Egyptian materials.&rdquo;
            </p>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Image Break 2 */}
      <ScrollReveal>
        <ImagePlaceholder
          aspect="3/2"
          color="#2C1E14"
          label="The Workshop"
        />
      </ScrollReveal>

      {/* Story 3: Egyptian Cotton */}
      <section className="px-6 py-section max-w-content mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-display-lg text-espresso mb-10">
            Egyptian Cotton
          </h2>
        </ScrollReveal>
        <div className="max-w-prose">
          <ScrollReveal delay={0.1}>
            <p className="font-body text-body-lg mb-6">
              Egypt grows the finest long-staple cotton in the world. It has for thousands of years.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-body-lg mb-6">
              Yet most Egyptian men have never worn a garment made from Egyptian cotton that was designed, cut, and finished for them. The cotton leaves Egypt raw and comes back as someone else&rsquo;s luxury.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-body-lg mb-6">
              AZZOY starts from the source. Collection One uses Egyptian cotton in five of eight pieces.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-body text-body-lg">
              The fabric doesn&rsquo;t travel to Italy to become luxury. It stays home.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pullquote 3 */}
      <section className="py-section-sm px-6">
        <ScrollReveal>
          <blockquote className="max-w-[640px] mx-auto text-center">
            <p className="font-display italic text-display-md text-espresso opacity-70">
              &ldquo;The fabric doesn&rsquo;t travel to Italy to become luxury. It stays home.&rdquo;
            </p>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Image Break 3 */}
      <ScrollReveal>
        <ImagePlaceholder
          aspect="3/2"
          color="#E6DFD3"
          label="Egyptian Cotton"
        />
      </ScrollReveal>

      {/* Story 4: The Discipline */}
      <section className="px-6 py-section max-w-content mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-display-lg text-espresso mb-10">
            The Discipline
          </h2>
        </ScrollReveal>
        <div className="max-w-prose">
          <ScrollReveal delay={0.1}>
            <p className="font-body text-body-lg mb-6">
              Squash taught Omar that quality is in the details no one sees \u2014 the preparation before the match, the hours of solo practice, the discipline when no one is watching.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-body-lg mb-6">
              AZZOY applies this to garments. The inside of every piece is finished as carefully as the outside.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-body-lg mb-6">
              The stitching, the seam allowances, the way a hem falls \u2014 these are the things that separate a good garment from one that lasts.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-body text-body-lg">
              The brand doesn&rsquo;t talk about luxury. It builds it into the construction and lets the wearer feel the difference.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="pb-section" />
    </main>
  );
}
