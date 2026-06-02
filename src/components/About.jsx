import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-heading">

          <span className="about-tag">
            SYSTEM PROFILE
          </span>

          <h2>
            Building Intelligent Systems
          </h2>

        </div>

        <div className="about-grid">

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="card-label">
              BACKGROUND
            </span>

            <h3>Who I Am</h3>

            <p>
              My path into software engineering is unconventional.
              I began as a welder, completed a data science bootcamp,
              and transitioned into full-stack development through
              self-directed learning and relentless project building.
            </p>

            <p>
              That journey taught me how to think beyond code and focus
              on solving operational problems with technology.
            </p>

          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="card-label">
              CURRENT FOCUS
            </span>

            <h3>What I Build</h3>

            <ul className="focus-list">
              <li>AI-powered applications</li>
              <li>Analytics dashboards</li>
              <li>SaaS platforms</li>
              <li>Workflow automation systems</li>
              <li>Data intelligence tools</li>
              <li>Scalable backend services</li>
            </ul>

          </motion.div>

        </div>

      </div>

    </section>
  );
}