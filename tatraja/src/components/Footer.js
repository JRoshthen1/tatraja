import React from 'react'
import CustomLink from './SocialMediaLinks/CustomLink'
import DiscordLink from './SocialMediaLinks/DiscordLink'
import InstagramLink from './SocialMediaLinks/InstagramLink'
import RedditLink from './SocialMediaLinks/RedditLink'
function Footer() {

    const year = new Date().getFullYear()

  return (
    <div className='w-screen bg-lightestGray flex lg:flex-row md:flex-col sm:flex-col items-center justify-center p-6 sm:py-4'>

            <div className='flex flex-row w-1/4 justify-center items-center space-x-8 mb-4'> {/* Social Media */}
                <div class="tooltip tooltip-bottom" data-tip="Tatraja's Portfolio"><CustomLink href='https://tatraja.art/' fill='#111111'/></div>
                <div class="tooltip tooltip-bottom" data-tip="Tatraja's Instagram"><InstagramLink href='https://tatraja.art/' fill='#111111'/></div>
                <div class="tooltip tooltip-bottom" data-tip="Tatraja's Discord Server"><DiscordLink href='https://tatraja.art/' fill='#111111'/></div>
                <div class="tooltip tooltip-bottom" data-tip="Tatraja's Reddit"><RedditLink href='https://www.reddit.com/r/TaTraja/' fill='#111111'/></div>
                
                
                
                
            </div> 

            <div className=' w-3/4 flex flex-col '>
                <div className='flex flex-row justify-evenly space-x-4 font-nunito font-bold m-6'> {/* Website Links */}
                    <a href='#about' className='underline italic text-darkGray hover:text-darkerGray hover:scale-105 text-xl sm:text-lg'>About us</a>
                    <a href='#mint' className='underline italic text-darkGray hover:text-darkerGray hover:scale-105 text-xl sm:text-lg'>Minting</a>
                    <a href='#team' className='underline italic text-darkGray hover:text-darkerGray hover:scale-105 text-xl sm:text-lg'>Team</a>
                    <a href='https://tatraja.art/' target='_blank' className='underline italic text-darkGray hover:text-darkerGray hover:scale-105 text-xl sm:text-lg'>Tatraja Portfolio</a>
                </div>

                <div className='flex flex-row space-x-5 justify-center text-xs mt-4 text-darkestGray font-nunito'> {/* Copyright */}
                    <p class="copyright">Copyright &copy; {year} Tatraja | All Rights Reserved</p>
                    <a href='#' target='_blank' className='underline'>Terms</a>
                    <a href='#' target='_blank' className='underline'>Privacy Policy</a>
                </div>
            </div>



    </div>
  )
}

export default Footer