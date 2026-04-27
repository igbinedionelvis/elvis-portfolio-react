import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!cursorRef.current) return;

    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    // =========================
    // INTERACTIVE STATES
    // =========================

    const addHover = () => cursorRef.current?.classList.add("cursor-hover");
    const removeHover = () => cursorRef.current?.classList.remove("cursor-hover");

    const addText = () => cursorRef.current?.classList.add("cursor-text");
    const removeText = () => cursorRef.current?.classList.remove("cursor-text");

    // =========================
    // TARGET ELEMENTS
    // =========================

    const hoverables = document.querySelectorAll("a, button");
    const textElements = document.querySelectorAll("p, h1, h2, h3, span");

    hoverables.forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);

      // OPTIONAL: Magnetic effect (subtle)
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0, 0)";
      });
    });

    textElements.forEach(el => {
      el.addEventListener("mouseenter", addText);
      el.addEventListener("mouseleave", removeText);
    });

    window.addEventListener("mousemove", move);

    // =========================
    // SMOOTH FOLLOW LOOP
    // =========================

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${pos.current.x}px, ${pos.current.y}px)
          translate(-50%, -50%)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();

    // =========================
    // CLEANUP
    // =========================

    return () => {
      window.removeEventListener("mousemove", move);

      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });

      textElements.forEach(el => {
        el.removeEventListener("mouseenter", addText);
        el.removeEventListener("mouseleave", removeText);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor-glow" />;
}