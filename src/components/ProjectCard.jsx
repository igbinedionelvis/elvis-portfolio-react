import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  thinkingMode,
  onClick
}) {
  return (
    <motion.div
      className="card"
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -10,
        rotateX: -2,
        rotateY: 2,
        scale: 1.01
      }}
    >

      {/* 🔥 GLOW LAYER */}
      <div className="card-glow"></div>

      {/* 🔥 PROJECT IMAGE */}
      <div className="card-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>

      {/* 🔥 CONTENT */}
      <div className="card-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <span className="stack">
          {project.stack}
        </span>

        {/* 🔥 LINKS */}
        <div className="links">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>

        </div>

        {/* 🔥 THINKING MODE */}
        {thinkingMode && (
          <div className="thinking">

            <p>
              <strong>Problem:</strong>{" "}
              {project.thinking.problem}
            </p>

            <p>
              <strong>Approach:</strong>{" "}
              {project.thinking.approach}
            </p>

            <p>
              <strong>Trade-off:</strong>{" "}
              {project.thinking.tradeoff}
            </p>

          </div>
        )}

      </div>
    </motion.div>
  );
}