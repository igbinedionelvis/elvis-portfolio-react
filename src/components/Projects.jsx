import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projectData";
import {
  useState,
  useEffect
}
  from "react";

export default function Projects() {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [imageIndex, setImageIndex] =
    useState(0);

  const featuredProject = projects[activeIndex] ?? projects[0];

  useEffect(() => {

    setImageIndex(0);

    const timer = setInterval(() => {

      setImageIndex(prev =>

        (prev + 1) %

        featuredProject.images.length

      );

    }, 3500);

    return () => clearInterval(timer);

  }, [featuredProject]);

  const nextProjects =
    projects
      .filter((_, i) => i !== activeIndex);

  const previewProjects =
    nextProjects;

  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }}
    >

      <motion.div className="projects-container">


        {/* 🔥 CINEMATIC HEADING */}
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15
          }}
        >

          <span className="projects-tag">
            [ SYSTEM ARCHIVE ]
          </span>

          <h2>
            Selected Systems & SaaS Platforms
          </h2>

          <p>
            A collection of analytics dashboards, operational systems,
            and scalable SaaS experiences focused on intelligent workflows,
            business visibility, and modern product architecture.
          </p>

        </motion.div>

        <div className="project-stage">

          <div className="project-showcase">

            <div
              className={`project-status ${featuredProject.status === "DEPLOYED"
                ? "status-live"
                : "status-dev"
                }`}
            >
              <div className="status-dot"></div>

              {featuredProject.status}
            </div>

            <div className="project-number">
              <motion.span

                key={activeIndex}

                initial={{
                  opacity: 0,
                  y: 40
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                exit={{
                  opacity: 0,
                  y: -40
                }}

                transition={{
                  duration: .35
                }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </div>

            <div className="project-left">

              <AnimatePresence mode="wait">

                <motion.div
                  key={featuredProject.slug}
                  className="project-header"

                  initial={{
                    opacity: 0,
                    x: 40
                  }}

                  animate={{
                    opacity: 1,
                    x: 0
                  }}

                  exit={{
                    opacity: 0,
                    x: -40
                  }}

                  transition={{
                    duration: .65,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >

                  <h3>{featuredProject.title}</h3>

                  <div className="project-validation">

                    <div className="validation-item">

                      <span className="validation-dot"></span>

                      <span>Adaptive Layout</span>

                    </div>

                    <div className="validation-item">

                      <span className="validation-dot"></span>

                      <span>Modular Components</span>

                    </div>

                    <div className="validation-item">

                      <span className="validation-dot"></span>

                      <span>Scalable Architecture</span>

                    </div>

                    <div className="validation-item">

                      <span className="validation-dot"></span>

                      <span>Production Ready</span>

                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

              <AnimatePresence mode="wait">

                <motion.div

                  className="monitor-screen"

                  key={featuredProject.slug}

                  initial={{
                    opacity: 0,
                    scale: .88,
                    rotateX: 6
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateX: 0
                  }}

                  exit={{
                    opacity: 0,
                    scale: 1.06,
                    rotateX: -6
                  }}
                >

                  <div className="monitor-image">

                    <img
                      src={
                        featuredProject.images[
                        imageIndex
                        ]
                      }
                      alt={featuredProject.title}
                    />

                  </div>

                </motion.div>

              </AnimatePresence>

              <div className="project-icons">

                {featuredProject.icons.map((Icon, index) => (
                  <span key={index}>
                    <Icon />
                  </span>
                ))}

              </div>

              <motion.div className="project-footer">

                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="project-btn"
                >
                  View Project →
                </Link>

              </motion.div>

            </div>

            <div className="project-right">

              <div className="project-sections">

                <motion.div className="project-section">

                  <span>OVERVIEW</span>

                  <p>{featuredProject.description}</p>

                </motion.div>

                <motion.div className="project-section">
                  <span>MISSION</span>
                  <p>{featuredProject.mission}</p>
                </motion.div>

                <motion.div className="project-section">
                  <span>IMPACT</span>
                  <p>{featuredProject.impact}</p>
                </motion.div>

              </div>

            </div>

          </div>

        </div>

        <div className="project-navigation">

          <div className="project-timeline">

            {previewProjects.map((project) => (

              <div
                key={project.title}
                className="project-timeline-node"
              >

                <span className="project-timeline-number">
                  {String(
                    projects.findIndex(
                      p => p.title === project.title
                    ) + 1
                  ).padStart(2, "0")}
                </span>

              </div>

            ))}

          </div>

          <div className="project-strip">

            {previewProjects.map((project) => (

              <button
                key={project.title}
                className={`project-card ${activeIndex === projects.findIndex(
                  p => p.title === project.title
                )
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  setActiveIndex(
                    projects.findIndex(
                      p => p.title === project.title
                    )
                  )
                }
              >

                <div className="project-card-content">

                  <div className="project-card-header">

                    <span className="project-card-number">
                      {String(
                        projects.findIndex(
                          p => p.title === project.title
                        ) + 1
                      ).padStart(2, "0")}
                    </span>

                    <span className="project-card-status">
                      {project.status}
                    </span>

                  </div>

                  <h4>{project.title}</h4>

                  <span className="project-card-category">
                    {project.category}
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>

      </motion.div>

    </motion.section >
  );
}