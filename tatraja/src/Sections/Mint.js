import React from 'react'
import Film from '../svg/Film'
import Print from '../svg/Print'
import Token from '../svg/Token'

import Girl from '../images/girlImage.png'


const Mint = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col w-1/2 justify-center items-center'>
        <div className='text-5xl text-white font-fredericka p-10 mb-5 text-center'>Mint our NFT</div>
        <p className='mb-10 text-white text-xl w-80 text-center place-self-center'>By buying our non fungable token, you will get more than just copyright. The print of the photo and it’s film will be sent to you, so you are the only one, that can replicate it.</p>
          <div className='flex w-128 justify-evenly my-8'>
          <Token/>
          <span className='text-white text-5xl'>+</span>      
          <Film/>
          <span className='text-white text-5xl'>+</span> 
          <Print/>
          </div>
      <img className='w-full' src={Girl} alt=''/>
      </div>

    </div>
  )
}

export default Mint