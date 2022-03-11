import React from 'react'
import '../Hero.css';

import Mountains from '../svg/hero/Mountains.svg'
import Cloud from '../svg/hero/Clouds.svg'
import Foreground from '../svg/hero/Foreground.svg'
import smfr from '../svg/hero/sm-fr.svg'
import smmt from '../svg/hero/sm-mt.svg'

function HeroSection() {

  return (
  <div className='wrapper '>
   <div className="parallax flex flex-col">
     <h1 className='heading absolute text-8xl font-cinzel font-bold text-black'>TATRAJA ART</h1>
    <div className='cloud'><img src={Cloud} alt='parallax background cloud'></img> </div>
    <div className='midground'><img src={Mountains} alt='parallax background mountain'></img> </div>
    <div className='foreground'><img src={Foreground} alt='parallax background foreground'></img> </div>
    <div className='midground-sm'><img src={smfr} alt='parallax background mountain small device'></img> </div>
    <div className='foreground-sm'><img src={smmt} alt='parallax background foreground small device'></img> </div>
</div>
</div>
  )
}

export default HeroSection