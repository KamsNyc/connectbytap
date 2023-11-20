'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import bannerone from "../../public/bannerone.jpg";
import bannertwo from "../../public/Shoe.jpg";
import HeroText from "./HeroText";

function Hero() {
  // Slick settings
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };


  return (
    <div className="">
    <Slider className="" {...settings}>
      {/* SLIDE ONE */}
        <div className="relative">
          {/* HERO IMAGE */}
          <Image
            src={'Photo.svg'}
            alt='image'
            width={1170}
            height={657}
            className="rounded-[16px] object-cover max-h-[657px] w-full overflow-hidden opacity-90"
          />

          {/* TEXT CONTAINER*/}
          <HeroText title={`Step inside, for\ncomfort and magic\nawait you.`}/>
        </div>
        {/* SLIDE TWO */}
        <div className="relative">
          {/* HERO IMAGE */}
          <Image
            src={bannertwo}
            alt='image'
            width={1170}
            height={657}
            className="rounded-[16px] object-cover max-h-[657px] w-full overflow-hidden opacity-90"
          />

          {/* TEXT CONTAINER*/}
          <HeroText title={`Welcome to\nTapEdge`} />
        </div>
    </Slider>
  </div>
);
}

export default Hero;