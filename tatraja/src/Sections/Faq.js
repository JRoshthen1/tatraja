import React from 'react'
import Collapse from '../components/Collapse'

function Faq() {
  return (
    <div className=''>
        <h1 className='font-fredericka text-4xl text-mint text-center m-20 sm:m-12'>Frequently Asked Questions</h1>
        <div className='flex flex-col justify-center items-center'>
        <Collapse question='test123' answer='test321'/>
        <Collapse question='test123' answer='test321'/>
        <Collapse question='test123' answer='test321'/>
        <Collapse question='test123' answer='test321'/>
        <Collapse question='testLast' answer='test321'/>
        </div>
        
    </div>
  )
}

export default Faq