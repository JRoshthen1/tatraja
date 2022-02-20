import React from 'react'
import TeamProfile from '../components/TeamProfile.js'


function Team() {

    {/* import team members from database and display them with filter/map */}
    

  return (
    <div>
        <h1 className='text-5xl text-white font-fredericka m-20'>Team</h1>
        {/* Sidescroll Content Container  */}
        <div className="flex overflow-x-auto font-nunito">
            <TeamProfile name="Robert De Niro"/>
            </div>
    </div>
  )
}

export default Team