import '../slideshow.css';
import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect } from 'react'



function Roadmapmb() {

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  gsap.defaults({ease: "none"});

  const pulses = gsap.timeline({
    defaults: {
      scale: 1.5,
      autoAlpha:1,
      transformOrigin: 'center', 
      ease: "elastic(2.5, 1)"
    }})
  .to(".ball02, .text01", {}, 0.5) 
  .to(".ball03, .text02", {}, 2.15)
  .to(".ball04, .text03", {}, 3.5)
  .to(".ball05, .text04", {}, 2.38)

  const main = gsap.timeline({
    scrollTrigger: {
      trigger: "#svg",
      scrub: true,
      start: "top center",
      end: "bottom center"
    }
  })
  .to(".ball01" , {autoAlpha:1, duration:0.05})
  .from(".theLine", { duration:5}, 0)
  .to(".ball01", {motionPath:{
    path:".theLine",
    align:".theLine",
    alignOrigin:[0.5, 0.5], 
  }, duration:4}, 0)
  .add(pulses, 0)
}, [])

   

  
  return (

    <div className='relative flex flex-col justify-center items-center'>



<svg className='w-3/4'  id="svg" viewBox="0 0 1412 2037" fill="none" xmlns="http://www.w3.org/2000/svg">

  <path className="theLine" 
      d="M920.25 33.6722C920.25 33.6722 954.803 290.587 810.927 343.642C667.052 396.697 520.449 526.48 386.874 471.331C253.299 416.181 156.855 509.782 120.209 548.882C83.5622 587.982 78.5529 655.508 93.6343 724.729C120.2 846.66 240.698 926.356 339.854 930.762C439.01 935.168 433.268 898.08 540.744 748.603C648.22 599.125 839.721 702.468 940.703 772.75C1041.68 843.032 1065.13 1118.86 932.121 1166.19C799.115 1213.52 892.716 1594.98 892.716 1594.98" stroke="white" stroke-width="3" stroke-dasharray="25 25"/>
  
  
  <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
  <circle className="ball ball02" cx="868.208" cy="312.111" r="29.0577" fill="white"></circle>
  <circle className="ball ball03"cx="251.569" cy="912.638" rx="29.5482" ry="29.0577" fill="white"></circle>
  <circle className="ball ball04" cx="857.001" cy="1368.48" rx="29.5482" ry="29.0577" fill="white"></circle>

</svg>
{/* 
<div className='text01 absolute top-36 left-40 font-fredericka'>
<h1 className='text-8xl w-20'>Something About</h1>
<p className=' text-xs w-44'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
</div>
*/}
    </div>

  
    
  )
}
export default Roadmapmb