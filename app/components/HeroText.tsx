'use client'
import { Button } from '@/components/ui/button'
import React from "react";
import { motion } from "framer-motion";


function HeroText() {


  return (
    <>
    <div className="hidden md:block mt-[32px] text-center font-black md:text-[48px] lg:text-[64px] text-black leading-[48px] lg:leading-[72px]">
      <motion.h1
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      >Boost Your Business Reviews<br></br>Let Customers Tap for Instant<br></br>Feedback</motion.h1>
      </div>
      {/* MOBILE */}
      <div className="md:hidden mt-[32px] text-center text-[42px] font-black text-black leading-[48px]">
      <motion.h1
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      >Boost Your Business Reviews Let Customers Tap for Instant Feedback</motion.h1>
      </div>
      </>
  );
}

export default HeroText;
