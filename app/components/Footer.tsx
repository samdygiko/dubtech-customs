"use client";

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
            {["Used VW Parts", "Professional Wheel Refurb", "Vehicle Remapping", "Recovery & Transportation", "MOTs"].map((s) => (
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
              style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @dubtech_customs
            </a>
          </div>
        </div>
      </div>

      {/* Social icons row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.25rem 2.5rem 0",
        }}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/dubtech_customs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dubtech Customs on Instagram"
          style={{ color: "var(--dim)", transition: "color 0.2s", display: "flex" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--dim)")}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        {/* Phone */}
        <a
          href="tel:07469257945"
          aria-label="Call Dubtech Customs"
          style={{ color: "var(--dim)", transition: "color 0.2s", display: "flex" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--dim)")}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2.5rem 1.25rem",
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
