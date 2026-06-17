import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projectData";
import {
  useState,
  useEffect
}
  from "react";

export default function Projects() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

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

        <div
          className="featured-system"

          onMouseMove={(e) => {

            const rect =

              e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            setMousePosition({ x, y });

          }}
        >

          <div

            className="spotlight"

            style={{

              left: mousePosition.x,

              top: mousePosition.y

            }}

          >
            <div className="particles">

              {[...Array(10)].map((_, i) => (

                <span

                  key={i}

                  className="particle"

                  style={{

                    left: `${10 + i * 8}%`,

                    animationDelay: `${i * .6}s`

                  }}

                ></span>

              ))}

            </div>
          </div>

          <div
            className={`operational-status ${featuredProject.status === "DEPLOYED"
              ? "status-live"
              : "status-dev"
              }`}
          >
            <div className="status-dot"></div>

            {featuredProject.status}
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

            <div className="system-index">
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

            <div className="content-module">

              <AnimatePresence mode="wait">

                <motion.div
                  key={featuredProject.slug}
                  className="content-layout"

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

                  <div className="hero-copy">

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

                  </div>

                  <div className="description-module">

                    <p>{featuredProject.description}</p>

                  </div>

                  <div className="mission-module">
                    <span>MISSION</span>
                    <p>{featuredProject.mission}</p>
                  </div>

                  <div className="impact-module">
                    <span>IMPACT</span>
                    <p>{featuredProject.impact}</p>
                  </div>

                  <div className="action-module">

                    <Link
                      to={`/projects/${featuredProject.slug}`}
                      className="view-system-btn"
                    >
                      View Project →
                    </Link>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

            <div className="visual-module">

              <div className="visual-layout">

                <AnimatePresence mode="wait">

                  <motion.div

                    className="monitor-module"

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

                    <img
                      src={
                        featuredProject.images[
                        imageIndex
                        ]
                      }
                      alt={featuredProject.title}
                    />

                  </motion.div>

                </AnimatePresence>

                <div className="tech-stack-module">

                  {featuredProject.icons.map((Icon, index) => (
                    <span key={index}>
                      <Icon />
                    </span>
                  ))}

                </div>

              </div>

            </div>


          </div>

          <div className="preview-module">

            <div className="preview-layout">

              {previewProjects.map((project) => (

                <button
                  key={project.title}
                  className={`preview-card ${activeIndex === projects.findIndex(
                    p => p.title === project.title
                  )
                    ? "active-preview"
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

        </div>

      </motion.div>

    </motion.section >
  );
}