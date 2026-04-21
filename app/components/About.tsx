const STATS = [
  { value: "4.5★", label: "Google Rating" },
  { value: "26", label: "Verified Reviews" },
  { value: "7K+", label: "Instagram Followers" },
  { value: "Essex", label: "Based in Brentwood" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Stats bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderBottom: "1px solid var(--border)",
        }}
        className="stats-grid"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: "2.5rem 2rem",
              borderRight: i < 3 ? "1px solid var(--border)" : "none",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                letterSpacing: "0.04em",
                color: "var(--accent-mid)",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* About copy */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="about-grid"
      >
        {/* Left */}
        <div
          style={{
            padding: "5rem 3.5rem 5rem 2.5rem",
            borderRight: "1px solid var(--border)",
          }}
          className="about-left"
        >
          <span
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              display: "block",
              marginBottom: "1.5rem",
              fontWeight: 500,
            }}
          >
            About Us
          </span>
          <h2
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              letterSpacing: "0.04em",
              color: "var(--text)",
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            WHERE STANDARDS
            <br />
            <span style={{ color: "var(--accent-mid)" }}>DON&apos;T</span>
            <br />
            EXIST.
          </h2>
        </div>

        {/* Right */}
        <div
          style={{
            padding: "5rem 2.5rem 5rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="about-right"
        >
          <p
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "var(--muted)",
              marginBottom: "1.5rem",
            }}
          >
            Dubtech Customs Limited is an Essex-based specialist workshop
            for drivers who refuse to settle. From ECU remapping that
            unlocks genuine performance to precision alloy wheel refurbishment,
            we treat every car like it&apos;s our own.
          </p>
          <p
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "var(--muted)",
              marginBottom: "2.5rem",
            }}
          >
            As an approved MOT testing centre and 4x4 specialist, we cover
            everything from daily drivers to US imports. Our VW parts
            inventory and recovery service means we&apos;re the one-stop
            workshop for the serious car enthusiast.
          </p>

          <div
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                fontWeight: 500,
              }}
            >
              Find Us
            </span>
            <span
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.9375rem",
                color: "var(--text)",
                lineHeight: 1.6,
              }}
            >
              Fell&apos;y Farm, Lincolns Ln, South Weald
              <br />
              Brentwood, Essex CM14 5RS
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div:nth-child(2) { border-right: none !important; }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) { border-bottom: 1px solid var(--border); }
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-left { border-right: none !important; border-bottom: 1px solid var(--border) !important; padding: 3rem 1.5rem !important; }
          .about-right { padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
