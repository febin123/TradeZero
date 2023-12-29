import React from 'react'
import useOnlineStatus from '../utilis/useOnlineStatus'
const Choose = () => {
    const onlineStatus=useOnlineStatus()

    if(onlineStatus=== false)
    return(
      <h1 className='text-white'>🔴 Looks like you are Offline!!</h1>
    )
  return (
    <div className='w-full max-h-[850px] sm:max-h[1200px] bg-white py-16 px-4 font-medium '>
      <h1 className='text-[#00df9a] mx-auto text-center md:text-3xl font-bold p-2'>Free Stock Trading is Just the Beginning</h1>

<div class="grid grid-rows-4 grid-flow-col gap-4">
  <div className='w-[140px] m-auto'>
        <img src="https://tradezero.co/_nuxt/top-left-icon.89f95e46.svg" alt='/' /> 
        <h1 className='font-extrabold' >Free Limit Orders</h1>
        <p >We provide 100% free limit orders to all of our accounts. Open an Account with TradeZero...</p>
  </div>

  <div className='w-[140px] m-auto'>
        <img src="https://tradezero.co/_nuxt/bottom-left-icon.7d802034.svg" className='row-start-4' alt='/' /> 
        <h1 className='font-extrabold' >Free Limit Orders</h1>
        <p >TradeZero offers all clients state-of-the-art trading software. Whether you're a beginner...</p>
  </div>
  <div className="grid grid-row-subgrid gap-4 row-span-4">
      <div>
      <img className='invisible md:visible m-auto p-2 row-start-2' src="https://tradezero.co/_nuxt/why-logo-trees.a8cc0706.png" alt='/' />

      </div>
  </div>

  <div className='w-[140px] m-auto'>
        <img src="https://tradezero.co/_nuxt/top-right-icon.5bcfac96.svg" className='row-start-1' alt='/' /> 
        <h1 className='font-extrabold' >Free Limit Orders</h1>
        <p>TradeZero provides clients up to 6 to 1 intraday leverage on their equity....</p>
  </div>
  <div className='w-[140px] m-auto'>
        <img src="https://tradezero.co/_nuxt/bottom-right-icon.c5b7d969.svg" className='row-start-4' alt='/' /> 
        <h1 className='font-extrabold' >Free Limit Orders</h1>
        <p >No Pattern Day Trading Rules. We're the best brokerage for pattern day traders. No pattern...</p>
  </div>
  
</div>

{/* <div class="grid grid-rows-4 border border-black grid-flow-col gap-4">
  <div>01</div>

  <div className='row-start-4'>02</div>
  

  <div class="grid grid-row-subgrid gap-4 border border-black row-span-4">
      <div class="row-start-2">06</div>
  </div>
  <div className="row-start-1">07</div>

  <div className='row-start-4'>10</div>
</div> */}
   
</div>

  
      

  )
}

export default Choose
