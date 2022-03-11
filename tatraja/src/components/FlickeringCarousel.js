import React from 'react'
import { useState , useEffect} from 'react'

import a14 from '../images/FlickeringCarousel/a14.jpg'
import a15 from '../images/FlickeringCarousel/a15.jpg'
import a16 from '../images/FlickeringCarousel/a16.jpg'
import a17 from '../images/FlickeringCarousel/a17.jpg'
import a18 from '../images/FlickeringCarousel/a18.jpg'
import a19 from '../images/FlickeringCarousel/a19.jpg'
import a20 from '../images/FlickeringCarousel/a20.jpg'
import a21 from '../images/FlickeringCarousel/a21.jpg'
import a22 from '../images/FlickeringCarousel/a22.jpg'
import a23 from '../images/FlickeringCarousel/a23.jpg'
import a24 from '../images/FlickeringCarousel/a24.jpg'
import a25 from '../images/FlickeringCarousel/a25.jpg'
import a26 from '../images/FlickeringCarousel/a26.jpg'
import a27 from '../images/FlickeringCarousel/a27.jpg'
import a28 from '../images/FlickeringCarousel/a28.jpg'
import a29 from '../images/FlickeringCarousel/a29.jpg'
import a30 from '../images/FlickeringCarousel/a30.jpg'
import a31 from '../images/FlickeringCarousel/a31.jpg'
import a32 from '../images/FlickeringCarousel/a32.jpg'

// Flickering carousel for the about us section, works on a principle of adding +1 to a 0 index number 
// and selecting that index fron the images array

function FlickeringCarousel() {

const images = [a14 , a15 , a16 , a17 , a18 , a19 , a20 , a21 , a22 , a23 , a24 , a25 , a26 , a27 , a28 , a29 , a30 , a31 , a32];


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
