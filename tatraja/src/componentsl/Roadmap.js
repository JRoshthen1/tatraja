import '../slideshow.css';
import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect } from 'react'



function Roadmap() {

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  gsap.defaults({ease: "none"});

  const pulses = gsap.timeline({
    defaults: {
      scale: 1.2,
      autoAlpha:1,
      transformOrigin: 'center', 
      ease: "circ",
      duration: 1.3
      
    }})
  .to(".ball02, .text01", {}, 0.5) 
  .to(".ball03, .text02", {}, 1.8)
  .to(".ball04, .text03", {}, 3.1)
// eslint-disable-next-line
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

    <div className=' text-lightestGray relative flex flex-col justify-center items-center'>

<svg className='w-3/4' id="svg" viewBox="0 0 1412 2037" fill="none" xmlns="http://www.w3.org/2000/svg">

  <path className="theLine" 
       d="M1225.5 72.0008C1225.5 72.0008 1383.5 285.5 1199 356.5C1014.5 427.5 924.5 648.5 765.5 596.5C606.5 544.5 418.499 559 343.499 700.499C268.5 841.998 -55.9997 943.498 42.4998 795.999C140.999 648.5 204.5 1001 418.5 1001C632.5 1001 687.5 949 798.999 1054.5C910.499 1160 976.356 1180.5 1129 1130C1281.64 1079.5 1439 1368.5 1268.5 1432C1098 1495.5 1188.33 1798.83 1188.33 1798.83" stroke="white" strokeWidth="6" strokeDasharray="25 25"/>
  
  
  <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
  <circle className="ball ball02" cx="1072" cy="439" r="30" fill="white" ></circle>
  <circle className="ball ball03"cx="328" cy="974" r="30" fill="white"></circle>
  <circle className="ball ball04" cx="1223" cy="1449" r="30" fill="white"></circle>

</svg>
    
<div className='text01 absolute top-0 left-40 pl-6 border-l border-darkGreen border-opacity-40 bg-darkBlue bg-opacity-70'>
<h1 className='text-8xl w-72 font-fredericka'>Vision</h1>
<p className='text-sm w-72 font-nunito m-3 leading-normal'>Our team is trying to solve the issue of portraing creative people's work and connecting them with either businesses in need of their skills or as our first step, onto a blockchain for everyone to see.</p>
</div>

<div className='text02 absolute top-1/3 right-40 text-right border-r border-darkGreen border-opacity-40 bg-darkBlue bg-opacity-70'>
<h1 className='text-8xl w-72 font-fredericka'>Plan</h1>
<p className=' text-sm w-72 font-nunito m-3 leading-normal'>Tatraja logo will soon appear in your country! Our plan is to create a world wide community where people can talk about their skills or dreams, get guidence and find other people with the same interests.</p>
</div>

<div className='text03 absolute bottom-[15%] left-1/3 pl-6 border-l border-darkGreen border-opacity-40 bg-darkBlue bg-opacity-70'>
<h1 className='text-8xl w-72 font-fredericka'>Art</h1>
<p className=' text-sm w-72 font-nunito m-3 leading-normal'>-really vague word, isn't it? Sculpturing, painting, performing arts, technology or science. Art is the end result of being imaginative with <span className='font-extrabold'>anything</span> at your hand. That's where we come in, we can drive you to start that long neglected project or help you go forward when you are stuck. Just click on join us and we'll see what we can do.</p>
</div>
    </div>

  
    
  )
}
export default Roadmap