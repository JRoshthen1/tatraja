import React from 'react'

function CollapseOL(props) {

    {/* Collapse bar with props for "question" and "answer" */}

  return (
    <div className='m-5 sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-5/12 bg-darkBlue'>
        <div tabindex="0" className="text-nunito collapse border border-darkGreen rounded-box collapse-arrow">
        <div className="collapse-title text-xl font-medium">
            {props.question}
        </div>
        <div className="collapse-content"> 
          <p>{props.answer}</p>
            <ol className='list-decimal mx-8 mt-4'>
              <li>{props.li1}</li>
              <li>{props.li2}</li>
              <li>{props.li3}</li>
              <li>{props.li4}</li>
            </ol>
        </div>
    </div>
    </div>
  )
}

export default CollapseOL