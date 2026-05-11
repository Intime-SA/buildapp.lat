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
          justifyContent: "space-between",
          padding: "72px 80px",
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
              "radial-gradient(ellipse 60% 60% at 15% 25%, rgba(16,185,129,0.28) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 85% 75%, rgba(99,102,241,0.28) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 60% 110%, rgba(236,72,153,0.18) 0%, transparent 60%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "20px", zIndex: 1 }}>
          <svg width="64" height="64" viewBox="0 0 32 32">
            <rect x="3" y="15" width="14" height="14" rx="3.5" fill="#10b981" />
            <rect x="15" y="3" width="14" height="14" rx="3.5" fill="#6366f1" />
            <circle cx="22" cy="10" r="2.5" fill="white" />
          </svg>
          <div style={{ color: "white", fontSize: "44px", fontWeight: 800, letterSpacing: "-0.04em", display: "flex" }}>
            <span>build</span>
            <span style={{ color: "#34d399" }}>app</span>
          </div>
          <div style={{ color: "#34d399", fontSize: "20px", alignSelf: "flex-end", marginBottom: "8px", marginLeft: "-8px" }}>
            .lat
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div style={{ color: "white", fontSize: "82px", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, display: "flex", flexWrap: "wrap" }}>
            <span>Apps que venden más</span>
          </div>
          <div style={{ color: "#a1a1aa", fontSize: "82px", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, display: "flex", marginTop: "4px" }}>
            <span>en tu Tienda Nube.</span>
          </div>
          <div style={{ color: "#a1a1aa", fontSize: "26px", fontWeight: 400, marginTop: "28px", display: "flex" }}>
            <span>Sin programar · Sin esperar a un dev · 14 días gratis</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1 }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "999px", border: "1px solid rgba(16,185,129,0.3)", background: "rgba(16,185,129,0.08)", color: "#34d399", fontSize: "20px", fontWeight: 600 }}>
              <span>● App Partner de Tienda Nube</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", padding: "10px 18px", borderRadius: "999px", border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)", color: "#a5b4fc", fontSize: "20px", fontWeight: 600 }}>
              <span>Tiendas en LATAM <span style={{ fontSize: "16px" }}>(Argentina, Chile, Colombia, México, Perú, etc.)</span></span>
            </div>
          </div>
          <div style={{ color: "#10b981", fontSize: "24px", fontWeight: 500, display: "flex" }}>
            <span>buildapp.lat</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
