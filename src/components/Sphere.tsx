import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Loader } from "../hooks/Loader";

const Sphere = (props: any) => {
  const [decal] = useTexture([props.imgURL]);
  return (
    <Float
      speed={5}
      rotationIntensity={4}
      floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]} map={decal} />
      </mesh>
    </Float>
  );
};

const SphereCanvas = ({ icon }: any) => {
  return (
    <div className="h-full w-full">
      <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} />
          <Sphere imgURL={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SphereCanvas;
