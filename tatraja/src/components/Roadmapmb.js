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
  .to(".ball002, .text001", {}, 0.5) 
  .to(".ball003, .text002", {}, 1.8)
  .to(".ball004, .text003", {}, 3.65)
  .to(".ball005, .text004", {}, 2.38)

  const main = gsap.timeline({
    scrollTrigger: {
      trigger: "#svg",
      scrub: true,
      start: "top center",
      end: "bottom center"
    }
  })
  .to(".ball001" , {autoAlpha:1, duration:0.05})
  .from(".theLinee", { duration:5}, 0)
  .to(".ball001", {motionPath:{
    path:".theLinee",
    align:".theLinee",
    alignOrigin:[0.5, 0.5], 
  }, duration:4}, 0)
  .add(pulses, 0)
}, [])

   

  
  return (

    <div className='relative flex flex-col justify-center items-center'>



<svg className='w-3/4'  id="svg" viewBox="0 0 1412 2037" fill="none" xmlns="http://www.w3.org/2000/svg">

  <path className="theLinee" 
      d="M920.25 33.6722C920.25 33.6722 954.803 290.587 810.927 343.642C667.052 396.697 520.449 526.48 386.874 471.331C253.299 416.181 156.855 509.782 120.209 548.882C83.5622 587.982 78.5529 655.508 93.6343 724.729C120.2 846.66 240.698 926.356 339.854 930.762C439.01 935.168 433.268 898.08 540.744 748.603C648.22 599.125 839.721 702.468 940.703 772.75C1041.68 843.032 1065.13 1118.86 932.121 1166.19C799.115 1213.52 892.716 1594.98 892.716 1594.98" stroke="white" strokeWidth="3" strokeDasharray="25 25"/>
  
  
  <circle className="ball ball001" r="20" cx="50" cy="100"></circle>
  <circle className="ball ball002" cx="868.208" cy="312.111" r="29.0577" fill="white"></circle>
  <circle className='ball ball002' cx="868.209" cy="312.112" r="20.0839" stroke="#13161D" stroke-width="4"/>
  <ellipse className="ball ball003"cx="251.569" cy="912.638" rx="29.5482" ry="29.0577" fill="white"></ellipse>
  <path className='ball ball003' d="M272.026 912.639C272.026 923.7 262.899 932.723 251.57 932.723C240.24 932.723 231.113 923.7 231.113 912.639C231.113 901.578 240.24 892.555 251.57 892.555C262.899 892.555 272.026 901.578 272.026 912.639Z" stroke="#13161D" stroke-width="4"/>
  <ellipse className="ball ball004" cx="857.001" cy="1368.48" rx="29.5482" ry="29.0577" fill="white"></ellipse>
  <path className='ball ball004' d="M877.462 1368.48C877.462 1379.54 868.335 1388.57 857.005 1388.57C845.676 1388.57 836.549 1379.54 836.549 1368.48C836.549 1357.42 845.676 1348.4 857.005 1348.4C868.335 1348.4 877.462 1357.42 877.462 1368.48Z" stroke="#13161D" stroke-width="4"/>

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