import React from 'react'
import TeamProfile from '../components/TeamProfile.js'


function Team() {

    {/* import team members from database and display them with filter/map */}
    

  return (
    <div>
        <h1 className='text-5xl text-white font-fredericka m-20'>Team</h1>
        {/* Sidescroll Content Container  */}
        <div className="flex overflow-x-auto font-nunito">
            <TeamProfile 
            name="Robert De Niro" 
            bio="Developer, designer and business enthusiast"
            trait1="Business"
            trait2="Web-Development"
            trait3="Crypto"
            trait4="Finance"
            trait5="Front-End"
            />


<TeamProfile 
            name="Robert De Niro" 
            bio="Developer, designer and business enthusiast"
            trait1="Business"
            trait2="Web-Development"
            trait3="Crypto"
            trait4="Finance"
            trait5="Front-End"
            />

<TeamProfile 
            name="Robert De Niro" 
            bio="Developer, designer and business enthusiast"
            trait1="Business"
            trait2="Web-Development"
            trait3="Crypto"
            trait4="Finance"
            trait5="Front-End"
            />

            </div>
    </div>
  )
}

export default Team