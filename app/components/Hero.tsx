import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"


function Hero() {
  return (
    <section className="w-full relative bg-black rounded-[16px]">
      {/* HERO IMAGE */}
      <Image
        src={"/Photo.svg"}
        alt="d"
        width={1170}
        height={657}
        className="rounded-[16px] object-cover max-h-[657px] w-full overflow-hidden opacity-90"
      />

      {/* TEXT CONTAINER*/}
      <div className="absolute translate-y-[-50%] left-[5%] top-1/2 ">
        {/* CONTAINER */}
        <div className="">
            {/* HEADING */}
            <div className="">
          <h1 className="text-[32px] md:text-[64px] font-bold tracking-wide leading-[36px] md:leading-[64px] text-white">Step inside, for<br></br>comfort and magic<br></br>await you.</h1>
          </div>
            {/* SHOP BUTTON */}
            <div className="mt-[15px] md:mt-[40px]">
          <Button className="font-semibold text-black px-[24px] py-[17px] bg-[#C1F651] rounded-[32px]" variant="outline">View All</Button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
