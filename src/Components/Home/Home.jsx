import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets';

const Home = () => {
  return (
    <div className='pt-20'>
        <div className='  flex text-4xl font-bold  uppercase px-7 border-bottom border-black py-5'>
        <h1>train hard.<span className='text-indigo-400'>live better</span></h1>
      </div>

      <div className='flex flex-col sm:flex-row border-t border-black'>
        <div className='sm:w-2/3 border-right bg-indigo-100 border-black'>
            
            <img src={assets.main} alt="main photo" />
        </div>

        <div className='sm:w-1/3 bg-indigo-100 sm:flex sm:flex-col  border-l border-black'>
        <div>
              <h1 className='text-2xl font-bold uppercase py-2 px-3'>for the committed</h1>
        </div>

            <div className='h-50'>
                <p className=' px-3 py-5 '>Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.</p>
                
                <Link to="/about" ><h1 className='font-mono bg-indigo-400 text-center  mx-3    py-2 rounded-md cursor-pointer hover:bg-black text-white transition-all uppercase'>about us</h1></Link>
        
            </div>
        </div>
      </div>

      <div className='sm:flex border-y border-black'>
      <div className='sm:hidden sm:w-1/3 border-y   border-black'>
         <img src={assets.girl} alt="girl" />
        </div>

      
        <div className=' sm:w-1/3 bg-indigo-100 border-b border-black sm:border-none'>
        <div>
              <h1 className='text-2xl font-bold uppercase py-2 px-3'>guide by experts</h1>
        </div>

            <div>
                <p className=' px-3 py-5 '>We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.</p>
             </div>
        </div>

         <div className='  border-l   border-black sm:w-1/3 bg-indigo-100'>
        <div>
              <h1 className='text-2xl font-bold uppercase py-2 px-3'>dynamin open gym</h1>
        </div>

            <div>
                <p className=' px-3 py-5 '>Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.</p>
             </div>
        </div>
      
 
        <div className='hidden sm:flex sm:w-1/3 border-y   border-black'>
         <img src={assets.girl} alt="" />
        </div>
      </div>

      <div>
        <div className='h-10 '>
            <h1 className='text-3xl font-bold uppercase px-3'>Join the <span className='text-indigo-400'>COMMUNITY</span></h1>
        </div>

        <div className='sm:flex border-t border-black'>
        <div className='sm:w-2/3 sm:hidden border-l border-black'>
                <img src={assets.kg5} alt="" />
            </div>
            <div className='sm:w-1/3  items-center bg-indigo-100'>
                <div className=' sm:h-1/5 border-b border-black flex items-center text-2xl font-bold px-3'>
                 <h1 className='uppercase py-4' > DISCOVER YOUR POTENTIAL</h1> 
                 </div>
                <div className=' sm:h-1/5  justify-center border-b border-black px-3'>
                 <h1 className=' uppercase font-bold text-2xl sm:pt-10 ' >Expert Coaching</h1>
                 <p>Trainers who are passionate about your progress.</p> 
                 </div>
                <div className=' sm:h-1/5 border-b border-black  px-3'> 
                <h1 className='  uppercase font-bold text-2xl pt-2 sm:pt-10'>Results-Driven Programs</h1> 
                <p>Workouts that deliver tangible, measurable results.</p>
                </div>
                <div className=' sm:h-1/5 border-b border-black px-3'> 
                <h1 className='  uppercase font-bold text-2xl pt-2 sm:pt-10'>A Supportive Tribe</h1>
                <p>A community that pushes you to be your best.</p>
                </div>
                <div className=' sm:h-1/5  flex items-center text-xl  uppercase px-3 h-20'> 
                <Link to="/" className='w-full sm:w-auto text-center font-mono bg-indigo-400 px-3 py-2 rounded-md cursor-pointer hover:bg-black text-white transition-all'>view classes</Link>
                 
                </div>
            </div>
            <div className='hidden sm:flex sm:w-2/3 border-l border-black'>
                <img src={assets.kg5} alt="" />
            </div>
        </div>
      </div>

      <div className='h-[400px] bg-indigo-400 border-y border-black flex flex-col text-center items-center justify-center uppercase '>
        <p className='text-xl pt-5 font-mono'>what we believe in</p>
        <h1 className='text-4xl font-bold py-5'>Join the Primal Tribe Today!</h1>
 
        <Link to="/reserve" ><h1 className='bg-white text-black px-3 py-2 rounded-md cursor-pointer font-mono hover:bg-black hover:text-white transition-all uppercase'>reserve your spot</h1></Link>
        
     
      </div>
    </div>
  )
}

export default Home
