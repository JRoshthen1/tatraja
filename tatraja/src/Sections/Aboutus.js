import Roadmap from '../components/Roadmap';
import FlickeringCarousel from '../components/FlickeringCarousel';

const Aboutus = () => {

  //About us section importing the scrolling RoadMap

  return (
    <div>

        <div className='flex flex-col lg:flex-row justify-center items-center py-24'>
            
            <div className='w-1/2'>
            <FlickeringCarousel/>
            </div>


          <div className='flex flex-col w-1/2 md:3/4 sm:w-auto text-center justify-center items-start'>
            <h1 className="text-white text-6xl font-fredericka m-6">Our NFT collection</h1>
            <p className='text-white text-right sm:text-center md:text-center font-nunito m-6 pb-10 text-xl'>
            Our collection of 333 unique ANALOG NFT's is reflecting on today's trend take lots of photos 
            of any anomalies or satisfactions in short amount of time and not focusing on what it accualy is, that makes photo visualy appealing.
            With analog camera, photographer is looking for right opportunity to take fraction of time, light, mood and feeling into small window of film.</p>
          </div>
        </div>
        <Roadmap/>


        </div>
        
  )
}

export default Aboutus