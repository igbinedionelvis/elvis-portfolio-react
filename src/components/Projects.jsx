import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [thinkingMode, setThinkingMode] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Movie Recommender System",
      description: "AI system that recommends movies based on user mood.",
      stack: "Python • ML • NLP",
      github: "#",
      live: "#",
      thinking: {
        problem: "Users struggle to find movies matching their mood.",
        approach: "Used sentiment analysis + collaborative filtering.",
        tradeoff: "Accuracy vs performance — optimized for speed."
      }
    },
    {
      title: "Earthquake Dashboard",
      description: "Visualization of global seismic activity.",
      stack: "Python • Tableau",
      github: "#",
      live: "#",
      thinking: {
        problem: "Raw earthquake data is hard to interpret.",
        approach: "Built interactive visual dashboards.",
        tradeoff: "Detail vs clarity — simplified visuals."
      }
    },
    {
      title: "Portfolio Website",
      description: "Modern developer portfolio using React.",
      stack: "React • CSS",
      github: "#",
      live: "#",
      thinking: {
        problem: "Most portfolios look generic.",
        approach: "Focused on storytelling + UX.",
        tradeoff: "Minimalism vs expressiveness."
      }
    },
    {
      title: "Upcoming Project",
      description: "Something innovative is coming.",
      stack: "TBD",
      github: "#",
      live: "#",
      thinking: {
        problem: "Exploring new ideas.",
        approach: "Experimentation phase.",
        tradeoff: "Speed vs perfection."
      }
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Selected Projects</h2>

        {/* Toggle */}
        <div className="toggle">
          <button onClick={() => setThinkingMode(prev => !prev)}>
            {thinkingMode ? "Thinking Mode: ON" : "Thinking Mode: OFF"}
          </button>
        </div>

        {/* Grid */}
        <div className="grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              thinkingMode={thinkingMode}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* 🔥 Overlay MUST be OUTSIDE grid */}
      {activeProject && (
        <div className="overlay" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>

            <span className="stack">{activeProject.stack}</span>

            <div className="thinking">
              <p><strong>Problem:</strong> {activeProject.thinking.problem}</p>
              <p><strong>Approach:</strong> {activeProject.thinking.approach}</p>
              <p><strong>Trade-off:</strong> {activeProject.thinking.tradeoff}</p>
            </div>

            <div className="links">
              <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={activeProject.live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}