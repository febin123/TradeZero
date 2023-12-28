import React from 'react'
import useOnlineStatus from '../utilis/useOnlineStatus'
const Account = () => {
  const onlineStatus=useOnlineStatus()

  if(onlineStatus=== false)
  return(
    <h1 className='text-white'>🔴 Looks like you are Offline!!</h1>
  )
  return (
    <div className='w-full bg-[#00df9a] py-16 px-4 font-medium '>
        
    <p className='text-black font-bold text-xl text-center mx-auto'>Awarded Best Brokerage for Short Selling 4 years running at the Benzinga Global Fintech Awards!</p>
    <div className='justify-center mx-auto'>
    <p className='bg-black w-[200px] mx-auto rounded-md font-medium py-3 m-6 text-white text-center'>Get Started</p>
    </div>
      
      <iframe className="mx-auto my-4 md:w-[600px] sm:w-[200px] aspect-video" src="https://www.youtube.com/embed/FZBAVANDw14?si=rwFWxP9vuKlCRd3l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
  
    
  )
}

export default Account
