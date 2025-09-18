import SmartImage from "@/components/SmartImage";
import Link from "next/link";
import Container from "@/components/Container";
import RecipeCard from "@/components/RecipeCard";
import { recipes, services, cookbooks, galleryImages } from "@/lib/sampleData";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services */}
      <section className="section">
        <Container>
          <Reveal>
            <h2 className="section-heading">What we offer</h2>
            <p className="section-sub">From intimate pop‑ups to full‑service catering and hands‑on classes, we bring bright, balanced flavors to {`Houston.`}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0 | 100 | 200}>
                <div className="card p-6">
                  <div className="size-10 inline-flex items-center justify-center rounded-xl bg-[--color-gut-red]/10 text-[--color-gut-red] text-xl">{s.icon}</div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="btn-secondary">Explore services</Link>
          </div>
        </Container>
      </section>

      {/* Featured Recipes */}
      <section className="section bg-cream on-cream">
        <Container>
          <Reveal>
            <h2 className="section-heading">Featured recipes</h2>
            <p className="section-sub">Healthy, flavorful recipes with approachable steps and pantry‑friendly ingredients.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 3) as 0 | 100 | 200}>
                <RecipeCard recipe={r} />
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/recipes" className="btn-secondary">See all recipes</Link>
          </div>
        </Container>
      </section>

      {/* Cookbooks */}
      <section className="section">
        <Container>
          <Reveal>
            <h2 className="section-heading">Cookbooks</h2>
            <p className="section-sub">A collection of community favorites and seasonal creations.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookbooks.map((b, i) => (
              <Reveal key={b.year} delay={(i % 3) as 0 | 100 | 200}>
                <BookCard book={b as any} />
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/cookbooks" className="btn-secondary">Browse cookbooks</Link>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="section bg-cream on-cream">
        <Container>
          <h2 className="section-heading">From the kitchen</h2>
          <p className="section-sub">Fresh, vibrant plates and behind‑the‑scenes moments.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryImages.slice(0, 6).map((src) => (
              <div key={src} className="relative aspect-square card overflow-hidden">
                <SmartImage src={src} alt="Gallery image" fill className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="section">
        <Container className="card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-2xl font-semibold text-[--color-charcoal] dark:text-white">Get 5 free recipes</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Join the newsletter for seasonal menus, event updates, and healthy recipes.</p>
          </div>
          <form className="w-full md:w-auto flex gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="field rounded-full md:w-72"
              required
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-10 bg-[--color-gut-red] text-white">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">Hosting in Houston? Let’s cook something memorable.</h3>
          <Link href="/contact" className="btn-secondary bg-white/10 text-white ring-white/30 hover:bg-white/20">Book a tasting</Link>
        </Container>
      </section>
    </>
  );
}
