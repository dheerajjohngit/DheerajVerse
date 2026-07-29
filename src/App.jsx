import { useState } from "react";
import Loader from "./components/Loader/Loader";

import "./styles/app.css";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Loader onFinish={() => setLoading(false)} />
    );
  }

  return (
    <main className="app">
      <div className="app-content">
        <h1 className="gradient-text">
          DHEERAJVERSE
        </h1>

        <p className="app-subtitle">
          AI Core Successfully Initialised
        </p>
      </div>
    </main>
  );
}

export default App;