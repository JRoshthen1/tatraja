import './App.css';
import { useEffect } from "react";


import HeroSection from './Sections/HeroSection.js';
import Mint from './Sections/Mint';
import Faq from './Sections/Faq';
import Charity from './Sections/Charity';
import VoteCharity from './Sections/VoteCharity';
import Aboutus from './Sections/Aboutus';
import Team from './Sections/Team';


import NavBar from './components/NavBar';
import Footer from './components/Footer';






function App() {


  useEffect(() => {

  }, [])


  return (
    <div className="flex-col bg-darkBlue justify-center max-w-[1920px]"> 
    <NavBar/>

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

