import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

export function renderOgImage(eyebrow: string, title: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b0b0e 0%, #14142b 55%, #1c1030 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#d92d20",
            }}
          />
          <span style={{ fontSize: 32, fontWeight: 600, color: "#ffffff" }}>
            Request Desk
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 64,
            fontSize: 26,
            fontWeight: 500,
            color: "#8b8bb8",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 58,
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
