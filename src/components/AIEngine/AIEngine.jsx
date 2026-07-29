import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./AIEngine.css";

function AIEngine() {
  return (
    <div className="background">
      <Canvas
        camera={{
  position: [0, 0, 6.5],
  fov: 50,
}}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default AIEngine;