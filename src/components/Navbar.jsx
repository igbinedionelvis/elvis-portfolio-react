import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

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
        threshold: 0.6, // controls when section becomes active
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
          {navItem("projects", "Projects")}
          {navItem("contact", "Contact")}
        </div>
      </div>
    </nav>
  );
}