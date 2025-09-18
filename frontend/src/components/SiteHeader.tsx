"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/recipes", label: "Recipes" },
  { href: "/cookbooks", label: "Cookbooks" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md ring-1 ring-black/5 dark:bg-black/30 dark:ring-white/10">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="The Gut Filling" width={32} height={32} />
            <span className="text-[--color-charcoal] dark:text-white font-semibold tracking-tight">The Gut Filling</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium dark:text-slate-200 ${active ? "is-active" : "text-slate-700 hover:text-[--color-gut-red]"}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary">Book a tasting</Link>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center size-9 rounded-lg ring-1 ring-black/10 hover:bg-black/5 dark:ring-white/10 dark:hover:bg-white/5"
          aria-label="Open menu"
          onClick={() => setOpen((s) => !s)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <Container className="py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-800 dark:text-slate-100 hover:text-[--color-gut-red]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setOpen(false)}>
              Book a tasting
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
