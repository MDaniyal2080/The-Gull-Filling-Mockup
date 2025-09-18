"use client";

import { motion } from "framer-motion";
import SmartImage from "@/components/SmartImage";
import type { Cookbook } from "@/lib/sampleData";

export default function BookCard({ book }: { book: Cookbook }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      whileHover={{ y: -4, rotate: -0.4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
      className="group card overflow-hidden"
    >
      <div className="relative aspect-[3/4]">
        <SmartImage src={book.cover} alt={book.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{book.title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{book.description}</p>
      </div>
    </motion.article>
  );
}
