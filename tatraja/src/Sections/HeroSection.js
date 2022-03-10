import React from 'react'
import '../Hero.css';

import gsap from 'gsap'

import Mountains from '../svg/hero/Mountains.svg'
import Clouds from '../svg/hero/Clouds.svg'
import Foreground from '../svg/hero/ForeGround.svg'

function HeroSection() {

  return (
  <div className='wrapper'>
   <div class="parallax">
    <div className='clouds'> <img src={Clouds}></img> </div>
    <div className='midground'> <img src={Mountains}></img> </div>
    <div className='foreground'> <img src={Foreground}></img> </div>
</div>
</div>
  )
}

export default HeroSection