import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Node({
  position,
  size = 0.08,
  glow = false,
}) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    if (glow) {
      const t = clock.getElapsedTime();

      const scale = 1 + Math.sin(t * 2) * 0.08;

      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />

      <meshStandardMaterial
        color="#E9E2FF"
        emissive="#B8A1FF"
        emissiveIntensity={glow ? 4 : 1.8}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export default function Nodes() {
  const nodes = [
    // Center AI Core
    {
      position: [0, -0.1, 0],
      size: 0.12,
      glow: true,
    },

    // Outer Nodes
    {
      position: [-0.9, 0.7, 0],
      size: 0.07,
    },
    {
      position: [0.95, 0.8, 0],
      size: 0.06,
    },
    {
      position: [-1.25, -0.35, 0],
      size: 0.07,
    },
    {
      position: [1.15, -0.45, 0],
      size: 0.08,
    },
    {
      position: [-0.35, 1.25, 0],
      size: 0.06,
    },
    {
      position: [0.55, 1.15, 0],
      size: 0.07,
    },
    {
      position: [-0.45, -1.1, 0],
      size: 0.06,
    },
    {
      position: [0.7, -1.2, 0],
      size: 0.07,
    },
  ];

  return (
    <>
      {nodes.map((node, index) => (
        <Node
          key={index}
          position={node.position}
          size={node.size}
          glow={node.glow}
        />
      ))}
    </>
  );
}