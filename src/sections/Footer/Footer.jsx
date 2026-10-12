import "./Footer.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "../../data/portfolio";

const socialLinks = [
    { label: "GitHub", href: "https://github.com/dheerajjohngit", Icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dheeraj-john-176a902a3/", Icon: FaLinkedin },
    { label: "Email", href: `mailto:${portfolio.personal.email}`, Icon: FaEnvelope },
];

const navigationLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <a className="footer-brand" href="#hero" aria-label="DheerajVerse, back to home">
                        <span className="footer-brand-mark" aria-hidden="true">D</span>
                        <span>DHEERAJ<span className="footer-brand-accent">VERSE</span></span>
                    </a>
                    <p className="footer-tagline">
                        Building thoughtful experiences with AI and code.
                    </p>
                    <a className="footer-back-to-top" href="#hero">
                        Back to top <span aria-hidden="true">↑</span>
                    </a>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} {portfolio.personal.fullName}. All rights reserved.
                    </p>
                    <nav className="footer-navigation" aria-label="Footer navigation">
                        {navigationLinks.map(({ label, href }) => (
                            <a key={label} href={href}>{label}</a>
                        ))}
                    </nav>
                    <div className="footer-social-links" aria-label="Social links">
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
            </div>
        </footer>
    );
}

export default Footer;