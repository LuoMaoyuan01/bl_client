// Import required libraries and functions
import React, { Suspense, useState, useEffect, useRef } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Bounds, Environment } from '@react-three/drei';
import { Box } from '@react-three/drei';
import { Vector3, Box3 } from 'three';

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
    <Canvas camera={{ fov: 10, near: 1, far: 1000 }}>
      {/* <OrbitControls target={[-2.7391754518680993, 0.0038174597273677043, 3.139967774695881]}/> */}
      <DefaultLights/>
      <Environment preset="dawn" />
      {/* <OrbitControls /> */}
      <Suspense fallback={<Box args={[5, 5, 5]} />}>
        <Bounds fit clip observe margin={1}>
          <CenteredModel object={gltf.scene} />
        </Bounds>
      </Suspense>
      <CameraController/>
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

// Centers the model always
function CenteredModel({ object }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const box = new Box3().setFromObject(ref.current);
      const center = box.getCenter(new Vector3());
      ref.current.position.sub(center); // Center the model
    }
  }, [object]);

  return <primitive ref={ref} object={object} />;
}

export default BrtStation3DModel;

function CameraController() {
  const { camera } = useThree();
  const target = new Vector3(0, 0, 0); // Center of the scene

  useEffect(() => {
    camera.position.set(0, 0, 10); // Adjust as needed
    camera.lookAt(target);
  }, [camera]);

  return <OrbitControls target={target} />;
}

function DefaultLights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <pointLight position={[10, -10, 10]} intensity={0.5} />
      <pointLight position={[0, 10, 0]} intensity={1} />
    </>
  );
}
