"use client";

import { motion } from "framer-motion";

/**
 * Partners — marquee con 8 marcas reales del stack BuildApp.
 * Todos los logos están en /public/logos/*.svg, transparentes y adaptados a fondo dark.
 * Reemplaza el viejo LogoBar.
 */

type Partner = {
  name: string;
  src: string;
  alt: string;
  /** Altura del logo en px */
  h?: number;
};

const partners: Partner[] = [
  {
    name: "Tienda Nube",
    src: "/logos/tiendanube.svg",
    alt: "Tienda Nube",
    h: 28,
  },
  {
    name: "Vercel",
    src: "/logos/vercel.svg",
    alt: "Vercel",
    h: 28,
  },
  {
    name: "Next.js",
    src: "/logos/nextjs.svg",
    alt: "Next.js",
    h: 30,
  },
  {
    name: "Claude",
    src: "/logos/claude.svg",
    alt: "Claude",
    h: 30,
  },
  {
    name: "OpenAI",
    src: "/logos/openai.svg",
    alt: "OpenAI",
    h: 28,
  },
  {
    name: "MongoDB",
    src: "/logos/mongodb.svg",
    alt: "MongoDB",
    h: 30,
  },
];

export default function Partners() {
  return (
    <section className="py-16 border-y border-border-soft bg-bg-soft/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-widest text-ink-dimmer mb-3">
            Construido sobre el stack de los más grandes
          </p>
          <p className="text-xs text-ink-dim/80">
            App oficial de Tienda Nube · Integraciones nativas con el ecosistema
          </p>
        </motion.div>

        <div className="overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
          <motion.div
            className="flex gap-10 whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners].map((p, i) => (
              <PartnerChip key={`${p.name}-${i}`} partner={p} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PartnerChip({ partner }: { partner: Partner }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center px-6 opacity-80 hover:opacity-100 transition-opacity"
      style={{ height: 56 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={partner.src}
        alt={partner.alt}
        style={{ height: partner.h ?? 28, width: "auto" }}
        className="object-contain"
        loading="lazy"
      />
    </div>
  );
}
