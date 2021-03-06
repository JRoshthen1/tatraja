import React from 'react'

function TeamProfile(props) {
  return (
    <>

             <section className=" text-white flex-shrink-0 font-nunito rounded-xl m-4 sm:p-2 md:p-4 justify-center items-center ">
                <div className='flex flex-col justify-evenly items-center'>

                <div className="card w-80 glass">
                    <figure className="pt-4">
                    <div className="w-44 mask mask-squircle">
                        <img src={props.avatar} alt='Team member'/>
                    </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{props.name}</h2>
                        <p>{props.bio}</p>

                        
                        <div className='flex flex-wrap justify-center'>
                            <div className="badge badge-outline m-1 text-white">{props.trait1}</div>
                            <div className="badge badge-outline m-1 text-white">{props.trait2}</div>
                            <div className="badge badge-outline m-1 text-white">{props.trait3}</div>
                            <div className="badge badge-outline m-1 text-white">{props.trait4}</div>
                            <div className="badge badge-outline m-1 text-white">{props.trait5}</div>
                        </div>

                        <div className='flex justify-evenly mt-6'>
                          <a href={props.more} target="_blank" rel="noreferrer"><button className='btn'>{props.btnText}</button></a>
                       
                        </div>


                    </div>
                    </div>


            </div>


            </section> 
            

                
            
    </>
  )
}

export default TeamProfile