import React from 'react'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='bg-indigo-100 px-7 border border-gray-400'>
        <div className='lg:flex justify-between  py-8 h-[280px] border-b border-black'>
            <div>
                
                <img src={assets.logo} className='h-[89px] w-[150px] sm:auto' alt="" />
            </div>
            <div className=''>
                <h1 className='text-4xl mt-10 lg:text-6xl font-bold lg:mt-1'>PrimalTraining</h1>
            </div>
            {/* <hr className=' bg-gray-500 h-1  mt-10 sm:bg-gray-400' /> */}

        </div>

        <div className='sm:flex justify-between font-bold py-8'>
            <div className='mb-10'>
                <h1 className='text-xl font-bold uppercase mb-5 '>Contact</h1>
                <ul className='text-sm font-mono'>
                    <li>Email: gym0101@gmail.com</li>
                    <li>Phone: (1)11223344</li>
                </ul>
            </div>
            <div className='mb-10'>
                <h1 className='text-xl font-bold uppercase mb-5 '>opening hours</h1>
                <ul className='text-sm'><pre>

                    <li>mon - fri   -   5:00-23:00</li>
                    <li>saturdays   -   8:00-16:00</li>
                    <li>sundays     -   8:00-13:00</li>
                    <li>holidays    -   8:00-16:00</li>
                </pre>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold uppercase mb-5 '>social</h1>
                <ul className='underline text-sm font-mono'>
                    <li className='cursor-pointer hover:text-gray-500'>Instagram</li>
                    <li className='cursor-pointer hover:text-gray-500'>X</li>
                    <li className='cursor-pointer hover:text-gray-500'>LinkedIn</li>
                    <li className='cursor-pointer hover:text-gray-500'>Spotify</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer
