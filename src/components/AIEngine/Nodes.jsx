function Node({ position, size = 0.08, glow = false }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color="#E9E2FF"
        emissive="#B8A1FF"
        emissiveIntensity={glow ? 3.5 : 1.8}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function Nodes() {
  return (
    <>
      {/* AI Core */}
      <Node
        position={[0, -1.2, -0.8]}
        size={0.14}
        glow
      />

      {/* Top */}
      <Node position={[0.2, 1.8, -1]} size={0.07} />

      {/* Upper Left */}
      <Node position={[-1.6, 1.1, -1]} size={0.08} />

      {/* Upper Right */}
      <Node position={[1.8, 1.1, -1]} size={0.08} />

      {/* Left */}
      <Node position={[-2.2, -0.1, -1]} size={0.09} />

      {/* Right */}
      <Node position={[2.4, -0.1, -1]} size={0.09} />

      {/* Bottom Left */}
      <Node position={[-1.6, -1.9, -1]} size={0.08} />

      {/* Bottom Right */}
      <Node position={[1.8, -1.9, -1]} size={0.08} />

      {/* Bottom */}
      <Node position={[0.2, -2.6, -1]} size={0.07} />
    </>
  );
}

export default Nodes;