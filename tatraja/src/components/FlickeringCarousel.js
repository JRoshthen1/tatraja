import React from 'react'
import { useState , useEffect} from 'react'

import aa from '../images/FlickeringCarousel/aa.jpg'
import aa2 from '../images/FlickeringCarousel/aa2.jpg'
import aa3 from '../images/FlickeringCarousel/aa3.jpg'
import aa4 from '../images/FlickeringCarousel/aa4.jpg'

// Flickering carousel for the about us section, work on a principle of adding +1 to a 0 index number 
// and selecting that index fron the images array

function FlickeringCarousel() {

const images = [aa, aa2, aa3, aa4];


const [index, setIndex] = useState(0);

useEffect(() => {
  const tick = () => setIndex(i => i + 1);

  const id = setInterval(tick, 2000);
  return () => clearInterval(id);
}, []);

  return (
    <>
        <img className='mx-10 mask h-96 sm:h-auto sm:w-screen sm:mx-4 kokotko' src={images[index % images.length]} />
    </>
  )
}

export default FlickeringCarousel
