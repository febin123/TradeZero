import React from 'react'
import Typed from 'react-typed';
function Hero() {
  return (
    <div>
      <div className="text-white">
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>Free Stock Trading is Just the Beginning</p>
            <div>
            <p className='text-lg md:text-lg sm:text-4xl font-bold'>In addition to commission free stock trading, TradeZero provides free limit orders, higher day trading leverage, 24 x 7 customer support along with four different state-of-the-art trading software and more.</p>
            <Typed
          className='text-xs md:text-lg sm:text-4xl font-bold md:pl-4 pl-2 text-[#00df9a]'
            strings={['Free stock trading','Free trading software']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
