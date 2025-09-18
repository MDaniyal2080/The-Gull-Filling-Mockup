"use client";

import Link from "next/link";
import type { Recipe } from "@/lib/sampleData";
import { motion } from "framer-motion";
import SmartImage from "@/components/SmartImage";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.slug}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        whileHover={{ y: -3, rotate: -0.4, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
        className="card overflow-hidden"
      >
        <div className="relative aspect-[4/3]">
          <SmartImage
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">{recipe.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{recipe.description}</p>
          {recipe.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {recipe.tags.map((t) => (
                <span key={t} className="chip">#{t}</span>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>
    </Link>
  );
}
