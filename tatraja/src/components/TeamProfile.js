import React from 'react'
import DiscordLink from './SocialMediaLinks/DiscordLink'
import FacebookLink from './SocialMediaLinks/FacebookLink'
import InstagramLink from './SocialMediaLinks/InstagramLink'
import LinkedInLink from './SocialMediaLinks/LinkedInLink'
import CustomLink from './SocialMediaLinks/CustomLink'
import PinterestLink from './SocialMediaLinks/PinterestLink'

function TeamProfile(props) {
  return (
    <div>
                    {/* Team Profile */}
             <section className="flex-shrink-0 font-nunito rounded-xl m-4 sm:p-2 md:p-4 justify-center items-center ">
                <div className='flex flex-col justify-evenly items-center'>

                <div className="card w-80 glass">
                    <figure className="pt-4">
                    <div className="w-44 mask mask-squircle">
                        <img src={props.avatar}/>
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

                        <div className='flex justify-evenly mt-6'>
                          <a href={props.more} target="_blank"><button className='btn'>{props.btnText}</button></a>
                          {/* <DiscordLink href={props.DiscordLink}/>
                          <InstagramLink href={props.InstagramLink}/>
                          <LinkedInLink href={props.LinkedInLink}/>
                          <CustomLink href={props.CustomLink}/> */}
                        </div>


                    </div>
                    </div>


            </div>


            </section> 
            

                
            
    </div>
  )
}

export default TeamProfile