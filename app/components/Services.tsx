import Image from "next/image";

const SERVICES = [
  {
    num: "01",
    title: "Used VW Parts",
    desc: "Quality used Volkswagen Group parts sourced and sold. Golf, Polo, Audi, SEAT, Skoda — if it's VAG, we've got it.",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=240&q=80",
    imgAlt: "Engine bay — BMW inline-6 with all ancillaries",
  },
  {
    num: "02",
    title: "Professional Wheel Refurb",
    desc: "Professional alloy wheel repair and refinishing. Diamond cut, powder coat, painted — restored to factory spec or better.",
    img: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?auto=format&fit=crop&w=240&q=80",
    imgAlt: "Stacked alloy wheels in automotive workshop",
  },
  {
    num: "03",
    title: "Vehicle Remapping",
    desc: "ECU tuning for power, torque and efficiency gains. Stage 1 and Stage 2 maps across all makes and models. Performance unlocked.",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=240&q=80",
    imgAlt: "Modern car dashboard and instrument cluster",
  },
  {
    num: "04",
    title: "Recovery & Transportation",
    desc: "24/7 vehicle recovery and transportation across Essex and London. Broken down or just moving — we'll get you sorted.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=240&q=80",
    imgAlt: "Rear of a European car on open road at dusk",
  },
  {
    num: "05",
    title: "MOTs",
    desc: "Approved MOT testing centre. Fast, honest results with same-day retests available. No surprises, no nonsense.",
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=240&q=80",
    imgAlt: "Brake disc and caliper assembly — garage inspection",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "5rem 2.5rem 3.5rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
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
            What We Do
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
            THE FULL PACKAGE
          </h2>
        </div>
        <a
          href="#contact"
          style={{
            fontFamily: "var(--font-space), sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--accent-light)",
            textDecoration: "none",
            fontWeight: 500,
            borderBottom: "1px solid var(--accent)",
            paddingBottom: "2px",
          }}
        >
          Get a quote →
        </a>
      </div>

      {/* Services grid — 6-column base, items 1-3 span 2, items 4-5 span 3 */}
      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
        }}
      >
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            className="service-card"
            style={{
              gridColumn: i < 3 ? "span 2" : "span 3",
              padding: "2.5rem 2rem",
              borderRight: i === 2 || i === 4 ? "none" : "1px solid var(--border)",
              borderBottom: i < 3 ? "1px solid var(--border)" : "none",
              background: "var(--surface)",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Photo top-right */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: "110px",
                height: "80px",
                overflow: "hidden",
                opacity: 0.35,
                borderRadius: "2px",
              }}
            >
              <Image src={s.img} alt={s.imgAlt} fill style={{ objectFit: "cover" }} />
            </div>

            {/* Number */}
            <div
              className="service-num"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "3.5rem",
                lineHeight: 1,
                color: "var(--accent)",
                marginBottom: "1.25rem",
                letterSpacing: "0.04em",
                opacity: 0.7,
              }}
            >
              {s.num}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "1.6rem",
                letterSpacing: "0.04em",
                color: "var(--text)",
                margin: "0 0 0.85rem 0",
              }}
            >
              {s.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "var(--muted)",
                margin: 0,
                maxWidth: "340px",
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .services-grid .service-card {
            grid-column: span 1 !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .services-grid .service-card:nth-child(odd) {
            border-right: 1px solid var(--border) !important;
          }
          .services-grid .service-card:last-child {
            border-bottom: none !important;
          }
        }
        @media (max-width: 540px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid .service-card {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .services-grid .service-card:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
