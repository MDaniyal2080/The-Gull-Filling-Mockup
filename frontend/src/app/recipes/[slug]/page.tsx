import Container from "@/components/Container";
import SmartImage from "@/components/SmartImage";
import { notFound } from "next/navigation";
import { recipes } from "@/lib/sampleData";

export const dynamicParams = false;

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return {};
  return {
    title: `${recipe.title} — The Gut Filling`,
    description: recipe.description,
    openGraph: { title: recipe.title, description: recipe.description, images: [recipe.image] },
    twitter: { card: "summary_large_image", title: recipe.title, description: recipe.description, images: [recipe.image] },
  };
}

export default async function RecipeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return notFound();

  return (
    <section className="section">
      <Container className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[--color-charcoal] dark:text-white">{recipe.title}</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{recipe.description}</p>
        <div className="mt-6 card overflow-hidden">
          <div className="relative aspect-[4/3]">
            <SmartImage src={recipe.image} alt={recipe.title} fill className="object-cover" />
          </div>
        </div>
        <article className="typography max-w-none mt-8">
          <h2>Ingredients</h2>
          <ul>
            <li>Arugula</li>
            <li>Cream burrata</li>
            <li>Prosciutto</li>
            <li>Pine nuts</li>
            <li>Balsamic + honey dressing</li>
          </ul>
          <h2>Steps</h2>
          <ol>
            <li>Toast pine nuts until fragrant.</li>
            <li>Toss greens with dressing.</li>
            <li>Add burrata and prosciutto; finish with nuts and serve.</li>
          </ol>
        </article>
      </Container>
    </section>
  );
}
