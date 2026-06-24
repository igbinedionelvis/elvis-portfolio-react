import { useEffect, useState } from "react";
import { Grid2X2, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -50% 0px",
        threshold: 0,// controls when section becomes active
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItem = (id, label) => (
    <a
      href={`#${id}`}
      className={active === id ? "active" : ""}
    >
      {label}
    </a>
  );

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">ELVIS</div>

        <div className="nav-links">
          {navItem("home", "Home")}
          {navItem("about", "About")}
          {navItem("projects", "Projects")}
          {navItem("skills", "Skills")}
          {navItem("message", "Message")}
          {navItem("contact", "Contact")}
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          Available
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`hamburger ${menuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {navItem("home", "Home")}
          {navItem("about", "About")}
          {navItem("projects", "Projects")}
          {navItem("skills", "Skills")}
          {navItem("message", "Message")}
          {navItem("contact", "Contact")}
        </div>
      </div>
    </nav>
  );
}