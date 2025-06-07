import React from 'react'
import birdsScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import  {useEffect} from 'react';


const Birds = () => {
  const birdsRef = useRef();
  const { scene ,animations } = useGLTF(birdsScene);
  const{actions} =useAnimations(animations, birdsRef);

  useEffect(() => {
    
      actions['Take 001'].play();
    
  }, []);

  useFrame(({ clock, camera }) => {
  birdsRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

  if (birdsRef.current.position.x > camera.position.x + 10) {
    birdsRef.current.rotation.y = Math.PI;
  } else if (birdsRef.current.position.x < camera.position.x - 10) {
    birdsRef.current.rotation.y = 0;
  }

  if (birdsRef.current.rotation.y === 0) {
    birdsRef.current.position.x += 0.01;
    birdsRef.current.position.z -= 0.01;
  } else {
    birdsRef.current.position.x -= 0.01;
    birdsRef.current.position.z += 0.01;
  }
});

  return (
    <mesh position={[-5, 2, 1]}
          scale={[0.003, 0.003, 0.003]}
          ref={birdsRef}>
     <primitive object ={scene} />
    </mesh>
  )
}

export default Birds 
