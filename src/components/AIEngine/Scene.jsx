import Nodes from "./Nodes";
import Connections from "./Connections";

function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[3, 3, 5]}
        intensity={2}
      />

      <Connections />

      <Nodes />
    </>
  );
}

export default Scene;