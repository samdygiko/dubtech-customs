import Image from "next/image";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1622199678703-5eb7d55ad77f?auto=format&fit=crop&w=800&q=80",
    alt: "Volkswagen Golf MK7 — silver hatchback front view",
    label: "VW Golf Remap",
    span: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?auto=format&fit=crop&w=600&q=80",
    alt: "Alloy wheel refurbishment — polished diamond cut finish",
    label: "Wheel Refurb",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    alt: "Engine bay — clean installation with all ancillaries",
    label: "Engine Work",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80",
    alt: "Modern European car interior dashboard",
    label: "Interior Detail",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1632823471565-1ecdf5e50b51?auto=format&fit=crop&w=600&q=80",
    alt: "Gearbox and transmission — 6-speed manual",
    label: "Gearbox Swap",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    alt: "Lowered sports car — stance build side profile",
    label: "Stance Build",
    span: 2,
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
        <span
          style={{
            fontFamily: "var(--font-space), sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent-light)",
            display: "block",
            marginBottom: "0.75rem",
            fontWeight: 500,
          }}
        >
          Previous Work
        </span>
        <h2
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            letterSpacing: "0.04em",
            color: "var(--text)",
            lineHeight: 1,
            margin: 0,
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
              aspectRatio: item.span === 2 ? "16/10" : "4/3",
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
              style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(15,8,24,0.75) 0%, transparent 55%)",
              }}
            />
            {/* Label */}
            <span
              style={{
                position: "absolute",
                bottom: "0.75rem",
                left: "0.85rem",
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                fontWeight: 500,
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .gallery-card:hover {
            border-color: var(--border-strong) !important;
          }
          .gallery-card:hover .gallery-img {
            transform: scale(1.04);
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .gallery-grid .gallery-card {
            grid-column: span 1 !important;
            aspect-ratio: 4/3 !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
