import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Bounds } from '@react-three/drei';
import { Box } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url, true, (error) => {
    console.error('Error loading GLTF:', error);
  });
  return <primitive object={scene} scale={[10, 10, 10]}/>;
}

function Model3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback={<Box args={[5, 5, 5]} />}>
        <Bounds fit clip observe margin={1}>
          <Model url='/scene.gltf' />
        </Bounds>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default Model3D;
