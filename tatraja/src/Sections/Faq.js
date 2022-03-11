import React from 'react'
import Collapse from '../components/Collapse'
import CollapseOL from '../components/CollapseOL'
import CollapseUL from '../components/CollapseUL'

function Faq() {
  return (
    <div id='faq'>
        <h1 className='font-fredericka text-4xl text-mint text-center m-20 sm:m-12'>Frequently Asked Questions</h1>
        <div className='flex flex-col justify-center items-center'>
        <Collapse question='Who we are and what is TaTraja?' answer='Tatraja was founded on October 15, 2021. Behind the project is the organization TaTraja, which aims to create space for artists and creatives and provide space for self-realization. We provide the opportunity to publish your portfolio on our site in order to find the project, work, experience, friends and colleagues in one place. We try to make visible people and their projects who want to join us as partners, because the team always works better. Our team and members and creators are from Slovakia, Czech Republic, Belarus, Poland, Bulgaria and Ukraine and we are inviting you to join our journey.'/>
       
       
        <Collapse question='How many NFTs will drop?' answer=' We are going to produce 333 NFTs for this collection, each uniqe and non-fungible. There will be 33 of them dropping every month
              and 3 NFTs every month will be reserved for giveaways/competitions/challanges.'/>
       
       <Collapse question='What is this collection about?' answer='We chose 123 abilities for our collection, all of them were recorded using an analog camera 
                  and a 35mm film. The term photography literally means `drawing with light`, and it stems from the Greek words photo, which means 
                  light, and graph, which brings us to drawing. The technique of recording a picture - a photograph - on lightsensitive film is known as 
                  photography. 
                  '/>
       
        <CollapseUL question='What do I get from it' answer='Each NFT will grant you several rewards and bonuses, such as:'
              li1='Physical print and one piece of original 35mm film'
              li2='Free entry to any Tatraja event: concerts, exhibitions, art contests, live seminars and workshops or VIP lounge on bigger events'
              li3='6 months free trial to our Hub platform'
              li4='Various discounts on our services and products'
              li5='Full ownership of NFT you own for commercial and private uses'/>


        <CollapseOL question='How do I mint NFT?' answer='You need to own a wallet (Metamask), with funds available on wallet, and be connected to Solana blockchain.' 
              li1='Connect your wallet to our website when clicking on "Connect Wallet"'
              li2='After that you will be prompted to open your wallet.'
              li3='If you have successfully connected your wallet, the connect button will change into mint button.'
              li4='Click the button and wait until transaction is done. Don`t close you browser when waiting for transaction to happen. We are not in control of speed on the blockchain, and sometimes it can take little more time to process.'
              li5='Claim your rewards and bonuses, welcome on board of TaTraja'/>

        </div>
        
    </div>
  )
}

export default Faq