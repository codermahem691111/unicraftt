import React, { useEffect, useState } from "react";
import banner1 from "/images/home/banner/Asset 1.svg";
import banner2 from "/images/home/banner/Asset 2.svg";
import banner3 from "/images/home/banner/Asset 3.svg";

const RightHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [banner1, banner2, banner3];

  useEffect(() => {
  
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);
  return (
    <div class="w-1/2 h-full   flex justify-start items-center relative" >
      <img className="ml-[100px]" src="/images/home/banner/bulb_sidearea.svg" alt="" />

      {banners.map((banner, index) => (
        <div
          key={banner._id}
          className={`absolute inset-0 flex ml-[100px]  items-center justify-center z-20 w-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={banner} class="w-[350px] mr-8 mb-24" alt="" />
        </div>
      ))}
    </div>
  );
};

export default RightHeroSection;
