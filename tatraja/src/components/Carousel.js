import '../slideshow.css';
import React from 'react'
import imagetest from '../images/Camera.png'
import { useEffect } from 'react'


function Carousel() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "http://127.0.0.1:5500/script.js";
    script.async = true;
    document.body.appendChild(script);
    console.log(script.src)
  return () => {
      document.body.removeChild(script);
  
    }
  }, []);
  


  return (
    <div className='relative'>
    <div className="mainbox flex flex-row">
  <div id='carousel' className="carousel">
    <div className="item a">A</div>
    <div className="item b">B</div>
    <div className="item c">C</div>
    <div className="item d">D</div>
    <div className="item e">E</div>
    <div className="item f">F</div>
  </div>
</div>
<div className="next">Next</div>
<div className="prev">Prev</div>
    </div>
    
  )
}

export default Carousel