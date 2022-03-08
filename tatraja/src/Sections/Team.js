import React from 'react'
import TeamProfile from '../components/TeamProfile'


function Team() {

    {/* import team members from database and display them with filter/map */}
    

  return (
    <div>
        <h1 className='text-5xl text-white font-fredericka m-20'>Team</h1>

        {/* Sidescroll Content Container  */}
        <div className="flex overflow-x-auto font-nunito">

            <TeamProfile 
            name="Martin Jaros" 
            avatar="https://api.lorem.space/image/face?hash=47449"
            bio="Developer, designer and business enthusiast"
            trait1="Business"
            trait2="Web-Development"
            trait3="Crypto"
            trait4="Finance"
            trait5="Front-End"
            more='https://jroshthen1.github.io/portfolio/'
            btnText='Click for my portfolio'
            />


<TeamProfile 
            name="Robert De Niro" 
            avatar="https://api.lorem.space/image/face?hash=47449"
            bio="Developer, designer and business enthusiast"
            trait1="Business"
            trait2="Web-Development"
            trait3="Crypto"
            trait4="Finance"
            trait5="Front-End"
            more='https://jroshthen1.github.io/portfolio/'
            btnText='Check out my Instagram'
            
            />

<TeamProfile 
            name="Robert De Niro" 
            avatar="https://api.lorem.space/image/face?hash=47449"
            bio="Developer, designer and business enthusiast"
            trait1="Business"
            trait2="Art"
            trait3="Photography"
            trait4="Space"
            trait5="Luxury"
            more='https://jroshthen1.github.io/portfolio/'
            btnText='Check out my Instagram'
            />

            </div>
    </div>
  )
}

export default Team