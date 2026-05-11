"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Armé el popup de salida en 3 minutos. La primera semana recuperamos 47 carritos que se nos hubieran ido. Pagó la suscripción de un año en 4 días.", author: "Lucía Méndez", role: "Founder", company: "Boho Style · Indumentaria" },
  { quote: "El cross-sell post-add to cart nos subió el ticket promedio 18% en la primera semana. Lo armé yo sin tocar a nadie del equipo técnico. Increíble.", author: "Federico Otero", role: "Head of Growth", company: "Sport Pro · Deportes" },
  { quote: "Lo que más me gustó es cambiar el copy y el descuento en plena Black Friday sin volver a empezar. Iteramos 4 versiones distintas en una hora.", author: "Camila Russo", role: "Ecommerce Manager", company: "Casa Linda · Hogar" },
];

const stats = [
  { n: "+24%", label: "ticket promedio", sub: "vs sin BuildApp" },
  { n: "+38%", label: "conversion rate", sub: "en páginas con app activa" },
  { n: "$2.1k", label: "recovery mensual", sub: "tienda promedio" },
  { n: "3.4x", label: "ROI primera campaña", sub: "Hot Sale 2025" },
];

export default function Social() {
  return (
    <section id="resultados" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-widest text-accent font-mono">Resultados</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05]">
            Las tiendas que ya
            <br />
            <span className="text-gradient-emerald">venden más con BuildApp.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-xl border border-border bg-bg-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.n}</div>
              <div className="text-xs uppercase tracking-wider text-ink mt-2">{s.label}</div>
              <div className="text-[10px] text-ink-dimmer mt-1">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-bg-card p-7 hover:border-border-hard transition-colors h-full flex flex-col"
            >
              {/* TOP: quote */}
              <div className="flex-1">
                <Quote size={28} className="text-accent/30 mb-4" strokeWidth={1.5} />
                <p className="text-sm text-ink leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>

              {/* BOTTOM: autor pinneado al fondo */}
              <div className="mt-6 pt-5 border-t border-border-soft">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-electric flex items-center justify-center text-xs font-bold text-bg flex-shrink-0">
                    {t.author.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">{t.author}</div>
                    <div className="text-xs text-ink-dimmer truncate">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
