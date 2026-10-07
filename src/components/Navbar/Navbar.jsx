import "./Navbar.css";
import { useEffect, useState } from "react";
import {
    FiArrowRight,
    FiBarChart2,
    FiBox,
    FiHome,
    FiSend,
    FiUser,
} from "react-icons/fi";

const sections = ["hero", "about", "skills", "projects", "contact"];
const navigation = [
    { id: "hero", label: "Home", Icon: FiHome },
    { id: "about", label: "About", Icon: FiUser },
    { id: "skills", label: "Skills", Icon: FiBarChart2 },
    { id: "projects", label: "Projects", Icon: FiBox },
    { id: "contact", label: "Contact", Icon: FiSend },
];

function AiCompanion() {
    return (
        <div className="companion">
            <div className="companion-art">
                <svg
                    className="companion-orbit"
                    viewBox="0 0 190 150"
                    role="img"
                    aria-label="Dheeraj's glowing AI companion"
                >
                    <defs>
                        <radialGradient id="companion-shell" cx="35%" cy="25%">
                            <stop offset="0" stopColor="#fff" />
                            <stop offset=".3" stopColor="#d9ccff" />
                            <stop offset=".72" stopColor="#8f78cf" />
                            <stop offset="1" stopColor="#3d315e" />
                        </radialGradient>
                        <linearGradient id="companion-face" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#100d1c" />
                            <stop offset="1" stopColor="#080812" />
                        </linearGradient>
                        <radialGradient id="companion-eye">
                            <stop stopColor="#fff" />
                            <stop offset=".3" stopColor="#d5baff" />
                            <stop offset="1" stopColor="#8b4dff" />
                        </radialGradient>
                        <filter id="companion-glow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <g className="orbit-lines" fill="none" stroke="#a878ff">
                        <ellipse cx="83" cy="91" rx="77" ry="19" transform="rotate(-12 83 91)" opacity=".58" />
                        <ellipse cx="83" cy="91" rx="70" ry="28" transform="rotate(17 83 91)" opacity=".34" />
                        <path d="M8 91c22 8 37-8 54-7 20 1 30 22 55 15 12-3 20-13 39-12" opacity=".7" />
                    </g>
                    <circle cx="20" cy="74" r="2" fill="#d8c3ff" className="orbit-spark" />
                    <circle cx="151" cy="105" r="2.4" fill="#c09aff" className="orbit-spark orbit-spark-late" />
                    <circle cx="42" cy="119" r="1.5" fill="#fff" opacity=".8" />

                    <ellipse cx="83" cy="126" rx="39" ry="7" fill="#9d6cff" opacity=".25" filter="url(#companion-glow)" />
                    <path d="M55 117c5-15 16-21 28-21s23 6 28 21l-8 7H63z" fill="url(#companion-shell)" stroke="#d8c8ff" strokeOpacity=".65" />
                    <ellipse cx="83" cy="121" rx="23" ry="4" fill="#201833" opacity=".8" />

                    <g className="companion-head">
                        <circle cx="45" cy="67" r="13" fill="#716394" stroke="#d0c2ff" strokeWidth="2" />
                        <circle cx="45" cy="67" r="6" fill="#b8a1ff" opacity=".8" />
                        <circle cx="121" cy="67" r="13" fill="#716394" stroke="#d0c2ff" strokeWidth="2" />
                        <circle cx="121" cy="67" r="6" fill="#b8a1ff" opacity=".8" />
                        <path d="M57 38c8-9 17-13 26-13s19 4 26 13" fill="none" stroke="#e6dcff" strokeWidth="2" opacity=".8" />
                        <circle cx="83" cy="23" r="3" fill="#cfb5ff" filter="url(#companion-glow)" />
                        <ellipse cx="83" cy="67" rx="40" ry="42" fill="url(#companion-shell)" stroke="#e2d8ff" strokeWidth="1.5" />
                        <ellipse cx="83" cy="70" rx="32" ry="28" fill="url(#companion-face)" stroke="#b79aff" strokeOpacity=".58" />
                        <path d="M60 53c8-12 23-17 39-11" fill="none" stroke="#fff" strokeOpacity=".44" strokeWidth="2" strokeLinecap="round" />
                        <ellipse cx="71" cy="68" rx="4.5" ry="6.5" fill="url(#companion-eye)" filter="url(#companion-glow)" />
                        <ellipse cx="95" cy="68" rx="4.5" ry="6.5" fill="url(#companion-eye)" filter="url(#companion-glow)" />
                        <path d="M77 84q6 4 12 0" fill="none" stroke="#a789e9" strokeWidth="1.5" strokeLinecap="round" opacity=".7" />
                    </g>
                </svg>
                <a className="logo" href="#hero" aria-label="Dheeraj Verse, Home">
                    Dheeraj<span> Verse</span>
                </a>
            </div>

            <div className="companion-message" role="status">
                <span>Hi! I'm Dheeraj's AI</span>
                <span>Navigate or ask me anything.</span>
            </div>
        </div>
    );
}

function Navbar() {
    const [active, setActive] = useState("hero");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const scrollPosition = window.scrollY + 150;

            sections.forEach((section) => {
                const element = document.getElementById(section);

                if (
                    element &&
                    scrollPosition >= element.offsetTop &&
                    scrollPosition < element.offsetTop + element.offsetHeight
                ) {
                    setActive(section);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!menuOpen) return undefined;

        const closeOnEscape = (event) => {
            if (event.key === "Escape") setMenuOpen(false);
        };

        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [menuOpen]);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <AiCompanion />

                <button
                    className={`nav-toggle ${menuOpen ? "open" : ""}`}
                    type="button"
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((current) => !current)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                {menuOpen && (
                    <button
                        className="nav-backdrop"
                        type="button"
                        aria-label="Close navigation menu"
                        onClick={handleLinkClick}
                    />
                )}

                <nav
                    className={`nav-links ${menuOpen ? "open" : ""}`}
                    id="primary-navigation"
                    aria-label="Primary navigation"
                >
                    <div className="mobile-menu-heading">
                        <div className="mobile-ai-orb" aria-hidden="true">
                            <span />
                            <span />
                        </div>
                        <div className="mobile-menu-copy">
                            <span className="mobile-menu-eyebrow">DHEERAJ'S AI · ONLINE</span>
                            <strong>Where would you like to go?</strong>
                        </div>
                    </div>
                    {navigation.map(({ id, label, Icon }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={active === id ? "active" : ""}
                            aria-current={active === id ? "location" : undefined}
                            onClick={handleLinkClick}
                        >
                            <Icon aria-hidden="true" />
                            <span>{label}</span>
                            {active === id && <small className="mobile-active-label">ACTIVE MODULE</small>}
                            <FiArrowRight className="mobile-link-arrow" aria-hidden="true" />
                        </a>
                    ))}
                    <div className="mobile-cta-divider" aria-hidden="true" />
                    <a className="nav-cta" href="#contact" onClick={handleLinkClick}>
                        <span>Let's Talk</span>
                        <FiArrowRight aria-hidden="true" />
                    </a>
                </nav>

                <div className="navbar-note" aria-hidden="true">
                    <span>Building the future<br />with AI...</span>
                    <i />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
