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
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "600px",
            background:
              "radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.06) 45%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* Main content */}
        <div style={{ position: "relative", padding: "0 2.5rem 5rem" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "1px",
                background: "var(--accent-mid)",
              }}
            />
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
              Brentwood, Essex — Est. Custom Car Specialists
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
              used VW parts &amp; 4x4 specialist. Over 7,000 builds
              documented. 4.5★ on Google.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#services"
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "var(--bg)",
                  background: "var(--accent-mid)",
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
                }}
              >
                07469 257945
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
                4x4 Specialist&nbsp;&nbsp;·&nbsp;&nbsp;
                South Weald, Brentwood Essex&nbsp;&nbsp;·&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
