"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-gradient-to-r from-accent/0 via-accent/10 to-electric/0 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
          <ShoppingBag size={40} className="mx-auto mb-6 text-accent" strokeWidth={1.5} />
          <h2 className="text-4xl md:text-7xl font-bold tracking-tightest leading-[1.02]">
            La próxima venta extra
            <br />
            <span className="text-gradient">la armás vos.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-ink-dim max-w-2xl mx-auto leading-relaxed">
            14 días gratis. Sin tarjeta. 3 apps para siempre. Si después de probarlo no te factura más, no perdiste nada.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a href="#" className="btn-conic group relative inline-flex items-center gap-2 bg-bg-card hover:bg-bg-soft transition-all px-8 py-4 rounded-xl font-medium ring-glow">
              <ShoppingBag size={18} className="text-accent" />
              Empezá gratis ahora
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-ink transition-colors px-6 py-4">
              Hablar con un humano →
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink-dimmer">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Sin tarjeta requerida</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Setup en 30 segundos</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Cancelás cuando quieras</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
