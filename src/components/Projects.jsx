import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projectData";

export default function Projects() {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const featuredProject =
    projects[activeIndex];

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

        <div className="featured-system">

          <div className="operational-status">
            <div className="status-dot"></div>
            DEPLOYED
          </div>

          <div className="archive-rail">

            {projects
              .filter((_, i) => i !== activeIndex)
              .map((project) => (
                <button
                  key={project.title}
                  onClick={() =>
                    setActiveIndex(
                      projects.indexOf(project)
                    )
                  }
                >
                  {String(
                    projects.indexOf(project) + 1
                  ).padStart(2, "0")}
                </button>
              ))}
          </div>

          <div className="featured-layout">

            <div className="floating-stack">

              {featuredProject.icons.map((Icon, index) => (
                <span key={index}>
                  <Icon />
                </span>
              ))}

            </div>

            <div className="system-index">
              <span>
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="featured-details">

              <h3>{featuredProject.title}</h3>

              <div className="system-meta">
                <span>FULL STACK</span>

                <span>•</span>

                <span>SAAS</span>

                <span>•</span>

                <span>ANALYTICS</span>
              </div>

              <div className="project-stack">
                {featuredProject.stack.split(" • ").map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <p>{featuredProject.description}</p>

              <div className="mission-block">
                <span>MISSION</span>
                <p>{featuredProject.mission}</p>
              </div>

              <div className="impact-block">
                <span>IMPACT</span>
                <p>{featuredProject.impact}</p>
              </div>

              <div className="system-actions">

                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="view-system-btn"
                >
                  View Project →
                </Link>

              </div>

            </div>

            <div className="featured-visual">

              <img
                src={featuredProject.images[0]}
                alt={featuredProject.title}
              />

            </div>

          </div>

          <div className="project-preview-row">

            {previewProjects.map((project) => (

              <button
                key={project.title}
                className="preview-card"
                onClick={() =>
                  setActiveIndex(
                    projects.findIndex(
                      p => p.title === project.title
                    )
                  )
                }
              >

                <div className="preview-content">

                  <div className="preview-top">

                    <span className="preview-number">
                      {String(
                        projects.findIndex(
                          p => p.title === project.title
                        ) + 1
                      ).padStart(2, "0")}
                    </span>

                    <span className="preview-status">
                      {project.status}
                    </span>

                  </div>

                  <h4>{project.title}</h4>

                  <span className="preview-category">
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