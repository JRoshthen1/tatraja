import './App.css';
import { useEffect } from "react";


import HeroSection from './components/HeroSection.js';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
    <div className="flex-col bg-darkBlue justify-center scroll-smooth  max-w-[1920px]"> 
    <NavBar/>
    
    <HeroSection/>
    
    <Aboutus/>

    <Mint/>

    <Team/>
    
    <Faq/>
    
    <Charity/>

    <VoteCharity/>

    <Footer/>
    </div>
  );
}

export default App;

