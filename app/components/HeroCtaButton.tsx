import React from 'react'
import { motion } from "framer-motion";

function HeroCtaButton() {
  return (
    <motion.div
    initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <button className='bg-[#0E60FF] text-white px-[45px] py-[18px] rounded-[5px] hover:scale-105 duration-300 ease-in-out'>
        Boost Reviews Today
      </button>
    </motion.div>
  )
}

export default HeroCtaButton
