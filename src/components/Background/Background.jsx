import "./Background.css";

const Background = () => {
  return (
    <div className="background">
      <div className="bg-grid"></div>

      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="bg-overlay"></div>
    </div>
  );
};

export default Background;