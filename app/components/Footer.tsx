export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "3rem",
          padding: "4rem 2.5rem",
          borderBottom: "1px solid var(--border)",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "1.75rem",
              letterSpacing: "0.06em",
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            DUBTECH
            <span style={{ color: "var(--accent-mid)", marginLeft: "0.15em" }}>CUSTOMS</span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: "300px",
            }}
          >
            Custom car specialists in Brentwood, Essex.
            Remapping, wheel refurb, MOT, VW parts and more.
          </p>
        </div>

        {/* Services */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              display: "block",
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Services
          </span>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {["Vehicle Remapping", "Wheel Refurbishment", "MOT Testing", "Used VW Parts", "Recovery & Transport", "4x4 Specialist"].map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                }}
              >
                {s}
              </span>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              display: "block",
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Contact
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            <a
              href="tel:07469257945"
              style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none" }}
            >
              07469 257945
            </a>
            <span style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.6 }}>
              Fell&apos;y Farm, Lincolns Ln
              <br />South Weald, Brentwood CM14 5RS
            </span>
            <a
              href="https://www.instagram.com/dubtech_customs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none" }}
            >
              @dubtech_customs →
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 2.5rem",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.75rem", color: "var(--dim)" }}>
          © {year} Dubtech Customs Limited. All rights reserved.
        </span>
        <a
          href="https://dygiko.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.75rem", color: "var(--dim)", textDecoration: "none" }}
        >
          Site by Dygiko
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </footer>
  );
}
