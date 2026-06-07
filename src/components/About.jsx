import { motion } from "framer-motion";
import {
  FaHammer,
  FaChartLine,
  FaCode,
  FaCube,
  FaBullseye,
  FaShieldAlt,
  FaRegFileAlt
} from "react-icons/fa";
import { useState } from "react";

export default function About() {

  const [journeyOpen, setJourneyOpen] = useState(false);
  const [principlesOpen, setPrinciplesOpen] = useState(false);

  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-story">

          <div className="timeline-column">

            <div className="timeline-line"></div>

            <div className="desktop-rail">
              <div className="desktop-rail-line"></div>
            </div>

            <div className="timeline-node active">

              <div className="mobile-timeline-header">

                <div className="timeline-icon mobile-only">
                  <FaHammer />
                </div>

              </div>

              <div className="timeline-content">

                <span className="timeline-number">
                  01
                </span>

                <h4>Precision Welding</h4>

                <p>
                  Foundations of craftsmanship
                </p>

              </div>

              <div className="desktop-marker"></div>

            </div>

            <div className="timeline-node active">

              <div className="mobile-timeline-header">

                <div className="timeline-icon mobile-only">
                  <FaChartLine />
                </div>

              </div>

              <div className="timeline-content">

                <span className="timeline-number">
                  02
                </span>

                <h4>Data Science</h4>

                <p>
                  Analytical thinking and insight
                </p>

              </div>

              <div className="desktop-marker"></div>

            </div>

            <div className="timeline-node active">

              <div className="mobile-timeline-header">

                <div className="timeline-icon mobile-only">
                  <FaCode />
                </div>

              </div>

              <div className="timeline-content">

                <span className="timeline-number">
                  03
                </span>

                <h4>Full-Stack Development</h4>

                <p>
                  Building modern applications
                </p>

              </div>

              <div className="desktop-marker"></div>

            </div>

            <div className="timeline-node active">

              <div className="mobile-timeline-header">

                <div className="timeline-icon mobile-only">
                  <FaCube />
                </div>

              </div>

              <div className="timeline-content">

                <span className="timeline-number">
                  04
                </span>

                <h4>Digital Infrastructure</h4>

                <p>
                  Systems designed to scale
                </p>

              </div>

              <div className="desktop-marker"></div>

            </div>

          </div>

          <div className="story-content">

            <span className="about-tag">
              Building Systems Designed To Last
            </span>

            <h2>
              FROM IRON TO{" "}
              <span className="infrastructure-highlight">
                INFRASTRUCTURE
              </span>
            </h2>

            <p className="mission-statement">
              — I DON'T JUST WRITE CODE —
              <span> I BUILD SYSTEMS DESIGNED TO LAST.</span>
            </p>

            <div className="mobile-timeline">

              <div className="mobile-rail"></div>

              <div className="mobile-node">

                <div className="mobile-node-dot"></div>

                <div className="mobile-icon">
                  <FaHammer />
                </div>

                <div className="mobile-content">

                  <span className="timeline-number">
                    01
                  </span>

                  <h4>PRECISION WELDING</h4>

                  <p>
                    Foundations of craftsmanship
                  </p>

                </div>

              </div>

              <div className="mobile-node">

                <div className="mobile-node-dot"></div>

                <div className="mobile-icon">
                  <FaChartLine />
                </div>

                <div className="mobile-content">

                  <span className="timeline-number">
                    02
                  </span>

                  <h4>DATA SCIENCE</h4>

                  <p>
                    Analytical thinking and insight
                  </p>

                </div>

              </div>

              <div className="mobile-node">

                <div className="mobile-node-dot"></div>

                <div className="mobile-icon">
                  <FaCode />
                </div>

                <div className="mobile-content">

                  <span className="timeline-number">
                    03
                  </span>

                  <h4>FULL-STACK DEVELOPMENT</h4>

                  <p>
                    Building modern applications
                  </p>

                </div>

              </div>

              <div className="mobile-node">

                <div className="mobile-node-dot"></div>

                <div className="mobile-icon">
                  <FaCube />
                </div>

                <div className="mobile-content">

                  <span className="timeline-number">
                    04
                  </span>

                  <h4>DIGITAL INFRASTRUCTURE</h4>

                  <p>
                    Systems designed to scale
                  </p>

                </div>

              </div>

            </div>

            <div
              className="mobile-story-header"
              onClick={() => setJourneyOpen(!journeyOpen)}
            >
              <span>MY JOURNEY</span>
              <span>{journeyOpen ? "▲" : "▼"}</span>
            </div>

            {journeyOpen && (
              <div className="mobile-story-copy">
                <>
                  <p>
                    My journey into technology began in a precision welding bay,
                    where success was measured in millimeters and structural integrity.
                    That same discipline, attention to detail, and problem-solving mindset
                    now drive my work as a self-taught{" "}
                    <span className="story-highlight">
                      Full-Stack Developer
                    </span>.
                  </p>

                  <p>
                    I transitioned into software engineering through an intensive
                    {" "}<span className="story-highlight">
                      Data Science
                    </span>{" "}
                    bootcamp, developing a strong foundation in analytics,
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
                    to build meaningful products that create <span className="story-highlight">
                      real impact
                    </span>.
                  </p>
                </>
              </div>
            )}

            <div
              className="mobile-principles-header"
              onClick={() => setPrinciplesOpen(!principlesOpen)}
            >
              <span>ENGINEERING PRINCIPLES</span>
              <span>{principlesOpen ? "▲" : "▼"}</span>
            </div>

            {principlesOpen && (
              <div className="principles-panel">

                <h3>
                  ENGINEERING PRINCIPLES I BRING TO EVERY PROJECT
                </h3>

                <div className="principles-row">

                  <div className="principle-item">
                    <FaBullseye />
                    <span>Precision Welding</span>
                    <div className="principle-arrow">↓</div>
                    <strong>Code Quality</strong>
                  </div>

                  <div className="principle-item">
                    <FaShieldAlt />
                    <span>Structural Integrity</span>
                    <div className="principle-arrow">↓</div>
                    <strong>Scalable Architecture</strong>
                  </div>

                  <div className="principle-item">
                    <FaRegFileAlt />
                    <span>Blueprint Reading</span>
                    <div className="principle-arrow">↓</div>
                    <strong>System Design</strong>
                  </div>

                  <div className="principle-item">
                    <FaChartLine />
                    <span>Continuous Improvement</span>
                    <div className="principle-arrow">↓</div>
                    <strong>Lifelong Learning</strong>
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </section >
  );
}

