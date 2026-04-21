export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO / NAME */}
        <div className="logo">
          Elvis
        </div>

        {/* NAV LINKS */}
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}