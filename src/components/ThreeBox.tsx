import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader, Mesh } from "three";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

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
    <div className='h-full w-full bg-black'>
        <Canvas 
            shadows='basic'
            camera={{position:[20,3,5], fov:25}}>
            <OrbitControls enableZoom={false}/>
            <Box/>
        </Canvas>
    </div>
  )
};
export default ThreeBoxCanvas;
