import "./Contact.css";
import { lazy, Suspense, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaBriefcase,
    FaClock,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { portfolio } from "../../data/portfolio";

const ContactCore3D = lazy(() => import("./ContactCore3D"));

const socialLinks = [
    { label: "GitHub", href: "https://github.com/dheerajjohngit", Icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dheeraj-john-176a902a3/", Icon: FaLinkedin },
    { label: "Email", href: `mailto:${portfolio.personal.email}`, Icon: FaEnvelope },
];

const coreStatuses = {
    idle: "AI CORE · STANDBY",
    name: "IDENTITY MODULE · ACTIVE",
    email: "SIGNAL MODULE · ACTIVE",
    subject: "TOPIC MODULE · ACTIVE",
    message: "MESSAGE BUFFER · ACTIVE",
    draft: "EMAIL HANDOFF · READY",
};

function ContactAssistant({ attention, isVisible }) {
    return (
        <div className={`contact-ai-stage ${attention === "draft" ? "is-processing" : ""}`}>
            <div className="contact-ai-label">
                <span className="ai-label-dot" />
                PERSONAL AI · DHEERAJ-01
            </div>
            <div className="contact-ai-orbit-glow" aria-hidden="true" />
            <div className="contact-ai-canvas" role="img" aria-label="Animated 3D lavender AI companion">
                {isVisible ? (
                    <Suspense fallback={<div className="contact-ai-fallback" />}>
                        <ContactCore3D attention={attention} />
                    </Suspense>
                ) : (
                    <div className="contact-ai-fallback" />
                )}
            </div>
            <div className="contact-ai-bubble">
                <span>Hi! I&apos;m Dheeraj&apos;s AI.</span>
                <span>Have a project in mind?</span>
                <strong>Let&apos;s talk.</strong>
            </div>
            <div className="contact-ai-state" aria-live="polite">
                <span className={attention === "draft" ? "state-dot state-dot--busy" : "state-dot"} />
                {coreStatuses[attention] || coreStatuses.idle}
            </div>
        </div>
    );
}

function Contact() {
    const [focusedField, setFocusedField] = useState("");
    const [formFeedback, setFormFeedback] = useState("");
    const contactRef = useRef(null);
    const isContactVisible = useInView(contactRef, { once: true, margin: "100px" });
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const rotateX = useTransform(pointerY, [-1, 1], [1.2, -1.2]);
    const rotateY = useTransform(pointerX, [-1, 1], [-1.4, 1.4]);

    const handleFormPointer = (event) => {
        if (event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
        pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const subject = formData.get("subject");
        const body = `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`;
        const mailto = `mailto:${portfolio.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setFormFeedback("Your email app should open with this draft. Send it there to complete your message.");
        setFocusedField("draft");
        window.location.href = mailto;
    };

    const resetPanelTilt = () => {
        pointerX.set(0);
        pointerY.set(0);
    };

    return (
        <motion.section
            className="contact"
            id="contact"
            ref={contactRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            <div className="contact-environment" aria-hidden="true">
                <span className="contact-light contact-light--one" />
                <span className="contact-light contact-light--two" />
                <span className="contact-grid-floor" />
                <span className="contact-structure contact-structure--left" />
                <span className="contact-structure contact-structure--right" />
                <span className="contact-particle contact-particle--one" />
                <span className="contact-particle contact-particle--two" />
                <span className="contact-particle contact-particle--three" />
            </div>

            <motion.header
                className="contact-terminal-heading"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <span className="terminal-kicker"><i /> // COMMUNICATION TERMINAL</span>
                    <h2>Let&apos;s connect<span>.</span></h2>
                </div>
                <div className="terminal-status">
                    <span className="status-dot" />
                    COMMUNICATION LINK ACTIVE
                </div>
            </motion.header>

            <div className="contact-console">
                <motion.div
                    className="contact-intro"
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                >
                    <span className="contact-section-index">01 / CONTACT</span>
                    <h3>Drop a message.<br /><em>Let&apos;s create<br />something great.</em></h3>
                    <p>
                        Have a project, an opportunity, or an idea to explore?
                        Send a signal and let&apos;s build something meaningful.
                    </p>
                    <div className="intro-signal-line"><span /></div>
                    <div className="intro-meta">
                        <span>EMAIL CHANNEL</span>
                        <a href={`mailto:${portfolio.personal.email}`}>{portfolio.personal.email}</a>
                    </div>
                    <div className="intro-meta">
                        <span>LOCATION</span>
                        <strong>{portfolio.personal.location}</strong>
                    </div>
                </motion.div>

                <div className="contact-center-column">
                    <ContactAssistant attention={focusedField} isVisible={isContactVisible} />

                    <motion.div
                        className="contact-form-frame"
                        style={{ rotateX, rotateY, transformPerspective: 1000 }}
                        onPointerMove={handleFormPointer}
                        onPointerLeave={resetPanelTilt}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.14 }}
                    >
                        <div className="form-frame-corner form-frame-corner--tl" />
                        <div className="form-frame-corner form-frame-corner--tr" />
                        <div className="form-frame-corner form-frame-corner--bl" />
                        <div className="form-frame-corner form-frame-corner--br" />
                        <div className="contact-form-heading">
                            <span>02 / SECURE CHANNEL</span>
                            <h3>Send a message</h3>
                            <i><FaEnvelope /></i>
                        </div>

                        <form
                            className="contact-form-content"
                            onSubmit={handleFormSubmit}
                        >
                            <label className="contact-field">
                                <span>Your name</span>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Dheeraj John"
                                    autoComplete="name"
                                    onFocus={() => setFocusedField("name")}
                                    onBlur={() => setFocusedField((current) => current === "draft" ? current : "")}
                                    required
                                />
                            </label>
                            <label className="contact-field">
                                <span>Your email</span>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    onFocus={() => setFocusedField("email")}
                                    onBlur={() => setFocusedField((current) => current === "draft" ? current : "")}
                                    required
                                />
                            </label>
                            <label className="contact-field">
                                <span>Subject</span>
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="What would you like to build?"
                                    onFocus={() => setFocusedField("subject")}
                                    onBlur={() => setFocusedField((current) => current === "draft" ? current : "")}
                                    required
                                />
                            </label>
                            <label className="contact-field contact-field--message">
                                <span>Your message</span>
                                <textarea
                                    name="message"
                                    rows="3"
                                    placeholder="Tell me a little about it..."
                                    onFocus={() => setFocusedField("message")}
                                    onBlur={() => setFocusedField((current) => current === "draft" ? current : "")}
                                    required
                                />
                            </label>
                            <button className="send-btn" type="submit">
                                <span>Prepare message</span>
                                <HiArrowRight aria-hidden="true" />
                            </button>
                            <p className="form-feedback" role="status" aria-live="polite">{formFeedback}</p>
                        </form>
                    </motion.div>
                </div>

                <motion.aside
                    className="contact-info-panel"
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                >
                    <span className="contact-section-index">03 / CONTACT INFO</span>
                    <h3>Reach the<br /><em>right channel.</em></h3>
                    <div className="contact-info-module">
                        <FaEnvelope className="contact-module-icon" aria-hidden="true" />
                        <div><span>EMAIL</span><a href={`mailto:${portfolio.personal.email}`}>{portfolio.personal.email}</a></div>
                    </div>
                    <div className="contact-info-module">
                        <FaMapMarkerAlt className="contact-module-icon" aria-hidden="true" />
                        <div><span>LOCATION</span><strong>{portfolio.personal.location}</strong></div>
                    </div>
                    <div className="contact-info-module">
                        <FaBriefcase className="contact-module-icon" aria-hidden="true" />
                        <div><span>AVAILABILITY</span><strong>{portfolio.personal.availability}</strong></div>
                    </div>
                    <div className="contact-info-module">
                        <FaClock className="contact-module-icon" aria-hidden="true" />
                        <div><span>RESPONSE CHANNEL</span><strong>Direct email</strong></div>
                    </div>
                    <div className="contact-social">
                        <span className="contact-social-title">CONNECT WITH ME</span>
                        <div className="contact-social-links">
                            {socialLinks.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                                >
                                    <Icon aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.aside>
            </div>
        </motion.section>
    );
}

export default Contact;
