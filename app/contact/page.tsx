"use client";

import { FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-section">
      <div className="max-w-md mx-auto w-full">
        <ScrollReveal>
          <h1 className="font-display text-display-md text-center mb-12">
            For Inquiries
          </h1>

          <form onSubmit={handleSubmit} action="#" className="space-y-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-transparent border-b border-stone/30 py-3 font-body text-body-md text-espresso placeholder:text-stone/40 focus:border-stone focus:outline-none transition"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-stone/30 py-3 font-body text-body-md text-espresso placeholder:text-stone/40 focus:border-stone focus:outline-none transition"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-stone/30 py-3 font-body text-body-md text-espresso placeholder:text-stone/40 focus:border-stone focus:outline-none transition resize-none"
              />
            </div>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="border border-stone text-stone px-8 py-3 uppercase tracking-[0.12em] text-label font-body hover:bg-stone hover:text-cream transition-colors duration-500"
              >
                Inquire
              </button>
            </div>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-20 space-y-2">
            <p className="font-body text-sm text-espresso/50">azzoy.co</p>
            <p className="font-body text-sm text-espresso/50">Cairo, Egypt</p>
            <p className="font-body text-sm text-espresso/50">Instagram: @azzoy.co</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
