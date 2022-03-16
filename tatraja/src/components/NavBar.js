import React from 'react'
import { useState } from 'react'
import logo from '../images/logo-no-text.png'

function NavBar() {

  const [navbarOpen, setNavbarOpen] = useState(false)

/* Handling the toggle */
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
    if (navbarOpen === false) {
      document.body.style.overflow = 'hidden';
      console.log(navbarOpen)
  }  
  else {
    document.body.style.overflow = '';
  }
}



  return (

//NavBar
<nav className='bg-darkBlue font-link fixed w-screen shadow-xl z-50'>
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">

{/* Logo */}
          <a href="http://nft.tatraja.art/" className="flex items-center py-2 px-1 z-50">
            <img src={logo} alt={logo} className='h-10 ' />
          </a>

{/* Navigation Menu */}
      <div className="hidden md:flex text-lg items-center space-x-1">
        <a href="mailto:mail@tatraja.art?subject=Please attach your portfolio and a small cover letter explaining whou you are and why Tatraja interested you?" 
           className="cursor-pointer py-5 px-3 text-white hover:text-greenWashed">JOIN US</a>
        <a href="#" className="py-5 px-3 text-white hover:text-greenWashed">REDEEM</a>
        <a href="#about" className="py-5 px-3 text-white hover:text-greenWashed">ABOUT US</a>
        <a href="#faq" className="py-5 px-3 text-white hover:text-greenWashed">FAQ</a>
        <a href="#" className="py-5 px-3 text-white hover:text-greenWashed">WHITEPAPER</a>
        
      </div>



      <div className="md:hidden flex items-center">
     

{/* Mobile Button */}

            <button onClick={handleToggle} className="w-14 h-14 relative focus:outline-none z-50">
                <div className={`block w-5 absolute left-6 top-1/2 transform text-right -translate-x-1/2 -translate-y-1/2`}>
                  <span className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${navbarOpen ? "-rotate-45"  : "-translate-y-1.5"}`}></span>
                  <span className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out ${navbarOpen ? "opacity-0"  : ""}`}></span>
                  <span className={`block absolute h-0.5 text-white bg-current transform transition duration-200 ease-in-out ${navbarOpen ? "w-7 rotate-45"  : "w-3 translate-y-1.5"}`}></span>
                </div>
            </button>     
                            {/* Reference: 
                            https://bbbootstrap.com/snippets/tailwind-css-hamburger-menu-animation-82889170
                            */}


{/* Mobile Menu */}

          <div 
          onClick={handleToggle} className={`
              fixed bg-darkBlue 
              h-screen w-[0vw]
              overflow-hidden  
              inset-y-0 left-0
              ${navbarOpen ? "w-[100vw]"  : ""}`}>

          <div className='flex flex-col text-2xl justify-center items-center space-x-4 my-24'>

          <a href="mailto:mail@tatraja.art?subject=Hello Tatraja, I would like to collaborate" 
             className="py-5 px-3 text-white hover:text-greenWashed">JOIN US</a>
            <hr className='w-6/12 text-center'/>
            
            <a href="#" className="py-5 px-3 text-white hover:text-greenWashed">REDEEM</a>
            <hr className='w-6/12 text-center'/>

            <a href="#about" className="py-5 px-3 text-white hover:text-greenWashed">ABOUT US</a>
            <hr className='w-6/12 text-center'/>

            <a href="#faq" className="py-5 px-3 text-white hover:text-greenWashed">FAQ</a>
            <hr className='w-6/12 text-center'/>

            <a href="#" className="py-5 px-3 text-white hover:text-greenWashed">WHITEPAPER</a>
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