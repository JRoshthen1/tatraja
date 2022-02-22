import ABOUT from '../images/ABOUT.png'
import Camera from '../images/Camera.png'
import Flickity from 'react-flickity-component'

const Aboutus = () => {
  
  const flickityOptions = {
    initialIndex: 2
}

  return (
    <div className="bg-no-repeat bg-cover statik h-auto" style={{
        backgroundImage: `url(${ABOUT})`
    }}>
        <div className='flex flex-col justify-between align-middle pt-44'>
        <h1 className="text-black text-6xl text-center place-content-center font-frederika">About us</h1>
        <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={Camera}/>
      <img src={Camera}/>
      <img src={Camera}/>
    </Flickity>
        <p className='pt-5 pb-10 text-xl w-80 text-center place-self-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
        </div>
        </div>
  )
}

export default Aboutus