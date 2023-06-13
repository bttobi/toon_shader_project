import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { RepeatWrapping, TextureLoader } from "three";

export const Ground = () => {
  const [roughnessMap, normalMap] = useLoader(TextureLoader, [
    "groundroughness.jpg",
    "ground.jpg",
  ]);

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalScale={[0.15, 0.15]}
        color={"#101010"}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
      />
    </mesh>
  );
};
