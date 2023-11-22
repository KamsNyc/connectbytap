"use client";
import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

function LeftTextRightImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="md:flex items-center gap-[120px]">
        {/* TEXT CONTAINER */}
        <div className="space-y-[32px] py-4 md:py-[24px]">
          {/* TEXT BOX 1 */}
          <motion.div
            className="w-full md:max-w-[308px] border-[.6px] rounded-md p-4"
            initial={{ y: 25, x: 0, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[18px] font-semibold">Tap and Review:</h2>
            <p className="pr-20 md:pr-0 text-gray-500 leading-[24px] text-[16px] pt-[2px]">
              Customers tap to leave a review effortlessly.
            </p>
          </motion.div>

          {/* TEXT BOX 2 */}
          <motion.div
            className="w-full md:max-w-[308px] border-[.6px] rounded-md p-4"
            initial={{ y: 50, x: -25, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[18px] font-semibold">Direct Link:</h2>
            <p className="pr-20 md:pr-0 text-gray-500 leading-[24px] text-[16px] pt-[2px]">
              Instantly guide them to your review page.
            </p>
          </motion.div>

          {/* TEXT BOX 3 */}
          <motion.div
            className="w-full md:max-w-[308px] border-[.6px] rounded-md p-4"
            initial={{ y: 75, x: -35, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[18px] font-semibold">Results:</h2>
            <p className="pr-20 md:pr-0 text-gray-500 leading-[24px] text-[16px] pt-[2px]">
              Amplify positive reviews and enhance your business reputation.
            </p>
          </motion.div>
        </div>
         {/* IMAGE CONTAINER */}
         <div className="w-[450px] md:w-[550px] flex items-center justify-center  overflow-hidden  my-4 md:my-[42px]">
    <Image src="/ReviewTest.png" alt="Image" width={2250} height={2250} className="rounded-md object-cover flex items-center" />
</div>

      </div>
    </div>
  );
}

export default LeftTextRightImage;
