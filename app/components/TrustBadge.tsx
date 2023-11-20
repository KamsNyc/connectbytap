import Image from 'next/image'
import React from 'react'

function TrustBadge() {
    const ReviewArea = [
        { name: 'Vogue', logo: '/Vogue.png'},
        { name: 'Esquire', logo: '/esquire.png'},
        {name: 'Humans', logo: '/humansny.png'}
    ]
  return (
    <section className='bg-[#F2F2F2] h-[386px] rounded-[24px]'>
        {/* CONTAINER */}
        <div className="py-[40px] lg:py-[80px] text-center lg:px-[100px] ">
        {/* HEADING */}
        <div className="">
        <h2 className='text-[40px] font-bold leading-[46px]'>“These are the most thoughtfully designed sneakers on the market.”</h2>
        </div>
        {/* IMAGE */}
        <div className="flex items-center justify-between pt-[30px] lg:pt-[60px]">
            {
                ReviewArea.map((area) =>(
                    <div key={area.name}>
                         <Image
            src={area.logo}
            alt='test'
            width={150}
            height={50}
            />
                    </div>
                ))
            }
        </div>
        
        </div>
       


    </section>
  )
}

export default TrustBadge
