import Image from "next/image";

const SERVICES = [
  {
    num: "01",
    title: "Used VW Parts",
    desc: "Quality used parts for Volkswagen Golf, Polo, Transporter, Passat and more. Tested, catalogued, ready to fit.",
    img: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&w=240&q=80",
    imgAlt: "Used Volkswagen engine and drivetrain parts laid out in workshop",
  },
  {
    num: "02",
    title: "Professional Wheel Refurb",
    desc: "Kerbed, corroded or tired alloys brought back to showroom finish. Diamond cut, powder coat and full colour change available.",
    img: "https://images.unsplash.com/photo-1611921561569-ba6b02184efe?auto=format&fit=crop&w=400&q=80",
    imgAlt: "Refurbished alloy wheel detail",
  },
  {
    num: "03",
    title: "Vehicle Remapping",
    desc: "Stage 1 and Stage 2 ECU remaps for performance, economy or both. Dyno-proven results across the VAG range.",
    img: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&w=240&q=80",
    imgAlt: "Laptop connected to OBD port for ECU remap on VW Golf",
  },
  {
    num: "04",
    title: "Recovery & Transportation",
    desc: "24/7 vehicle recovery and transportation across the region. Low-loader and spec-lift available, insured and trade-approved.",
    img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=240&q=80",
    imgAlt: "Recovery truck transporting vehicle on low-loader at night",
  },
  {
    num: "05",
    title: "MOTs",
    desc: "Class 4 MOTs carried out in-house. Honest assessments, clear advice, no upsells.",
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=240&q=80",
    imgAlt: "Brake disc and caliper assembly during in-house MOT inspection",
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
              What We Do
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

      {/* Services grid — 6-col: items 0-2 span 2, items 3-4 span 3 */}
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
              background: "#1A0F24",
              border: `1px solid rgba(123,44,191,0.30)`,
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Thumbnail top-right with duotone */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: "110px",
                height: "80px",
                overflow: "hidden",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            >
              <Image
                src={s.img}
                alt={s.imgAlt}
                fill
                style={{ objectFit: "cover", filter: "saturate(1.1) contrast(1.05)", opacity: 0.4 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(123,44,191,0.14), rgba(157,78,221,0.07))",
                  mixBlendMode: "multiply",
                }}
              />
            </div>

            {/* Number */}
            <div
              className="service-num"
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              {s.num}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "1.75rem",
                letterSpacing: "0.04em",
                color: "var(--text)",
                margin: "0 0 0.85rem 0",
                lineHeight: 1.05,
              }}
            >
              {s.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "0.9rem",
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
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid .service-card { grid-column: span 1 !important; border-right: none !important; border-bottom: 1px solid rgba(123,44,191,0.30) !important; }
          .services-grid .service-card:nth-child(odd) { border-right: 1px solid rgba(123,44,191,0.30) !important; }
          .services-grid .service-card:last-child { border-bottom: none !important; }
        }
        @media (max-width: 540px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-grid .service-card { border-right: none !important; border-bottom: 1px solid rgba(123,44,191,0.30) !important; }
          .services-grid .service-card:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
