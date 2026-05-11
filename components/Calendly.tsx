"use client";

import { useEffect } from "react";

export default function Calendly({
  url = "https://calendly.com/buildapp-lat/demo-15min",
  height = 520,
}: {
  url?: string;
  height?: number;
}) {
  useEffect(() => {
    const existing = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
    const existingCss = document.querySelector('link[href*="calendly.com/assets/external/widget.css"]');
    if (!existingCss) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-xl overflow-hidden border border-border-soft bg-bg-soft/30"
      data-url={`${url}?background_color=0f0f10&text_color=e5e7eb&primary_color=10b981&hide_event_type_details=0&hide_gdpr_banner=1`}
      style={{ minWidth: "320px", height }}
    />
  );
}
