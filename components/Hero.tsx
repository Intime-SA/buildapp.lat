"use client";

import { motion } from "framer-motion";
import { IconSpark, IconArrowUpRight, IconPlay, IconCart, IconChat, IconCheck } from "./Icons";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-x-0 -top-40 grid-bg grid-bg-fade h-[700px] pointer-events-none opacity-40" />
      <motion.div aria-hidden className="halo bg-accent/15 w-[500px] h-[500px] left-[-10%] top-10" />
      <motion.div aria-hidden className="halo bg-electric/15 w-[450px] h-[450px] right-[-8%] top-32" style={{ animationDelay: "-6s" }} />

      <motion.div variants={stagger} initial="hidden" animate="visible" className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs font-medium text-ink-dim tracking-wide">
            Beta abierta · App Partner de Tienda Nube · Tiendas en LATAM
          </span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-tightest leading-[0.95] max-w-5xl mx-auto">
          <span className="text-gradient">Apps que venden más</span>
          <br />
          <span className="text-ink">en tu Tienda Nube.</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-8 text-lg sm:text-xl text-ink-dim max-w-2xl mx-auto leading-relaxed">
          Popups, cross-sells, recuperación de carritos, barras de envío gratis, countdowns. Describilos en español y los armamos para vos. Sin programar. Sin esperar. Sin pagar dev.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a href="/signup" className="btn-conic group relative inline-flex items-center gap-2 bg-bg-card hover:bg-bg-soft transition-all px-6 py-3.5 rounded-xl text-sm font-medium ring-glow">
            <IconSpark size={16} className="text-accent" />
            Probar 14 días gratis
            <IconArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#proceso" className="group inline-flex items-center gap-2 text-sm text-ink-dim hover:text-ink transition-colors px-5 py-3.5">
            <div className="w-8 h-8 rounded-full border border-border-hard flex items-center justify-center group-hover:border-accent transition-colors">
              <IconPlay size={12} className="ml-0.5 text-ink" />
            </div>
            Ver cómo funciona (60s)
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-6 text-xs text-ink-dimmer">
          Sin tarjeta · Cancelás cuando quieras · 3 apps gratis para siempre
        </motion.p>

        {/* Preview impactante — storefront real con app embebida */}
        <motion.div variants={fadeUp} className="mt-20 md:mt-24 relative max-w-6xl mx-auto">
          <div className="absolute -inset-x-16 -top-16 -bottom-16 mesh-bg blur-3xl opacity-60 pointer-events-none" />
          <motion.div aria-hidden className="halo bg-accent/20 w-[300px] h-[300px] -left-20 top-1/2" style={{ animationDuration: "6s" }} />
          <motion.div aria-hidden className="halo bg-electric/20 w-[300px] h-[300px] -right-20 top-1/3" style={{ animationDuration: "7s", animationDelay: "-3s" }} />

          <div className="relative glass rounded-2xl overflow-hidden ring-glow">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border-soft bg-bg-soft/40">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                </div>
                <div className="ml-4 flex items-center gap-2 bg-bg/60 rounded-md px-3 py-1 border border-border-soft">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs text-ink-dimmer font-mono">tu-tienda.mitiendanube.com</span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-ink-dimmer">
                <span className="pill pill-green text-[10px]">en vivo</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-border-soft">
              {/* LEFT — Chat panel BuildApp */}
              <div className="lg:col-span-2 p-6 text-left bg-gradient-to-b from-transparent to-bg/40">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-soft">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-accent to-electric flex items-center justify-center">
                    <IconSpark size={12} className="text-bg" />
                  </div>
                  <div className="text-xs font-mono text-ink-dim">BuildApp chat</div>
                </div>

                <div className="text-[10px] uppercase tracking-wider text-ink-dimmer mb-2">Vos</div>
                <div className="rounded-lg bg-bg-soft border border-border-soft p-3 text-sm leading-relaxed mb-5">
                  <span className="text-ink">Cuando alguien agregue al carrito, mostrale una sugerencia con</span>{" "}
                  <span className="text-accent font-semibold">50% off</span>{" "}
                  <span className="text-ink">en un producto que combine.</span>
                </div>

                <div className="text-[10px] uppercase tracking-wider text-ink-dimmer mb-2">BuildApp</div>
                <div className="space-y-2.5">
                  {[
                    "Detectando intent: cross-sell post-add",
                    "Slot elegido: corner_top_right",
                    "Producto sugerido: Pro Edition",
                    "Validando código…",
                    "Deployando a Vercel ✓",
                    "Activa en tu tienda — solo te falta confirmar",
                  ].map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + i * 0.32, duration: 0.4 }}
                      className="text-xs font-mono text-ink-dim flex items-start gap-2"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.0 + i * 0.32 + 0.2, type: "spring", stiffness: 400 }}
                        className="w-3.5 h-3.5 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center flex-shrink-0 mt-0.5"
                      >
                        <IconCheck size={8} className="text-accent" />
                      </motion.div>
                      <span>{t}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Storefront real con popup embebido */}
              <div className="lg:col-span-3 relative bg-gradient-to-br from-bg-soft to-bg overflow-hidden">
                <div className="px-5 py-3 border-b border-border-soft/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-amber-400" />
                    <div className="space-y-1">
                      <div className="h-2 w-20 bg-ink-dim/25 rounded" />
                      <div className="h-1 w-12 bg-ink-dim/15 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-ink-dim">
                    <IconChat size={14} className="text-ink-dim/40" />
                    <div className="relative">
                      <IconCart size={16} className="text-ink-dim/60" />
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent text-[8px] font-bold text-bg flex items-center justify-center">1</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pt-5">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-ink-dim/15 to-ink-dim/5 border border-border-soft/60 flex items-center justify-between px-5">
                    <div className="space-y-2">
                      <div className="h-3 w-32 bg-ink-dim/25 rounded" />
                      <div className="h-2 w-24 bg-ink-dim/15 rounded" />
                    </div>
                    <div className="h-7 w-20 rounded bg-ink-dim/20" />
                  </div>
                </div>

                <div className="px-5 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-2.5 w-28 bg-ink-dim/25 rounded" />
                    <div className="h-2 w-12 bg-ink-dim/10 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="aspect-square bg-gradient-to-br from-ink-dim/15 to-ink-dim/5 rounded-lg border border-border-soft/50 relative overflow-hidden">
                          {i === 2 && (
                            <div className="absolute top-1.5 left-1.5">
                              <span className="text-[8px] font-bold bg-rose-500/90 text-white px-1.5 py-0.5 rounded">-30%</span>
                            </div>
                          )}
                        </div>
                        <div className="h-1.5 w-3/4 bg-ink-dim/15 rounded" />
                        <div className="h-1.5 w-1/2 bg-accent/40 rounded" />
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 3.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-5 right-5 w-[280px]"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-accent/30 blur-2xl rounded-2xl -z-10" />
                    <div className="rounded-xl bg-gradient-to-br from-accent via-emerald-500 to-electric p-4 text-left shadow-glow ring-glow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase tracking-wider text-white/85 font-mono font-bold">¡Llevátelo con 50% OFF!</span>
                        <button className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
                          <span className="text-white text-[10px]">×</span>
                        </button>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-12 h-12 rounded-lg bg-white/15 flex-shrink-0 flex items-center justify-center">
                          <IconCart size={20} className="text-white/80" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-semibold text-sm leading-tight">Botines Pro Edition</div>
                          <div className="text-white/85 text-[10px] mt-0.5">Combina con lo que acabás de agregar</div>
                          <div className="flex items-baseline gap-1.5 mt-1">
                            <span className="text-white text-xs font-bold">$24.500</span>
                            <span className="text-white/60 text-[10px] line-through">$49.000</span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full mt-3 bg-white text-bg text-xs font-semibold py-1.5 rounded-md hover:bg-white/95 transition-colors inline-flex items-center justify-center gap-1.5">
                        Agregar al carrito
                        <IconArrowUpRight size={11} />
                      </button>
                    </div>
                    <div className="absolute -top-2 -left-2 inline-flex items-center gap-1 bg-bg-card border border-accent/40 rounded-full px-2 py-0.5 text-[9px] font-mono text-accent">
                      <IconSpark size={8} />
                      live
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            className="mt-4 text-center text-xs text-ink-dimmer flex items-center justify-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
            Renderizado en menos de 3 minutos · Editable sin volver a empezar
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
