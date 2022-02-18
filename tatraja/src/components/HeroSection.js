import React from 'react'
import Camera from '../images/Camera.png'

function HeroSection() {


  return (
    <div className='flex justify-center text-center items-center'>
        <img className='w-3/4' src={Camera}></img>
        <h1 className='font-link text-white text-5xl'>Hello Tatraja</h1>
    </div>
  )
}

export default HeroSection