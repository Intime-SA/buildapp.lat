"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  { name: "Free", price: "$0", sub: "Siempre gratis", description: "Para validar tu primera app y entender cómo funciona.", features: ["3 apps activas", "Popups, banners y barras básicos", "Hasta 1.000 impresiones / mes", "Dashboard básico de métricas", "Soporte por comunidad"], cta: "Empezar ahora", highlighted: false },
  { name: "Growth", price: "$29", sub: "/ mes USD", description: "Para tiendas que iteran campañas y quieren resultados medibles.", features: ["Apps ilimitadas", "Recuperación de carritos avanzada", "Hasta 100.000 impresiones / mes", "Métricas con revenue atribuido", "A/B testing nativo", "Cupones únicos por cliente", "Soporte priorizado (24hs)"], cta: "Probar 14 días gratis", highlighted: true, badge: "Recomendado" },
  { name: "Scale", price: "$79", sub: "/ mes USD", description: "Para tiendas con alto volumen o multi-marca.", features: ["Todo lo de Growth", "Impresiones ilimitadas", "Multi-tienda (agencias)", "Webhooks y export de datos", "Templates premium", "Onboarding asistido 1-on-1", "SLA 99.9% · Account manager"], cta: "Hablar con ventas", highlighted: false },
];

const addons = [
  { name: "Recovery emails", price: "+$15/mes", desc: "Email automático cuando recuperás un carrito" },
  { name: "Templates premium", price: "+$9/mes", desc: "Diseños curados por diseñadores expertos" },
  { name: "Done-for-you setup", price: "$199 único", desc: "Te armamos las 5 apps esenciales para tu rubro" },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <span className="text-xs uppercase tracking-widest text-accent font-mono">Precios</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-accent to-transparent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05]">
            Pagás cuando vendés más.
            <br />
            <span className="text-ink-dim">Sin sorpresas.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-dim leading-relaxed">Plan free real, sin tarjeta, para siempre. Si después de probarlo te factura, pasás a paid.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: i * 0.1 }} className={`relative rounded-2xl p-7 ${p.highlighted ? "btn-conic bg-bg-card ring-glow" : "border border-border bg-bg-card hover:border-border-hard transition-colors"}`}>
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-gradient-to-r from-accent to-electric text-bg px-3 py-1 rounded-full font-bold">{p.badge}</span>
                </div>
              )}
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold">{p.name}</h3>
              </div>
              <p className="text-xs text-ink-dim mb-6">{p.sub}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-4xl md:text-5xl font-bold tracking-tightest ${p.highlighted ? "text-gradient" : ""}`}>{p.price}</span>
                {p.price !== "$0" && <span className="text-sm text-ink-dimmer">USD/mes</span>}
              </div>
              <p className="text-sm text-ink-dim leading-relaxed mb-7 min-h-[40px]">{p.description}</p>
              <a href="#cta" className={`block w-full text-center px-5 py-3 rounded-lg text-sm font-medium transition-all ${p.highlighted ? "bg-gradient-to-r from-accent to-electric text-bg hover:opacity-90" : "bg-bg-soft border border-border-hard hover:bg-border text-ink"}`}>{p.cta}</a>
              <div className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={`flex-shrink-0 mt-0.5 ${p.highlighted ? "text-accent" : "text-ink-dim"}`} strokeWidth={2.5} />
                    <span className="text-ink-dim">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-ink-dimmer font-mono">Facturación extra opcional</span>
            <h3 className="text-2xl font-bold mt-2">Sumá funcionalidades cuando las necesites</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {addons.map((a) => (
              <div key={a.name} className="rounded-xl border border-border bg-bg-card/60 p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-base font-semibold">{a.name}</h4>
                  <span className="text-sm font-mono text-accent">{a.price}</span>
                </div>
                <p className="text-xs text-ink-dim leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12 text-sm text-ink-dimmer">
          Todos los planes incluyen: hosting, OAuth con Tienda Nube, rollback de versión, logs por 30 días.
        </motion.p>
      </div>
    </section>
  );
}
