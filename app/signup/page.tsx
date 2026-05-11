"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import Calendly from "@/components/Calendly";

export default function SignupPage() {
  return (
    <div className="min-h-screen relative">
      <header className="px-6 py-5 flex items-center justify-between relative z-10">
        <Link href="/">
          <Logo size={26} />
        </Link>
        <Link href="/login" className="text-sm text-ink-dim hover:text-ink transition-colors">
          ¿Ya tenés cuenta? <span className="text-ink">Ingresá →</span>
        </Link>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="pill pill-indigo inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Demo personalizada · 15 minutos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tightest mt-6 leading-[1.02]">
            Agendá tu demo
            <br />
            <span className="text-gradient">y te mostramos todo en vivo.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-dim max-w-2xl mx-auto leading-relaxed">
            Reservá 15 minutos con el equipo. Te mostramos tu primera app viva en tu tienda y respondemos todas tus dudas.
          </p>
        </motion.div>

        <motion.div
          id="calendly"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-bg-card p-4 md:p-6 ring-glow scroll-mt-20"
        >
          <Calendly className="w-full" />
        </motion.div>

        <p className="mt-6 text-sm text-ink-dimmer text-center">
          También podés escribirnos a{" "}
          <a href="mailto:hola@buildapp.lat" className="text-accent hover:underline">hola@buildapp.lat</a>
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink-dimmer">
          <Trust text="Sin tarjeta requerida" />
          <Trust text="Cancelás cuando quieras" />
          <Trust text="App Partner de Tienda Nube" />
          <Trust text="Datos encriptados · LGPD/GDPR" />
        </div>
      </div>
    </div>
  );
}

function Trust({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      {text}
    </div>
  );
}
