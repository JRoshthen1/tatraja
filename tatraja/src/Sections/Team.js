import React from 'react'
import TeamProfile from '../components/TeamProfile'
import dima from '../images/profilePics/dima.png'
import vlad from '../images/profilePics/vlad.png'
import robo from '../images/profilePics/robo.png'
import martin from '../images/profilePics/martin.png'
import ivan from '../images/profilePics/ivan.png'

function Team() {

    {/* import team members from database and display them with filter/map */}
    

  return (
    <div>
        <h1 className='text-5xl text-white font-fredericka m-20'>Team</h1>

        {/* Sidescroll Content Container  */}
        <div className="flex overflow-x-auto font-nunito">

<TeamProfile 
            name="Robert F." 
            avatar={robo}
            bio="Project Developer, Team leader & Programmer"
            trait1="Business"
            trait2="Web-Development"
            trait3="Crypto"
            trait4="Entrepreneur"
            trait5="Video game Development"
            more='https://tatraja.art/creators/robert'
            btnText='Check out my portfolio'
            
            />
<TeamProfile 
            name="Vladimír R." 
            avatar={vlad}
            bio="Photographer, Designer & Human Resource Manager"
            trait1="Analog photography"
            trait2="Design"
            trait3="Crypto"
            trait4="Film development"
            trait5="Photography editing"
            more='https://tatraja.art/creators/vladimir'
            btnText='Check out my portfolio'
            
            />
<TeamProfile 
            name="Dmytro T." 
            avatar={dima}
            bio="Photographer, Sound designer & Team recruiter "
            trait1="Analog photography"
            trait2="Music"
            trait3="SMM"
            trait4="Desing"
            trait5="Graphics"
            more='https://tatraja.art/creators/dmytro'
            btnText='Check out my portfolio'
            
            />
<TeamProfile 
            name="Martin J." 
            avatar={martin}
            bio="Lead programmer, Marketing & Communication leader "
            trait1="Programming"
            trait2="Design"
            trait3="Crypto"
            trait4="Marketing"
            trait5="Web development"
            more='https://jroshthen1.github.io/portfolio/'
            btnText='Check out my portfolio'
            
            />
<TeamProfile 
            name="Ivan V." 
            avatar={ivan}
            bio="Front-end & UX-UI Designer"
            trait1="Design"
            trait2="Web development"
            trait3="Crypto"
            trait4="Programming"
            trait5="App development"
            more='https://dppriest555.github.io/portfolio/'
            btnText='Check out my portfolio'
            
            />

            </div>
    </div>
  )
}

export default Team