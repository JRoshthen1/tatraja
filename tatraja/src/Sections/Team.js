import React from 'react'
import fa_facebook from '../images/fa_facebook-official.svg'
import fa_instagram from '../images/fa_instagram.svg'
import fa_linkedin from '../images/fa_linkedin.svg'
import fa_reddit from '../images/fa_reddit.svg'

function Team() {

    {/* import team members from database and display them with filter/map */}
    

  return (
    <div>
        {/* Sidescroll Content Container  */}
        <div className="flex overflow-x-auto font-nunito">
            
            {/* Team Profile */}
            <section className="flex-shrink-0 w-128 rounded-xl m-4 p-4 justify-center items-center bg-lighterGray">
                <div className='flex justify-evenly items-center'>
                    <div className='rounded-full bg-black h-44 w-44 m-2'>
                    </div>

                    <div className='flex flex-col m-4 w-52 justify-center'>
                        <h3 className='text-5xl font-bold text-darkerGray'>Martin Jaros</h3>
                        <h6 className='text-lg m-0.5 text-darkestGray'>Developer, designer and marketing manager</h6>
                    </div>
                </div>
                
                <hr className='my-3'/>

                <div className='flex flex-col justify-center items-center mx-4 my-6'>
                    <p>Born in Slovakia. Currently studying multimedia design degree. I enjoy doing front end development, marketing and business. I discovered Tatraja whilst their first drop of NFTs.</p>
                    <div className="flex overflow-x-auto"></div>
                    <div className='flex mt-4'>
                        <a href='#' className='mx-4'><img src={fa_facebook} alt='facebook icon'></img></a>
                        <a href='#' className='mx-4'><img src={fa_instagram} alt='instagram icon'></img></a>
                        <a href='#' className='mx-4'><img src={fa_linkedin} alt='linked in icon'></img></a>
                        <a href='#' className='mx-4'><img src={fa_reddit} alt='reddit icon'></img></a>
                    </div>
                </div>
            </section>

            

            </div>
    </div>
  )
}

export default Team