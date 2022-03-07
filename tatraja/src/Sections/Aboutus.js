import Roadmap from '../components/Roadmap';

const Aboutus = () => {

  //About us section importing the scrolling RoadMap

  return (
    <div>
        <div className='flex flex-col justify-center items-end h-128'>
        <h1 className="text-white text-6xl text-right font-fredericka m-6">Our NFT collection</h1>
        <p className='text-white font-nunito m-6 pb-10 text-xl lg:w-1/2 md:w-2/3 text-right'>
         Our collection of 333 unique ANALOG NFT's is reflecting on today's trend take lots of photos 
         of any anomalies or satisfactions in short amount of time and not focusing on what it accualy is, that makes photo visualy appealing.
         With analog camera, photographer is looking for right opportunity to take fraction of time, light, mood and feeling into small window of film.</p>
        </div>
        <Roadmap/>
        </div>
        
  )
}

export default Aboutus