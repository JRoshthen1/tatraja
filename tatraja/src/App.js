import './App.css';
import HeroSection from './components/HeroSection.js';
import Box from './components/Box.js';
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
    <HeroSection></HeroSection>
    <Canvas className='canvas'>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2 , -5 , 2]} intensity={1}/>
      <directionalLight position={[-2 , 5 , 2]} intensity={1}/>
      <Box />
    </Canvas>
    </div>
  );
}

export default App;

