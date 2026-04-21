"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontSize: "0.9375rem",
    padding: "0.875rem 1rem",
    outline: "none",
    fontFamily: "var(--font-space), sans-serif",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-space), sans-serif",
    fontSize: "0.65rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--accent-light)",
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: 500,
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="contact-grid"
      >
        {/* Left — info */}
        <div
          style={{
            borderRight: "1px solid var(--border)",
            padding: "5rem 3.5rem 5rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="contact-left"
        >
          <div>
            <span style={labelStyle}>Get In Touch</span>
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                letterSpacing: "0.04em",
                color: "var(--text)",
                lineHeight: 1.0,
                margin: "0 0 2.5rem 0",
              }}
            >
              BOOK YOUR
              <br />
              <span style={{ color: "var(--accent-mid)" }}>BUILD.</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <span style={labelStyle}>Phone</span>
              <a
                href="tel:07469257945"
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "1rem",
                  color: "var(--text)",
                  textDecoration: "none",
                }}
              >
                07469 257945
              </a>
            </div>
            <div>
              <span style={labelStyle}>Address</span>
              <address
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--muted)",
                  fontStyle: "normal",
                  lineHeight: 1.7,
                }}
              >
                Fell&apos;y Farm, Lincolns Ln, South Weald
                <br />
                Brentwood, Essex CM14 5RS
              </address>
            </div>
            <div>
              <span style={labelStyle}>Instagram</span>
              <a
                href="https://www.instagram.com/dubtech_customs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                }}
              >
                @dubtech_customs →
              </a>
            </div>
            <div>
              <span style={labelStyle}>Hours</span>
              <p
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                Mon–Fri: 8:00am – 5:30pm
                <br />
                Sat: by appointment
              </p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div
          style={{
            padding: "5rem 2.5rem 5rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="contact-right"
        >
          {status === "sent" ? (
            <div>
              <p
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "2rem",
                  letterSpacing: "0.04em",
                  color: "var(--accent-mid)",
                  marginBottom: "0.75rem",
                }}
              >
                MESSAGE RECEIVED.
              </p>
              <p style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.9375rem", color: "var(--muted)" }}>
                We&apos;ll be in touch shortly. Or call us directly on 07469 257945.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <label htmlFor="name" style={labelStyle}>Full Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="07700 000000" style={inputStyle} />
                </div>
              </div>
              <div>
                <label htmlFor="message" style={labelStyle}>Tell Us About Your Build</label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Vehicle, service needed, any details..." style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              {status === "error" && (
                <p style={{ fontFamily: "var(--font-space), sans-serif", fontSize: "0.875rem", color: "var(--accent-light)" }}>
                  Something went wrong — call us on 07469 257945 instead.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  alignSelf: "flex-start",
                  background: "var(--accent-mid)",
                  color: "var(--bg)",
                  border: "none",
                  padding: "1rem 2.5rem",
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  cursor: status === "sending" ? "default" : "pointer",
                  opacity: status === "sending" ? 0.6 : 1,
                }}
              >
                {status === "sending" ? "Sending…" : "Send Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        input:focus, textarea:focus { border-color: var(--accent) !important; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-left { border-right: none !important; border-bottom: 1px solid var(--border) !important; padding: 3rem 1.5rem !important; }
          .contact-right { padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
