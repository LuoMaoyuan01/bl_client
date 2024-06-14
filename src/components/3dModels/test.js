import React, { Suspense, useRef } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Bounds } from '@react-three/drei';
import { Box } from '@react-three/drei';

function Model3D({ url }) {

  const gltf = useLoader(GLTFLoader, url);

  return (
    <Canvas camera={{ fov: 30, near: 0.1, far: 1000, position: [46.25372931026002, 651.5840093168648, -1487.3203438255905] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback={<Box args={[5, 5, 5]} />}>
        <Bounds fit clip observe margin={1}>
          <primitive object={gltf.scene} scale={[1, 1, 1]}/>
        </Bounds>
      </Suspense>
      <OrbitControls target={[-2.7391754518680993, 0.0038174597273677043, 3.139967774695881]}/>
      {/* <CameraLogger/> */}
    </Canvas>
  );
}

// Function used to obtain the current camera perspective and rotation to adjust accordingly
function CameraLogger() {
  const { camera } = useThree();
  useFrame(() => {
    console.log('Camera position:', camera.position);
    console.log('Camera rotation:', camera.rotation);
  });

  return null;
}

export default Model3D;
