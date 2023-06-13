import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useState, useEffect, useRef, useContext } from "react";
import { ParametersContext } from "../contexts/ParametersContext";
import resolveShapeType from "../functions/resolveShapeType";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Ground } from "./Ground";

const MainSceneShow = () => {
  const shapeRef = useRef(null);
  const shape = useContext(ParametersContext);
  const [currentShape, setCurrentShape] = useState();
  const colorMap =
    shape.materialTexture != "none"
      ? useLoader(TextureLoader, `${shape.materialTexture}.jpg`)
      : "";

  useFrame(() => {
    shapeRef.current.rotation.x += Number(shape.rotateSpeedX);
    shapeRef.current.rotation.y += Number(shape.rotateSpeedY);
    shapeRef.current.rotation.z += Number(shape.rotateSpeedZ);
  });

  useEffect(() => {
    setCurrentShape(resolveShapeType(shape));
  }, [shape.type, shape.enableTransparency]);

  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={70} position={[0, 5, 6]} />
      <ambientLight />
      <color args={[0, 0, 0]} attach={"background"} />
      <spotLight
        color={shape.spotLightColor}
        intensity={shape.spotLightIntensity}
        position={[shape.spotLightX, shape.spotLightY, shape.spotLightZ]}
        castShadow
      />
      <mesh ref={shapeRef} position={[0, 2, 0]}>
        {currentShape}
        {shape.enableToon ? (
          <meshToonMaterial
            key={shape.enableTransparency || shape.materialTexture}
            color={shape.materialColor}
            transparent={shape.enableTransparency}
            opacity={Number(shape.transparencyOpacity)}
            map={colorMap}
          />
        ) : (
          <meshStandardMaterial
            key={shape.enableTransparency || shape.materialTexture}
            color={shape.materialColor}
            transparent={shape.enableTransparency}
            opacity={Number(shape.transparencyOpacity)}
            map={colorMap}
          />
        )}
      </mesh>
      {shape.enableFog && (
        <fog attach={"fog"} color={shape.fogColor} near={1} far={10}></fog>
      )}
      <Ground />
    </>
  );
};

export default MainSceneShow;
