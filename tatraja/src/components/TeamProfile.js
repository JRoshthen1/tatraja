import React from 'react'
import DiscordLink from './SocialMediaLinks/DiscordLink'
import FacebookLink from './SocialMediaLinks/FacebookLink'
import InstagramLink from './SocialMediaLinks/InstagramLink'

function TeamProfile(props) {
  return (
    <div>
                    {/* Team Profile */}
             <section className="flex-shrink-0  rounded-xl m-4 sm:p-2 md:p-4 justify-center items-center ">
                <div className='flex flex-col justify-evenly items-center'>

                <div className="card w-96 glass">
                    <figure className=" pt-2">
                    <div className="w-44 mask mask-squircle">
                        <img src={"https://api.lorem.space/image/face?hash=47449"}/>
                    </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{props.name}</h2>
                        <p>{props.bio}</p>

                        
                        <div className='flex flex-wrap justify-center'>
                            <div className="badge badge-outline m-1">{props.trait1}</div>
                            <div className="badge badge-outline m-1">{props.trait2}</div>
                            <div className="badge badge-outline m-1">{props.trait3}</div>
                            <div className="badge badge-outline m-1">{props.trait4}</div>
                            <div className="badge badge-outline m-1">{props.trait5}</div>
                        </div>

                        <div className="justify-evenly card-actions mt-4 mb-2">
                              <FacebookLink href='http://jroshthen1.github.io/portfolio' color='#4267B2' />
                              <InstagramLink href='http://jroshthen1.github.io/portfolio' />
                              <DiscordLink/>
                        </div>

                    </div>
                    </div>

            </div>


            </section> 
            

                
            
    </div>
  )
}

export default TeamProfile