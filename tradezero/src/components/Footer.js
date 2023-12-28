import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import useOnlineStatus from '../utilis/useOnlineStatus';
const Footer = () => {
    const onlineStatus=useOnlineStatus()

    if(onlineStatus=== false)
    return(
      <h1 className='text-white'>🔴 Looks like you are Offline!!</h1>
    )
  return (
    <div className='max-w-[1240px] max-h-[400px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TradeZero</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>About Us</h6>
        <ul>
            <li className='py-2 text-sm'>Why TradeZero</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Learn</li>
            <li className='py-2 text-sm'>FAQ</li>
            <li className='py-2 text-sm'>Privacy Policy</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Platforms</h6>
        <ul>
            <li className='py-2 text-sm'>ZeroPro</li>
            <li className='py-2 text-sm'>ZeroWeb</li>
            <li className='py-2 text-sm'>ZeroFree</li>
            <li className='py-2 text-sm'>ZeroMobile</li>
            <li className='py-2 text-sm'>Downloads</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Details</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Free Trades</li>
            <li className='py-2 text-sm'>Higher Leverage</li>
            <li className='py-2 text-sm'>Platinum</li>
            <li className='py-2 text-sm'>Locates</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Quick Links</h6>
        <ul>
            <li className='py-2 text-sm'>Refer A Friend</li>
            <li className='py-2 text-sm'>Partners</li>
            <li className='py-2 text-sm'>Become A Partner</li>
            <li className='py-2 text-sm'>Training Videos</li>
            <li className='py-2 text-sm'>ZeroPro Manual</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;