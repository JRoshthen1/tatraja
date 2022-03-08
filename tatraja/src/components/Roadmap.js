import '../slideshow.css';
import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef, useEffect } from 'react'



function Roadmap() {

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  gsap.defaults({ease: "none"});

  const pulses = gsap.timeline({
    defaults: {
      scale: 2,
      autoAlpha:1,
      transformOrigin: 'center', 
      ease: "elastic(2.5, 1)"
    }})
  .to(".ball02, .text01", {}, 0.84) 
  .to(".ball03, .text02", {}, 1.36)
  .to(".ball04, .text03", {}, 1.92)
  .to(".ball05, .text04", {}, 2.28)

  const main = gsap.timeline({
    scrollTrigger: {
      trigger: "#svg",
      scrub: true,
      start: "top center",
      end: "bottom center"
    }
  })
  .to(".ball01" , {autoAlpha:1, duration:0.05})
  .from(".theLine", { duration:4}, 0)
  .to(".ball01", {motionPath:{
    path:".theLine",
    align:".theLine",
    alignOrigin:[0.5, 0.5], 
  }, duration:4}, 0)
  .add(pulses, 0)
}, [])

   

  
  return (
    <div className='relative w-screen max-w-[1920px] flex justify-center items-center'>



<svg className='w-[60vw] h-[300vh] sm:w-[100vh]' id="svg"  preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">


      <path className="line01 line" d="M 10 200  600 200" ></path>
      <path className="line02 line" d="M 10 400  600 400" ></path>
      <path className="line03 line" d="M 10 600  600 600" ></path>
      <path className="line04 line" d="M 10 800  600 800" ></path>
      <path className="line05 line" d="M 10 1000  600 1000" ></path>
      <text className="text01" x="30" y="190">2021</text>
      <text className="text02" x="30" y="390">2022</text>
      <text className="text03" x="49" y="590">2023</text>



    <path className='theLine'
        d="M1204.5 2.00106C1204.5 2.00106 1362.5 215.5 1178 286.5C993.5 357.5 903.5 578.5 744.5 526.5C585.5 474.5 397.499 489
         322.499 630.499C247.5 771.999 -76.9997 873.499 21.4998 725.999C119.999 578.5 183.5 931 397.5 931C611.5 931 666.5 879 
         777.999 984.498C889.499 1090 955.356 1110.5 1108 1060C1260.64 1009.5 1418 1298.5 1247.5 1362C1077 1425.5 1167.33 1728.83 
         1167.33 1728.83"
        stroke="white" stroke-width="6" stroke-dasharray="25 25" />


<circle className="ball ball01" r="20" cx="50" cy="100"></circle>
  <circle className="ball ball02" r="20" cx="278" cy="201"></circle>
  <circle className="ball ball03" r="20" cx="327" cy="401"></circle>
  <circle className="ball ball04" r="20" cx="203" cy="601"></circle>



</svg>





  {/*  <svg className=' w-1/2 xl:w-1/3' id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200">
  <path className="line01 line" d="M 10 200  600 200" ></path>
  <path className="line02 line" d="M 10 400  600 400" ></path>
  <path className="line03 line" d="M 10 600  600 600" ></path>
  <path className="line04 line" d="M 10 800  600 800" ></path>
  <path className="line05 line" d="M 10 1000  600 1000" ></path>
  <text className="text01" x="30" y="190">2021</text>
  <text className="text02" x="30" y="390">2022</text>
  <text className="text03" x="49" y="590">2023</text>

  <path className="theLine" 
        d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
        fill="none" stroke="white" stroke-width="10px" />
  
  
  
  <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
  <circle className="ball ball02" r="20" cx="278" cy="201"></circle>
  <circle className="ball ball03" r="20" cx="327" cy="401"></circle>
  <circle className="ball ball04" r="20" cx="203" cy="601"></circle>

</svg>


*/}
    </div>
    
  )
}

export default Roadmap