import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utilis/useOnlineStatus'
import {AiOutlineClose, AiOutlineMenu}from 'react-icons/ai'
const Navbar = () => {
  const [nav,setNav]=useState(false)

  const handleNav=()=>{
    setNav(!nav)
  }
  const onlineStatus=useOnlineStatus()

  if(onlineStatus=== false)
  return(
    <h1 className='text-white'>🔴 Looks like you are Offline!!</h1>
  )
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-10 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TradeZero</h1>
        <ul className='hidden md:flex'>
          <li className="p-4"> <Link to='/'>Home</Link></li>  
          <li className="p-4"> <Link to='/why'>Why TradeZero</Link></li>         
          <li className="p-4"> <Link to='/soft'> Software</Link></li>          
          <li className="p-4"> <Link to='/account'>Account</Link></li>          
          <li className="p-4"> <Link to='/awards'>Awards</Link></li>          
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>TradeZero</h1>
          
          <li className="p-4 border-b border-gray-600"><Link to='/'>Home</Link></li>          
          <li className="p-4 border-b border-gray-600"><Link to='/why'>Why TradeZero</Link></li>          
          <li className="p-4 border-b border-gray-600"><Link to='/soft'> Software</Link></li>          
          <li className="p-4 border-b border-gray-600"><Link to='/account'>Account</Link></li>          
          <li className="p-4"><Link to='/awards'>Awards</Link></li>   
          </ul>
        </div>
  
  )

}

export default Navbar
