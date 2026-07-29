import { useState } from "react";

import Loader from "./components/Loader/Loader";
import AIEngine from "./components/AIEngine/AIEngine";

import Hero from "./sections/Hero/Hero";

import "./styles/app.css";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Loader onFinish={() => setLoading(false)} />
    );
  }

  return (
  <>
    <main className="app">
      <Hero />
    </main>
  </>
);
}

export default App;