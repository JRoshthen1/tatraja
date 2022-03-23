import { useEffect } from 'react'
import gsap from 'gsap'

function VoteCharity() {
  
  useEffect(() => {
    gsap.to(".heart1", {
      y: "+=8",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
    gsap.to(".heart2", {
      y: "-=10",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "none",
    })
  }, []);

  return (
    <div className=" text-darkestGray relative bg-cover flex flex-col justify-center items-center bg-lightestGray">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className='relative h-20 block calcSvg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#13161D"></path>
        </svg>
      </div>


      <div className='my-28'>
        <div className='flex flex-col items-center'>
          <h1 className='p-4 text-4xl font-fredericka text-center leading-normal'>We love our planet, and everything on it!</h1>
          <div className='flex sm:flex-col items-center justify-center '>
            <h5 className='sm:font-normal sm:text-center font-bold w-64 p-4'><span className='text-green-700'>13%</span> from every purchase goes to charity of our community selection</h5>
            <p className='text-right sm:text-center w-64 p-4'>Smart contract technology allows us to split the purchase price right in the minting process, to ensure transparency and legitimacy. </p>
          </div>


          <svg className='w-72 my-8' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 631.12 554.03">
            
            {/* hearts */}
            
            <path
              d="M558.66,340.64c1.07-7.51,4.93-27.29,21.55-43.89a75.13,75.13,0,0,1,24-16c26.24-11,50.75-3.48,56.86-1.41a84.86,84.86,0,0,1,42.77,33c14.5,22,14,44.55,13.58,55.67-.74,20.14-6.81,43.33-49.92,104a991.17,991.17,0,0,1-67.79,85l-.28,0a945.1,945.1,0,0,1-126-65.13c-16.81-10.41-31.6-20.35-45.31-38.07-9.31-12-36.11-46.66-25.62-87.06,6.82-26.26,25.9-41.49,32-46a88.94,88.94,0,0,1,48.81-16.66c1.88-.05,44.23-.74,72.32,32.69a89.83,89.83,0,0,1,15.54,27"
              className='heart1' transform="translate(-336.24 -273.45)" fill="#cc1d4f" stroke="#eeeeee" strokeWidth="3px" strokeMiterlimit="10" />
            <path
              d="M740,402.72a58.5,58.5,0,0,1,26-26,56.35,56.35,0,0,1,20.92-5.54c21.32-1.41,36.92,9.86,40.77,12.82A63.76,63.76,0,0,1,850,417.89c5,19.17-.88,35.07-3.87,42.87-5.42,14.15-15.37,29.16-60.76,61.8a744,744,0,0,1-68.83,44l-.21,0a709.44,709.44,0,0,1-73.76-76.91c-9.42-11.48-17.52-22.15-23-38.07-3.7-10.81-14.34-41.95,2.93-68.12,11.23-17,28.49-23.21,33.95-24.92a66.79,66.79,0,0,1,38.75,0c1.34.41,31.62,10.21,43.47,40.81a67.34,67.34,0,0,1,4.49,23"
              className='heart2' transform="translate(-336.24 -273.45)" fill="#cc1b52" stroke="#eeeeee" strokeWidth="2px" strokeMiterlimit="10" />
            
            
            {/* hearts end */}

            <path
              d="M479.91,569.52l-28.09,4.73-34.59,8.13L409,577.31,397,564l-10.84-16.69-10-17.52-22.25-35.59-4-11.14a15.06,15.06,0,0,1-.71-7.38h0a7.15,7.15,0,0,1,3.57-5.16l1.31-.73a10.55,10.55,0,0,1,5.58-1.33l2.29.09a6,6,0,0,1,2.64.75l5.9,3.54c.51.29,1.16-.22,1.35-.77l.33-1a5.8,5.8,0,0,1,3.1-3.48,7.86,7.86,0,0,1,4.42-.61h0a20.28,20.28,0,0,1,11.86,6.26l6,6.48,18.91,22.8h0a6.17,6.17,0,0,1,4.22-5.86l1.7-.56a2.47,2.47,0,0,1,1.52,0l1,.29a17,17,0,0,1,9,6.32l26.87,36.76a46.6,46.6,0,0,0,13.13,12.17l28,17.36a38.88,38.88,0,0,0,3.53,1.93l63.82,30.64a90,90,0,0,1,24,15.8L603.81,627a28.63,28.63,0,0,1,7.71,11.79h0a76,76,0,0,1,3.71,16.93l17.35,170.71L528,824.81l7.27-41.14a123.3,123.3,0,0,0,1.9-16.15l2-30.59a100.71,100.71,0,0,0-.95-19.93l-.74-5a25.84,25.84,0,0,0-8.74-15.85h0l-.29-.19a100.25,100.25,0,0,0-10.2-6l-7-3.59a87.66,87.66,0,0,0-12.54-5.25l-33.37-11.06a82,82,0,0,1-12.22-5.18l-8-4.17a104,104,0,0,1-18.75-12.55l-13.83-11.62-15-19.19-14.18-22.8-10.85-18.63-12.79-22.53-10.45-20.71-8.8-16.32a30.52,30.52,0,0,1-1.92-4.29l-.33-.92a17.5,17.5,0,0,1-1-5.91h0c0-3,.31-6,2.27-8.33l1.47-1.6a4,4,0,0,1,1.21-.91A11.86,11.86,0,0,1,346.3,493H349a7.18,7.18,0,0,1,2,.29l2.91.83"
              transform="translate(-336.24 -273.45)" fill="#1d123a" stroke="#eeeeee" strokeWidth="2px" strokeMiterlimit="10" />
            <path
              d="M571.12,647.94l-4.51-6.23a59.59,59.59,0,0,0-11.59-12l-1.3-1a56.46,56.46,0,0,0-16.16-8.81l-3.7-1.28a57.84,57.84,0,0,0-15.44-3.09L500,614.35c-.58,0-1.15-.1-1.72-.19l-28.62-4.4a28,28,0,0,1-5.95-1.6l-18-7a33.08,33.08,0,0,1-7.66-4.22l-14.53-10.72-11.3-7a11.39,11.39,0,0,0-6.86-1.65l-2,.16a37.5,37.5,0,0,0-15.43,4.71h0a11.28,11.28,0,0,0-3,2.42h0a6.47,6.47,0,0,0-.94,7.16h0L397,600.39l10.85,8.88a22.25,22.25,0,0,1,2.58,2.46l4.51,5a50.69,50.69,0,0,0,8.35,7.47l11.81,8.41,17.52,11.12,12.6,7.25a46,46,0,0,1,10.34,8.13l6.54,6.87"
              transform="translate(-336.24 -273.45)" fill="#1d123a" stroke="#eeeeee" strokeWidth="2px" strokeMiterlimit="10" />
            <path d="M451.33,557l-28-40.6a58.86,58.86,0,0,1-5.77-11.18l-1.05-2.72"
              transform="translate(-336.24 -273.45)" fill="#1d123a" stroke="#eeeeee" strokeWidth="2px" strokeMiterlimit="10" />
            <polyline points="94.72 288.56 72.19 257.41 49.95 223.76 35.24 199.86" fill="#1d123a" stroke="#eeeeee" strokeWidth="2px" strokeMiterlimit="10" />
            <path
              d="M823.7,569.52l28.09,4.73,34.59,8.13,8.24-5.07,12-13.35,10.84-16.69,10-17.52,22.25-35.59,4-11.14a15.06,15.06,0,0,0,.71-7.38h0a7.15,7.15,0,0,0-3.57-5.16l-1.31-.73a10.55,10.55,0,0,0-5.58-1.33l-2.29.09a6,6,0,0,0-2.64.75l-5.9,3.54c-.51.29-1.16-.22-1.35-.77l-.33-1a5.83,5.83,0,0,0-3.1-3.48,7.86,7.86,0,0,0-4.42-.61h0A20.28,20.28,0,0,0,912,473.22l-6,6.48-18.91,22.8h0a6.17,6.17,0,0,0-4.22-5.86l-1.7-.56a2.47,2.47,0,0,0-1.52,0l-1,.29a17,17,0,0,0-9,6.32l-26.87,36.76a46.51,46.51,0,0,1-13.14,12.17l-28,17.36a38.88,38.88,0,0,1-3.53,1.93l-63.82,30.64a90,90,0,0,0-24,15.8L699.8,627a28.63,28.63,0,0,0-7.71,11.79h0a76,76,0,0,0-3.71,16.93L671,826.46l104.56-1.65-7.27-41.14a125,125,0,0,1-1.91-16.15l-2-30.59a100.71,100.71,0,0,1,1-19.93l.74-5a25.84,25.84,0,0,1,8.74-15.85h0l.29-.19a100.25,100.25,0,0,1,10.2-6l7-3.59a87.66,87.66,0,0,1,12.54-5.25l33.37-11.06a82,82,0,0,0,12.22-5.18l8-4.17a103.58,103.58,0,0,0,18.74-12.55L891,636.54l15-19.19,14.18-22.8,10.85-18.63,12.79-22.53,10.45-20.71,8.8-16.32a30.52,30.52,0,0,0,1.92-4.29l.33-.92a17.5,17.5,0,0,0,1-5.91h0c0-3-.31-6-2.27-8.33l-1.47-1.6a4,4,0,0,0-1.21-.91,11.86,11.86,0,0,0-4.11-1.36H954.6a7.31,7.31,0,0,0-2,.29l-2.9.83"
              transform="translate(-336.24 -273.45)" fill="#1d123a" stroke="#eeeeee" strokeWidth="2px" strokeMiterlimit="10" />
            <path
              d="M732.49,647.94l4.51-6.23a59.59,59.59,0,0,1,11.59-12l1.3-1a56.33,56.33,0,0,1,16.16-8.81l3.7-1.28a57.76,57.76,0,0,1,15.44-3.09l18.46-1.13c.58,0,1.15-.1,1.72-.19l28.62-4.4a28,28,0,0,0,6-1.6l18-7a33.08,33.08,0,0,0,7.66-4.22l14.53-10.72,11.3-7a11.39,11.39,0,0,1,6.86-1.65l2,.16a37.5,37.5,0,0,1,15.43,4.71h0a11.28,11.28,0,0,1,3,2.42h0a6.47,6.47,0,0,1,.94,7.16h0l-13.07,8.34-10.86,8.88a23,23,0,0,0-2.57,2.46l-4.51,5a51.1,51.1,0,0,1-8.35,7.47l-11.81,8.41L851,643.77,838.36,651A46,46,0,0,0,828,659.15L821.48,666"
              transform="translate(-336.24 -273.45)" fill="#1d123a" stroke="#eeeeee" strokeWidth="2px" strokeMiterlimit="10" />
            <path d="M852.28,557l28-40.6a59.45,59.45,0,0,0,5.77-11.18l1.05-2.72"
              transform="translate(-336.24 -273.45)" fill="#1d123a" stroke="#eeeeee" strokeWidth="2px" strokeMiterlimit="10" />
            <polyline points="536.4 288.56 558.93 257.41 581.18 223.76 595.88 199.86" fill="#1d123a" stroke="#eeeeee" strokeWidth="2px" strokeMiterlimit="10" />
          </svg>


        </div>


        <div className='flex flex-col justify-center items-center'>
          <h1 className='p-4 text-4xl text-center leading-normal font-fredericka'>Vote for your favourite charity!</h1>
          <br />
          <a href='https://7vvup7i4av5.typeform.com/to/ZyIpJ15w' target='_blank' rel="noreferrer" className='btn bg-darkBlue bg-opacity-95 w-56 hover:bg-opacity-90 font-link text-lg border-0'>Vote</a>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className='relative h-20 block calcSvg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#13161D"></path>
        </svg>
      </div>

    </div>
  )
}

export default VoteCharity