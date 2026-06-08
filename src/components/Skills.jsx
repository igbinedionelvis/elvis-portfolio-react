import { motion } from "framer-motion";
import SkillMatrixGraphic from "./SkillMatrixGraphic";
import {
    Code2,
    Server,
    Sparkles,
    Bot,
    Rocket,
    Zap
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
                    <div className="skills-tag-wrapper">
                        <span className="skills-tag-dot"></span>

                        <span className="skills-tag">
                            MY SKILL MATRIX
                        </span>
                    </div>

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

                    <span>
                        <Code2 size={14} />
                        Responsive Web Apps
                    </span>

                    <span>
                        <Sparkles size={14} />
                        AI Products
                    </span>

                    <span>
                        <Server size={14} />
                        REST APIs
                    </span>

                    <span>
                        <Bot size={14} />
                        Automation Systems
                    </span>

                </div>

                <div className="learning-badge">
                    <Zap size={14} />
                    Always Learning, Always building.
                </div>

                {/* CORE */}

                <div className="skill-matrix-grid">

                    <motion.div
                        className="dashboard-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0 }}
                    >

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
                                    <>
                                        <span className="pill-dot"></span>
                                        {skill}
                                    </>
                                </motion.div>
                            ))}
                            <SkillMatrixGraphic />
                        </div>
                    </motion.div>

                    <motion.div
                        className="dashboard-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
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
                                    <>
                                        <span className="pill-dot"></span>
                                        {skill}
                                    </>
                                </motion.div>
                            ))}
                            <SkillMatrixGraphic />
                        </div>
                    </motion.div>


                    <motion.div
                        className="dashboard-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="skill-card-header">
                            <div className="skill-icon">
                                <Bot size={20} />
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
                                    <>
                                        <span className="pill-dot"></span>
                                        {skill}
                                    </>
                                </motion.div>
                            ))}
                            <SkillMatrixGraphic />
                        </div>
                    </motion.div>


                    <motion.div
                        className="dashboard-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        <div className="skill-card-header">
                            <div className="skill-icon">
                                <Bot size={20} />
                            </div>

                            <h3>Tools & Workflow</h3>
                        </div>

                        <p className="skill-description">
                            Tools and practices that power my development workflow.
                        </p>

                        <div className="skill-pills">
                            {tools.map((skill) => (
                                <motion.div
                                    key={skill}
                                    className="skill-pill"
                                    whileHover={{ y: -6 }}
                                >
                                    <>
                                        <span className="pill-dot"></span>
                                        {skill}
                                    </>
                                </motion.div>
                            ))}
                            <SkillMatrixGraphic />
                        </div>
                    </motion.div>

                </div> {/* skill-matrix-grid */}

                <div className="skills-mission">
                    <Rocket size={18} />

                    <span>
                        I enjoy solving complex problems and turning ideas into real, impactful products.
                    </span>
                </div>

            </div> {/* skills-container */}

        </section>
    );
}