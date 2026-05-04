import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [active, setActive] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const hoverTimeout = useRef(null);
  const terminalTimeout = useRef(null);

  const lines = [
    "ELVIS IGBINEDION",
    "FULL STACK DEVELOPER",
    "AI • DATA SCIENCE • SYSTEMS",
    "GITHUB: igbinedionelvis",
    "LINKEDIN: igbinedion-elvis",
    "TWITTER: @IamFame88",
    "EMAIL: eligbinosa@gmail.com",
    "STATUS: ACTIVE",
    "OBJECTIVE: BUILDING INTELLIGENT SYSTEMS..."
  ];

  /* =========================
     HOVER HANDLERS
  ========================= */

  const handleEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setActive(true);

      terminalTimeout.current = setTimeout(() => {
        setShowTerminal(true);
      }, 350);
    }, 120);
  };

  const handleLeave = () => {
    clearTimeout(hoverTimeout.current);
    clearTimeout(terminalTimeout.current);

    setActive(false);
    setShowTerminal(false);
    setTilt({ x: 0, y: 0 });
  };

  /* =========================
     PARALLAX TILT
  ========================= */

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * 8,   // vertical tilt
      y: x * 10   // horizontal tilt
    });
  };

  return (
    <section className={`hero ${active ? "active" : ""}`} id="home">
      <div className="hero-wrapper">

        {/* LEFT */}
        <div className="hero-content">
          <span className="badge">AVAILABLE FOR WORK</span>

          <h1 className="hero-title">
            Hi, I’m <span>Elvis</span>
            <br />
            <span className="headline-strong">
              I build AI-powered dashboards & automation systems
            </span>
          </h1>

          <p className="subtext">
            From real-time analytics dashboards to intelligent automation workflows,
            I help businesses reduce manual work, uncover insights, and scale smarter.
          </p>

          {/* 🔥 TECH STACK */}
          <div className="tech-stack">
            <img src="/icons/react.svg" alt="React" />
            <img src="/icons/js.svg" alt="JavaScript" />
            <img src="/icons/css.svg" alt="CSS" />
            <img src="/icons/node.svg" alt="Node" />
          </div>

          {/* 🔥 BUTTONS */}
          <div className="hero-actions">
            <button className="primary-btn">View Projects</button>
            <button className="secondary-btn">Contact</button>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`profile ${active ? "active" : ""}`}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMouseMove}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          {/* IMAGE */}
          <div className="profile-image">
            <img src="/me1.jpg" className="img1" />
            <img src="/me2.jpg" className="img2" />
          </div>

          {/* PANEL */}
          <div className="profile-panel">
            <div className="scan-line"></div>

            <div className="terminal">
              {showTerminal &&
                lines.map((line, i) => (
                  <Typing key={i} text={line} delay={i * 450} />
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================
   TYPEWRITER
========================= */

function Typing({ text, delay }) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setOutput(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 16);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <p className="terminal-line">{output}</p>;
}