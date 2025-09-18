import Container from "@/components/Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer mt-20 border-t border-black/5 dark:border-white/10 bg-cream on-cream">
      <Container className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-[--color-charcoal] dark:text-white">The Gut Filling</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Houston, TX • Food unites, food divides. Choose the right side.</p>
        </div>
        <nav className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-slate-800 dark:text-slate-200">Explore</h4>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
              <li><Link href="/services" className="hover:text-[--color-gut-red]">Services</Link></li>
              <li><Link href="/recipes" className="hover:text-[--color-gut-red]">Recipes</Link></li>
              <li><Link href="/cookbooks" className="hover:text-[--color-gut-red]">Cookbooks</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-800 dark:text-slate-200">Company</h4>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
              <li><Link href="/about" className="hover:text-[--color-gut-red]">About</Link></li>
              <li><Link href="/contact" className="hover:text-[--color-gut-red]">Contact</Link></li>
              <li><Link href="/newsletter" className="hover:text-[--color-gut-red]">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-800 dark:text-slate-200">Social</h4>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
              <li><a className="hover:text-[--color-gut-red]" href="#" rel="noreferrer">Instagram</a></li>
              <li><a className="hover:text-[--color-gut-red]" href="#" rel="noreferrer">Facebook</a></li>
              <li><a className="hover:text-[--color-gut-red]" href="#" rel="noreferrer">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-800 dark:text-slate-200">Legal</h4>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
              <li><Link href="#" className="hover:text-[--color-gut-red]">Privacy</Link></li>
              <li><Link href="#" className="hover:text-[--color-gut-red]">Terms</Link></li>
            </ul>
          </div>
        </nav>
      </Container>
      <div className="py-6 text-center text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} The Gut Filling. All rights reserved.</div>
    </footer>
  );
}
