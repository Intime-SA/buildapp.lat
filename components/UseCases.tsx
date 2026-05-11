"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart, Users, Package, Webhook, Sparkles,
  GitBranch, Database, Code2, ArrowRight,
} from "lucide-react";

/**
 * UseCases — apps avanzadas que van más allá de UI/popups.
 * Acceden a Orders API, Products API, Customers API, Webhooks.
 * Mostrar que BuildApp escala desde lo simple a lo complejo.
 */

const cases = [
  {
    icon: ShoppingCart,
    title: "Recovery inteligente post-orden",
    pitch: "Después de cada venta, identifica clientes con alta probabilidad de recompra y les ofrece un combo personalizado por email.",
    requires: ["Orders API", "Customers API", "Email"],
    techBadge: "webhook → segmentación → automation",
    accent: "text-rose-400",
    border: "border-l-rose-500",
    color: "from-rose-500/20 to-transparent",
  },
  {
    icon: Users,
    title: "Tier VIP automático según LTV",
    pitch: "Detectá clientes que gastaron > $50K y mostrales banner exclusivo con acceso anticipado, free shipping permanente y atención preferencial.",
    requires: ["Customers API", "Orders aggregation", "Cookies"],
    techBadge: "LTV calc → cookie → render condicional",
    accent: "text-amber-400",
    border: "border-l-amber-500",
    color: "from-amber-500/20 to-transparent",
  },
  {
    icon: Package,
    title: "Stock dinámico cross-canal",
    pitch: "Sincronizá inventario con Mercado Libre y otros canales. Cuando baja de N unidades, ocultá automáticamente el producto en categoría.",
    requires: ["Products API", "Mercado Libre", "Cron worker"],
    techBadge: "sync → threshold → publish hide",
    accent: "text-electric",
    border: "border-l-indigo-500",
    color: "from-indigo-500/20 to-transparent",
  },
  {
    icon: Webhook,
    title: "Trigger sobre eventos del checkout",
    pitch: "Cuando se completa una compra > $X, agendá automáticamente una llamada de seguimiento o envío de regalo via API de tu CRM.",
    requires: ["Webhook order/paid", "External API", "Auth"],
    techBadge: "event → filter → CRM action",
    accent: "text-accent",
    border: "border-l-emerald-500",
    color: "from-emerald-500/20 to-transparent",
  },
  {
    icon: Database,
    title: "Segmentación por behavioral data",
    pitch: "Combiná datos del carrito, historial de navegación, último login y total gastado para mostrar mensajes ultra-personalizados.",
    requires: ["Cart event", "Customer state", "Storage"],
    techBadge: "5+ conditions AND/OR · interpolation",
    accent: "text-rose-400",
    border: "border-l-rose-500",
    color: "from-rose-500/20 to-transparent",
  },
  {
    icon: GitBranch,
    title: "Multi-variante A/B con allocation",
    pitch: "Mostrá 3 versiones distintas de un popup a buckets de tráfico (33/33/33). Trackeá conversion por variante. Promovés la ganadora automático.",
    requires: ["A/B framework", "Analytics", "Auto-promote"],
    techBadge: "stable hash → variant → metric",
    accent: "text-amber-400",
    border: "border-l-amber-500",
    color: "from-amber-500/20 to-transparent",
  },
];

const integrations = [
  { name: "Orders API", desc: "Listar, segmentar, accionar sobre órdenes pasadas y en curso." },
  { name: "Products API", desc: "Hidratar info, modificar stock, cambiar precios, ocultar productos." },
  { name: "Customers API", desc: "Acceso a historial, LTV, segmentación, anonymization." },
  { name: "Webhooks", desc: "Reaccionar a order/paid, order/cancelled, cart/abandoned, etc." },
  { name: "Browser APIs", desc: "Storage local, navegación, postMessage, eventos del SDK." },
  { name: "External APIs", desc: "Tu CRM, ERP, email provider, Mercado Pago, Mercado Libre." },
];

export default function UseCases() {
  return (
    <section id="avanzado" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-widest text-accent font-mono">Casos avanzados</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05]">
            Cuando lo simple
            <br />
            <span className="text-gradient-emerald">no alcanza.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-dim leading-relaxed">
            BuildApp no se queda en popups. Apps que cruzan datos, reaccionan a eventos del checkout, sincronizan con Mercado Libre, ejecutan A/B testing nativo. Todo describiéndolo en español.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl border border-border bg-bg-card p-7 overflow-hidden transition-colors hover:border-border-hard ${c.border} border-l-2`}
            >
              <div className={`absolute -top-32 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${c.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl border border-border-hard bg-bg-soft flex items-center justify-center ${c.accent}`}>
                    <c.icon size={20} strokeWidth={1.8} />
                  </div>
                  <Sparkles size={14} className="text-ink-dimmer" />
                </div>
                <h3 className="text-lg font-semibold mb-2.5">{c.title}</h3>
                <p className="text-sm text-ink-dim leading-relaxed mb-5">{c.pitch}</p>
                <div className="pt-4 border-t border-border-soft space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-ink-dimmer mb-1.5">Requiere acceso a</div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.requires.map((r) => (
                        <span key={r} className="pill pill-zinc text-[10px]">{r}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-ink-dimmer mb-1.5 flex items-center gap-1.5">
                      <Code2 size={11} /> Bajo el capot
                    </div>
                    <code className="text-[11px] font-mono text-ink-dim bg-bg/60 border border-border-soft rounded px-2 py-1 inline-block">
                      {c.techBadge}
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integraciones disponibles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-2xl border border-border bg-bg-card p-8"
        >
          <div className="mb-6">
            <div className="text-xs uppercase tracking-widest text-accent font-mono mb-2">El kit completo</div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tightest">A qué tiene acceso una app de BuildApp</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((int) => (
              <div key={int.name} className="rounded-xl border border-border-soft bg-bg/40 p-4 flex items-start gap-3">
                <ArrowRight size={14} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-semibold text-ink">{int.name}</div>
                  <div className="text-xs text-ink-dim mt-1 leading-relaxed">{int.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
