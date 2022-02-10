import './App.css';
import HeroSection from './components/HeroSection.js';
import Box from './components/Box.js';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className="flex-col justify-center"> 
  <HeroSection></HeroSection>
    <Canvas className='canvas'>
      <OrbitControls enableZoom={false} />
      <directionalLight position={[-2 , -5 , 2]} intensity={1}/>
      <directionalLight position={[-2 , 5 , 2]} intensity={1}/>
      <Box />
    </Canvas>
    </div>
  );
}

export default App;

