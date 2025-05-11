import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets';
 
const Navbar = () => {

  const [ open , setOpen] = useState(false);

  return (
    <>
    <div>
    <div className='flex justify-between px-7 items-center h-20 bg-indigo-100 border border-black fixed w-full'>
    <div className='flex items-center gap-5'>
       
         <img src={assets.logo} className='h-6 w-10 sm:w-10'  alt="logo" />
        <Link to="/" ><h1 className='text-3xl text-black font-bold hidden sm:flex'>PrimalTraining</h1></Link>
      
    </div>

    <div className='hidden lg:flex font-mono'> 
        <ul className='flex gap-5  uppercase text-lg font-mono '>
            <li className='bg-indigo-100 px-3 py-2 cursor-pointer hover:text-indigo-300 transition-all'>
           <NavLink to="/" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 
            ${isActive ? "text-indigo-700" : "text-gray-700"}    border-b border-indigo-100 hover:bg-indigo-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0`}>home
            </NavLink> 
            </li>

            <li className='bg-indigo-100 px-3 py-2 cursor-pointer hover:text-indigo-300 transition-all'>
            <NavLink to="/about" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 
            ${isActive ? "text-indigo-700" : "text-gray-700"}    border-b border-indigo-100 hover:bg-indigo-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0`}>about
            </NavLink>  
            </li>

            {/* <li className='bg-indigo-400  px-3 py-2 rounded-md  cursor-pointer hover:bg-black hover:text-white transition-all'> */}
            <li className='bg-indigo-400  px-3 py-2 rounded-md cursor-pointer hover:bg-black transition-all'>
            <NavLink to="/reserve" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 
            ${isActive ? "text-indigo-700" : "text-gray-700"}    border-b border-indigo-100 hover:bg-indigo-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0`}>reserve your spot
            </NavLink>    
            </li>
        </ul>
    </div>

      
      <div  className='text-5xl lg:hidden'>
        <img onClick={() => setOpen(!open)} src={assets.menu_icon} className='cursor-pointer h-4' alt="" />
      </div>

      <div className={`absolute top-0 right-0  overflow-hidden bg-indigo-100 transition-all border-b border-black ${open ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-500">
          <div onClick={() => setOpen(false)} className='flex items-center gap-4 p-3 cursor-pointer border-b border-black'>
        <img onClick={() => setOpen(!open)} className='h-5 rotate-180 ' src={assets.dropdown_icon} alt="" />
        <p>Back</p>
          </div>
          <NavLink onClick={() => setOpen(false)} className='py-2 pl-6 font-mono border-b border-black' to='/'>HOME</NavLink>
          <NavLink onClick={() => setOpen(false)} className='py-2 pl-6 font-mono  border-b border-black' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setOpen(false)} className='py-2 pl-6 font-mono bg-indigo-400 text-gray-100' to='/reserve'>RESERVE YOUR CLASS</NavLink>
        </div>
      </div>
    </div>
     
    </div>
      
    </>
  )
}

export default Navbar
