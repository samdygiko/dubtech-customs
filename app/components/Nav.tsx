"use client";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        background: "rgba(6,6,10,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontSize: "1.5rem",
          letterSpacing: "0.08em",
          color: "var(--text)",
          textDecoration: "none",
          lineHeight: 1,
        }}
      >
        DUBTECH
        <span style={{ color: "var(--accent-mid)", marginLeft: "0.15em" }}>
          CUSTOMS
        </span>
      </a>

      {/* Nav links */}
      <ul
        className="nav-links"
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {["Services", "About", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="tel:07469257945"
        style={{
          fontFamily: "var(--font-space), sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "var(--bg)",
          background: "var(--accent-mid)",
          padding: "0.6rem 1.4rem",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--accent-light)")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--accent-mid)")}
      >
        Call Now
      </a>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
