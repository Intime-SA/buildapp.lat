"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { IconArrowUpRight, IconQuote } from "@/components/Icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSent(true);
  }

  return (
    <div className="min-h-screen flex relative">
      <Link href="/" className="absolute top-6 left-6 z-10">
        <Logo size={26} />
      </Link>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tightest leading-tight mb-2">
            Bienvenido de vuelta.
          </h1>
          <p className="text-sm text-ink-dim mb-10">
            Ingresá a tu panel de BuildApp y seguí iterando.
          </p>

          {!sent ? (
            <>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-white text-bg hover:bg-zinc-100 transition-colors rounded-lg py-3 mb-3 font-medium text-sm group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/tiendanube.svg" alt="" style={{ height: 18 }} />
                Continuar con Tienda Nube
                <IconArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-bg-card border border-border-hard hover:border-ink-dimmer transition-colors rounded-lg py-3 mb-6 text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
                  <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" />
                  <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" />
                  <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z" />
                </svg>
                Continuar con Google
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-border" />
                <span className="text-[10px] text-ink-dimmer uppercase tracking-widest">o con email</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <form onSubmit={handleSubmit}>
                <label className="block text-xs uppercase tracking-wider text-ink-dim mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@tienda.com"
                  className="w-full bg-bg-card border border-border-hard rounded-lg px-4 py-3 text-sm placeholder:text-ink-dimmer focus:border-accent focus:outline-none transition-colors mb-4"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-conic w-full bg-bg-card hover:bg-bg-soft transition-colors rounded-lg py-3 text-sm font-medium ring-glow disabled:opacity-60"
                >
                  {submitting ? "Enviando…" : "Enviar magic link →"}
                </button>
              </form>

              <p className="mt-8 text-center text-xs text-ink-dimmer">
                ¿Todavía no tenés cuenta?{" "}
                <Link href="/signup" className="text-accent hover:underline">
                  Empezá gratis →
                </Link>
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-accent/30 bg-accent/5 p-6 text-center"
            >
              <div className="text-accent text-3xl mb-3">✓</div>
              <h3 className="font-semibold mb-2">Revisá tu email</h3>
              <p className="text-sm text-ink-dim leading-relaxed">
                Te enviamos un link a <strong className="text-ink">{email}</strong>. Hacé click ahí para ingresar.
              </p>
              <button
                onClick={() => { setSent(false); setEmail(""); }}
                className="mt-5 text-xs text-ink-dim hover:text-ink underline"
              >
                Usar otro email
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="hidden lg:flex w-1/2 relative items-center justify-center bg-bg-soft/30 border-l border-border-soft p-12 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-70" />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-40" />
        <div className="halo bg-accent/20 w-[400px] h-[400px] top-10 -left-20" />
        <div className="halo bg-electric/20 w-[400px] h-[400px] bottom-10 -right-20" style={{ animationDelay: "-4s" }} />

        <div className="relative max-w-md">
          <h2 className="text-4xl font-bold tracking-tightest leading-[1.05] mb-6">
            <span className="text-gradient">La próxima app</span>
            <br />
            de tu tienda
            <br />
            <span className="text-ink-dim">ya te espera.</span>
          </h2>
          <p className="text-ink-dim leading-relaxed mb-12">
            Popups, recovery de carritos, cross-sells, countdowns. Sin código. Sin esperar.
          </p>

          <div className="rounded-2xl border border-border bg-bg-card/70 backdrop-blur p-6">
            <IconQuote size={28} className="text-accent/30 mb-3" />
            <p className="text-sm leading-relaxed text-ink mb-5">
              &ldquo;Armé el popup de salida en 3 minutos. La primera semana recuperamos 47 carritos.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border-soft">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-electric flex items-center justify-center text-bg font-bold text-[10px]">
                LM
              </div>
              <div className="text-xs">
                <div className="text-ink font-medium">Lucía Méndez</div>
                <div className="text-ink-dimmer">Boho Style · Indumentaria</div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-ink-dimmer flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            App Partner de Tienda Nube · Tiendas en LATAM
          </div>
        </div>
      </div>
    </div>
  );
}
