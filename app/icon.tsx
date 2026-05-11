import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="15" width="14" height="14" rx="3.5" fill="#10b981" />
          <rect x="15" y="3" width="14" height="14" rx="3.5" fill="#6366f1" />
          <circle cx="22" cy="10" r="2.5" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
