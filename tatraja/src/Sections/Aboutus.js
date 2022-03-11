import Roadmap from '../components/Roadmap';
import Roadmapmb from '../components/Roadmapmb';
import FlickeringCarousel from '../components/FlickeringCarousel';
import { useEffect, useState } from 'react'

const Aboutus = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

 



  //About us section importing the scrolling RoadMap

  return (
    <div id='about' className='scroll'>

        <div className='flex flex-col lg:flex-row justify-around items-center py-24'>
            
            <div className='w-1/2 flex justify-center'>
            <FlickeringCarousel/>
            </div>


          <div className='flex flex-col w-1/2 m-4 lg:m-16 md:m-8 sm:w-auto md:text-center sm:text-center lg:text-right lg:items-end justify-center md:items-center sm:items-center '>
            <h1 className="text-white text-6xl sm:text-5xl font-fredericka my-6 sm:mt-6">Our NFT collection</h1>
            <div className='flex flex-row space-x-2'>
              <div class="badge badge-lg bg-purplePink">New!</div>
              <div class="badge badge-lg">Drawing with Light</div>
            </div>
            <p className='text-white font-nunito my-6 text-lg sm:text-lg'>
            Our collection of 333 unique ANALOG NFT's is reflecting on today's trend take lots of photos 
            of any anomalies or satisfactions in short amount of time and not focusing on what it 
            accualy is, that makes photo visualy appealing. With analog camera, photographer is looking 
            for right opportunity to take fraction of time, light, mood and feeling into small window of film.</p>
          </div>
        </div>
        {width < breakpoint ? <Roadmapmb/> : <Roadmap />}
        </div>
        
  )
}

export default Aboutus