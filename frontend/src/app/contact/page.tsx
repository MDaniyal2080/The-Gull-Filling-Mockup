import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — The Gut Filling",
  description: "Book a tasting or catering in Houston. Tell us about your event and we’ll reply within 1–2 business days.",
  openGraph: {
    title: "Contact — The Gut Filling",
    description: "Book a tasting or catering in Houston. Tell us about your event and we’ll reply within 1–2 business days.",
    images: ["/og/contact.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — The Gut Filling",
    description: "Book a tasting or catering in Houston. Tell us about your event and we’ll reply within 1–2 business days.",
    images: ["/og/contact.svg"],
  },
};

export default function ContactPage() {
  return (
    <section className="section">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h1 className="section-heading">Book a tasting</h1>
            <p className="section-sub">Tell us about your event in Houston and we’ll get back within 1–2 business days.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <aside className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Contact details</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>Houston, TX</li>
              <li>Email: hello@thegutfilling.com</li>
              <li>Instagram: @thegutfilling</li>
            </ul>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">This is a live prototype. Submissions are demo‑only and do not send email yet.</p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
