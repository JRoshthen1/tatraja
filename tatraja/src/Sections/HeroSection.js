import React from 'react'

import gsap from 'gsap'

import Mountains from '../svg/hero/Mountains.svg'
import Clouds from '../svg/hero/Clouds.svg'
import Foreground from '../svg/hero/Foreground.svg'

function HeroSection() {



  gsap.to(".clouds", {
    yPercent: -100,
    ease: "none",
    pin: true,
    scrollTrigger: {
      trigger: ".parallax-header",
      start: "top top",
      end: "bottom top",
      scrub: true
    }, 
  });
  
  gsap.to(".mountains", {
    yPercent: -50,
    ease: "none",
    pin: true,
    scrollTrigger: {
      trigger: ".parallax-header",
      start: "top top",
      end: "bottom top",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

  return (
    <div className='h-screen'>
                  <div className='w-screen h-[120vh] parallax-header'>

                  <img src={Clouds} className="clouds relative "/>
                  <img src={Mountains} className="mountains relative" />
                  <img src={Foreground} className=""/>

                  </div>
    </div>
  )
}

export default HeroSection