"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = scrollTop / (scrollHeight - clientHeight);
      bar.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 200, pointerEvents: "none" }}>
      <div
        ref={barRef}
        style={{
          height: "100%",
          transformOrigin: "left",
          transform: "scaleX(0)",
          background: "linear-gradient(to right, var(--accent), var(--accent-light))",
        }}
      />
    </div>
  );
}
