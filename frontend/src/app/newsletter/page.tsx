import type { Metadata } from "next";
import Container from "@/components/Container";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter — The Gut Filling",
  description: "Join for seasonal menus, event updates, and healthy recipes. Get 5 free recipes instantly.",
  openGraph: {
    title: "Newsletter — The Gut Filling",
    description: "Join for seasonal menus, event updates, and healthy recipes. Get 5 free recipes instantly.",
    images: ["/og/newsletter.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter — The Gut Filling",
    description: "Join for seasonal menus, event updates, and healthy recipes. Get 5 free recipes instantly.",
    images: ["/og/newsletter.svg"],
  },
};

export default function NewsletterPage() {
  return (
    <section className="section">
      <Container className="max-w-3xl">
        <h1 className="section-heading">Newsletter</h1>
        <p className="section-sub">Join for seasonal menus, event updates, and the latest recipes. You’ll get 5 free recipes right away.</p>
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </Container>
    </section>
  );
}
