import React from 'react'
import layeredWaves from '../images/layered-waves-haikei.svg'
import {ReactComponent as LayeredPeaksBench} from '../images/layered-peaks-bench.svg'


function Charity() {
  return (
    <div>
        <div className=' pt-20 flex flex-col justify-between'>
        <div className="bg-cover w-screen xl:h-128 lg:h-96 md:h-72 sm:h-48 bg-lightestGray" style={{
                 backgroundImage: `url(${layeredWaves})`
                   }}>   
            </div>
        <div className='flex flex-col items-center w-full relative inset-x-0 bottom-0 bg-lightestGray'>
            
            <div className='flex text-darkestGray justify-evenly w-11/12'>
                   <h1 className='p-4 text-4xl sm:text-3xl font-fredericka w-1/2'>We love our planet!</h1>
                   <h5 className='p-4 sm:font-normal font-bold w-64 sm:w-1/2'><span className='text-green-700'>13%</span> from every purchase goes to charity of our community selection</h5>
            </div>
            
            <p className='text-darkestGray mt-12 sm:text-sm w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 text-center'>Smart contract technology allows us to split the purchase price right in the minting process, to ensure transparency and legitimacy. </p>
        
        </div>
        {/*    COMPONENT APPROACH ON THE BENCH IMAGE   */}
        <div className='w-screen'>
          <LayeredPeaksBench className='w-screen h-full bg-lightestGray'/>
        </div>
        

{/*    BG IMAGE APPROACH ON THE BENCH IMAGE    
     <div className="bg-cover bg-bottom bg-no-repeat sm:bg-contain w-full h-screen sm:h-[60vh] md:h-[80vh] bg-lightestGray" style={{
                 backgroundImage: `url(${layeredPeaksBench})`
                   }}>   
                  </div> 
*/}
            </div>
    </div>
  )
}

export default Charity