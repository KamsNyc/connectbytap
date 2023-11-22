import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CompanyBadge = [
    {'name': "AirBnb", "link": "/AirbnbLogo.png", "href":"/"},
    {'name': "Google", "link": "/GoogleLogo.png", "href":"/"},
    {'name': "TrustPilot", "link": "/TrustpilotLogo.png", "href":"/"},
    {'name': "Facebook", "link": "/FacebookLogo.png", "href":"/"},
    {'name': "TripAdvisor", "link": "/TripadvisorLogo.png", "href":"/"},
    // {'name': "AngelList", "link": "/AngellistLogo.png"},
    // {'name': "Homeadvisor", "link": "/HomeadvisorLogo.png"},
    // {'name': "Healthgrades", "link": "/HealthgradesLogo.png"},
    {'name': "Zillow", "link": "/ZillowLogo.png", "href":"/"},
    {'name': "Thumbtack", "link": "/ThumbtackLogo.png", "href":"/"},
  ]

function GetReviewsOn() {
  return (
       <div className="mt-[64px] lg:mt-[80px] text-center">
       <div className="grid grid-cols-3 md:flex items-center justify-center gap-[12px] lg:gap-[64px]">
       {
         CompanyBadge.map((badge) => (
           <div key={badge.name} className='flex items-center justify-center pt-[24px]'>
             <Link href={badge.href}>
             <Image
             src={badge.link}
             alt={`${badge.name} Badge`}
             width={100}
             height={36}
             />
             </Link>
           </div>
         ))
       }
       </div>
     </div>
  )
}

export default GetReviewsOn
