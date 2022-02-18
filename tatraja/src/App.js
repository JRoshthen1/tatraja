import './App.css';


import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef , useEffect } from "react";
import { gsap } from "gsap"

import HeroSection from './components/HeroSection.js';
import Box from './components/Box.js';
import NavBar from './components/NavBar';
import Aboutus from './Sections/Aboutus';
import Team from './Sections/Team';


function App() {


  useEffect(() => {

  }, [])


  return (
    <div className="flex-col bg-darkBlue justify-center"> 
    <NavBar />
    <HeroSection></HeroSection>
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2 , -5 , 2]} intensity={1}/>
      <directionalLight position={[-2 , 5 , 2]} intensity={1}/>
      <Box className='orange-700' />
    </Canvas>
    <Aboutus/>
    <Team/>
    
    </div>
  );
}

export default App;

