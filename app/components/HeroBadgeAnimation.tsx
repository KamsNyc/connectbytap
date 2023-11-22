'use client'
import Image from 'next/image';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function HeroBadgeAnimation() {
  const badgeAnimation = useAnimation();

  React.useEffect(() => {
    badgeAnimation.start({ opacity: 1, x: 0 });
  }, [badgeAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={badgeAnimation}
      transition={{ duration: 1.2 }}
      className="w-[218px] h-[32px] bg-[#E1EBFF] rounded-[100px] flex items-center justify-between"
    >
      {/* ONETAP BUTTON */}
      <div className="bg-[#0E60FF] rounded-[32px]">
        <h1 className="text-white font-medium px-[16px] py-[3px]">One Tap</h1>
      </div>
      {/* REVIEW STARS */}
      <div className="flex items-center justify-center pr-[9px] py-[5px]">
        <Image src={'/ReviewStars.svg'} alt="" width={107} height={22} />
      </div>
    </motion.div>
  );
}

export default HeroBadgeAnimation;