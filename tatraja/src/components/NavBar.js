import React, { useState } from 'react'
import logo from '../images/logo-no-text.png'

function NavBar() {
{/* Setting hook for navbar */}

  const [navbarOpen, setNavbarOpen] = useState(false)

{/* Handling the toggle */}
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }


{/* updater function, do not use if the state depends on previous

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
*/}

  return (

//NavBar
<nav className="bg-darkBlue">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">

{/* Logo */}
          <a href="#" className="flex items-center py-2 px-1">
            <img src={logo} alt={logo} className='h-10 z-20' />
          </a>

{/* Navigation Menu */}
      <div className="hidden md:flex items-center space-x-1">
        <a href="#" className="py-5 px-3 text-white hover:text-greenWashed">Login</a>
        <a href="#" className="py-5 px-3 text-white hover:text-greenWashed">Login</a>
        <a href="#" className="py-5 px-3 text-white hover:text-greenWashed">Login</a>
        <a href="#" className="py-5 px-3 text-white hover:text-greenWashed">Login</a>
      </div>

{/* Mobile Button */}
      <div className="md:hidden flex items-center">
        <button className='z-20' onClick={handleToggle}>

        <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.8333 0.5H3.16667C1.69391 0.5 0.5 1.69391 0.5 3.16667C0.5 4.63943 1.69391 5.83333 3.16667 5.83333H28.8333C30.3061 5.83333 31.5 4.63943 31.5 3.16667C31.5 1.69391 30.3061 0.5 28.8333 0.5ZM28.8333 11.3333H10.6667C9.19391 11.3333 8 12.5272 8 14C8 15.4728 9.19391 16.6667 10.6667 16.6667H28.8333C30.3061 16.6667 31.5 15.4728 31.5 14C31.5 12.5272 30.3061 11.3333 28.8333 11.3333ZM28.8333 22.1667H20.0417C18.5689 22.1667 17.375 23.3606 17.375 24.8333C17.375 26.3061 18.5689 27.5 20.0417 27.5H28.8333C30.3061 27.5 31.5 26.3061 31.5 24.8333C31.5 23.3606 30.3061 22.1667 28.8333 22.1667Z"
           fill="white" 
           fillOpacity="0.9" 
           stroke="#13161D"/>
        </svg>

        </button>
        
{/* Mobile Menu */}
          <div className={`
              fixed bg-darkBlue 
              h-screen w-0 max-w-full 
              overflow-hidden z-10 
              inset-y-0 left-0 
              ${navbarOpen ? " w-full" : ""}`}>

          <div className='flex-col justify-center items-center my-24 flex'>
            <a href="#" className="block py-3 px-3 my-3 mx-3 text-xl text-white hover:text-mint hover:bg-slate-800 rounded-lg">Login</a>
            <hr className='w-6/12 text-center'/>
            
            <a href="#" className="block py-3 px-3 my-3 mx-3 text-xl text-white hover:text-mint hover:bg-slate-800 rounded-lg">Login</a>
            <hr className='w-6/12 text-center'/>

            <a href="#" className="block py-3 px-3 my-3 mx-3 text-xl text-white hover:text-mint hover:bg-slate-800 rounded-lg">Login</a>
            <hr className='w-6/12 text-center'/>

            <a href="#" className="block py-3 px-3 my-3 mx-3 text-xl text-white hover:text-mint hover:bg-slate-800 rounded-lg">Login</a>
            <hr className='w-6/12 text-center'/>
          </div>
        </div>
      </div>

    </div>
  </div>

</nav>

  )
}

export default NavBar