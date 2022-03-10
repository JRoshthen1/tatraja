import React from 'react'
import {useEffect , useRef} from 'react'

import gsap from 'gsap'


import a00 from '../images/FlickeringCarousel/a00.jpg'
import a01 from '../images/FlickeringCarousel/a01.jpg'
import a02 from '../images/FlickeringCarousel/a02.jpg'
import a03 from '../images/FlickeringCarousel/a03.jpg'
import a04 from '../images/FlickeringCarousel/a04.jpg'
import a05 from '../images/FlickeringCarousel/a05.jpg'
import a06 from '../images/FlickeringCarousel/a06.jpg'
import a07 from '../images/FlickeringCarousel/a07.jpg'
import a08 from '../images/FlickeringCarousel/a08.jpg'
import a09 from '../images/FlickeringCarousel/a09.jpg'





function TranslateCarousel() {


    

        const images = [a00 , a01 , a02 , a03 , a04 , a05 , a06 , a07 , a08 , a09];


  useEffect(() => {
    gsap.to(".box", {
      x: -100,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);
    
    
    return (
      <div className="flex overflow-x-hidden space-x-4" >

    {images.map((image) => (
        <img src={image} className="box w-44 h-84 lightShadow"/>
              ))}
      </div>
    );

}

export default TranslateCarousel