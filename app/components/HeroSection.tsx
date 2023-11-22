'use client'
import React from 'react'
import Reviewstar from '../../public/ReviewStars.svg'
import Image from 'next/image'
import Link from 'next/link'
import HeroText from './HeroText'
import HeroCtaButton from './HeroCtaButton'
import HeroBadgeAnimation from './HeroBadgeAnimation'




function HeroSection() {

  
  return (
    <div>
      {/* Badge */}
      <div className="flex items-center justify-center">
        {/* BADGE MAX CONATINER */}
        <HeroBadgeAnimation />
      </div>
      {/* HEADING */}
      <div className="mt-[32px] text-center font-black text-[48px] lg:text-[64px] text-color leading-[48px] lg:leading-[72px]">
      <HeroText />
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-[60px]">
      <HeroCtaButton />
      </div>

    </div>
  )
}

export default HeroSection
