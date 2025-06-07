import React, {useState, Suspense,useEffect,useRef } from 'react';
import {Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Birds from '../models/Birds';
import Plane from '../models/Plane';
import Homeinfo from '../components/Homeinfo';
import  sakura from '../assets/sakura.mp3';
import { soundon,soundoff } from '../assets/icons';



const Home = () => {

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.5;
  audioRef.current.loop = true;
  const   [isRotating , setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const[isplaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isplaying) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isplaying]);



  const  adjustIslandPosition =()=>{
    let  screenscale  = null;
    let  screenPosition = [0,-6.5,-43];
    let screenRotation = [0.1, 4.7, 0];
   if(window.innerWidth < 768){
      screenscale = [0.9, 0.9, 0.9];
     }else {
       screenscale = [1, 1, 1];
     }
   return [ screenscale, screenPosition , screenRotation ];
  }
  
  //Adjust plane position based on screen size
    const  adjustplaneForScreenSize =()=>{
    let  screenscale  = null;
    let  screenPosition ;

   if(window.innerWidth < 768){
      screenscale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
     }else {
       screenscale = [3, 3, 3];
        screenPosition = [0, -4, -4];
     }
   return [ screenscale, screenPosition  ];
  }


  const[islandScale, islandPosition, islandRotation] = adjustIslandPosition();
 const [planeScale, planePosition, planeRotation] = adjustplaneForScreenSize();
  return (
    <section className= "w-full h-screen  relative  ">
         <div className="absolute top-28  left-0 right-0 z-10  item-center  flex justify-center  ">
           {currentStage&&<Homeinfo currentStage={currentStage}/>}
         </div>

           <Canvas 
           className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}  
           camera={{ near: 0.1, far: 1000 }}>
            <Suspense fallback={null}>
            <directionalLight position={[1, 1, 1]} intensity={1} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
               <Birds/>
               <Sky
               isRotating={isRotating}
               />
               <Island 
               scale={islandScale}
               position={islandPosition}
               rotation={islandRotation}
               isRotating={isRotating}
               setIsRotating={setIsRotating} 
                currentStage={currentStage}
                setCurrentStage={setCurrentStage}
               />
               <Plane
               isRotating={isRotating}
               scale={planeScale}
               position={planePosition}
               rotation={[0, 20, 0]}
               />
            </Suspense>
           </Canvas>
            <div className='absolute bottom-2 left-2'>
          <img
            src={!isplaying ? soundoff : soundon}
            alt='jukebox'
            onClick={() => setIsPlaying(!isplaying)}
            className='w-10 h-10 cursor-pointer object-contain'
          />
        </div>
              


    </section>
  )
}

export default Home;



