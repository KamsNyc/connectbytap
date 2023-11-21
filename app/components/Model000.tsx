import Link from 'next/link'
import React from 'react'

function Model000() {
  return (
    <section>
        {/* HEADER/VIEW NOW */}
        <div className="flex items-center justify-between">
            {/* HEADER */}
            <h1 className='font-black text-[16px]'>Explore Model 000</h1>
            {/* LINK */}
            <Link className='underline font-semibold text-[16px]' href={'/'}>Shop Now</Link>
        </div>

        {/* FEATURED CONTAINER */}
        <div className="bg-[#F2F2F2] h-[386px] rounded-[16px] mt-[32px] flex items-center justify-center p-[24px] pt-[80px] ">
            <div className="border w-full h-full flex">
                {/* FEATURED PRODUCT CARD */}
                <div className="flex-1">
                    
                </div>
                {/* FEATURED PRODUCT TEXT */}
                <div className="flex-1 flex items-center justify-center">
                <h1 className='font-bold text-[48px]'>Explore Model 000</h1>
                </div>

            </div>
             
        </div>

    </section>
  )
}

export default Model000
