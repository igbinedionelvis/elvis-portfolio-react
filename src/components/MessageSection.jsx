import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    UserRound,
    Sparkles,
    MessageCircle,
    Check,
    Download,
    Send,
    User,
    Mail,
    Pencil
} from "lucide-react";

const categories = [
    "Freelance Project",
    "AI Automation",
    "Startup Idea",
    "Job Opportunity",
    "Something Else"
];

const conversations = [
    "I have an idea but don't know where to start.",
    "Can this process be automated?",
    "Can AI help solve this problem?",
    "Would you be interested in joining our team?",
    "We need a dashboard for our business.",
];

export default function MessageSection() {
    const [selected, setSelected] = useState("Freelance Project");
    const [activeMessage, setActiveMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMessage((prev) =>
                prev === conversations.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="message" className="message-section">
            <div className="message-container">

                <motion.div
                    className="message-left"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    <div className="message-label">
                        <span className="status-dot"></span>
                        OPEN FOR COLLABORATION
                    </div>

                    <h2>
                        Let's Build Something
                        <br />
                        Worth Sharing
                    </h2>

                    <p className="message-description">
                        Whether it's a startup, an AI automation workflow,
                        or a new product idea, I'd love to hear about it.
                    </p>

                    <form className="message-form">

                        <div className="input-wrapper">
                            <User size={18} />

                            <input
                                type="text"
                                placeholder="What's your name?"
                            />
                        </div>

                        <div className="input-wrapper">
                            <Mail size={18} />

                            <input
                                type="email"
                                placeholder="How can I reach you?"
                            />
                        </div>

                        <div className="categories">

                            {categories.map((item) => (
                                <button
                                    type="button"
                                    key={item}
                                    className={
                                        selected === item
                                            ? "category active"
                                            : "category"
                                    }
                                    onClick={() => setSelected(item)}
                                >
                                    {item}
                                </button>
                            ))}

                        </div>

                        <div className="textarea-wrapper">
                            <Pencil size={18} />

                            <textarea
                                rows="3"
                                placeholder="Tell me about your idea..."
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="send-btn"
                        >
                            <Send size={18} />
                            Send Message
                        </motion.button>
                    </form>

                </motion.div>

                <motion.div
                    className="message-right"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >

                    <div className="info-card">

                        <div className="card-header">
                            <div className="icon-circle">
                                <UserRound size={20} />
                            </div>

                            <h3>Working With Me</h3>
                        </div>

                        <li>
                            <Check size={16} className="feature-check" />
                            Usually replies within 24 hours
                        </li>

                        <li>
                            <Check size={16} className="feature-check" />
                            Available for freelance projects
                        </li>

                        <li>
                            <Check size={16} className="feature-check" />
                            Open to remote opportunities
                        </li>

                        <li>
                            <Check size={16} className="feature-check" />
                            Focused on AI & modern web products
                        </li>

                    </div>

                    <div className="resume-card">

                        <div className="card-header">
                            <div className="icon-circle">
                                <Sparkles size={18} />
                            </div>

                            <span className="resume-label">
                                Want a quick overview?
                            </span>
                        </div>

                        <a
                            href="/Elvis-Resume.pdf"
                            download
                            className="resume-btn"
                        >
                            <Download size={16} />
                            Download CV
                        </a>

                    </div>

                    <div className="conversation-card">

                        <div className="card-header">
                            <div className="icon-circle">
                                <MessageCircle size={18} />
                            </div>

                            <h4>Recent conversations often start with:</h4>
                        </div>

                        <AnimatePresence mode="wait" initial={false}>

                            <motion.div
                                key={activeMessage}
                                className="rotating-conversation"
                                initial={{
                                    opacity: 0,
                                    y: 15
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -15
                                }}
                                transition={{
                                    duration: 0.4
                                }}
                            >
                                <p className="conversation-text">
                                    "{conversations[activeMessage]}"
                                    <span className="typing-cursor">|</span>
                                </p>
                            </motion.div>

                        </AnimatePresence>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}