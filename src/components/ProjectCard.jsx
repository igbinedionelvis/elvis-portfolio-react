export default function ProjectCard({ project, thinkingMode, onClick }) {
  return (
    <div className="card" onClick={onClick}>

      {/* 🔥 PROJECT IMAGE */}
      <div className="card-image">
        <img src={project.image} alt={project.title} />
      </div>

      {/* 🔥 CONTENT */}
      <div className="card-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <span className="stack">{project.stack}</span>

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

        {thinkingMode && (
          <div className="thinking">
            <p><strong>Problem:</strong> {project.thinking.problem}</p>

            <p><strong>Approach:</strong> {project.thinking.approach}</p>

            <p><strong>Trade-off:</strong> {project.thinking.tradeoff}</p>
          </div>
        )}
      </div>
    </div>
  );
}