import React from 'react'

function VoteCharity() {
  return (
    <div className=" text-darkestGray relative bg-cover flex flex-col justify-center items-center bg-lightestGray">  
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className='relative h-20 block calcSvg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#13161D"></path>
                    </svg>
                </div> 
            
            <div className='my-28'>
                <div className='flex flex-col items-center'>
                    <h1 className='p-4 text-4xl sm:text-3xl font-fredericka'>We love our planet, and everything on it!</h1>
                    
                    <div className='flex sm:flex-col items-center justify-center '>
                      <h5 className='sm:font-normal font-bold w-64 p-4'><span className='text-green-700'>13%</span> from every purchase goes to charity of our community selection</h5>            
                      <p className='text-right w-64 p-4'>Smart contract technology allows us to split the purchase price right in the minting process, to ensure transparency and legitimacy. </p>
                    </div>
              </div>  

              <div className='flex flex-col justify-center items-center'>
                  <h1 className='p-4 text-4xl sm:text-3xl font-fredericka'>Vote for your favourite charity!</h1>
                  <button className='btn w-56 hover:bg-mint text-lg border-0'>Vote</button>
              </div>
            </div>


          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg className='relative h-20 block calcSvg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#13161D"></path>
            </svg>
         </div>

   </div>
  )
}

export default VoteCharity