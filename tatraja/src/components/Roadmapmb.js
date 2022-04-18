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
      ease: "circ"
    }})
  .to(".ball002", {}, 0.5) 
  .to(".ball003", {}, 1.5)
  .to(".ball004", {}, 3.7)

  // eslint-disable-next-line
  const main = gsap.timeline({
    scrollTrigger: {
      trigger: "#svg",
      scrub: true,
      start: "top center",
      end: "bottom center"
    }
  })
  .to(".ball001" , {autoAlpha:1, duration:0.01})
  .from(".theLinee", { duration:6}, 0)
  .to(".ball001", {motionPath:{
    path:".theLinee",
    align:".theLinee",
    alignOrigin:[0.5, 0.5], 
  }, duration:4}, 0)
  .add(pulses, 0)
}, [])

   

  
  return (

    <div className='relative flex flex-col justify-center items-center'>



<svg className='h-[130vh] w-screen' viewBox="0 0 280 800" id="svg" fill="none" xmlns="http://www.w3.org/2000/svg">


  <path className="theLinee" 
        d="M265 1.09058C265 1.09058 237.499 77 191.499 77C145.5 77 113.5 130.5 148 168.5C182.5 206.5 144.999 242.5 101.999 266.5C58.9994 290.5 41 332.5 52.9996 377.5C71.5196 446.952 -16.6582 470.203 5.00035 507C26.6589 543.797 93.0003 504 155.5 534C218 564 258.707 519.881 270.5 590.5C282.293 661.119 194.997 598.738 155.5 634C116.004 669.262 168.5 767.5 168.5 767.5"
        stroke="white" stroke-width="3" stroke-dasharray="25 25" />
  
  <circle className="invisible fill-white ball001" r="10" cx="50" cy="100"></circle>
  <circle className="invisible fill-white ball002" cx="160.965" cy="185.965" r="7.96504" fill="white"></circle>
  <ellipse className="invisible fill-white ball003" cx="51.0995" cy="354.965" rx="8.09947" ry="7.96504" fill="white"></ellipse>
  <ellipse className="invisible fill-white ball004" cx="158.099" cy="743.965" rx="8.09947" ry="7.96504"  fill="white"></ellipse>
</svg>


    <div className='text-white absolute top-0 left-10 pl-2 w-64 font-fredericka bg-darkBlue bg-opacity-70 rounded-4xl'>
    <h1 className='text-5xl mb-4'>Vision</h1>
    <p className='font-nunito text-sm'>Our team is trying to solve the issue of portraing creative people's work and connecting them with either businesses in need of their skills or as our first step, onto a blockchain for everyone to see.</p>
    </div>

    <div className='text-white absolute top-[30%] right-10 pr-2 w-64 font-fredericka text-right bg-darkBlue bg-opacity-70 rounded-4xl'>
    <h1 className='text-5xl mb-4'>Plan</h1>
    <p className='font-nunito text-sm'>Tatraja logo will soon appear in your country! Our plan is to create a world wide community where people can talk about their skills or dreams, get guidence and find other people with the same interests.</p>
    </div>

    <div className='text-white absolute bottom-24 left-10 pl-2 w-64 font-fredericka bg-darkBlue bg-opacity-70 rounded-4xl'>
    <h1 className='text-5xl mb-4'>Art</h1>
    <p className='font-nunito text-sm'>-really vague word, isn't it? Sculpturing, painting, performing arts. Art is the end result of being imaginative with <span className='font-extrabold'>anything</span> at your hand. That's where we come in, we can drive you to start that long neglected project or help you go forward when you are stuck. Just click on join us and we'll see what we can do.</p>
    </div>

  </div>

  
    
  )
}
export default Roadmapmb