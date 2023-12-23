import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TradeZero</h1>
        <ul className='flex'>
          <li className="p-4">Why TradeZero</li>          
          <li className="p-4">Software</li>          
          <li className="p-4">Locates</li>          
          <li className="p-4">Pricing</li>          
          <li className="p-4">Platinum</li>          
        </ul>
    </div>
  )
}

export default Navbar
