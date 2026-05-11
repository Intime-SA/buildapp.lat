"use client";

import { motion } from "framer-motion";
import {
  Mail, Timer, Truck, Gift, Tag, Bell, Percent, Clock,
  ShoppingBag, MessageCircle, Ruler, CreditCard,
} from "lucide-react";

/**
 * Features — apps disponibles, cada una referenciada con apps reales
 * que viven hoy en la tienda de aplicaciones de Tienda Nube.
 * El research dashboard analizo 233 apps en 48 clusters.
 * Estas son las 12 Tier-1: alto valor + complejidad baja.
 */

const features = [
  { icon: Mail, title: "Popup de bienvenida con cupón", text: "Modal en la home con captura de email y cupón de primera compra. Trigger configurable: delay, scroll, exit-intent.", badge: "Recovery", refs: ["Cashing", "Impulse", "Coupon Pop Up"] },
  { icon: Truck, title: "Barra de envío gratis", text: "Top bar fija con progreso hacia el monto mínimo. Se actualiza solo según el carrito del cliente.", badge: "Ticket +", refs: ["Announcement Bar", "Impulse", "Cashing"] },
  { icon: Timer, title: "Countdown de urgencia", text: "Timer real para Hot Sale, Black Friday, lanzamientos. Modos: fecha límite, recurrente, por sesión.", badge: "Urgencia", refs: ["Counti", "Timer Bar", "Abejita Countdown"] },
  { icon: MessageCircle, title: "Botón flotante de WhatsApp", text: "Widget flotante con deep-link, mensaje pre-populado, horario laboral, agentes múltiples.", badge: "Conversión", refs: ["Smartbis", "Tagy", "Impulse"] },
  { icon: ShoppingBag, title: "Sticky add-to-cart mobile", text: "Fija el botón de comprar al scrollear en mobile. Boost de conversión confirmado en PDP.", badge: "Mobile", refs: ["Sticky Add to Cart"] },
  { icon: Ruler, title: "Tabla de talles personalizada", text: "Modal con tablas por categoría/producto. Presets para ropa, calzado, kids, talles internacionales.", badge: "PDP", refs: ["Size Guides", "Size Grid"] },
  { icon: CreditCard, title: "Cuotas y medios de pago", text: "Display dinámico de cuotas y promos bancarias en PDP y grid. Reglas por categoría y precio.", badge: "Trust", refs: ["Multipricing", "Distintivo", "Iconfiar"] },
  { icon: Gift, title: "Saludo virtual para regalos", text: "Checkbox en cart para marcar regalo + captura mensaje + email destinatario. Pre-checkout flow.", badge: "Ticket +", refs: ["StoryDots", "Gift Wrap"] },
  { icon: Tag, title: "Cross-sell post-add to cart", text: "Recomendador 'comprado junto' con descuento contextual. Estrategias: tags, categoría, manual.", badge: "Ticket +", refs: ["Compre Junto Pro", "CrossUp", "Cashing"] },
  { icon: Bell, title: "Avisame cuando vuelva al stock", text: "En productos sin stock, captura email y notifica al volver. Worker watchea inventario.", badge: "Recovery", refs: ["Llegué (Cheguei)", "Luker"] },
  { icon: Percent, title: "Programa de cashback", text: "Acumulación de puntos por $ comprado. Canje en checkout como cupón. Reglas por categoría.", badge: "Loyalty", refs: ["Loyalty Cashback", "Fideclub", "Glowlab"] },
  { icon: Clock, title: "Recupero de carrito por WhatsApp", text: "Detección de abandono y secuencia automática WhatsApp. Templates editables, A/B testing.", badge: "Recovery", refs: ["Perfit", "Klaviyo", "Smartbis"] },
];

export default function Features() {
  return (
    <section id="apps" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-widest text-accent font-mono">Tipos de app</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05]">
            Todo lo que vende,
            <br />
            <span className="text-ink-dim">en una sola plataforma.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-dim leading-relaxed">
            Analizamos las <strong className="text-ink">233 apps</strong> más usadas de Tienda Nube y agrupamos las que más facturan. Cualquiera de estas la armás vos en menos de 3 minutos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.55, delay: (i % 3) * 0.06 }} whileHover={{ scale: 1.02 }} className="group relative rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-border-hard hover:bg-bg-soft/40">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-bg-soft to-bg border border-border-soft text-accent group-hover:text-accent-soft group-hover:scale-110 transition-all">
                  <f.icon size={18} strokeWidth={1.8} />
                </div>
                <span className="pill pill-zinc text-[10px]">{f.badge}</span>
              </div>
              <h4 className="text-base font-semibold mb-1.5">{f.title}</h4>
              <p className="text-sm text-ink-dim leading-relaxed mb-4">{f.text}</p>
              <div className="pt-3 border-t border-border-soft">
                <div className="text-[10px] uppercase tracking-wider text-ink-dimmer mb-2">Inspirado en</div>
                <div className="flex flex-wrap gap-1.5">
                  {f.refs.map((r) => (
                    <span key={r} className="text-[10px] font-mono text-ink-dim bg-bg/60 border border-border-soft rounded px-1.5 py-0.5">{r}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
          <p className="text-sm text-ink-dim">
            Y muchísimo más. Las 12 apps de arriba cubren el <strong className="text-accent">50% del store reseñado</strong> de Tienda Nube.
          </p>
          <p className="text-xs text-ink-dimmer mt-2">Si se te ocurre algo distinto, lo pedís en el chat y lo armamos.</p>
        </motion.div>
      </div>
    </section>
  );
}
