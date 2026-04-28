import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [active, setActive] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  const hoverTimeout = useRef(null);

  const lines = [
    "ELVIS IGBINEDION",
    "FULL STACK DEVELOPER",
    "AI • DATA SCIENCE • SYSTEMS",
    "GITHUB: github.com/yourname",
    "TWITTER: @yourhandle",
    "EMAIL: your@email.com",
    "STATUS: BUILDING INTELLIGENT SYSTEMS..."
  ];

  // smooth activation (prevents flicker)
  const handleEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setActive(true);
      setShowTerminal(true);
    }, 120); // slight delay = premium feel
  };

  const handleLeave = () => {
    clearTimeout(hoverTimeout.current);
    setActive(false);
    setShowTerminal(false);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className={`hero-content ${active ? "fade-out" : ""}`}>
          <span className="badge">AVAILABLE FOR WORK</span>

          <h1>
            Hi, I'm <span>Elvis</span><br />
            I build intelligent systems.
          </h1>

          <p className="subtext">
            I design AI-driven tools, dashboards, and interactive web experiences.
          </p>

          <div className="cta-row">
            <button className="primary-btn">View Projects</button>
            <button className="secondary-btn">Contact</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`profile ${active ? "active" : ""}`}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {/* IMAGE */}
          <div className="profile-image">
            <img src="/me1.jpg" className="img1" alt="Primary headshot" />
            <img src="/me2.jpg" className="img2" alt="Secondary headshot" />
          </div>

          {/* PANEL */}
          <div className="profile-panel">
            <div className="scan-line"></div>

            <div className="terminal">
              {showTerminal &&
                lines.map((line, i) => (
                  <Typing
                    key={i}
                    text={line}
                    delay={i * 500}
                  />
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================
   TYPEWRITER (FIXED)
========================= */

function Typing({ text, delay }) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setOutput(text.slice(0, i));

        if (i >= text.length) {
          clearInterval(interval);
        }
      }, 18); // faster + smoother
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <p className="terminal-line">{output}</p>;
}