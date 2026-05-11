"use client";

import { motion } from "framer-motion";
import { RotateCcw, TrendingUp, Target, LineChart } from "lucide-react";

const pieces = [
  { icon: RotateCcw, label: "01", title: "Recuperá carritos perdidos", text: "Popups de salida con descuento, recordatorios de carrito, urgencia por stock. El cliente vuelve antes de irse a otra tienda.", accent: "text-rose-400", metric: "+18%", metricLabel: "checkouts recuperados" },
  { icon: TrendingUp, label: "02", title: "Subí el ticket promedio", text: "Sugerencias post-carrito, combos automáticos, regalos por monto mínimo. Cada venta vale más sin esfuerzo extra.", accent: "text-accent", metric: "+24%", metricLabel: "ticket promedio" },
  { icon: Target, label: "03", title: "Comunicá en el momento exacto", text: "Barras de envío gratis dinámicas, countdowns de Hot Sale, anuncios condicionales. El mensaje correcto, al cliente correcto.", accent: "text-electric", metric: "3.4x", metricLabel: "engagement vs banner fijo" },
  { icon: LineChart, label: "04", title: "Medí cada app, en plata", text: "Dashboard con impresiones, clicks, conversiones y revenue atribuido por mini-app. Sabés exactamente cuánto te factura cada una.", accent: "text-amber-400", metric: "100%", metricLabel: "trackeo nativo" },
];

export default function Solution() {
  return (
    <section id="beneficios" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-widest text-accent font-mono">La solución</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05]">
            Cuatro resultados,
            <br />
            <span className="text-gradient-emerald">una sola plataforma.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-dim leading-relaxed">Cada mini-app que armás resuelve algo medible: más ventas, más ticket, más recovery, más datos.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pieces.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.08 }} whileHover={{ y: -6 }} className="relative group">
              <div className="relative rounded-2xl border border-border bg-bg-card p-6 h-full overflow-hidden transition-colors hover:border-border-hard">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl border border-border-hard bg-bg-soft flex items-center justify-center ${p.accent}`}>
                    <p.icon size={20} strokeWidth={1.8} />
                  </div>
                  <span className="text-[10px] font-mono text-ink-dimmer">{p.label}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2.5">{p.title}</h3>
                <p className="text-sm text-ink-dim leading-relaxed mb-5">{p.text}</p>
                <div className="pt-4 border-t border-border-soft">
                  <div className={`text-2xl font-bold ${p.accent}`}>{p.metric}</div>
                  <div className="text-[10px] uppercase tracking-wider text-ink-dimmer mt-1">{p.metricLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mt-16 rounded-2xl border border-border bg-bg-card overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <Stat n="2:47 min" label="del prompt a la tienda" sub="Tiempo promedio para activar una app" />
            <Stat n="14 días" label="prueba sin tarjeta" sub="Si no te convence, no pagás nada" />
            <Stat n="3 apps" label="gratis para siempre" sub="Aunque no actualices al plan paid" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, label, sub }: { n: string; label: string; sub: string }) {
  return (
    <div className="p-8 text-center">
      <div className="text-4xl md:text-5xl font-bold tracking-tightest text-gradient">{n}</div>
      <div className="mt-3 text-sm text-ink">{label}</div>
      <div className="mt-1 text-xs text-ink-dimmer">{sub}</div>
    </div>
  );
}
