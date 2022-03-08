import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Mountains from '../svg/hero/Mountains.svg'
import Clouds from '../svg/hero/Clouds.svg'
import Foreground from '../svg/hero/Foreground.svg'

function HeroSection() {

  gsap.to(".clouds", {
    yPercent: 50,
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
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-header",
      start: "top top",
      end: "bottom top",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

  gsap.to(".foreground", {
    yPercent: 50,
    ease: "none",
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
    <>
    <div className='h-screen'>
      <div className='h-28'></div>
          <div classname='overflow-y-auto overflow-x-hidden parallax-wraper h-screen'>

          <div className='parallax-header flex flex-col justify-center items-center relative'>

              <img src={Clouds} className="clouds absolute top-0"/>
              <img src={Mountains} className="mounains absolute top-20"/>
              <img src={Foreground} className="foreground absolute top-40"/>

          </div>
        
      </div>
    </div>
    
    </>

  )
}

export default HeroSection