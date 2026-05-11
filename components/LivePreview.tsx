"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Shield, ToggleRight, MonitorPlay, ShoppingBag, Search } from "lucide-react";
import { useState } from "react";

export default function LivePreview() {
  const [debug, setDebug] = useState(true);

  return (
    <section id="preview" className="py-28 md:py-36 relative bg-bg-soft/40 border-y border-border-soft">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-widest text-accent font-mono">Probá en vivo</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05]">
            Mirá tu app en tu tienda,
            <br />
            <span className="text-gradient-emerald">antes que cualquier cliente.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-dim leading-relaxed">
            Mientras el modo debug está prendido, solo vos ves la app desde tu sesión. El resto de tus clientes ven el storefront limpio, sin riesgo de mostrar algo a medio terminar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Panel: cómo funciona */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-border bg-bg-card p-7 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-electric/20 border border-accent/30 flex items-center justify-center">
                  <Shield size={18} className="text-accent" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Modo debug</h3>
                  <p className="text-xs text-ink-dimmer">Solo vos ves esta app</p>
                </div>
              </div>
              <button
                onClick={() => setDebug((s) => !s)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  debug ? "bg-accent" : "bg-bg-soft border border-border-hard"
                }`}
                aria-label="Toggle debug"
              >
                <motion.div
                  animate={{ x: debug ? 28 : 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="absolute top-1 w-5 h-5 rounded-full bg-white"
                />
              </button>
            </div>

            <div className="space-y-4 text-sm flex-1">
              <Step num="01" title="Cookie de admin" text="Cuando entrás logueado al admin de Tienda Nube, dejamos una cookie segura. La app padre la detecta y te marca como admin." code='cookie: tn_admin=true' />
              <Step num="02" title="SDK config con flag" text="Cuando publicás en modo debug, el config trae un flag que dice 'solo mostrar si current_user.is_admin === true'." code='condition: page.user.role === "admin"' />
              <Step num="03" title="URL override para QA" text="¿Querés que un colaborador la pruebe? Le pasás un link con ?buildapp_preview=token y el dispatcher lo respeta." code='?buildapp_preview=ab12cd34' />
              <Step num="04" title="Activá para todos" text="Cuando estás conforme, apagás debug. La app se publica para el 100% del tráfico al instante." code="debug: false → live" />
            </div>
          </motion.div>

          {/* Mock visual — storefront denso */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-border bg-bg-card overflow-hidden ring-glow flex flex-col"
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-soft bg-bg-soft/40 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                </div>
                <div className="ml-3 text-xs text-ink-dimmer font-mono">tu-tienda.mitiendanube.com</div>
              </div>
              {debug && (
                <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="pill pill-amber text-[10px]">
                  <Eye size={10} /> Debug ON
                </motion.span>
              )}
            </div>

            {/* Storefront mock — denso */}
            <div className="flex-1 bg-gradient-to-br from-bg via-bg-soft to-bg relative overflow-hidden">
              {/* Header de la tienda */}
              <div className="px-5 py-3 border-b border-border-soft/50 flex items-center justify-between bg-bg/40">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-ink-dim/20" />
                  <div className="h-2 w-20 bg-ink-dim/20 rounded" />
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-ink-dim/5 rounded-md px-2 py-1">
                    <Search size={11} className="text-ink-dimmer" />
                    <div className="h-1.5 w-16 bg-ink-dim/15 rounded" />
                  </div>
                  <ShoppingBag size={14} className="text-ink-dim/40" />
                </div>
              </div>

              {/* Hero banner placeholder */}
              <div className="px-5 pt-5">
                <div className="h-20 rounded-lg bg-gradient-to-br from-ink-dim/10 to-ink-dim/5 border border-border-soft/60 flex items-center justify-between px-5">
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-28 bg-ink-dim/25 rounded" />
                    <div className="h-1.5 w-20 bg-ink-dim/15 rounded" />
                  </div>
                  <div className="h-6 w-16 rounded bg-ink-dim/15" />
                </div>
              </div>

              {/* Product grid */}
              <div className="px-5 py-4">
                <div className="h-2 w-24 bg-ink-dim/20 rounded mb-3" />
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="aspect-square bg-ink-dim/10 rounded-md border border-border-soft/40" />
                      <div className="h-1.5 w-3/4 bg-ink-dim/15 rounded" />
                      <div className="h-1.5 w-1/2 bg-ink-dim/10 rounded" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer band */}
              <div className="px-5 py-3 border-t border-border-soft/50 bg-bg/40 flex items-center gap-3">
                <div className="h-1.5 w-10 bg-ink-dim/15 rounded" />
                <div className="h-1.5 w-14 bg-ink-dim/15 rounded" />
                <div className="h-1.5 w-12 bg-ink-dim/15 rounded" />
              </div>

              {/* La app aparece solo si debug ON */}
              {debug && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-12 left-4 right-4"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 border-2 border-dashed border-accent/50 rounded-xl pointer-events-none" />
                    <div className="rounded-xl bg-gradient-to-br from-accent to-electric p-4 text-left shadow-glow">
                      <div className="flex items-center gap-2">
                        <MonitorPlay size={12} className="text-white" />
                        <span className="text-[10px] uppercase tracking-wider text-white/85 font-mono">Solo visible para vos</span>
                      </div>
                      <div className="text-white font-semibold text-sm mt-1.5">¡Hot Sale empieza el viernes!</div>
                      <div className="text-white/85 text-xs mt-0.5">Hasta 50% off en toda la tienda</div>
                      <button className="mt-2 bg-white text-bg text-[11px] font-medium px-2.5 py-1 rounded">
                        Quiero el aviso →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {!debug && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-soft border border-border-soft text-xs text-ink-dim">
                    <EyeOff size={12} />
                    App apagada · clientes ven todo limpio
                  </div>
                </motion.div>
              )}
            </div>

            {/* Status bar */}
            <div className="px-5 py-3 border-t border-border-soft bg-bg/40 text-xs text-ink-dimmer flex items-center gap-2 flex-shrink-0">
              <ToggleRight size={14} className={debug ? "text-accent" : "text-ink-dimmer"} />
              {debug ? "Modo debug: tu sesión ve la app, los clientes no." : "Modo público: todos los clientes ven la app."}
            </div>
          </motion.div>
        </div>

        {/* Banda final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-4"
        >
          <Card title="Cero impacto en clientes" text="Mientras debug está prendido, los compradores ven la tienda como siempre." />
          <Card title="Compartí con tu equipo" text="Generá links de preview con token para que tu agencia o colaboradores la prueben." />
          <Card title="Métricas en tiempo real" text="Ves los eventos disparándose en vivo: clicks, conversiones, errores." />
        </motion.div>
      </div>
    </section>
  );
}

function Step({ num, title, text, code }: { num: string; title: string; text: string; code: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-bg-soft border border-border-hard flex items-center justify-center text-[10px] font-mono font-bold text-accent">
        {num}
      </div>
      <div className="flex-1 pt-0.5">
        <div className="text-sm font-semibold text-ink">{title}</div>
        <p className="text-xs text-ink-dim mt-1 leading-relaxed">{text}</p>
        <code className="inline-block mt-2 text-[10px] font-mono text-accent/90 bg-bg/60 border border-border-soft rounded px-2 py-0.5">
          {code}
        </code>
      </div>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg-card/60 p-5">
      <h4 className="text-sm font-semibold text-ink mb-1.5">{title}</h4>
      <p className="text-xs text-ink-dim leading-relaxed">{text}</p>
    </div>
  );
}
