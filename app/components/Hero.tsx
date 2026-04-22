"use client";

import Image from "next/image";

const IG_URL = "https://www.instagram.com/dubtech_customs";

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Hero() {
  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          overflow: "hidden",
          paddingTop: "64px",
        }}
      >
        {/* Background photo */}
        <Image
          src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1920&q=80"
          alt="Modified VW Golf — dark moody automotive photography"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />

        {/* Purple duotone overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,8,24,0.97) 0%, rgba(15,8,24,0.82) 55%, rgba(31,18,48,0.60) 100%)",
          }}
        />

        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            bottom: "25%",
            right: "15%",
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(123,44,191,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", padding: "0 2.5rem 5rem" }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "2rem", height: "1px", background: "var(--accent-mid)" }} />
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
              Brentwood, Essex — Custom Car Specialists
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(4.5rem, 12vw, 11rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "var(--text)",
              margin: "0 0 1rem 0",
            }}
          >
            CUSTOM.
            <br />
            <span style={{ color: "var(--accent-mid)" }}>PERFORMANCE.</span>
            <br />
            PRECISION.
          </h1>

          {/* Subline + CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
              marginTop: "2.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--muted)",
                maxWidth: "480px",
              }}
            >
              Vehicle remapping, wheel refurbishment, MOT testing,
              used VW parts &amp; recovery. Over 7,000 builds
              documented. 4.5★ on Google.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", alignItems: "flex-end" }}>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="#services"
                  className="cta-shimmer"
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "var(--text)",
                    padding: "1rem 2.25rem",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Our Services
                </a>
                <a
                  href="tel:07469257945"
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "var(--text)",
                    border: "1px solid var(--border-strong)",
                    padding: "1rem 2.25rem",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-mid)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
                >
                  07469 257945
                </a>
              </div>

              {/* Instagram pill */}
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  color: "var(--accent-light)",
                  textDecoration: "none",
                  border: "1px solid rgba(199,125,255,0.25)",
                  padding: "0.5rem 1rem",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(199,125,255,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(199,125,255,0.25)")}
              >
                <InstagramIcon />
                @dubtech_customs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "0.85rem 0",
        }}
      >
        <div className="marquee-track">
          <div className="marquee-inner">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  fontWeight: 500,
                }}
              >
                Vehicle Remapping&nbsp;&nbsp;·&nbsp;&nbsp;
                Wheel Refurbishment&nbsp;&nbsp;·&nbsp;&nbsp;
                MOT Testing&nbsp;&nbsp;·&nbsp;&nbsp;
                Used VW Parts&nbsp;&nbsp;·&nbsp;&nbsp;
                Recovery &amp; Transport&nbsp;&nbsp;·&nbsp;&nbsp;
                South Weald, Brentwood Essex&nbsp;&nbsp;·&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
