import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { TextureLoader, Mesh } from "three";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Loader } from "../hooks/Loader"

const Box = () => {
  const imageMap = useLoader(TextureLoader, "IMG_7206.jpg");
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <ambientLight intensity={1} />
      <directionalLight position={[0,0,5]} />
      <boxGeometry args={[3,3,3]} />
      <meshStandardMaterial map={imageMap} />
    </mesh>
  );
};

const ThreeBoxCanvas = () => {

  return (
    // <div className='h-full w-full '>
        <Canvas 
            shadows='basic'
            camera={{position:[20,3,5], fov:25}}>
            <Suspense fallback={<Loader />}>
            <OrbitControls enableZoom={false}/>
            <Box/>
            </Suspense>
        </Canvas>
    // </div>
  )
};
export default ThreeBoxCanvas;
