"use client";

import Image from "next/image";

const IG_URL = "https://www.instagram.com/dubtech_customs/";

const IG_POSTS = [
  {
    src: "/images/instagram/tile-1.webp",
    alt: "VW Golf MK2 on gold BBS alloys",
  },
  {
    src: "/images/instagram/tile-2.webp",
    alt: "Audi RS6 front at detailing studio",
  },
  {
    src: "/images/instagram/tile-3.webp",
    alt: "Black Audi RS6 Avant side profile",
  },
];

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramStrip() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #7B2CBF 0%, #9D4EDD 100%)",
        padding: "4.5rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(199,125,255,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="ig-strip-inner"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left: text + CTA */}
        <div style={{ flex: "1 1 320px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1rem" }}>
            <InstagramIcon size={20} />
            <span
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 600,
              }}
            >
              Follow us on Instagram
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "0.04em",
              color: "#ffffff",
              lineHeight: 1.0,
              margin: "0 0 0.85rem 0",
            }}
          >
            See the latest builds<br />on Instagram
          </h2>

          <p
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.75)",
              margin: "0 0 1.75rem 0",
              maxWidth: "380px",
            }}
          >
            We post every project as it happens — before, during and after.
          </p>

          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-cta-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              fontWeight: 700,
              color: "#7B2CBF",
              background: "#ffffff",
              padding: "0.9rem 1.75rem",
              textDecoration: "none",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = "#7B2CBF";
            }}
          >
            <InstagramIcon size={15} />
            Follow @dubtech_customs
          </a>
        </div>

        {/* Right: 3 decorative IG tiles */}
        <div
          className="ig-posts"
          style={{ display: "flex", gap: "0.85rem", flexShrink: 0 }}
        >
          {IG_POSTS.map((post, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                position: "relative",
                width: "130px",
                height: "130px",
                flexShrink: 0,
                borderRadius: "4px",
                overflow: "hidden",
                /* Instagram-style gradient border via box-shadow */
                outline: "2px solid transparent",
                boxShadow: "0 0 0 2px #C77DFF, 0 0 0 4px rgba(157,78,221,0.4)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 0 0 2px #ffffff, 0 0 0 4px rgba(199,125,255,0.5), 0 8px 24px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 0 2px #C77DFF, 0 0 0 4px rgba(157,78,221,0.4)";
              }}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                style={{
                  objectFit: "cover",
                  filter: "saturate(1.1) contrast(1.05)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(123,44,191,0.14), rgba(157,78,221,0.07))",
                  mixBlendMode: "multiply",
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .ig-posts { display: none !important; }
        }
      `}</style>
    </section>
  );
}
