const SERVICES = [
  {
    num: "01",
    title: "Vehicle Remapping",
    desc: "ECU tuning for power, torque and efficiency gains. Stage 1 and Stage 2 maps across all makes and models. Performance unlocked.",
  },
  {
    num: "02",
    title: "Wheel Refurbishment",
    desc: "Professional alloy wheel repair and refinishing. Diamond cut, powder coat, painted — restored to factory spec or better.",
  },
  {
    num: "03",
    title: "MOT Testing",
    desc: "Approved MOT testing centre. Fast, honest results with same-day retests available. No surprises, no nonsense.",
  },
  {
    num: "04",
    title: "Used VW Parts",
    desc: "Quality used Volkswagen Group parts sourced and sold. Golf, Polo, Audi, SEAT, Skoda — if it's VAG, we've got it.",
  },
  {
    num: "05",
    title: "Recovery & Transport",
    desc: "24/7 vehicle recovery and transportation across Essex and London. Broken down or just moving — we'll get you sorted.",
  },
  {
    num: "06",
    title: "4x4 & US Imports",
    desc: "Specialist servicing and modification for 4x4 vehicles and US specification imports. Approved 4x4 centre.",
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

      {/* Services grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
        className="services-grid"
      >
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            className="service-card"
            style={{
              padding: "2.5rem 2rem",
              borderRight: (i % 3 !== 2) ? "1px solid var(--border)" : "none",
              borderBottom: i < 3 ? "1px solid var(--border)" : "none",
              background: "transparent",
              cursor: "default",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "3.5rem",
                lineHeight: 1,
                color: "var(--accent)",
                marginBottom: "1.25rem",
                letterSpacing: "0.04em",
                opacity: 0.6,
              }}
            >
              {s.num}
            </div>
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
            <p
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "var(--muted)",
                margin: 0,
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .service-card:nth-child(2n) { border-right: none !important; }
          .service-card:nth-child(1),
          .service-card:nth-child(2),
          .service-card:nth-child(3),
          .service-card:nth-child(4) { border-bottom: 1px solid var(--border) !important; }
        }
        @media (max-width: 540px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .service-card { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
        }
      `}</style>
    </section>
  );
}
