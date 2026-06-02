import { motion } from "framer-motion";

const languages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL"
];

const core = [
    "React",
    "Node.js",
    "PostgreSQL"
];

const infrastructure = [
    "Docker",
    "Supabase",
    "Git",
    "REST APIs"
];

const outcomes = [
    "AI Systems",
    "Analytics Platforms",
    "Automation Workflows",
    "SaaS Products"
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
                        SYSTEM CAPABILITIES
                    </span>

                    <h2>
                        Technologies, Infrastructure
                        & Outcomes
                    </h2>

                    <p>
                        Modern digital systems are built through
                        the combination of robust engineering,
                        scalable infrastructure, and intelligent
                        business outcomes.
                    </p>
                </motion.div>

                {/* CORE */}

                <div className="skills-dashboard">

                    <div className="dashboard-card">
                        <h3>Languages</h3>

                        <div className="languages-grid">
                            {languages.map((skill) => (
                                <motion.div
                                    key={skill}
                                    className="language-node"
                                    whileHover={{ y: -4, scale: 1.05 }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <h3>Core Systems</h3>

                        <div className="network-grid">
                            {core.map((skill) => (
                                <motion.div
                                    key={skill}
                                    className="core-node"
                                    whileHover={{ scale: 1.08 }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <h3>Infrastructure</h3>

                        <div className="infrastructure-grid">
                            {infrastructure.map((skill) => (
                                <motion.div
                                    key={skill}
                                    className="infra-node"
                                    whileHover={{ y: -4 }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                                        <div className="dashboard-card">
                        <h3>What I Build</h3>

                        <div className="outcomes-grid">
                            {outcomes.map((item) => (
                                <motion.div
                                    key={item}
                                    className="outcome-card"
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