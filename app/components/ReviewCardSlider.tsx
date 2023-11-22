import Image from "next/image";
import React from "react";

const Images = [
  {
    name: "Yelp",
    link: "/Yelp.png",
  },
  {
    name: "Google",
    link: "/Google.png",
  },
  {
    name: "Yelp",
    link: "/Yelp.png",
  },
];

function ReviewCardSlider() {
  return (
    <div className="flex items-center">
      <Image src={'/'} alt={'d'} width={364} height={229} />
    </div>
  );
}

export default ReviewCardSlider;
