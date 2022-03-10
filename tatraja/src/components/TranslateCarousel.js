import React from 'react'
import {useEffect , useRef} from 'react'

import gsap from 'gsap'


import a07 from '../images/FlickeringCarousel/a07.jpg'
import a08 from '../images/FlickeringCarousel/a08.jpg'
import a09 from '../images/FlickeringCarousel/a09.jpg'
import a10 from '../images/FlickeringCarousel/a10.jpg'
import a11 from '../images/FlickeringCarousel/a11.jpg'
import a12 from '../images/FlickeringCarousel/a12.jpg'
import a13 from '../images/FlickeringCarousel/a13.jpg'
import a14 from '../images/FlickeringCarousel/a14.jpg'
import a15 from '../images/FlickeringCarousel/a15.jpg'
import a16 from '../images/FlickeringCarousel/a16.jpg'
import a17 from '../images/FlickeringCarousel/a17.jpg'
import a18 from '../images/FlickeringCarousel/a18.jpg'
import a19 from '../images/FlickeringCarousel/a19.jpg'





function TranslateCarousel() {


  const images = [a07 , a08 , a09 , a10 , a11 , a12 , a13 , a14 , a15 , a16 , a17 , a18 , a19 ];



  useEffect(() => {
    gsap.to(".box", {
      x: -500,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);
    
    
    return (
      <div className=' w-screen'>
              <div className="flex overflow-x-hidden space-x-4 " >

{images.map((image) => (
    <img src={image} className="box w-44 h-84 mb-5 lightShadow"/>
          ))}
  </div>
      </div>
    );

}

export default TranslateCarousel