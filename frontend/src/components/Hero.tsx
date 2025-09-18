"use client";

import Container from "@/components/Container";
import { heroImage, heroBgImage } from "@/lib/sampleData";
import { motion } from "framer-motion";
import SmartImage from "@/components/SmartImage";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section bg-gut-gradient relative overflow-hidden">
      {/* Background image with subtle parallax */}
      <motion.div
        initial={{ opacity: 0.0, scale: 1.04, y: -12 }}
        animate={{ opacity: 0.45, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, mass: 0.8 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0">
          <SmartImage src={heroBgImage} alt="Fresh ingredients background" fill priority className="object-cover" />
        </div>
        {/* Soft gradient vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="absolute -inset-x-10 -top-10 h-80 bg-[radial-gradient(600px_200px_at_50%_0%,theme(colors.red.500)/25%,transparent_70%)]" />
      </motion.div>
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
            className="label"
          >
            Houston, TX
            <span className="inline-block size-1.5 rounded-full bg-white"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6, delay: 0.05 }}
            className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[--color-charcoal] dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Food that unites. Clean, bright, and deeply satisfying.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6, delay: 0.1 }}
            className="section-sub"
          >
            The Gut Filling brings seasonal menus, pop‑ups, and healthy recipes to life. Book a tasting, explore recipes, and join the newsletter for 5 free recipes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6, delay: 0.15 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <Link className="btn-primary" href="/contact">Book a tasting</Link>
            <Link className="btn-secondary--red" href="/newsletter">Get 5 free recipes</Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 16, mass: 0.65, delay: 0.12 }}
          className="relative"
        >
          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3]">
              <SmartImage src={heroImage} alt="Colorful salad and fresh ingredients" fill priority className="object-cover" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
