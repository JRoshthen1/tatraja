import React from 'react'
import { useState , useEffect} from 'react'

import a00 from '../images/FlickeringCarousel/a00.jpg'
import a01 from '../images/FlickeringCarousel/a00.jpg'
import a02 from '../images/FlickeringCarousel/a01.jpg'
import a03 from '../images/FlickeringCarousel/a02.jpg'
import a04 from '../images/FlickeringCarousel/a04.jpg'
import a05 from '../images/FlickeringCarousel/a05.jpg'
import a06 from '../images/FlickeringCarousel/a06.jpg'
import a07 from '../images/FlickeringCarousel/a07.jpg'
import a08 from '../images/FlickeringCarousel/a08.jpg'
import a09 from '../images/FlickeringCarousel/a09.jpg'

// Flickering carousel for the about us section, works on a principle of adding +1 to a 0 index number 
// and selecting that index fron the images array

function FlickeringCarousel() {

const images = [a00 , a01 , a02 , a03 , a04 , a05 , a06 , a07 , a08 , a09];


const [index, setIndex] = useState(0);

useEffect(() => {
  const tick = () => setIndex(i => i + 1);

  const id = setInterval(tick, 2000);
  return () => clearInterval(id);
}, []);

  return (
    <>
        <img className='neonShadow' src={images[index % images.length]} />
    </>
  )
}

export default FlickeringCarousel
