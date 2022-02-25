import './App.css';


import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect } from "react";


import HeroSection from './components/HeroSection.js';
import Box from './components/Box.js';
import NavBar from './components/NavBar';
import Aboutus from './Sections/Aboutus';
import Team from './Sections/Team';

import Mint from './Sections/Mint';
import Faq from './Sections/Faq';
import Charity from './Sections/Charity';
import VoteCharity from './Sections/VoteCharity';



function App() {


  useEffect(() => {

  }, [])


  return (
    <div className="flex-col bg-darkBlue justify-center scroll-smooth"> 
    <NavBar />
    <HeroSection/>
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2 , -5 , 2]} intensity={1}/>
      <directionalLight position={[-2 , 5 , 2]} intensity={1}/>
      <Box className='orange-700' />
    </Canvas>
    
    <Aboutus/>

    <Mint/>

    <Team/>
    
    <Faq/>
    
    <Charity/>

    <VoteCharity/>
    </div>
  );
}

export default App;

