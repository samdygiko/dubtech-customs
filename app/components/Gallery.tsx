import Image from "next/image";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
    alt: "Audi A4 silver saloon on open road — VW Group platform, Stage 1 remap candidate",
    caption: "Golf MK7 · Stage 2 Remap",
    span: 2,
    aspect: "16/10" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
    alt: "VW Polo front detail under dramatic lighting in workshop bay",
    caption: "Polo 6R · Diamond Cut Refurb",
    span: 1,
    aspect: "3/4" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80",
    alt: "Volkswagen Transporter T5 in workshop awaiting full parts strip",
    caption: "Transporter T5 · Full Parts Strip",
    span: 1,
    aspect: "4/3" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
    alt: "Custom alloy wheel build on Passat B8 — finished and fitted",
    caption: "Passat B8 · Custom Wheel Build",
    span: 1,
    aspect: "1/1" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80",
    alt: "VW Caddy under workshop lights during full build project",
    caption: "Caddy · Workshop Build",
    span: 1,
    aspect: "3/4" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80",
    alt: "Golf GTI with ECU tune complete — Dubtech Customs dyno session",
    caption: "Golf GTI · ECU Tune Complete",
    span: 2,
    aspect: "16/10" as const,
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "5rem 2.5rem",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
          <div style={{ width: "24px", height: "1px", background: "linear-gradient(to right, var(--accent-light), transparent)" }} />
          <span
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              fontWeight: 600,
            }}
          >
            Previous Work
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            letterSpacing: "0.04em",
            color: "var(--text)",
            lineHeight: 1,
            margin: 0,
            textShadow: "0 0 40px rgba(157, 78, 221, 0.15)",
          }}
        >
          THE WORK
        </h2>
      </div>

      {/* Asymmetric grid — 4 columns */}
      <div
        className="gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.75rem",
        }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <div
            key={i}
            className="gallery-card"
            style={{
              gridColumn: `span ${item.span}`,
              aspectRatio: item.aspect,
              position: "relative",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              cursor: "default",
              transition: "border-color 0.25s ease",
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="gallery-img"
              style={{
                objectFit: "cover",
                transition: "transform 0.4s ease",
                filter: "saturate(1.1) contrast(1.05)",
              }}
            />
            {/* Purple duotone overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(123,44,191,0.14), rgba(157,78,221,0.07))",
                mixBlendMode: "multiply",
              }}
            />
            {/* Dark gradient for caption */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(15,8,24,0.80) 0%, transparent 50%)",
              }}
            />
            {/* Caption */}
            <span
              style={{
                position: "absolute",
                bottom: "0.85rem",
                left: "0.9rem",
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                fontWeight: 600,
              }}
            >
              {item.caption}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .gallery-card:hover { border-color: var(--border-strong) !important; }
          .gallery-card:hover .gallery-img { transform: scale(1.04); }
        }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-grid .gallery-card { grid-column: span 1 !important; aspect-ratio: 4/3 !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
