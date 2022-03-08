import Roadmap from '../components/Roadmap';
import FlickeringCarousel from '../components/FlickeringCarousel';

const Aboutus = () => {

  //About us section importing the scrolling RoadMap

  return (
    <div>

        <div className='flex flex-col md:flex-row justify-center items-center py-24'>
            
            <div className='w-1/2'>
            <FlickeringCarousel/>
            </div>


          <div className='flex flex-col w-1/2 m-4 lg:m-16 md:m-8 sm:w-auto text-right justify-center items-end'>
            <h1 className="text-white text-6xl font-fredericka my-6">Our NFT collection</h1>
            <div className='flex flex-row space-x-2'>
              <div class="badge badge-md bg-purplePink">New!</div>
              <div class="badge badge-lg">Drawing with Light</div>
            </div>
            <p className='text-white text-right sm:text-center font-nunito my-6 pb-10 text-lg'>
            Our collection of 333 unique ANALOG NFT's is reflecting on today's trend take lots of photos 
            of any anomalies or satisfactions in short amount of time and not focusing on what it 
            accualy is, that makes photo visualy appealing. With analog camera, photographer is looking 
            for right opportunity to take fraction of time, light, mood and feeling into small window of film.</p>
          
          <button className='btn w-36 text-xl font-link bg-white text-darkestGray hover:text-white'>Mint</button>

          </div>
        </div>
        <Roadmap/>


        </div>
        
  )
}

export default Aboutus