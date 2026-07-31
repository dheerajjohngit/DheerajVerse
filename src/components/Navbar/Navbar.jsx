import "./Navbar.css";
import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "contact"];

function Navbar() {
    const [active, setActive] = useState("hero");
const [scrolled, setScrolled] = useState(false);

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

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">

                <a href="#hero" className="logo">
                    Dheeraj<span>Verse</span>
                </a>

                <nav className="nav-links">

                    <a
                        href="#hero"
                        className={active === "hero" ? "active" : ""}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className={active === "about" ? "active" : ""}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className={active === "skills" ? "active" : ""}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className={active === "projects" ? "active" : ""}
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className={active === "contact" ? "active" : ""}
                    >
                        Contact
                    </a>

                </nav>
            </div>
        </header>
    );
}

export default Navbar;