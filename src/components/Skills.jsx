import { motion } from "framer-motion";

import {
    Code2,
    Server,
    Sparkles,
    Wrench
} from "lucide-react";

const frontend = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Framer Motion",
    "Responsive Design"
];

const backend = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "Authentication"
];

const ai = [
    "OpenAI APIs",
    "Prompt Engineering",
    "AI Product Design",
    "Workflow Automation"
];

const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Vite",
    "Postman"
];

export default function Skills() {
    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                <motion.div
                    className="skills-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="skills-tag">
                        MY SKILL MATRIX
                    </span>

                    <h2>
                        What I Build
                    </h2>

                    <p>
                        I combine modern web technologies,
                        AI and automation to build powerful,
                        scalable digital products.
                    </p>
                </motion.div>

                <div className="outcome-strip">

                    <span>Responsive Web Apps</span>

                    <span>AI Products</span>

                    <span>REST APIs</span>

                    <span>Automation Systems</span>

                </div>

                {/* CORE */}

                <div className="skill-matrix-grid">

                    <div className="dashboard-card">

                        <div className="skill-card-header">
                            <div className="skill-icon">
                                <Code2 size={20} />
                            </div>

                            <h3>Frontend Engineering</h3>
                        </div>

                        <p className="skill-description">
                            Building fast, responsive and intuitive interfaces.
                        </p>

                        <div className="skill-pills">
                            {frontend.map((skill) => (
                                <motion.div
                                    key={skill}
                                    className="skill-pill"
                                    whileHover={{ y: -4, scale: 1.05 }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>

                    </div>

                    <div className="dashboard-card">
                        <div className="skill-card-header">
                            <div className="skill-icon">
                                <Server size={20} />
                            </div>

                            <h3>Backend Development</h3>
                        </div>

                        <p className="skill-description">
                            Building robust APIs and scalable server-side applications.
                        </p>

                        <div className="skill-pills">
                            {backend.map((skill) => (
                                <motion.div
                                    key={skill}
                                    className="skill-pill"
                                    whileHover={{ scale: 1.08 }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="skill-card-header">
                            <div className="skill-icon">
                                <Sparkles size={20} />
                            </div>

                            <h3>AI & Automation</h3>
                        </div>

                        <p className="skill-description">
                            Creating intelligent workflows and AI-driven solutions.
                        </p>

                        <div className="skill-pills">
                            {ai.map((skill) => (
                                <motion.div
                                    key={skill}
                                    className="skill-pill"
                                    whileHover={{ y: -4 }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="skill-card-header">
                            <div className="skill-icon">
                                <Wrench size={20} />
                            </div>

                            <h3>Tools & Workflow</h3>
                        </div>

                        <p className="skill-description">
                            Tools and practices that power my development workflow.
                        </p>

                        <div className="skill-pills">
                            {tools.map((item) => (
                                <motion.div
                                    key={item}
                                    className="skill-pill"
                                    whileHover={{ y: -6 }}
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>

                    </div> {/* dashboard-card */}

                </div> {/* skills-dashboard */}

            </div> {/* skills-container */}

        </section>
    );
}