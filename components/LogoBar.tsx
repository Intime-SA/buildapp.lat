"use client";

import { motion } from "framer-motion";

const items = ["Hot Sale", "Black Friday", "Cyber Monday", "Lanzamientos", "Día de la Madre", "Navidad", "Liquidación", "Pre-venta", "Back to School"];

export default function LogoBar() {
  return (
    <section className="py-14 border-y border-border-soft bg-bg-soft/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-xs uppercase tracking-widest text-ink-dimmer mb-6">
          Hecho para tus campañas más importantes
        </motion.p>
        <div className="overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
          <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
            {[...items, ...items, ...items].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-lg md:text-xl font-semibold text-ink-dim/70 hover:text-ink transition-colors flex-shrink-0">
                <span className="w-1 h-1 rounded-full bg-ink-dimmer" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
