"use client";

import Image from "next/image";

const IG_URL = "https://www.instagram.com/dubtech_customs";

const IG_POSTS = [
  {
    src: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=400&q=80",
    alt: "Modified car — Dubtech Customs build",
  },
  {
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80",
    alt: "Performance car — Dubtech Customs build",
  },
  {
    src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=400&q=80",
    alt: "Audi build — Dubtech Customs",
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
        background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 50%, var(--surface) 100%)",
        borderTop: "1px solid var(--border-strong)",
        borderBottom: "1px solid var(--border-strong)",
        padding: "4rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(123,44,191,0.15) 0%, transparent 70%)",
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
        {/* Text + CTA */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ color: "var(--accent-light)" }}>
              <InstagramIcon size={22} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                fontWeight: 500,
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
              color: "var(--text)",
              lineHeight: 1,
              margin: "0 0 1.5rem 0",
            }}
          >
            See the latest<br />
            <span style={{ color: "var(--accent-mid)" }}>builds on Instagram</span>
          </h2>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "var(--text)",
              background: "var(--accent)",
              padding: "0.85rem 1.75rem",
              textDecoration: "none",
              transition: "background 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-mid)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(157,78,221,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <InstagramIcon size={15} />
            @dubtech_customs
          </a>
        </div>

        {/* Decorative post squares */}
        <div
          className="ig-posts"
          style={{ display: "flex", gap: "0.75rem" }}
        >
          {IG_POSTS.map((post, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                width: "120px",
                height: "120px",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--border)",
                flexShrink: 0,
                transition: "border-color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-mid)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <Image src={post.src} alt={post.alt} fill style={{ objectFit: "cover" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(15,8,24,0.2)",
                  transition: "background 0.25s ease",
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ig-posts { display: none !important; }
        }
      `}</style>
    </section>
  );
}
