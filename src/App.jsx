import { useState } from "react";

import Loader from "./components/Loader/Loader";
import AIEngine from "./components/AIEngine/AIEngine";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import "./styles/app.css";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Loader onFinish={() => setLoading(false)} />
    );
  }

  return (
  <>
    <Navbar />

    <main className="app">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
</main>
  </>
);
}

export default App;