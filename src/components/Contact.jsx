import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* TOP LABEL */}
        <span className="contact-tag">
          [ NETWORK NODE ACTIVE ]
        </span>

        {/* HEADING */}
        <h2>
          Let’s Build Intelligent Systems Together
        </h2>

        {/* SUBTEXT */}
        <p>
          Open to remote opportunities, SaaS collaborations,
          AI-focused projects, and high-impact product development.
        </p>

        {/* CONTACT BUTTON */}
        <a
          href="mailto:eligbinosa@gmail.com"
          className="email-btn"
        >
          Initialize Contact
        </a>

        {/* 🔥 SOCIAL ICONS */}
        <div className="socials">

          <a
            href="https://github.com/igbinedionelvis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/igbinedion-elvis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/IamFame88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="mailto:eligbinosa@gmail.com"
          >
            <MdEmail />
          </a>

        </div>

        {/* FOOTER LINE */}
        <div className="footer-bottom">
          <span>
            SYSTEM STATUS: ONLINE
          </span>

          <span>
            © 2026 Elvis Igbinedion
          </span>
        </div>

      </div>
    </section>
  );
}