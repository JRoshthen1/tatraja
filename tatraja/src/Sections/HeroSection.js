import React from 'react'
import '../Hero.css';

import gsap from 'gsap'

import Mountains from '../svg/hero/Mountains.svg'
import Cloud from '../svg/hero/Clouds.svg'
import Foreground from '../svg/hero/ForeGround.svg'
import smfr from '../svg/hero/sm-fr.svg'
import smmt from '../svg/hero/sm-mt.svg'

function HeroSection() {

  return (
  <div className='wrapper '>
   <div className="parallax flex flex-col">
     <h1 className='heading absolute text-8xl font-cinzel font-bold text-black'>TATRAJA ART</h1>
    <div className='cloud'><img src={Cloud}></img> </div>
    <div className='midground'><img src={Mountains}></img> </div>
    <div className='foreground'><img src={Foreground}></img> </div>
    <div className='midground-sm'><img src={smfr}></img> </div>
    <div className='foreground-sm'><img src={smmt}></img> </div>
</div>
</div>
  )
}

export default HeroSection