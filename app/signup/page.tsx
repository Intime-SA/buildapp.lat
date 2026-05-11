"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import Calendly from "@/components/Calendly";
import { IconCheck, IconArrowUpRight, IconSpark } from "@/components/Icons";

type FormState = {
  name: string;
  email: string;
  storeUrl: string;
  plan: "free" | "growth" | "scale";
};

export default function SignupPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    storeUrl: "",
    plan: "free",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

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

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="pill pill-green inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            14 días gratis · Sin tarjeta
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tightest mt-6 leading-[1.02]">
            Empezá a vender más
            <br />
            <span className="text-gradient">en menos de 3 minutos.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-dim max-w-2xl mx-auto leading-relaxed">
            Conectá tu tienda, armá tu primera app y mirá cómo te factura. Si no te convence, lo apagás cuando quieras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-bg-card p-8 ring-glow"
          >
            <div className="flex items-center gap-2 mb-2">
              <IconSpark size={16} className="text-accent" />
              <span className="text-xs uppercase tracking-widest text-accent font-mono">Self-serve</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Probalo ahora</h2>
            <p className="text-sm text-ink-dim mb-7">Plan free para siempre. 3 apps activas. Sin tarjeta.</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Field label="Tu nombre" placeholder="Lucía Méndez" value={form.name} onChange={(v) => update("name", v)} />
                <Field label="Email" type="email" placeholder="lucia@boho.com" value={form.email} onChange={(v) => update("email", v)} />
                <Field label="URL de tu Tienda Nube" placeholder="mi-tienda.mitiendanube.com" value={form.storeUrl} onChange={(v) => update("storeUrl", v)} />

                <div>
                  <label className="block text-xs uppercase tracking-wider text-ink-dim mb-2">Plan inicial</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["free", "growth", "scale"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => update("plan", p)}
                        className={`px-3 py-2.5 rounded-lg border text-xs font-medium uppercase tracking-wider transition-all ${
                          form.plan === p
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border-hard bg-bg/30 text-ink-dim hover:border-ink-dimmer"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-conic w-full bg-bg-card hover:bg-bg-soft transition-colors rounded-lg py-3.5 text-sm font-semibold mt-3 disabled:opacity-60"
                >
                  {submitting ? "Creando tu cuenta…" : "Crear mi cuenta gratis"}
                </button>

                <p className="text-[11px] text-ink-dimmer text-center pt-1">
                  Al crear cuenta aceptás los <Link href="/terms" className="underline">términos</Link> y la <Link href="/privacy" className="underline">privacidad</Link>.
                </p>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mb-4">
                  <IconCheck size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">¡Cuenta creada!</h3>
                <p className="text-sm text-ink-dim leading-relaxed">
                  Te mandamos un email a <strong className="text-ink">{form.email}</strong> con los próximos pasos.
                </p>
                <a href="#calendly" className="inline-flex items-center gap-1.5 mt-5 text-sm text-accent hover:underline">
                  Agendar demo <IconArrowUpRight size={14} />
                </a>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            id="calendly"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border bg-bg-card p-8 scroll-mt-20"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="pill pill-indigo">Demo personalizada</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">¿Preferís que te lo mostremos?</h2>
            <p className="text-sm text-ink-dim mb-7">
              Agendá 15 minutos con el equipo. Te mostramos tu primera app viva en tu tienda.
            </p>

            <Calendly />

            <p className="mt-5 text-[11px] text-ink-dimmer text-center">
              También podés escribirnos a{" "}
              <a href="mailto:hola@buildapp.lat" className="text-accent hover:underline">hola@buildapp.lat</a>
            </p>
          </motion.div>
        </div>

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

function Field({
  label, type = "text", placeholder, value, onChange,
}: { label: string; type?: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-ink-dim mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        className="w-full bg-bg/40 border border-border-hard rounded-lg px-4 py-3 text-sm placeholder:text-ink-dimmer focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all"
      />
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
