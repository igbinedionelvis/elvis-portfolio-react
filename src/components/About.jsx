import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-container"></div><div className="about-story">

        <div className="timeline-column">

          <div className="timeline-line"></div>

          <div className="timeline-node active">

            <div className="timeline-icon">
              ⚒
            </div>

            <div>

              <h4>Precision Welding</h4>

              <p>
                Foundations of craftsmanship
              </p>

            </div>

          </div>

          <div className="timeline-node">
            <span>02</span>
            <h4>Data Science</h4>
          </div>

          <div className="timeline-node">
            <span>03</span>
            <h4>Full-Stack Development</h4>
          </div>

          <div className="timeline-node">
            <span>04</span>
            <h4>Digital Infrastructure</h4>
          </div>

        </div>

        <div className="story-content">

          <span className="about-tag">
            Building Systems Designed To Last
          </span>

          <h2>
            FROM IRON TO INFRASTRUCTURE
          </h2>

          <p>
            I don’t just write code—I build systems designed to last.
          </p>

          <p>
            My journey into technology began in a precision welding bay,
            where success was measured in millimeters and structural integrity.
            That same discipline, attention to detail, and problem-solving mindset
            now drive my work as a self-taught Full-Stack Developer.
          </p>

          <p>
            I transitioned into software engineering through an intensive
            Data Science bootcamp, developing a strong foundation in analytics,
            data-driven decision-making, and technical problem solving.
            From there, I taught myself modern web development, mastering the
            tools and architectures required to build scalable, user-focused
            applications.
          </p>

          <p>
            Today, I combine analytical thinking with full-stack engineering
            to transform complex ideas into intuitive digital products.
            Whether designing front-end experiences, building backend systems,
            or architecting complete applications, I approach every challenge
            with the same commitment to precision, reliability, and craftsmanship
            that defined my work before tech.
          </p>

          <p>
            My path into software may be unconventional, but it has forged
            the qualities that matter most: adaptability, resilience,
            continuous learning, and the determination to solve difficult
            problems. I don't just adapt to new technologies—I leverage them
            to build meaningful products that create real impact.
          </p>

          <div className="principles-panel">

            <h3>
              Engineering Principles
            </h3>

            <div className="principle">
              <span>Precision Welding</span>
              <span>Code Quality</span>
            </div>

            <div className="principle">
              <span>Structural Integrity</span>
              <span>Scalable Architecture</span>
            </div>

            <div className="principle">
              <span>Blueprint Reading</span>
              <span>System Design</span>
            </div>

            <div className="principle">
              <span>Continuous Improvement</span>
              <span>Lifelong Learning</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

