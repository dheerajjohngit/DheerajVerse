import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import Nodes from "./Nodes";
import Connections from "./Connections";

function AIGroup() {
  const groupRef = useRef();

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime();

    // Floating animation
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;

    // Mouse interaction
    groupRef.current.rotation.x +=
      ((-mouse.y * 0.3) - groupRef.current.rotation.x) * 0.05;

    groupRef.current.rotation.y +=
      ((mouse.x * 0.3) - groupRef.current.rotation.y) * 0.05;

    // Gentle idle rotation
    groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.05;
  });

  return (
    <group ref={groupRef} scale={1.1}>
      <Connections />
      <Nodes />
    </group>
  );
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[3, 3, 3]}
        intensity={1.2}
      />

      <pointLight
        position={[0, 0, 2]}
        intensity={4}
        color="#B8A1FF"
      />

      <AIGroup />
    </>
  );
}