// Import required libraries and functions
import React, { Suspense, useRef, useState } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Bounds, Environment } from '@react-three/drei';
import { Box } from '@react-three/drei';

// Import required components
import Loader3D from '../ui/loaders/loader3D';

// Import required styling
import Styles from './brtStation3DModel.module.css';

function BrtStation3DModel({ url }) {

  const [loading, setLoading] = useState(true);

  const gltf = useLoader(GLTFLoader, url);

  // Loading screen
  const Loader = async () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500)
    
  }
  Loader();

  if(loading){
    return <div className={Styles.loader}><Loader3D/></div>
  }

  return (
    <Canvas camera={{ fov: 10, near: 1, far: 1000, position: [55.25372931026002, 500.5840093168648, -1087.3203438255905] }}>
      {/* <OrbitControls target={[-2.7391754518680993, 0.0038174597273677043, 3.139967774695881]}/> */}
      <DefaultLights/>
      <Environment preset="sunset" />
      <OrbitControls />
      <Suspense fallback={<Box args={[5, 5, 5]} />}>
        <Bounds fit clip observe margin={1}>
          <primitive object={gltf.scene} scale={[1, 1, 1]}/>
        </Bounds>
      </Suspense>
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

export default BrtStation3DModel;

function DefaultLights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <pointLight position={[10, -10, 10]} intensity={0.5} />
    </>
  );
}
