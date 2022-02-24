import React from 'react'
import PPeaks1 from '../images/haikei/peaks1.svg'
import {ReactComponent as Waves1} from '../images/haikei/waves1.svg'


function HeroSection() {


  return (
<div>
<Waves1 className='w-full h-64'/>
    
    <div className="bg-cover  bg-b w-screen h-screen bg-white bg-bottom" style={{
       backgroundImage: `url(${PPeaks1})`
         }}>   

        

  </div>
</div>
  )
}

export default HeroSection