import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";

import {
  SiTypescript,
  SiSupabase
} from "react-icons/si";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const triggerRefs = useRef([]);

  const projects = [
    {
      title: "Lead Intelligence SaaS Platform",
      status: "DEPLOYED",

      images: [
        "/projects/lead-1.png",
        "/projects/lead-2.png",
        "/projects/lead-3.png"
      ],

      icons: [
        <FaReact />,
        <SiTypescript />,
        <SiSupabase />,
        <FaNodeJs />,
        <FaGitAlt />
      ],

      description:
        "Modern SaaS platform designed to help startups manage lead intelligence, outreach workflows, and sales pipeline visibility through interactive analytics and scalable dashboard architecture.",

      stack:
        "React • TypeScript • Supabase • TailwindCSS • Recharts • Framer Motion",

      github:
        "https://github.com/igbinedionelvis/leadpilot-saas-dashboard",

      live:
        "https://leadpilot-saas-dashboard.vercel.app/",

      thinking: {
        problem:
          "Startups often struggle to centralize outreach tracking, lead intelligence, and operational visibility into one scalable workflow system.",

        approach:
          "Designed a scalable SaaS-style dashboard with lead management workflows, analytics visualization, and modular frontend architecture optimized for growth.",

        tradeoff:
          "Prioritized frontend scalability, responsiveness, and product architecture before implementing deeper automation layers."
      }
    },

    {
      title: "Workforce Intelligence Dashboard",
      status: "DEPLOYED",

      images: [
        "/projects/workforce-1.png",
        "/projects/workforce-2.png",
        "/projects/workforce-3.png"
      ],

      icons: [
        <FaReact />,
        <FaNodeJs />,
        <FaGitAlt />
      ],

      description:
        "AI-powered workforce analytics platform designed to help organizations monitor employee performance, hiring operations, and workforce trends through real-time KPI tracking and interactive data visualization.",

      stack:
        "React • TailwindCSS • Vite • Recharts",

      github:
        "https://github.com/igbinedionelvis/workforce-intelligence-dashboard",

      live:
        "https://workforce-intelligence-dashboard.vercel.app/",

      thinking: {
        problem:
          "Organizations often struggle to centralize workforce metrics, hiring visibility, and operational insights into a single actionable system.",

        approach:
          "Built a scalable SaaS-inspired analytics dashboard with KPI tracking, interactive charts, hiring pipeline visualization, and AI-driven workforce insights simulation.",

        tradeoff:
          "Focused on frontend scalability, responsive UX, and business intelligence workflows before introducing deeper backend automation layers."
      }
    },

    {
      title: "Interactive Portfolio Experience",
      status: "DEPLOYED",

      images: [
        "/projects/portfolio-1.png",
        "/projects/portfolio-2.png",
        "/projects/portfolio-3.png"
      ],

      icons: [
        <FaReact />,
        <FaGitAlt />
      ],

      description:
        "Modern developer portfolio focused on immersive UI interactions, motion design, and systems-oriented storytelling to showcase product-focused engineering work.",

      stack:
        "React • CSS • Framer Motion",

      github: "#",

      live:
        "https://elvis-portfolio-react.vercel.app/",

      thinking: {
        problem:
          "Most developer portfolios feel static, generic, and fail to communicate technical identity effectively.",

        approach:
          "Focused on cinematic UI interactions, animation systems, and storytelling-driven layout design to create a memorable user experience.",

        tradeoff:
          "Balanced advanced visual interaction with usability and responsive layout considerations."
      }
    },

    {
      title: "AI Automation System (In Progress)",
      status: "IN DEVELOPMENT",

      images: [
        "/projects/ai-automation-1.png",
        "/projects/ai-automation-2.png",
        "/projects/ai-automation-3.png"
      ],

      icons: [
        <FaReact />,
        <FaNodeJs />,
        <FaGitAlt />
      ],

      description:
        "Currently building a scalable automation-focused platform centered around AI workflows, operational efficiency, and intelligent data processing.",

      stack:
        "React • Node.js • AI APIs",

      github: "#",

      live: "#",

      thinking: {
        problem:
          "Modern businesses lose significant time through repetitive manual operational processes.",

        approach:
          "Exploring AI-assisted workflow automation systems focused on scalability and operational efficiency.",

        tradeoff:
          "Prioritizing flexible architecture and experimentation before production-level optimization."
      }
    }
  ];

  const [activeIndex, setActiveIndex] =
    useState(0);

  const featuredProject =
    projects[activeIndex];

  const nextProjects =
    projects
      .filter((_, i) => i !== activeIndex);

  const previewProjects =
    nextProjects;

  const systemProjects =
    projects;

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

              {featuredProject.icons.map(
                (icon, index) => (
                  <span key={index}>
                    {icon}
                  </span>
                )
              )}

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
                <span>SAAS</span>
                <span>ANALYTICS</span>
              </div>

              <p>{featuredProject.description}</p>

              <div className="mission-block">
                <span>MISSION</span>
                <p>
                  Centralize lead intelligence,
                  outreach workflows and
                  sales visibility.
                </p>
              </div>

              <div className="impact-block">
                <span>IMPACT</span>
                <p>
                  Streamlines lead discovery,
                  outreach visibility and sales
                  pipeline management through
                  scalable SaaS architecture.
                </p>
              </div>

              <div className="system-actions">

                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-system-btn"
                >
                  View Project →
                </a>

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

                  <span className="preview-number">
                    {String(
                      projects.findIndex(
                        p => p.title === project.title
                      ) + 1
                    ).padStart(2, "0")}
                  </span>

                  <h4>{project.title}</h4>

                </div>

              </button>

            ))}

          </div>

        </div>

        {/* 🔥 MODAL OVERLAY */}
        {activeProject && (
          <div
            className="overlay"
            onClick={() =>
              setActiveProject(null)
            }
          >

            <div
              className="modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <h2>{activeProject.title}</h2>

              <p>
                {activeProject.description}
              </p>

              <span className="stack">
                {activeProject.stack}
              </span>

              <div className="thinking">

                <p>
                  <strong>Problem:</strong>{" "}
                  {activeProject.thinking.problem}
                </p>

                <p>
                  <strong>Approach:</strong>{" "}
                  {activeProject.thinking.approach}
                </p>

                <p>
                  <strong>Trade-off:</strong>{" "}
                  {activeProject.thinking.tradeoff}
                </p>

              </div>

              <div className="links">

                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>
        )}

      </motion.div>

    </motion.section >
  );
}