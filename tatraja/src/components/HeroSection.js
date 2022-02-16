import React from 'react'

function HeroSection() {


  return (
    <div className='flex-col justify-center text-center font-fredericka items-center'>
        <div className="text-5xl text-mint underline hover:scale-105 hover:ease-in duration-100">
          <a
           href="https://tailwindcss.com/docs"
           target="_blank"
            rel="noopener noreferrer"
           >
             Learn TailWind</a>
        </div>
        <br/>
        <a
          className="text-5xl text-white hover:text-lightGray underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  )
}

export default HeroSection