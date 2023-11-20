import { Button } from '@/components/ui/button'
import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

function HeroText({ title }: Props) {
  const lines = title.split("\n");

  return (
    <div className="absolute top-1/2 left-[3%] md:left-[15%] translate-y-[-50%]">
      <div>
        {/* HEADING */}
        <div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[64px] font-bold tracking-wide leading-[36px] md:leading-[64px] text-white"
          >
            {lines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </motion.h1>
        </div>
        {/* SHOP BUTTON */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-[15px] md:mt-[40px]"
        >
          <Button
            className="font-semibold text-black px-[24px] py-[17px] bg-[#C1F651] rounded-[32px]"
            variant="outline"
          >
            View All
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroText;
