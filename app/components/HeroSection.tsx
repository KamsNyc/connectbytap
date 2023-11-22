'use client'
import React from 'react'
import Reviewstar from '../../public/ReviewStars.svg'
import Image from 'next/image'
import Link from 'next/link'
import HeroText from './HeroText'
import HeroCtaButton from './HeroCtaButton'


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
      <div className="mt-[32px] text-center font-black text-[48px] lg:text-[64px] text-color leading-[48px] lg:leading-[72px]">
      <HeroText />
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-[60px]">
      <HeroCtaButton />
      </div>

      {/* GET REVIEWS ON */}
      <div className="mt-[60px] text-center">
        <p className="text-color uppercase"><span className='font-medium sans'>ConnectByTap</span> – your shortcut to trust and increased sales.</p>
        <div className="grid grid-cols-3 md:flex items-center justify-center gap-[32px] lg:gap-[64px]">
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
    </div>
  )
}

export default HeroSection
