import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProjectCard({
  project,
  thinkingMode,
  onClick
}) {

  const [imageIndex, setImageIndex] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  /* =========================
     IMAGE CYCLING
  ========================= */

  useEffect(() => {

    if (!isHovered) return;

    const interval = setInterval(() => {

      setImageIndex((prev) =>
        (prev + 1) % project.images.length
      );

    }, 4500);

    return () => clearInterval(interval);

  }, [isHovered, project.images.length]);

  return (
    <motion.div
      className="card"
      onClick={onClick}

      onHoverStart={() => setIsHovered(true)}

      onHoverEnd={() => {
        setIsHovered(false);
        setImageIndex(0);
      }}

      initial={{ opacity: 0, y: 50 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{
        once: true,
        amount: 0.15
      }}

      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1]
      }}

      whileHover={{
        y: -10,
        rotateX: -2,
        rotateY: 2,
        scale: 1.01
      }}
    >

      {/* 🔥 GLOW */}
      <div className="card-glow"></div>

      {/* 🔥 IMAGE */}
      <div className="card-image">

        <motion.img
          key={imageIndex}

          src={project.images[imageIndex]}

          alt={project.title}

          loading="lazy"

          initial={{
            opacity: 0,
            scale: 1.30
          }}

          animate={{
            opacity: 1,
            scale: 1,
            filter: "brightness(1.03)"
          }}

          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1]
          }}
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