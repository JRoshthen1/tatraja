import React from 'react'
import Collapse from '../components/Collapse'

function Faq() {
  return (
    <div className=''>
        <h1 className='font-fredericka text-4xl text-mint m-4'>FAQ</h1>
        <div className='flex flex-col justify-center items-center'>
        <Collapse question='test123' answer='test321'/>
        <Collapse question='test123' answer='test321'/>
        <Collapse question='test123' answer='test321'/>
        <Collapse question='test123' answer='test321'/>
        <Collapse question='test123' answer='test321'/>
        </div>
        
    </div>
  )
}

export default Faq