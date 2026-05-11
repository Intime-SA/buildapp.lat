"use client";

import { motion } from "framer-motion";
import { ShoppingCart, EyeOff, BarChart3 } from "lucide-react";

const items = [
  { icon: ShoppingCart, title: "7 de cada 10 carritos se pierden", text: "El cliente agrega, duda, cierra el browser. No tenés cómo recuperarlo en el momento. Para cuando llega el email, ya compró en la competencia.", badge: "70% abandono", color: "from-rose-500/30 to-rose-500/0", iconColor: "text-rose-400", pill: "pill-red" },
  { icon: EyeOff, title: "Las promos no aparecen cuando importan", text: "Hot Sale, lanzamientos, free shipping: las apps del marketplace son rígidas. \"Mostrá esto solo a clientes que gastaron > $5.000\" — no hay manera sin pagar un desarrollador.", badge: "Sin contexto", color: "from-amber-500/30 to-amber-500/0", iconColor: "text-amber-400", pill: "pill-amber" },
  { icon: BarChart3, title: "No sabés qué app te factura más", text: "Hoy convivís con 5 plugins distintos, scripts sueltos, banners que dejan de funcionar. Ningún dashboard te dice cuánta plata generó cada uno.", badge: "Cero visibilidad", color: "from-indigo-500/30 to-indigo-500/0", iconColor: "text-indigo-400", pill: "pill-indigo" },
];

export default function Problem() {
  return (
    <section id="problema" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-widest text-accent font-mono">El problema</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05]">
            Vender online en 2026
            <br />
            <span className="text-ink-dim">no debería ser tan difícil.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-dim leading-relaxed">
            Cada visita a tu tienda es una oportunidad de venta. La mayoría se pierden por no comunicar lo correcto en el momento exacto. Y cuando querés arreglarlo, te pegan con plazos de dos semanas y presupuestos de mil dólares.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -4 }} className="group relative rounded-2xl border border-border bg-bg-card p-7 overflow-hidden transition-colors hover:border-border-hard">
              <div className={`absolute -top-32 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl border border-border-hard bg-bg-soft flex items-center justify-center ${item.iconColor}`}>
                    <item.icon size={20} strokeWidth={1.8} />
                  </div>
                  <span className={`pill ${item.pill}`}>{item.badge}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-ink-dim leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
