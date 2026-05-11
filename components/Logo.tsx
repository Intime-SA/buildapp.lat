"use client";

import { useId } from "react";

type Variant = "full" | "icon" | "wordmark" | "domain";

/**
 * BuildApp logo.
 * Dos bloques rounded apilados con offset diagonal (build + up)
 * con un pequeño "spark" interior en el bloque superior que evoca "app/instance live".
 */

export function Logo({
  variant = "full",
  size = 28,
  className = "",
}: {
  variant?: Variant;
  size?: number;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const g1 = `ba-${uid}-g1`;
  const g2 = `ba-${uid}-g2`;
  const g3 = `ba-${uid}-g3`;

  const Icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BuildApp"
      role="img"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id={g1} x1="3" y1="29" x2="17" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#047857" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id={g2} x1="15" y1="17" x2="29" y2="3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f46e5" />
          <stop offset="1" stopColor="#a5b4fc" />
        </linearGradient>
        <radialGradient id={g3} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="white" stopOpacity="0.95" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Bloque base (abajo-izquierda) */}
      <rect x="3" y="15" width="14" height="14" rx="3.5" fill={`url(#${g1})`} />
      <rect x="3" y="15" width="14" height="2" rx="1" fill="white" opacity="0.18" />

      {/* Bloque superior (arriba-derecha) */}
      <rect x="15" y="3" width="14" height="14" rx="3.5" fill={`url(#${g2})`} />
      <rect x="15" y="3" width="14" height="2" rx="1" fill="white" opacity="0.22" />

      {/* Spark interior */}
      <circle cx="22" cy="10" r="3" fill={`url(#${g3})`} />
      <circle cx="22" cy="10" r="1.2" fill="white" opacity="0.95" />
    </svg>
  );

  if (variant === "icon") return <span className={className}>{Icon}</span>;

  if (variant === "wordmark") {
    return (
      <span
        className={`font-bold tracking-tightest text-ink ${className}`}
        style={{ fontSize: size * 0.7 }}
      >
        build<span className="text-gradient-emerald">app</span>
      </span>
    );
  }

  if (variant === "domain") {
    return (
      <div className={`inline-flex items-baseline gap-1 ${className}`}>
        <span className="font-bold tracking-tightest text-ink leading-none" style={{ fontSize: size * 0.7 }}>
          build<span className="text-gradient-emerald">app</span>
        </span>
        <span className="text-[10px] font-mono text-accent/80 leading-none">.lat</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {Icon}
      <span className="font-bold tracking-tightest text-ink leading-none" style={{ fontSize: size * 0.7 }}>
        build<span className="text-gradient-emerald">app</span>
      </span>
    </div>
  );
}
