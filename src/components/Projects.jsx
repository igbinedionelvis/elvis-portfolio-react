import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [thinkingMode, setThinkingMode] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Lead Intelligence SaaS Platform",

      image: "/projects/lead-intelligence-platform.png",

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

      image: "/projects/workforce-dashboard.png",

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

      image: "/projects/portfolio-preview.png",

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

      image: "/projects/ai-automation-preview.png",

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

        {/* 🔥 TOGGLE */}
        <div className="toggle">

          <button
            onClick={() =>
              setThinkingMode(prev => !prev)
            }
          >
            {thinkingMode
              ? "Thinking Mode: ON"
              : "Thinking Mode: OFF"}
          </button>

        </div>

        {/* 🔥 GRID */}
        <motion.div
          className="grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              thinkingMode={thinkingMode}
              onClick={() =>
                setActiveProject(project)
              }
            />
          ))}

        </motion.div>

      </motion.div>

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

    </motion.section>
  );
}