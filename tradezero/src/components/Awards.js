import React from 'react'
import useOnlineStatus from '../utilis/useOnlineStatus'
const Awards = () => {
  const onlineStatus=useOnlineStatus()

  if(onlineStatus=== false)
  return(
    <h1 className='text-white'>🔴 Looks like you are Offline!!</h1>
  )
  return (
    <div className='w-full bg-black py-16 px-4 font-medium '>
    <p className='text-[#00df9a] text-center mx-auto'>Awarded Best Brokerage for Short Selling 4 years running at the Benzinga Global Fintech Awards!</p>
      <img className='w-[700px] mx-auto my-4' src="https://tradezero.co/_nuxt/winner.140d9eaf.png" alt='/' />
    </div>
  )
}

export default Awards
