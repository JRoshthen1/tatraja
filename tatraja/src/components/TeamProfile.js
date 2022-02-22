import React from 'react'

import fa_instagram from '../images/fa_instagram.svg'
import fa_linkedin from '../images/fa_linkedin.svg'
import fa_reddit from '../images/fa_reddit.svg'
import FacebookLink from './FacebookLink'

function TeamProfile(props) {
  return (
    <div>
                    {/* Team Profile */}
             <section className="flex-shrink-0  rounded-xl m-4 sm:p-2 md:p-4 justify-center items-center ">
                <div className='flex flex-col justify-evenly items-center'>

                <div class="card w-96 glass">
                    <figure class=" pt-2">
                    <div class="w-44 mask mask-squircle">
                        <img src={"https://api.lorem.space/image/face?hash=47449"}/>
                    </div>
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{props.name}</h2>
                        <p>{props.bio}</p>

                        
                        <div className='flex flex-wrap justify-center'>
                            <div class="badge badge-outline m-1">{props.trait1}</div>
                            <div class="badge badge-outline m-1">{props.trait2}</div>
                            <div class="badge badge-outline m-1">{props.trait3}</div>
                            <div class="badge badge-outline m-1">{props.trait4}</div>
                            <div class="badge badge-outline m-1">{props.trait5}</div>
                        </div>

                        <div class="justify-center card-actions mt-4">
                              <FacebookLink href='http://jroshthen1.github.io/portfolio' color='#4267B2' />
                        </div>

                        <div className=' flex mt-4'>

                        </div>

                    </div>
                    </div>

            </div>


            </section> 
            

                
            
    </div>
  )
}

export default TeamProfile