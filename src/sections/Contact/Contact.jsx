import "./Contact.css";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import {
    fadeUp,
    slideLeft,
    slideRight,
    staggerContainer,
} from "../../animations/animations";

function Contact() {
    return (
        <motion.section
    className="contact"
    id="contact"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
>

            <motion.div
    className="contact-header"
    variants={fadeUp}
>

                

                <span>GET IN TOUCH</span>

                <h2>Let's Build Something Amazing</h2>

                <p>
                    Whether you have a project, an opportunity,
                    or just want to say hello, I'd love to hear from you.
                </p>

            </motion.div>
            <div className="contact-container">

    <motion.div
    className="contact-info"
    variants={slideLeft}
>

    <div className="contact-info-card">

    <h3>Contact Information</h3>

    <p className="contact-info-text">
        I'm currently available for internships, freelance projects, and full-time opportunities.
    </p>
    <hr className="info-divider" />

    <div className="info-item">

    <FaEnvelope className="contact-icon" />

    <div className="info-content">

        <h4>Email</h4>

        <a href="mailto:dheerajjohn@example.com">
            dheerajjohn@example.com
        </a>

        <a
            href="mailto:dheerajjohn@example.com"
            className="info-action"
        >
            Contact Me
            <HiArrowRight />
        </a>

    </div>

</div>

    

    <div className="info-item">

    <FaLinkedin className="contact-icon" />

    <div className="info-content">

        <h4>LinkedIn</h4>

        <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
        >
            linkedin.com/in/yourprofile
        </a>

        <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="info-action"
        >
            Visit Profile
            <HiArrowRight />
        </a>

    </div>

</div>

   

    <div className="info-item">

    <FaGithub className="contact-icon" />

    <div className="info-content">

        <h4>GitHub</h4>

        <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
        >
            github.com/yourusername
        </a>

        <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="info-action"
        >
            View GitHub
            <HiArrowRight />
        </a>

    </div>

</div>

    

    <div className="info-item">

    <FaMapMarkerAlt className="contact-icon" />

    <div className="info-content">

        <h4>Location</h4>

        <p>Tamil Nadu, India</p>

        <a
            href="https://maps.google.com/?q=Tamil+Nadu"
            target="_blank"
            rel="noreferrer"
            className="info-action"
        >
            View Map
            <HiArrowRight />
        </a>

    </div>

</div>

    

    

</div>

</motion.div>

    <motion.div
    className="contact-form"
    variants={slideRight}
>

    <h3>Send Me a Message</h3>

<div className="form-status">

    <span className="status-dot"></span>

    <span>
        Available for internships, freelance & full-time opportunities
    </span>

</div>

    <motion.form
    className="contact-form-content"
    variants={staggerContainer}
>

        <motion.div
    className="input-group"
    variants={fadeUp}
>

            <label>Name</label>

            <input
                type="text"
                placeholder="Enter your name"
            />

        </motion.div>

        <motion.div
    className="input-group"
    variants={fadeUp}
>

            <label>Email</label>

            <input
                type="email"
                placeholder="Enter your email"
            />

        </motion.div>

        <motion.div
    className="input-group"
    variants={fadeUp}
>

            <label>Subject</label>

            <input
                type="text"
                placeholder="Project discussion"
            />

        </motion.div>

        <motion.div
    className="input-group"
    variants={fadeUp}
>

            <label>Message</label>

            <textarea
                rows="6"
                placeholder="Tell me about your project..."
            ></textarea>

        </motion.div>

        <motion.button
    variants={fadeUp}
            type="submit"
            className="send-btn"
        >
            Send Message →
        </motion.button>

    </motion.form>

</motion.div>

</div>

        </motion.section>
    );
}

export default Contact;

