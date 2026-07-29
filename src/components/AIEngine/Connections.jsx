import { Line } from "@react-three/drei";

const points = [
  [0, -1.2, -0.8],

  [0.2, 1.8, -1],
  [-1.6, 1.1, -1],
  [1.8, 1.1, -1],
  [-2.2, -0.1, -1],
  [2.4, -0.1, -1],
  [-1.6, -1.9, -1],
  [1.8, -1.9, -1],
  [0.2, -2.6, -1],
];

function Link(a, b) {
  return (
    <Line
      key={`${a}-${b}`}
      points={[points[a], points[b]]}
      color="#B8A1FF"
      lineWidth={1}
      transparent
      opacity={0.35}
    />
  );
}

function Connections() {
  return (
    <>
      {Link(0, 4)}
      {Link(0, 5)}

      {Link(4, 2)}
      {Link(5, 3)}

      {Link(2, 1)}
      {Link(1, 3)}

      {Link(4, 6)}
      {Link(5, 7)}

      {Link(6, 8)}
      {Link(7, 8)}
    </>
  );
}

export default Connections;