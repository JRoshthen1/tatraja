import React from 'react'
import PPeaks1 from '../images/haikei/peaks1.svg'
import {ReactComponent as Waves1} from '../images/haikei/waves1.svg'
import Camera from '../images/Camera.png'

function HeroSection() {


  return (
<div>
    <div className='flex flex-col justify-center text-center items-center'>
        <img className='w-3/4' src={Camera}></img>
        <h1 className='font-link text-white text-5xl'>Hello Tatraja</h1>
    </div>


    <div className="bg-cover  bg-b w-screen h-screen bg-white bg-bottom" style={{
       backgroundImage: `url(${PPeaks1})`
         }}>   

        

  </div>
</div>

  )
}

export default HeroSection