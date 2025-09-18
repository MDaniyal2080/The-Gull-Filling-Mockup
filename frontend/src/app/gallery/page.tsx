import type { Metadata } from "next";
import Container from "@/components/Container";
import SmartImage from "@/components/SmartImage";
import { galleryImages } from "@/lib/sampleData";

export const metadata: Metadata = {
  title: "Gallery — The Gut Filling",
  description: "Plates, pop‑ups, and behind‑the‑scenes moments from our Houston kitchen.",
  openGraph: {
    title: "Gallery — The Gut Filling",
    description: "Plates, pop‑ups, and behind‑the‑scenes moments from our Houston kitchen.",
    images: ["/og/gallery.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery — The Gut Filling",
    description: "Plates, pop‑ups, and behind‑the‑scenes moments from our Houston kitchen.",
    images: ["/og/gallery.svg"],
  },
};

export default function GalleryPage() {
  return (
    <section className="section bg-cream on-cream">
      <Container>
        <h1 className="section-heading">Gallery</h1>
        <p className="section-sub">A peek at our plates, pop‑ups, and behind‑the‑scenes moments.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((src) => (
            <div key={src} className="relative aspect-square card overflow-hidden">
              <SmartImage src={src} alt="Gallery image" fill className="object-cover" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
