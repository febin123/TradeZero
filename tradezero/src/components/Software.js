import React from 'react'
import useOnlineStatus from '../utilis/useOnlineStatus'
const Software = () => {
  const onlineStatus=useOnlineStatus()

  if(onlineStatus=== false)
  return(
    <h1 className='text-white'>🔴 Looks like you are Offline!!</h1>
  )
  return (
    <div className='w-full bg-white py-16 px-4 '>
         <h1 className='text-black md:text-3xl text-center mx-auto font-extrabold p-2'>Free Online Stock Trading Software</h1>
         <p className='text-center mx-auto'>Access your online stock trading account wherever you go with ZeroMobile.</p>
           <img className='w-[500px] mx-auto my-4' src="https://tradezero.co/_nuxt/Tradezero_new-mobilelanding-pageupdate.bc5a59fa.png" alt='/' />
           
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4'>
     
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ZeroPro</p>
          <p>
          ZeroPro provides the speed and all the features that are needed for active traders.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ZeroWeb</p>
          <p>
          ZeroWeb is an easy to use browser based platform that will run on any device.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ZeroFree</p>
          <p>
          ZeroFree is the totally FREE real-time browser based trading system.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ZeroMobile</p>
          <p>
          With our state-of-the-art HTML5 mobile platform you can access...
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>

  )
}

export default Software
