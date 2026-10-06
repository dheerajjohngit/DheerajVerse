import "./Navbar.css";
import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "contact"];

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

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <a href="#hero" className="logo">
                    Dheeraj<span>Verse</span>
                </a>

                <button
                    className={`nav-toggle ${menuOpen ? "open" : ""}`}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((current) => !current)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a
                        href="#hero"
                        className={active === "hero" ? "active" : ""}
                        onClick={handleLinkClick}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className={active === "about" ? "active" : ""}
                        onClick={handleLinkClick}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className={active === "skills" ? "active" : ""}
                        onClick={handleLinkClick}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className={active === "projects" ? "active" : ""}
                        onClick={handleLinkClick}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className={active === "contact" ? "active" : ""}
                        onClick={handleLinkClick}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;