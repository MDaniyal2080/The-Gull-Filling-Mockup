import type { Metadata } from "next";
import Container from "@/components/Container";
import SmartImage from "@/components/SmartImage";

export const metadata: Metadata = {
  title: "About — The Gut Filling",
  description: "Our story, values, and the kitchen behind The Gut Filling in Houston.",
  openGraph: {
    title: "About — The Gut Filling",
    description: "Our story, values, and the kitchen behind The Gut Filling in Houston.",
    images: ["/og/about.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — The Gut Filling",
    description: "Our story, values, and the kitchen behind The Gut Filling in Houston.",
    images: ["/og/about.svg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="section bg-gut-gradient">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[--color-charcoal] dark:text-white">Our story</h1>
            <p className="section-sub">
              We’re a Houston‑based kitchen making food that feels good: bright, balanced, and deeply satisfying. We love seasonal produce, bold color, and simple techniques that bring people together.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700 dark:text-slate-200">
              <li>• Locally focused — Houston is our pantry.</li>
              <li>• Seasonal menus — we let the market lead.</li>
              <li>• Inclusive cooking — approachable, joyful, evidence‑aware.</li>
            </ul>
          </div>
          <div className="relative card overflow-hidden">
            <div className="relative aspect-[4/3]">
              <SmartImage
                src="https://images.unsplash.com/photo-1461009209120-103fed476b14?q=80&w=1600&auto=format&fit=crop"
                alt="Colorful cooking scene"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2 className="section-heading">What we believe</h2>
          <p className="section-sub">Food unites, food divides. We choose the side that welcomes, teaches, and shares.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Flavor first", "Seasonal & bright", "Community"] .map((title) => (
              <div key={title} className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">We cook with color and balance, and we share what we learn along the way.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
