import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Fog, BackSide, FrontSide, DoubleSide } from "three";

const MainSceneShow = () => {
  const shapeRef = useRef(null);

  useFrame(() => {
    shapeRef.current.rotation.y -= 0.01;
  });

  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 5]} />
      <ambientLight />
      <spotLight
        color={"#ffffff"}
        intensity={10}
        position={[5, 0, 5]}
        castShadow
      />
      <mesh ref={shapeRef}>
        <torusGeometry />
        {/* <meshStandardMaterial color={"#0e342a"}></meshStandardMaterial> */}
        <meshToonMaterial
          color={"#0e342a"}
          transparent={true}
          opacity={2}
          depthTest={true}
          side={FrontSide}
        />
      </mesh>
      {/* <fog attach={"fog"} color={"#fff000"} near={1} far={10}></fog> */}
    </>
  );
};

export default MainSceneShow;
