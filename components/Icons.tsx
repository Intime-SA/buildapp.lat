"use client";

/**
 * Custom icon set for BuildApp.
 * Diseño geométrico propio — bloques rounded + circles + arrows angulares.
 * Coherente con la marca (mismas formas que el logo).
 * Reemplazan iconos estándar de lucide en spots clave (Hero CTA, badges, accents).
 */

type IconProps = { size?: number; className?: string; strokeWidth?: number };

const base = "inline-block flex-shrink-0";

export function IconSpark({ size = 18, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" fill="currentColor" />
      <circle cx="19" cy="5" r="1.2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function IconBlocks({ size = 18, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <rect x="3" y="11" width="10" height="10" rx="2.5" fill="currentColor" opacity="0.85" />
      <rect x="11" y="3" width="10" height="10" rx="2.5" fill="currentColor" />
    </svg>
  );
}

export function IconBolt({ size = 18, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" fill="currentColor" />
    </svg>
  );
}

export function IconArrowUpRight({ size = 18, className = "", strokeWidth = 2 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlay({ size = 14, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
    </svg>
  );
}

export function IconCart({ size = 18, className = "", strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M4 4h2l2 13h11l2-9H7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconEye({ size = 14, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

export function IconEyeOff({ size = 14, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.6 6.5C10.4 6.2 11.2 6 12 6c6 0 10 6 10 6s-1 1.5-2.5 3M14.4 17.5C13.6 17.8 12.8 18 12 18c-6 0-10-6-10-6s1-1.5 2.5-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield({ size = 18, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChat({ size = 18, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M4 6a3 3 0 013-3h10a3 3 0 013 3v8a3 3 0 01-3 3h-5l-4 4v-4H7a3 3 0 01-3-3V6z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="13" cy="10" r="1" fill="currentColor" />
      <circle cx="17" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconChevron({ size = 16, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlus({ size = 16, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconQuote({ size = 28, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M6 17c-1.5 0-3-1.5-3-3.5C3 9.5 6 6 10 5v2c-2 1-3 3-3 5h1c1.5 0 3 1.5 3 3.5S8.5 19 7 19c0 0-1 0-1-2zM16 17c-1.5 0-3-1.5-3-3.5 0-4 3-7.5 7-8.5v2c-2 1-3 3-3 5h1c1.5 0 3 1.5 3 3.5S18.5 19 17 19c0 0-1 0-1-2z" fill="currentColor" />
    </svg>
  );
}

export function IconCheck({ size = 16, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu({ size = 18, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconX({ size = 18, className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={`${base} ${className}`}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
