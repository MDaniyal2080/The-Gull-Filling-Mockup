import type { Metadata } from "next";
import Container from "@/components/Container";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/lib/sampleData";

export const metadata: Metadata = {
  title: "Recipes — The Gut Filling",
  description: "Healthy, flavorful recipes with approachable steps and pantry‑friendly ingredients.",
  openGraph: {
    title: "Recipes — The Gut Filling",
    description: "Healthy, flavorful recipes with approachable steps and pantry‑friendly ingredients.",
    images: ["/og/recipes.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recipes — The Gut Filling",
    description: "Healthy, flavorful recipes with approachable steps and pantry‑friendly ingredients.",
    images: ["/og/recipes.svg"],
  },
};

export default function RecipesPage() {
  return (
    <section className="section bg-cream on-cream">
      <Container>
        <h1 className="section-heading">Recipes</h1>
        <p className="section-sub">Healthy, flavorful recipes with approachable steps and pantry‑friendly ingredients.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <RecipeCard key={r.slug} recipe={r} />
          ))}
        </div>
      </Container>
    </section>
  );
}
