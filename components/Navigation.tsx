"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Collection", href: "/collection" },
  { label: "Wardrobe", href: "/wardrobe" },
  { label: "Stories", href: "/stories" },
  { label: "World", href: "/world" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center transition-colors duration-500 ${
          scrolled ? "bg-cream/95 backdrop-blur" : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-display font-semibold tracking-[0.25em] text-espresso text-lg"
        >
          AZZOY
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-px bg-espresso transition-transform duration-300 ${
              isOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-espresso transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-espresso transition-transform duration-300 ${
              isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-2xl text-espresso tracking-wide hover:text-stone transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to offset fixed nav */}
      <div className="h-20" />
    </>
  );
}
