export default function Hero() {
  return (
    
    <section className="hero" id="hero">
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <div className="hero-content">
          <p className="badge">Available for freelance work</p>

          <h1>
            Building intelligent systems<br />
            & modern digital experiences.
          </h1>

          <p className="subtext">
            I am Elvis — a developer focused on data-driven applications,
            AI systems, and clean user interfaces.
          </p>

          <div className="cta-row">
            <button className="primary-btn">View Projects</button>
            <button className="secondary-btn">Contact Me</button>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="hero-image">
          <img src="/headshot1.jpg" alt="Elvis" />
        </div>

      </div>
    </section>
  );
}