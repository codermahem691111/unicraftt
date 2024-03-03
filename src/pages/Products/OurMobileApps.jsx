import React from "react";
import SectionTitle from "../../components/Home/SectionTitle/SectionTitle";

import webPic1 from "/images/home/digitalProduct/mobileApp/1.png";
import webPic2 from "/images/home/digitalProduct/mobileApp/2.png";
import webPic3 from "/images/home/digitalProduct/mobileApp/3.png";
const images = [webPic1, webPic2, webPic3, webPic1];

const OurMobileApps = () => {
  return (
    <section className="container">
      <SectionTitle title="Our Mobile Apps " />
      <div className="grid grid-cols-4 gap-5 mt-[74px]">
        {images.map((image, i) => (
          <div
            key={i}
            className="px-1 py-10 border h-[386px] flex items-center justify-center col-span-1 rounded-lg shadow-xl border-typo-1/50"
          >
            <img
              className="mx-auto rounded h-52"
              src={image}
              alt="website image"
            />
          </div>
        ))}
      </div>
      {/* 2nd row */}
      <div className="grid grid-cols-4 gap-5 mt-[74px]">
        {images.map((image, i) => (
          <div
            key={i}
            className="px-1 py-10 border h-[386px] flex items-center justify-center col-span-1 rounded-lg shadow-xl border-typo-1/50"
          >
            <img
              className="mx-auto rounded h-52"
              src={image}
              alt="website image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMobileApps;
