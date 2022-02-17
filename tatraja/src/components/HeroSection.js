import React from 'react'
import Camera from '../images/Camera.png'

function HeroSection() {


  return (
    <div className='flex flex-col justify-center text-center items-center'>
        <div className="text-3xl text-mint hover:text-blue-200 font-light underline">
          <a
           href="https://tailwindcss.com/docs"
           target="_blank"
            rel="noopener noreferrer"
           >
             Learn TailWind</a>
        </div>
        <br/>
        <a
          className="text-3xl text-white hover:text-lightGray font-light underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img className='w-3/4' src={Camera}></img>
    </div>
  )
}

export default HeroSection