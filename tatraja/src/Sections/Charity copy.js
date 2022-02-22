import React from 'react'
import layeredWaves from '../images/layered-waves-haikei.svg'
import layeredPeaksBench from '../images/layered-peaks-bench.svg'

function Charity() {
  return (
    <div>
        <div className='pt-64 flex flex-col justify-end'>
        <div className="bg-cover w-full h-[50vh] absolute bg-lightestGray" style={{position: 'absolute',
                 backgroundImage: `url(${layeredWaves})`
                   }}>   
            </div>
        <div className='flex flex-col items-center w-full relative inset-x-0 bottom-0 '>
            
            <div className='flex text-darkestGray justify-evenly w-11/12'>
                   <h1 className='p-4 text-4xl sm:text-3xl font-fredericka w-1/2'>We love our planet!</h1>
                   <h5 className='p-4 sm:font-normal font-bold w-64 sm:w-1/2'><span className='text-green-700'>13%</span> from every purchase goes to charity of our community selection</h5>
            </div>
            
            <p className='text-darkestGray w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 text-center'>Smart contract technology allows us to split the purchase price right in the minting process, to ensure transparency and legitimacy. </p>
        </div>
        </div>

        <div className="bg-cover xl:lg:md:bg-bottom sm:bg-contain bg-no-repeat w-auto h-screen bg-lightestGray" style={{
                 backgroundImage: `url(${layeredPeaksBench})`
                   }}>   
            </div>

    </div>
  )
}

export default Charity