"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Catalogue" },
  { href: "/series/the-hollow-library", label: "The Series" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `no-underline font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
      isActive ? "text-brass" : "text-paper-dim hover:text-brass"
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur">
      <div className="max-w-[1060px] mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="font-display text-lg md:text-xl font-medium text-paper no-underline">
          Clydie Cronjé
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-paper cursor-pointer"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>

        {open && (
          <div className="md:hidden w-full pt-4 pb-2 mt-3 flex flex-col gap-4 border-t border-line">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
