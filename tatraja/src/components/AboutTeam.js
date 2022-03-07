import React from 'react'

function AboutTeam(props) {
  return (
    <div>
                    {/* AboutTeam */}
             <section className="flex-shrink-0 font-nunito rounded-xl m-4 sm:p-2 md:p-4 justify-center items-center ">
                <div className='flex flex-col justify-evenly items-center'>

                <div className="card w-80 glass">
                    <figure className="pt-4">
                    <div className="w-44 mask mask-squircle">
                        <img src={props.avatar}/>
                    </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Our dedicated Team is what makes Tatraja a stiving company. </h2>
                        <p>In this section, you can scroll to the side and meet all our collagues, helping to make the world a nicer and more artictic place. <br></br> Or visit our collaborative portoflio to learn more about Tatraja.</p>

                        <div className='flex justify-evenly mt-6'>
                          <a href={props.more} target="_blank"><button className='btn'>{props.btnText}</button></a>
                        </div>

                    </div>
                    </div>

            </div>


            </section> 
            

                
            
    </div>
  )
}

export default AboutTeam