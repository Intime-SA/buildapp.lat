import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BuildApp — Apps que venden más en tu Tienda Nube";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          position: "relative",
          fontFamily: '"Inter"',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 30%, rgba(16,185,129,0.32) 0%, transparent 60%), radial-gradient(ellipse 55% 55% at 50% 75%, rgba(99,102,241,0.32) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 15% 50%, rgba(236,72,153,0.14) 0%, transparent 60%)",
          }}
        />

        {/* Logo + wordmark verticalmente apilados — caben en el crop cuadrado de WhatsApp (630x630 centrado) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <svg width="200" height="200" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ba-og-g1" x1="3" y1="29" x2="17" y2="15" gradientUnits="userSpaceOnUse">
                <stop stopColor="#047857" />
                <stop offset="1" stopColor="#34d399" />
              </linearGradient>
              <linearGradient id="ba-og-g2" x1="15" y1="17" x2="29" y2="3" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4f46e5" />
                <stop offset="1" stopColor="#a5b4fc" />
              </linearGradient>
              <radialGradient id="ba-og-g3" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="white" stopOpacity="0.95" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="3" y="15" width="14" height="14" rx="3.5" fill="url(#ba-og-g1)" />
            <rect x="3" y="15" width="14" height="2" rx="1" fill="white" opacity="0.18" />
            <rect x="15" y="3" width="14" height="14" rx="3.5" fill="url(#ba-og-g2)" />
            <rect x="15" y="3" width="14" height="2" rx="1" fill="white" opacity="0.22" />
            <circle cx="22" cy="10" r="3" fill="url(#ba-og-g3)" />
            <circle cx="22" cy="10" r="1.2" fill="white" opacity="0.95" />
          </svg>

          <div style={{ display: "flex", alignItems: "baseline", marginTop: "20px" }}>
            <div
              style={{
                color: "white",
                fontSize: "88px",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                display: "flex",
                lineHeight: 1,
              }}
            >
              <span>build</span>
              <span style={{ color: "#34d399" }}>app</span>
            </div>
            <div
              style={{
                color: "#34d399",
                fontSize: "28px",
                fontWeight: 500,
                marginLeft: "4px",
                display: "flex",
              }}
            >
              .lat
            </div>
          </div>

          <div
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginTop: "28px",
              display: "flex",
              textAlign: "center",
            }}
          >
            Apps que venden más en tu Tienda Nube
          </div>
          <div
            style={{
              color: "#a1a1aa",
              fontSize: "22px",
              fontWeight: 400,
              marginTop: "12px",
              display: "flex",
            }}
          >
            Sin programar · Sin esperar a un dev · 14 días gratis
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
