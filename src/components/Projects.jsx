import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projectData";
import {
  useState,
  useEffect,
  useRef
}
  from "react";

export default function Projects() {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [imageIndex, setImageIndex] =
    useState(0);

  const stripRef = useRef(null);

  const cardRefs = useRef([]);

  const isDragging = useRef(false);

  const startX = useRef(0);

  const startScrollLeft = useRef(0);

  const featuredProject = projects[activeIndex] ?? projects[0];

  const [scrollProgress, setScrollProgress] =

    useState(0);

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

  useEffect(() => {

    const strip = stripRef.current;

    if (!strip) return;

    const handleWheel = (e) => {

      // Only hijack vertical wheel

      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX))
        return;

      e.preventDefault();

      strip.scrollBy({

        left: e.deltaY * 2,

        behavior: "smooth"

      });

    };

    strip.addEventListener(

      "wheel",

      handleWheel,

      { passive: false }

    );

    return () => {

      strip.removeEventListener(

        "wheel",

        handleWheel

      );

    };

  }, []);

  useEffect(() => {

    const strip = stripRef.current;

    if (!strip) return;

    const handleScroll = () => {

      const cards = cardRefs.current;

      let nearest = 0;

      let closest = Infinity;

      const stripRect = strip.getBoundingClientRect();

      const stripCenter =

        stripRect.left +

        stripRect.width / 2;

      cards.forEach((card, index) => {

        if (!card) return;

        const rect = card.getBoundingClientRect();

        const cardCenter =

          rect.left +

          rect.width / 2;

        const distance = Math.abs(

          stripCenter -

          cardCenter

        );

        if (distance < closest) {

          closest = distance;

          nearest = index;

        }

      });

      setActiveIndex(nearest);

      const progress =
        strip.scrollLeft /
        (strip.scrollWidth - strip.clientWidth);

      setScrollProgress(progress);

    };

    strip.addEventListener(

      "scroll",

      handleScroll

    );

    return () => {

      strip.removeEventListener(

        "scroll",

        handleScroll

      );

    };

  }, []);

  const handleMouseDown = (e) => {

    isDragging.current = true;

    startX.current = e.pageX;

    startScrollLeft.current = stripRef.current.scrollLeft;

  };

  const handleMouseMove = (e) => {

    if (!isDragging.current) return;

    e.preventDefault();

    const distance = e.pageX - startX.current;

    stripRef.current.scrollLeft =

      startScrollLeft.current - distance;

  };

  const handleMouseUp = () => {

    isDragging.current = false;

  };

  const previewProjects = projects;

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

            <motion.div

              key={featuredProject.slug}
              className={`project-status ${featuredProject.status === "DEPLOYED"
                ? "status-live"
                : "status-dev"
                }`}

              initial={{
                opacity: 0,
                y: -10
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                y: 10
              }}

              transition={{
                duration: .35
              }}
            >
              <div className="project-status-dot"></div>

              {featuredProject.status}
            </motion.div>

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

                    {featuredProject.validation.map((item, index) => (

                      <motion.div
                        className="validation-item"
                        key={item}
                        initial={{
                          opacity: 0,
                          y: 12
                        }}

                        animate={{
                          opacity: 1,
                          y: 0
                        }}

                        exit={{
                          opacity: 0,
                          y: -12
                        }}

                        transition={{
                          duration: .35,
                          delay: .15 + (index * .08)
                        }}
                      >

                        <span className="validation-dot"></span>

                        <span>{item}</span>

                      </motion.div>

                    ))}

                  </div>

                </motion.div>

              </AnimatePresence>

              <div className="project-preview">

                <AnimatePresence mode="wait">

                  <motion.div

                    className="monitor-screen"

                    key={featuredProject.slug}

                    initial={{
                      opacity: 0,
                      scale: .92,
                      rotateX: 6,
                      filter: "blur(10px) brightness(.6)"
                    }}

                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateX: 0,
                      filter: "blur(0px) brightness(1)"
                    }}

                    exit={{
                      opacity: 0,
                      scale: 1.04,
                      rotateX: -6,
                      filter: "blur(10px) brightness(.6)"
                    }}

                    transition={{
                      duration: .55,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >

                    <div className="monitor-image">

                      <img

                        key={`${featuredProject.slug}-${imageIndex}`}

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

              </div>

              <motion.div className="project-footer">

                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="project-btn"
                >
                  Open Experience →
                </Link>

              </motion.div>

            </div>

            <div className="project-right">

              <AnimatePresence mode="wait">

                <motion.div

                  key={featuredProject.slug}

                  className="project-sections"

                  initial={{
                    opacity: 0
                  }}

                  animate={{
                    opacity: 1
                  }}

                  exit={{
                    opacity: 0
                  }}

                  transition={{
                    duration: .25
                  }}

                >

                  <motion.div

                    className="project-section"

                    initial={{
                      opacity: 0,
                      y: 10
                    }}

                    animate={{
                      opacity: 1,
                      y: 0
                    }}

                    exit={{
                      opacity: 0,
                      y: -10
                    }}

                    transition={{
                      duration: .45,
                      delay: .05
                    }}

                  >

                    <span>OVERVIEW</span>

                    <p>{featuredProject.description}</p>

                  </motion.div>

                  <motion.div

                    className="project-section"

                    initial={{
                      opacity: 0,
                      y: 10
                    }}

                    animate={{
                      opacity: 1,
                      y: 0
                    }}

                    exit={{
                      opacity: 0,
                      y: -10
                    }}

                    transition={{
                      duration: .45,
                      delay: .15
                    }}

                  >

                    <span>MISSION</span>

                    <p>{featuredProject.mission}</p>

                  </motion.div>

                  <motion.div

                    className="project-section"

                    initial={{
                      opacity: 0,
                      y: 10
                    }}

                    animate={{
                      opacity: 1,
                      y: 0
                    }}

                    exit={{
                      opacity: 0,
                      y: -10
                    }}

                    transition={{
                      duration: .45,
                      delay: .25
                    }}

                  >

                    <span>IMPACT</span>

                    <p>{featuredProject.impact}</p>

                  </motion.div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>

        <div className="project-navigation">

          <div className="carousel-hint">

            ← Drag or Scroll →

          </div>

          <div className="carousel-progress">

            <div
              className="carousel-progress-fill"
              style={{
                width: `${scrollProgress * 100}%`
              }}
            />

          </div>

          <button
            className="carousel-arrow left"
            onClick={() => {

              stripRef.current.scrollBy({

                left: -420,

                behavior: "smooth"

              });

            }}
          >

            ‹

          </button>

          <div

            className="project-strip"

            ref={stripRef}

            onMouseDown={handleMouseDown}

            onMouseMove={handleMouseMove}

            onMouseUp={handleMouseUp}

            onMouseLeave={handleMouseUp}
          >

            {previewProjects.map((project) => {

              const projectIndex = projects.findIndex(
                p => p.title === project.title
              );

              return (

                <button
                  ref={(el) => (cardRefs.current[projectIndex] = el)}
                  key={project.title}
                  className={`project-card ${activeIndex === projectIndex ? "active" : ""
                    }`}
                  onClick={() => setActiveIndex(projectIndex)}
                >

                  <div className="project-card-content">

                    <div className="project-card-image">

                      <img
                        src={project.images[0]}
                        alt={project.title}
                      />

                    </div>

                    <div className="project-card-header">

                      <span className="project-card-number">
                        {String(projectIndex + 1).padStart(2, "0")}
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

              );

            })}

          </div>

          <button
            className="carousel-arrow right"
            onClick={() => {

              stripRef.current.scrollBy({

                left: 420,

                behavior: "smooth"

              });

            }}
          >

            ›

          </button>

        </div>

      </motion.div>

    </motion.section >
  );
}