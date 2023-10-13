// src/components/ModelViewer.js
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = () => {
  const gltf = useLoader(GLTFLoader, '/model.glb');
  const modelRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      controlsRef.current.dampingFactor = 1;
      controlsRef.current.screenSpacePanning = false;
      controlsRef.current.maxPolarAngle = Math.PI / 2;
    }
  }, []);

  return (
    <group ref={modelRef}>
      {/* Add the 3D model */}
      <primitive object={gltf.scene} />

      {/* Add OrbitControls */}
      {modelRef.current && (
        <orbitControls
          ref={controlsRef}
          args={[modelRef.current, controlsRef.current?.domElement]}
        />
      )}

      {/* Light source */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </group>
  );
};

export default ModelViewer;
