import {useEffect, useState, useRef} from 'react'

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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const marqueeTween = useRef();
  const marqueeElements = useRef([]);


  const marqueeTexts = [a01 , a02 , a03 , a04 , a05 , a06 , a07 , a08 , a09 , a10 , a11 , a12 , a13 ];


  useEffect(() => {
    marqueeInitialSet();
    marqueeTween.current && marqueeTween.current.pause().kill();
    marqueeTween.current = gsap.to(marqueeElements.current, {
      x: `+=${screenWidth * 1.5}`,
      ease: "none",
      repeat: -1,
      duration: 10,
      rotation: 0.1,
      modifiers: {
        x: (x) => {
          return (parseFloat(x) % (screenWidth * 1.5)) + "px";
        }
      }
    });
  }, [screenWidth]);

  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      xPercent: -100,
      x: function (index) {
        return (screenWidth / 2) * index;
      }
    });
  };
    
  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: "all" });
    setScreenWidth(window.innerWidth);
  };

  const marqueeElementsRefHandler = (e, i) => {
    marqueeElements.current[i] = e;
  };

  const renderMarqueeElements = () => {
    if (marqueeTexts.length === 1) {
      marqueeTexts[2] = marqueeTexts[1] = marqueeTexts[0];
    }
    if (marqueeTexts.length === 2) {
      marqueeTexts[2] = marqueeTexts[0];
    }
    return marqueeTexts.map((e, i) => (
      <img
        className="absolute w-44 h-84 mb-5 lightShadow"
        key={`marquee-${i}`}
        src={e}
        ref={(el) => marqueeElementsRefHandler(el, i)}
      />

      
    ));
  };
  return (
    <div
      className=" relative w-screen mt-8 py-4 bg-green-600 text-gray-200 flex overflow-hidden items-center"
      style={{ minHeight: "110px" }}
    >
      {renderMarqueeElements()}
    </div>
  );
};

export default TranslateCarousel