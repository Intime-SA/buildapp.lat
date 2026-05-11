import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(ellipse 70% 70% at 25% 20%, rgba(16,185,129,0.45) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(99,102,241,0.5) 0%, transparent 60%)",
          }}
        />
        <svg width="340" height="340" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
          <rect x="3" y="15" width="14" height="14" rx="3.5" fill="#10b981" />
          <rect x="15" y="3" width="14" height="14" rx="3.5" fill="#6366f1" />
          <circle cx="22" cy="10" r="2.8" fill="white" />
        </svg>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
