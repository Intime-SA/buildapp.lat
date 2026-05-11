"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";

function ensureCalendlyAssets(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();

    const existingCss = document.querySelector<HTMLLinkElement>(
      `link[href*="${CALENDLY_CSS_HREF}"]`
    );
    if (!existingCss) {
      const link = document.createElement("link");
      link.href = CALENDLY_CSS_HREF;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    if (window.Calendly) return resolve();

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src*="${CALENDLY_SCRIPT_SRC}"]`
    );
    if (existing) {
      if (window.Calendly) return resolve();
      existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    document.head.appendChild(script);
  });
}

export default function Calendly({
  url = "https://calendly.com/atlantics-info/30min",
  className = "",
}: {
  url?: string;
  className?: string;
  /** @deprecated mantener por compat. La altura ahora es responsive interna. */
  height?: number;
  /** @deprecated */
  fill?: boolean;
  /** @deprecated */
  minHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      await ensureCalendlyAssets();
      if (cancelled || !containerRef.current || !window.Calendly) return;
      containerRef.current.innerHTML = "";
      const fullUrl = `${url}?background_color=000000&text_color=e5e7eb&primary_color=10b981&hide_event_type_details=0&hide_gdpr_banner=1`;
      window.Calendly.initInlineWidget({
        url: fullUrl,
        parentElement: containerRef.current,
      });
    }

    init();

    const isCalendlyEvent = (e: MessageEvent) =>
      e.origin === "https://calendly.com" &&
      typeof e.data?.event === "string" &&
      e.data.event.indexOf("calendly.") === 0;

    const handle = (e: MessageEvent) => {
      if (!isCalendlyEvent(e)) return;
      if (
        e.data.event === "calendly.profile_page_viewed" ||
        e.data.event === "calendly.event_type_viewed"
      ) {
        setLoaded(true);
      }
    };
    window.addEventListener("message", handle);
    const fallback = window.setTimeout(() => setLoaded(true), 4500);

    return () => {
      cancelled = true;
      window.removeEventListener("message", handle);
      window.clearTimeout(fallback);
    };
  }, [url]);

  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-black mx-auto w-full max-w-[680px] h-[740px] md:h-[800px] ${className}`}
      style={{ minWidth: 320 }}
    >
      <div ref={containerRef} className="absolute inset-0" style={{ minWidth: 320 }} />

      {/* Máscaras negras que tapan las franjas blancas del <body> del iframe de Calendly.
          Calendly free no permite tematizar el body, solo el card interno → cubrimos los 4 bordes.
          Los costados se reducen con max-w + máscaras finitas como red de seguridad. */}
      <div className="absolute top-0 inset-x-0 h-16 md:h-20 bg-black pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-12 md:h-14 bg-black pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 w-4 md:w-5 bg-black pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-4 md:w-5 bg-black pointer-events-none" aria-hidden="true" />

      <div
        aria-hidden={loaded}
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black transition-opacity duration-500 ${
          loaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent animate-spin" />
        </div>
        <p className="text-sm text-ink-dim">Cargando calendario…</p>
      </div>
    </div>
  );
}
