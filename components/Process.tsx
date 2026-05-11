"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Conectá tu tienda", text: "Te logueás con tu cuenta de Tienda Nube, autorizás y listo. Sin instalar plugins, sin tocar el theme, sin código.", example: "30 segundos · Un click" },
  { n: "02", title: "Describí lo que querés", text: "Escribís en español lo que la app tiene que hacer. \"Quiero un popup de salida con 10% off para visitantes nuevos.\" Nosotros la armamos.", example: '"Banner de Hot Sale que aparezca solo los viernes"' },
  { n: "03", title: "Probala antes de publicar", text: "Preview en vivo de cómo se va a ver. Cambiás textos, colores, descuentos, mostrar/ocultar sin volver a empezar.", example: "Editá knobs · Sin regenerar" },
  { n: "04", title: "Activá y vendé", text: "Click en publicar y queda activa en tu storefront al instante. Cada venta atribuida se muestra en tu dashboard.", example: "Live en menos de 10s" },
];

export default function Process() {
  return (
    <section id="proceso" className="py-28 md:py-36 relative bg-bg-soft/40 border-y border-border-soft">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-widest text-accent font-mono">Cómo funciona</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05]">
            De una idea a tu tienda,
            <br />
            <span className="text-gradient-emerald">en cuatro pasos.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-dim leading-relaxed">Sin instalar nada, sin tocar el theme, sin esperar a un desarrollador.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-px bg-border-soft rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative bg-bg-card p-7 group hover:bg-bg-soft/60 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/20 to-electric/20 border border-accent/30 flex items-center justify-center text-xs font-mono font-bold text-accent">{s.n}</div>
                <div className="h-px flex-1 bg-gradient-to-r from-border-hard to-transparent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-ink-dim leading-relaxed mb-5">{s.text}</p>
              <div className="mt-5 text-xs font-mono text-accent/80 bg-bg/60 border border-border-soft rounded-lg px-3 py-2.5">{s.example}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-ink-dim">Tiempo promedio total:</span>
            <span className="text-accent font-semibold font-mono">2:47 min</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
