import ABOUT from '../images/ABOUT.png'
import Carousel from '../components/Carousel';

const Aboutus = () => {

  return (
    <div className="bg-no-repeat bg-cover statik h-auto bg-stone-500" 
      >
        <div className='flex flex-col justify-between align-middle pt-44'>
        <h1 className="text-black text-6xl text-center place-content-center font-frederika">About us</h1>
        <Carousel/>
        <p className='text-darkBlue pt-5 pb-10 text-xl w-80 text-center place-self-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
        </div>
        </div>
  )
}

export default Aboutus