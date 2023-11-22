'use client'
import { Button } from '@/components/ui/button'
import React from "react";
import { motion } from "framer-motion";


function HeroText() {


  return (
    <div className="mt-[32px] text-center font-black text-[48px] lg:text-[64px] text-black leading-[48px] lg:leading-[72px]">
      <motion.h1
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      >Boost Your Business Reviews<br></br>Let Customers Tap for Instant<br></br>Feedback</motion.h1>
      </div>
  );
}

export default HeroText;
