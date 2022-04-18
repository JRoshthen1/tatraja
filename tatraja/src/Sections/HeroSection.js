import React from 'react'
import '../Hero.css';

import Mountains from '../svg/hero/Mountains.svg'
import Cloud from '../svg/hero/Clouds.svg'
import Foreground from '../svg/hero/ForeGround.svg'
import mobilesvg from '../svg/hero/mobile.svg'

function HeroSection() {

  return (
  <div className='wrapper'>
   <div className="parallax flex flex-col">
     <h1 className='heading absolute text-8xl font-cinzel font-bold text-black'>TATRAJA ART</h1>
    <div className='cloud'><img src={Cloud} alt='parallax background cloud'></img> </div>
    <div className='midground'><img src={Mountains} alt='parallax background mountain'></img> </div>
    <div className='foreground'><img src={Foreground} alt='parallax background foreground'></img> 
    <div className='cont'></div></div>

    
</div>

</div>
  )
}

export default HeroSection