import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
    UserRound,
    Sparkles,
    MessageCircle,
    Check,
    Download,
    Send,
    User,
    Mail,
    Pencil,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaXTwitter
} from "react-icons/fa6";

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

    const [state, handleSubmit] = useForm("mkolopnn")

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
                    initial={{
                        opacity: 0,
                        y: 50,
                        scale: 0.97
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1]
                    }}
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

                    {state.succeeded ? (
                        <motion.div
                            className="success-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Check size={40} />

                            <h3>Message Sent 🚀</h3>

                            <p>
                                Thanks for reaching out.
                                I'll get back to you within 24 hours.
                            </p>
                        </motion.div>
                    ) : (
                        <form
                            className="message-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="input-wrapper">
                                <User size={18} />

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="What's your name?"
                                    required
                                />
                            </div>

                            <div className="input-wrapper">
                                <Mail size={18} />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="How can I reach you?"
                                    required
                                />
                            </div>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />

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
                                        {selected === item && (
                                            <motion.span
                                                layoutId="activeCategory"
                                                className="category-highlight"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }}
                                            />
                                        )}

                                        <span className="category-label">
                                            {item}
                                        </span>
                                    </button>
                                ))}

                            </div>

                            <input
                                type="hidden"
                                name="category"
                                value={selected}
                            />

                            <div className="textarea-wrapper">
                                <Pencil size={18} />

                                <textarea
                                    rows="3"
                                    name="message"
                                    placeholder="Tell me about your idea..."
                                    required
                                />
                            </div>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />

                            <motion.button
                                type="submit"
                                disabled={state.submitting}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="send-btn"
                            >
                                <Send size={18} />
                                {state.submitting
                                    ? "Sending..."
                                    : "Send Message"}
                            </motion.button>
                        </form>
                    )}

                </motion.div>

                <motion.div
                    className="message-right"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    <motion.div
                        className="info-card"
                        initial={{
                            opacity: 0,
                            x: -40,
                            rotate: -2
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            rotate: 0
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >

                        <div className="card-header">
                            <div className="icon-circle">
                                <UserRound size={20} />
                            </div>

                            <h3>Working With Me</h3>
                        </div>

                        <ul>
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
                        </ul>
                    </motion.div>

                    <div className="quick-connect-icons">

                        <a
                            href="YOUR_GITHUB"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href="YOUR_LINKEDIN"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin size={18} />
                        </a>

                        <a
                            href="YOUR_X"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaXTwitter size={18} />
                        </a>

                        <a
                            href="mailto:YOUR_EMAIL"
                        >
                            <Mail size={18} />
                        </a>

                    </div>

                    <motion.div
                        className="resume-card"
                        initial={{
                            opacity: 0,
                            scale: 0.9
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.85,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >

                        <div className="card-header">
                            <div className="icon-circle">
                                <Sparkles size={18} />
                            </div>

                            <span className="resume-label">
                                Want a quick overview?
                            </span>
                        </div>

                        <a
                            href="/Elvis-Igbinedion-CV.pdf"
                            download
                            className="resume-btn secondary"
                        >
                            <Download size={16} />
                            Download CV
                        </a>

                    </motion.div>

                    <motion.div
                        className="conversation-card"
                        initial={{
                            opacity: 0,
                            x: 40,
                            rotate: 2
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            rotate: 0
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.85,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >

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

                    </motion.div>

                </motion.div>

            </div >
        </section >
    );
}