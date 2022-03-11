import React from 'react'
import {useEffect } from 'react'

import gsap from 'gsap'


import a01 from '../images/FlickeringCarousel/a01.jpg'
import a02 from '../images/FlickeringCarousel/a02.jpg'
import a03 from '../images/FlickeringCarousel/a03.jpg'
import a04 from '../images/FlickeringCarousel/a04.jpg'
import a05 from '../images/FlickeringCarousel/a05.jpg'
import a06 from '../images/FlickeringCarousel/a06.jpg'
import a07 from '../images/FlickeringCarousel/a07.jpg'
import a08 from '../images/FlickeringCarousel/a08.jpg'
import a09 from '../images/FlickeringCarousel/a09.jpg'
import a10 from '../images/FlickeringCarousel/a10.jpg'
import a11 from '../images/FlickeringCarousel/a11.jpg'
import a12 from '../images/FlickeringCarousel/a12.jpg'
import a13 from '../images/FlickeringCarousel/a13.jpg'





function TranslateCarousel() {


  const images = [a01 , a02 , a03 , a04 , a05 , a06 , a07 , a08 , a09 , a10 , a11 , a12 , a13 ];


  useEffect(() => {
    gsap.to(".box", {
      x: -700,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "circ",
    });
  }, []);
    
    
    return (
      <div className=' w-screen'>
              <div className="flex overflow-x-hidden space-x-4 " >

{images.map((image) => (
    <img src={image} key={image} alt='Sliding Carousel of pictures from collection' className="box w-44 h-84 mb-5 lightShadow"/>
          ))}
  </div>
      </div>
    );

}

export default TranslateCarousel