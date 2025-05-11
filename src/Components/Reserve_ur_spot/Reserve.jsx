import React from 'react'

const Reserve = () => {
  return (
    <div className='pt-20'> <div className='text-4xl font-bold uppercase px-3 border-bottom  py-3'>
        <h1>book a <span className='text-indigo-400'>session</span></h1>
       </div>

    <div className='flex flex-col sm:flex-row border-y border-black '>

        <div className='sm:w-1/3 border-r  bg-indigo-100 '>
            <div className='text-2xl p-3 font-bold uppercase'>
                <h1>Strength</h1>
            </div>
            <div className='px-3'>
                <p>Weekdays at 6AM</p> <hr className='h-0.5 bg-gray-400' /><br />
                <p>Weekends and Holidays at 8AM</p><hr className='h-0.5 bg-gray-400' /><br />
                <p>Build a foundation of raw power with our comprehensive weightlifting and strength training programs. </p>
            </div>
            <div className=' p-7 pb-10'>
        <button  className='px-5 w-full bg-indigo-400   py-2 rounded-md cursor-pointer hover: hover:text-white transition-all uppercase'>reserve your spot</button>
        </div>
        </div>

        <div className=' border-y border-black sm:w-1/3 sm:border-y-0 lg:border-x lg:border-black bg-indigo-100 '>
            <div className='text-2xl p-3 font-bold uppercase'>
                <h1>Conditioning</h1>
            </div>
            <div className='px-3'>
                <p>Weekdays at 8AM</p> <hr className='h-0.5 bg-gray-400' /><br />
                <p>Weekends and Holidays at 10AM</p><hr className='h-0.5 bg-gray-400' /><br />
                <p>Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness.  </p>
            </div>
            <div className=' p-7 pb-10'>
        <button  className='px-5 w-full bg-indigo-400  py-2 rounded-md cursor-pointer hover: hover:text-white transition-all uppercase'>reserve your spot</button>
        </div>
        </div>

        <div className='sm:w-1/3 border-r border-t  bg-indigo-100 '>
            <div className='text-2xl p-3 font-bold uppercase'>
                <h1>COMMUNITY CLASSES</h1>
            </div>
            <div className='px-3'>
                 <p>Every day on the hour</p><hr className='h-0.5 bg-gray-400' /><br />
                 <p>Every day on the hour</p><hr className='h-0.5 bg-gray-400' /><br />
                <p>The power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals. </p>
            </div>
            <div className=' p-7 pb-10'>
        <button  className='px-5 w-full bg-indigo-400   py-2 rounded-md cursor-pointer hover: hover:text-white transition-all uppercase'>reserve your spot</button>
        </div>
        </div>

    </div>


    <div className='h-[400px] bg-indigo-400 border-b border-black flex flex-col text-center items-center justify-center uppercase '>
        <h1 className='text-4xl pt-5 font-bold'>Primal Personal Training</h1>
        <p className='text-sm py-5 w-[60%]'>Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way</p>
       <a href="#" className='bg-white  px-3 py-2 rounded-md cursor-pointer font-mono hover:bg-black hover:text-white transition-all uppercase'>reserve your spot</a>
      </div>

    </div>
  )
}

export default Reserve
