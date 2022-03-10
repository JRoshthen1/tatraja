import React from 'react'
import Film from '../svg/Film'
import Print from '../svg/Print'
import Token from '../svg/Token'
import TranslateCarousel from '../components/TranslateCarousel'


const Mint = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center sm:m-10'>
        <div className='text-5xl text-white font-fredericka mb-10 text-center'>Mint our NFT</div>
        <p className='mb-10 text-lg text-center'>By purchasing our Non Fungable Token, you will get more than just copyright. After minting our NFT, you have the choice to order the <b>original print</b> of the photo as well as the <b>original film</b>, so you are the only one, that can replicate it.</p>
          <div className='flex space-x-5 sm:space-x-3 justify-evenly my-8'>
          <Token/>
          <span className='text-5xl'>+</span>      
          <Film/>
          <span className=' text-5xl'>+</span> 
          <Print/>
          </div>

        {/*    Translating carousel   */}

      </div>

<TranslateCarousel/>

    </div>
  )
}

export default Mint