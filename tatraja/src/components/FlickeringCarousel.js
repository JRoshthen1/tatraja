import React from 'react'
import { useState , useEffect} from 'react'

import a00 from '../images/FlickeringCarousel/a20.jpg'
import a01 from '../images/FlickeringCarousel/a21.jpg'
import a02 from '../images/FlickeringCarousel/a22.jpg'
import a03 from '../images/FlickeringCarousel/a23.jpg'
import a04 from '../images/FlickeringCarousel/a24.jpg'
import a05 from '../images/FlickeringCarousel/a25.jpg'
import a06 from '../images/FlickeringCarousel/a26.jpg'
import a07 from '../images/FlickeringCarousel/a27.jpg'
import a08 from '../images/FlickeringCarousel/a28.jpg'
import a09 from '../images/FlickeringCarousel/a29.jpg'

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
        <img className='neonShadow rounded-3xl sm:rounded-xl' alt='flickering Carousel of pictures from collection' src={images[index % images.length]} />
    </>
  )
}

export default FlickeringCarousel
