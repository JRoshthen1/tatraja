import './App.css';

import HeroSection from './components/HeroSection.js';
import Box from './components/Box.js';
import NavBar from './components/NavBar';


import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef , useEffect } from "react";
import { gsap } from "gsap"


function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'none',
      delay: 1
    })
  }, [])


  return (
    <div ref={heroRef} className="flex-col bg-darkBlue justify-center"> 
    <NavBar />
    <HeroSection></HeroSection>
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2 , -5 , 2]} intensity={1}/>
      <directionalLight position={[-2 , 5 , 2]} intensity={1}/>
      <Box className='orange-700' />
    </Canvas>
    </div>
  );
}

export default App;

