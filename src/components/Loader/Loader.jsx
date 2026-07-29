import { useEffect, useState } from "react";
import "./Loader.css";
import bootSequence from "../../utils/bootSequence";

function Loader({ onFinish }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {

    // Stop BEFORE accessing an invalid index
    if (index >= bootSequence.length) {
      clearInterval(interval);

      setTimeout(() => {
        onFinish();
      }, 1200);

      return;
    }

    setMessages((prev) => [
      ...prev,
      bootSequence[index],
    ]);

    index++;

  }, 800);

  return () => clearInterval(interval);

}, [onFinish]);

  return (
    <div className="loader">
      <div className="loader-content">
        <h1>DHEERAJVERSE</h1>

        <p className="loader-title">
          AI INITIALIZATION
        </p>

        <div className="terminal">
          {messages
  .filter(Boolean)
  .map((item, i) => (
            <div
              key={i}
              className={`terminal-line ${item.type}`}
            >
              {item.type === "command" ? (
                <>
                  <span>&gt;</span>
                  <span>{item.text}</span>
                </>
              ) : (
                <>
                  <span>✓</span>
                  <span>{item.text}</span>
                </>
              )}
            </div>
          ))}

          <div className="cursor">█</div>
        </div>
      </div>
    </div>
  );
}

export default Loader;