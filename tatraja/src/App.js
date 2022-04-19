import './App.css';


import HeroSection from './Sections/HeroSection.js';
import Mint from './Sections/Mint';
import Faq from './Sections/Faq';
import VoteCharity from './Sections/VoteCharity';
import Aboutus from './Sections/Aboutus';
import Team from './Sections/Team';


import NavBar from './components/NavBar';
import Footer from './components/Footer';






function App() {



  return (
    <div className="flex-col bg-darkBlue justify-center"> 
    <NavBar/>
    <HeroSection/>
    <Aboutus/>
    

    <Mint/>

    <Team/>

    <VoteCharity/>

    <Faq/>

    <Footer/>
    </div>
  );
}

export default App;

