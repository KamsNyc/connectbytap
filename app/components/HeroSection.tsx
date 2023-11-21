import React from 'react'
import Reviewstar from '../../public/ReviewStars.svg'
import Image from 'next/image'

function HeroSection() {
  return (
    <div>
      {/* Badge */}
      <div className="flex items-center justify-center">
        {/* BADGE MAX CONATINER */}
        <div className="w-[218px] h-[32px] bg-[#E1EBFF] rounded-[100px] flex items-center justify-between">
            {/* ONETAP BUTTON */}
            <div className="bg-[#0E60FF] rounded-[32px]">
            <h1 className='text-white font-medium px-[16px] py-[3px]'>One Tap</h1>
            </div>
            {/* REVIEW STARS */}
            <div className="flex items-center justify-center pr-[9px] py-[5px]"> 
            <Image
            src={'/ReviewStars.svg'}
            alt=""
            width={107}
            height={22}
            />
            </div>
        </div>
      </div>
      {/* HEADING */}
      <div className="mt-[32px] text-center font-black text-[64px] text-color leading-[72px]">
      <h1>Boost Your Business Reviews<br></br>Let Customers Tap for Instant<br></br>Feedback</h1>
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-[60px]">
      <button className='bg-[#0E60FF] text-white px-[45px] py-[18px] rounded-[5px] hover:scale-105 duration-300 ease-in-out'>
        Boost Reviews Today
      </button>
      </div>
    </div>
  )
}

export default HeroSection
