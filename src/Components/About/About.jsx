import { assets } from "../../assets/assets"

const About = () => {
  return (
    <div className='pt-20'>

      <div >
        <h1 className='text-4xl uppercase font-bold px-3 py-3'>about us</h1>
      </div>
 

      <div className='flex flex-col sm:flex-row border-y border-black'>
        <div className='sm:w-4/12 sm:hidden '>
        <img src={assets.both} alt="" />
        </div>
        <div className='sm:w-8/12 px-3 bg-indigo-400  py-3 border-r border-black'>
        <div>
        <h1 className='text-3xl font-bold uppercase' >Tap into Your Primal Power. Forge a Stronger You.</h1>
        </div>

          <div className="mt-8">
            <h1 className='text-2xl font-bold uppercase'>our vision</h1>
            <p>Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness, and unwavering community support. We empower our members to tap into their primal power, achieve their goals, and live a life of strength, resilience, and unwavering determination.</p>
          </div>

        </div>

        <div className='w-4/12 hidden sm:flex'>
        <img src={assets.both} alt="" />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row border-b border-black'>
        <div className='sm:w-4/12 sm:hidden '>
        <img src={assets.single} alt="" />
        </div>

        <div className='w-8/12 hidden sm:flex'>
        <img src={assets.single} alt="" />
        </div>

        <div className='sm:w-4/12 px-3 bg-indigo-400 py-3 border-l border-black'>
        <div>
        <h1 className='text-3xl font-bold uppercase' >DYNAMIC OPEN GYM.</h1>
        </div>

          <div className='py-3'>
            <p>At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense, functional workouts designed to build raw strength, resilience, and a body capable of anything.</p>
          </div>

        </div>

         
      </div>

        <div className='bg-[url(/src/assets/back.jpg)] bg-cover h-[700px] flex flex-col justify-end border border-black'> 
          <h1 className='text-xl  sm:text-4xl uppercase font-bold px-3 py-3 text-white w-[90%]'>We've created a space where you can reconnect with your primal self. </h1>
        </div>

         <div className='h-[400px] border-t border-black flex flex-col text-center items-center justify-center uppercase '>
        <p className='text-sm pt-5 w-[60%]'>WHAT WE BELIEVE IN</p>
        <h1 className='text-4xl py-5 font-bold'>Join the Primal Tribe Today!</h1>
        <a href="#" className='bg-indigo-400  text-black px-3 py-2 rounded-md cursor-pointer font-mono hover:bg-black hover:text-white transition-all uppercase'>reserve your spot</a>
      </div>

    </div>
  )
}

export default About
