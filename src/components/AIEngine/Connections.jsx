import { Line } from "@react-three/drei";

const points = [
  [0, -0.1, 0],      // Center

  [-0.9, 0.7, 0],
  [0.95, 0.8, 0],

  [-1.25, -0.35, 0],
  [1.15, -0.45, 0],

  [-0.35, 1.25, 0],
  [0.55, 1.15, 0],

  [-0.45, -1.1, 0],
  [0.7, -1.2, 0],
];

function Link(a, b) {
  return (
    <Line
      key={`${a}-${b}`}
      points={[points[a], points[b]]}
      color="#B8A1FF"
      lineWidth={1}
      transparent
      opacity={0.18}
    />
  );
}

export default function Connections() {
  return (
    <>
      {/* Center */}
      {Link(0, 1)}
      {Link(0, 2)}
      {Link(0, 3)}
      {Link(0, 4)}
      {Link(0, 5)}
      {Link(0, 6)}
      {Link(0, 7)}
      {Link(0, 8)}

      {/* Top */}
      {Link(1, 5)}
      {Link(5, 6)}
      {Link(6, 2)}

      {/* Bottom */}
      {Link(3, 7)}
      {Link(7, 8)}
      {Link(8, 4)}

      {/* Side Links */}
      {Link(1, 3)}
      {Link(2, 4)}
    </>
  );
}