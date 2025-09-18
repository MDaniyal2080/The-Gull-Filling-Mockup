import Container from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-cream">
      <Container className="text-center">
        <h1 className="text-4xl font-semibold text-[--color-charcoal] dark:text-white">Page not found</h1>
        <p className="section-sub mx-auto">That page may have moved or never existed. Try heading back to the homepage.</p>
        <div className="mt-6">
          <Link href="/" className="btn-primary">Back to home</Link>
        </div>
      </Container>
    </section>
  );
}
