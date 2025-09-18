import type { Metadata } from "next";
import Container from "@/components/Container";
import { cookbooks } from "@/lib/sampleData";
import BookCard from "@/components/BookCard";

export const metadata: Metadata = {
  title: "Cookbooks — The Gut Filling",
  description: "Seasonal collections and community favorites captured in beautiful cookbooks.",
  openGraph: {
    title: "Cookbooks — The Gut Filling",
    description: "Seasonal collections and community favorites captured in beautiful cookbooks.",
    images: ["/og/cookbooks.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookbooks — The Gut Filling",
    description: "Seasonal collections and community favorites captured in beautiful cookbooks.",
    images: ["/og/cookbooks.svg"],
  },
};

export default function CookbooksPage() {
  return (
    <section className="section">
      <Container>
        <h1 className="section-heading">Cookbooks</h1>
        <p className="section-sub">Beautifully photographed collections with bright, balanced flavors and approachable techniques.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cookbooks.map((b) => (
            <BookCard key={b.year} book={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
