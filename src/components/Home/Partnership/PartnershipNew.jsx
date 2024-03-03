import React from "react";
import "./PshipEl";
import { PCard } from "./PshipEl";
import { PCard2 } from "./PshipEl";
import { PCard3 } from "./PshipEl";
import { PCard4 } from "./PshipEl";
const PartnershipNew = () => {
  return (
    <>
      <h1 className="text-3xl text-center">this is p new</h1>
      <div className="container grid xl:grid-cols-2  sm:grid-cols-1 gap-20">
        <PCard className="h-[350px] w-[612px]  rounded-[15px] flex flex-col items-center justify-end    ">
          <div className="mb-[10px] mx-[35px]">
            <h1 className="text-[34px] leading-[42px] font-[700] text-white drop-shadow-lg">
              Offer Sponsorship
            </h1>
            <h1 className="text-[16px]  leading-[24px] font-[400] mt-[10px] mb-[20px] text-white">
              Elevate your brand's visibility with our sponsorship
              opportunities.we will feature your products on our websites and
              apps.
            </h1>
            <button className="h-[40px] w-[180px] rounded-[8px] mt-[6px] mb-[10px]  text-white bg-primary-2">
              Offer
            </button>
          </div>
        </PCard>
        <PCard2 className="h-[350px] w-[612px] rounded-[10px]  xl:ml-[30px] flex flex-col items-center justify-end ">
          <div className="mb-[10px] mx-[35px]">
            <h1 className="text-[34px] leading-[42px] font-[700] text-white drop-shadow-lg">
              Offer Sponsorship
            </h1>
            <h1 className="text-[16px]  leading-[24px] font-[400] mt-[10px] mb-[20px] text-white">
              Elevate your brand's visibility with our sponsorship
              opportunities.we will feature your products on our websites and
              apps.
            </h1>
            <button className="h-[40px] w-[180px] rounded-[8px] mt-[6px] mb-[10px]  text-white bg-primary-2">
              Offer
            </button>
          </div>
        </PCard2>
        <PCard3 className="h-[350px] w-[612px]  rounded-[10px] flex flex-col items-center justify-end  ">
          <div className="mb-[10px] mx-[35px]">
            <h1 className="text-[34px] leading-[42px] font-[700] text-white drop-shadow-lg">
              Offer Sponsorship
            </h1>
            <h1 className="text-[16px]  leading-[24px] font-[400] mt-[10px] mb-[20px] text-white">
              Elevate your brand's visibility with our sponsorship
              opportunities.we will feature your products on our websites and
              apps.
            </h1>
            <button className="h-[40px] w-[180px] rounded-[8px] mt-[6px] mb-[10px]  text-white bg-primary-2">
              Offer
            </button>
          </div>
        </PCard3>
        <PCard4 className="h-[350px] w-[612px]  rounded-[10px] xl:ml-[30px] flex flex-col items-center justify-end  ">
          <div className="mb-[10px] mx-[35px]">
            <h1 className="text-[34px] leading-[42px] font-[700] text-white drop-shadow-lg">
              Offer Sponsorship
            </h1>
            <h1 className="text-[16px]  leading-[24px] font-[400] mt-[10px] mb-[20px] text-white">
              Elevate your brand's visibility with our sponsorship
              opportunities.we will feature your products on our websites and
              apps.
            </h1>
            <button className="h-[40px] w-[180px] rounded-[8px] mt-[6px] mb-[10px]  text-white bg-primary-2">
              Offer
            </button>
          </div>
        </PCard4>
      </div>
    </>
  );
};

export default PartnershipNew;
