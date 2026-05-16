"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IG_URL = "https://www.instagram.com/dubtech_customs";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
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
          background: "rgba(15,8,24,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "var(--text)",
            textDecoration: "none",
            lineHeight: 1,
          }}
        >
          <Image
            src="/images/dubtech-logo.webp"
            alt="Dubtech Customs"
            width={192}
            height={192}
            priority
            style={{ height: "48px", width: "auto", display: "block" }}
          />
          <span
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "2.25rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              lineHeight: 1,
            }}
          >
            DUBTECH
            <span style={{ color: "var(--accent-mid)", marginLeft: "0.15em" }}>CUSTOMS</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="nav-links" style={{ display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
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
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Instagram + Call + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {/* Instagram (desktop) */}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-ig"
            style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <InstagramIcon size={16} />
            <span style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.72rem", letterSpacing: "0.06em" }}>
              @dubtech_customs
            </span>
          </a>

          {/* Call Now (desktop) */}
          <a
            href="tel:07469257945"
            className="nav-cta"
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
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent-mid)")}
          >
            Call Now
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: "none",
              border: "1px solid var(--border-strong)",
              padding: "0.5rem 0.85rem",
              cursor: "pointer",
              color: "var(--text)",
              display: "none",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Menu
          </button>
        </div>
      </nav>

      {/* Full-screen overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem 2.5rem",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--muted)",
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" />
              <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Close
          </button>

          {/* Glow */}
          <div style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(123,44,191,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Nav links */}
          <nav>
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(3rem, 10vw, 6rem)",
                  letterSpacing: "0.04em",
                  color: "var(--text)",
                  textDecoration: "none",
                  lineHeight: 1.05,
                  animation: "overlayLinkIn 0.4s ease forwards",
                  animationDelay: `${i * 60}ms`,
                  opacity: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Instagram below links */}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "2.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              color: "var(--muted)",
              textDecoration: "none",
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.9rem",
              animation: "overlayLinkIn 0.4s ease forwards",
              animationDelay: `${NAV_ITEMS.length * 60 + 60}ms`,
              opacity: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <InstagramIcon size={20} />
            @dubtech_customs
          </a>

          {/* Bottom contact strip */}
          <div style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "2.5rem",
            right: "2.5rem",
            borderTop: "1px solid var(--border)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <a href="tel:07469257945" style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.85rem", color: "var(--muted)", textDecoration: "none" }}>
              07469 257945
            </a>
            <span style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.85rem", color: "var(--dim)" }}>
              South Weald, Brentwood Essex
            </span>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .nav-links { display: none !important; }
          .nav-ig { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @keyframes overlayLinkIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
