"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "¿Cómo se instala BuildApp en mi tienda?", a: "Te logueás con tu cuenta de Tienda Nube, autorizás los permisos y queda lista. No hay que instalar plugins, ni tocar el theme, ni pegar scripts en ningún lado. El proceso entero toma menos de un minuto." },
  { q: "¿Necesito saber programar?", a: "No. Vos escribís en español lo que querés que haga la app (\"un popup de salida con 10% off\", \"banner de envío gratis si gastan más de $5.000\") y nosotros la armamos, la activamos y la mostramos en tu tienda. Si querés ir más profundo, podés editar el código directamente — pero no es obligatorio." },
  { q: "¿Qué pasa con las ventas que generan mis apps?", a: "Las cobrás vos directamente como cualquier otra venta de tu tienda. BuildApp no toma comisión sobre las ventas. Solo pagás la suscripción mensual del plan que elijas. Vos te quedás con el 100% del ticket." },
  { q: "¿Cómo sé cuánta plata me genera cada app?", a: "Cada app tiene su dashboard con impresiones, clicks, conversiones y revenue atribuido. Vas a ver exactamente cuánto facturó cada popup, cross-sell o banner. Si una app no te factura, la pausás con un click." },
  { q: "¿Qué tipos de apps puedo crear?", a: "Popups de salida, recuperación de carritos, sugerencias post-add to cart, barras de envío gratis, countdowns de Hot Sale, regalos por compra, mensajes condicionales, cupones únicos, recordatorios de carrito y mucho más. Si se te ocurre algo distinto, lo pedís en el chat y lo armamos." },
  { q: "¿Funciona en el checkout o solo en la tienda?", a: "Por ahora cubrimos toda la experiencia previa al checkout: home, productos, categorías, carrito. El checkout en sí está en roadmap. La buena noticia: ahí es donde más impacto tiene una app (popups, cross-sells, recuperación)." },
  { q: "¿Si rompo algo, puedo volver atrás?", a: "Sí. Cada versión de tu app queda guardada. Si una iteración no anduvo, restaurás la versión anterior con un click. Y si querés pausarla del todo, también con un click — sin desinstalar nada." },
  { q: "¿Qué pasa con los datos de mis clientes?", a: "Los datos sensibles los maneja Tienda Nube directamente. BuildApp solo accede a lo necesario para que las apps funcionen (productos, carritos, eventos). Cumplimos LGPD/GDPR, encriptamos los tokens y nunca usamos tus datos para entrenar modelos de terceros." },
  { q: "¿Sirve para cualquier theme de Tienda Nube?", a: "Por ahora trabajamos con el theme Patagonia, que es el más moderno y el que más tiendas usan en 2026. Estamos sumando soporte para otros themes en el roadmap. Si tu tienda usa Patagonia, podés arrancar hoy." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 md:py-36 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <span className="text-xs uppercase tracking-widest text-accent font-mono">FAQ</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-accent to-transparent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05]">
            Las dudas más comunes,
            <br />
            <span className="text-ink-dim">resueltas.</span>
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} className="rounded-xl border border-border bg-bg-card overflow-hidden transition-colors hover:border-border-hard">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left">
                  <span className="text-base font-medium pr-4">{f.q}</span>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0 w-8 h-8 rounded-full border border-border-hard flex items-center justify-center text-ink-dim">
                    <Plus size={16} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm text-ink-dim leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
