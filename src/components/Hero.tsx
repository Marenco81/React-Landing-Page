import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';


export const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'> for developers </span> 
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia ullam temporibus, itaque illum tempore iusto mollitia eaque repellat aspernatur!
      </p>
      <div className='flex justify-center my-10'>
        <a href="#" className='bg-gradient-to-r from-orange-500 to-red-500 py-3 px-4 mx-3 rounded-md hover:scale-105'>
            Start for free
        </a>
        <a href="#" className='py-3 px-4 mx-3 rounded-md border hover:bg-amber-50 hover:text-black hover:font-semibold'>
            Documentation
        </a>
      </div>
      <div className='flex mt-10 justify-center'>
        <video src={video1} typeof="video/mp4" autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>Your browser does not support the vide tag</video>
        <video src={video2} typeof="video/mp4" autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'></video>
      </div>
    </div>
  )
}
