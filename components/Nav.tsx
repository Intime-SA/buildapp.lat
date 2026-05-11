"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#apps", label: "Apps" },
  { href: "#avanzado", label: "Avanzado" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#preview", label: "Probá en vivo" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(5,5,5,0)", "rgba(5,5,5,0.75)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(31,31,31,0)", "rgba(31,31,31,1)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header style={{ background: bg, borderBottomColor: border }} className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <Logo size={26} />
          <span className="hidden sm:inline-block text-[10px] font-mono text-ink-dimmer border border-border-soft rounded px-1.5 py-0.5 ml-1">beta</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-dim">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative hover:text-ink transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="/login" className="text-sm text-ink-dim hover:text-ink transition-colors px-3 py-2">Ingresar</a>
          <a href="/signup" className="btn-conic relative inline-flex items-center gap-2 text-sm font-medium bg-bg-card hover:bg-bg-soft transition-colors px-4 py-2 rounded-lg">
            Probar gratis <span aria-hidden="true">→</span>
          </a>
        </div>

        <button onClick={() => setOpen((s) => !s)} className="md:hidden p-2 rounded-md hover:bg-bg-card transition-colors" aria-label="Abrir menú">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden border-t border-border-soft bg-bg/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-ink-dim hover:text-ink py-1">{l.label}</a>
            ))}
            <a href="/login" onClick={() => setOpen(false)} className="text-sm text-ink-dim hover:text-ink py-1">Ingresar</a>
            <a href="/signup" className="mt-2 btn-conic text-center text-sm font-medium bg-bg-card px-4 py-2.5 rounded-lg">Probar gratis</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
