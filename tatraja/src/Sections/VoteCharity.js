import React from 'react'
import UpsidePeaksGreen from '../images/upside-peaks-green.svg'
import {ReactComponent as Enviroment} from '../images/environment_iaus.svg'

function VoteCharity() {
  return (
    <div className="bg-cover h-screen w-screen flex justify-center items-center" style={{
        backgroundImage: `url(${UpsidePeaksGreen})`
          }}>   

          <div className='flex flex-col text-center justify-center items-center lg:space-y-24 lg:mt-24 space-y-16'>
              <h1 className='text-4xl font-fredericka text-white'>Vote for your favourite charity!</h1>
              <button className='btn w-56 bg-white hover:bg-mint text-darkestGray text-lg'>Vote</button>
                <Enviroment className='w-56 h-48 sm:h-38'/>
          </div>

   </div>
  )
}

export default VoteCharity