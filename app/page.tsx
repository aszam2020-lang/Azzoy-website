"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-cream relative">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-display font-semibold text-display-xl tracking-[0.25em]"
        >
          AZZOY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-body text-label uppercase tracking-[0.28em] mt-6"
        >
          CAIRO
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-10 bg-espresso/30" />
        </motion.div>
      </section>

      {/* Editorial Intro */}
      <ScrollReveal>
        <section className="py-section max-w-prose mx-auto text-center px-6">
          <h2 className="font-display text-display-md">Collection One</h2>
          <p className="font-body text-label uppercase tracking-[0.1em] text-stone mt-4">
            October 2026 — February 2027
          </p>
          <p className="font-body text-body-lg text-espresso/80 mt-8">
            Eight pieces designed for Cairo. Every piece earns its place. No
            filler, no trend plays. The collection is a system: each piece works
            with at least four others.
          </p>
        </section>
      </ScrollReveal>

      {/* Editorial Image Grid */}
      <ScrollReveal delay={0.1}>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <ImagePlaceholder
            aspect="4/5"
            color="#A8967A"
            label="Still Life"
          />
          <ImagePlaceholder
            aspect="4/5"
            color="#2C1E14"
            label="Architecture"
          />
          <ImagePlaceholder
            aspect="4/5"
            color="#FAF8F4"
            label="The Wearer"
          />
        </section>
      </ScrollReveal>

      {/* Wardrobe Outfit Feature */}
      <ScrollReveal delay={0.15}>
        <section className="py-section max-w-content mx-auto px-6">
          <h2 className="font-display text-display-md">The Introduction</h2>
          <p className="font-body text-label uppercase tracking-[0.1em] text-stone mt-4">
            October &middot; Day — 28&deg;C
          </p>
          <ul className="mt-6 space-y-1">
            <li className="font-body text-body-lg text-espresso/80">
              Cream Short-Sleeve Knit Polo
            </li>
            <li className="font-body text-body-lg text-espresso/80">
              Stone Brushed Cotton Trousers
            </li>
          </ul>
          <p className="font-body text-body-lg text-espresso/80 mt-6 max-w-prose">
            The first look people will see from AZZOY. 28&deg;C — short sleeves,
            warm tones. Two pieces, nothing else needed.
          </p>
          <Link
            href="/wardrobe"
            className="inline-block mt-8 font-body text-label uppercase tracking-[0.12em] text-stone border-b border-stone/40 pb-1 hover:text-espresso hover:border-espresso transition-colors duration-500"
          >
            View all outfits
          </Link>
        </section>
      </ScrollReveal>

      {/* Quote Block */}
      <ScrollReveal delay={0.2}>
        <section className="py-section text-center px-6">
          <p className="font-display italic text-display-lg opacity-70">
            Azzam + Enjoy = Azzoy.
          </p>
        </section>
      </ScrollReveal>
    </>
  );
}
