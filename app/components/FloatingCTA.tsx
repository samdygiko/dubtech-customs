"use client";

export default function FloatingCTA() {
  return (
    <>
      <a
        href="tel:07469257945"
        className="floating-cta"
        aria-label="Call Dubtech Customs"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 90,
          display: "none",
          alignItems: "center",
          gap: "0.55rem",
          fontFamily: "var(--font-space), sans-serif",
          fontSize: "0.8rem",
          letterSpacing: "0.06em",
          fontWeight: 700,
          color: "#ffffff",
          background: "var(--accent)",
          padding: "0.85rem 1.4rem",
          textDecoration: "none",
          boxShadow: "0 4px 24px rgba(123,44,191,0.45)",
          transition: "background 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--accent-mid)";
          e.currentTarget.style.boxShadow = "0 4px 32px rgba(157,78,221,0.55)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--accent)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(123,44,191,0.45)";
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Us
      </a>

      <style>{`
        @media (max-width: 960px) {
          .floating-cta { display: flex !important; }
        }
      `}</style>
    </>
  );
}
