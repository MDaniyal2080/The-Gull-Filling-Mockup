import type { Metadata } from "next";
import Container from "@/components/Container";
import { services } from "@/lib/sampleData";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — The Gut Filling",
  description: "Pop-ups, catering, and private classes in Houston with bright, balanced flavors.",
  openGraph: {
    title: "Services — The Gut Filling",
    description: "Pop-ups, catering, and private classes in Houston with bright, balanced flavors.",
    images: ["/og/services.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — The Gut Filling",
    description: "Pop-ups, catering, and private classes in Houston with bright, balanced flavors.",
    images: ["/og/services.svg"],
  },
};

export default function ServicesPage() {
  return (
    <section className="section">
      <Container>
        <h1 className="section-heading">Services</h1>
        <p className="section-sub">We design menus and experiences that feel fresh, balanced, and full of color.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) as 0 | 100 | 200}>
              <div className="card p-6 flex flex-col">
                <div className="size-10 inline-flex items-center justify-center rounded-xl bg-[--color-gut-red]/10 text-[--color-gut-red] text-xl">
                  {s.icon}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                <div className="mt-auto pt-4">
                  <Link href="/contact" className="btn-secondary">Inquire</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
