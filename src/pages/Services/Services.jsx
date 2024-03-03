import React from "react";
import SinglePackServices from "./SinglePackServices";
import ComboPackages from "./ComboPackages";
import MegaComboPackages from "./MegaComboPackages";
const Services = () => {
  return (
    <section className="h-auto p-10 mb-48 space-y-10 lg:container">
      <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="text-[40px] lg:text-[50px] font-bold text-center">
          We provide <span className="text-primary-1"> 9 IT Services</span> for
          your <span className="text-primary-1"> business</span> or any{" "}
          <span className="text-primary-1"> project</span>
        </h2>
        <p className="text-[#5E5E5E] text-md font-[400] mt-5 text-center">
          Growing your business and achieving your goals with our dedicated team{" "}
          <br />
          of IT professionals, you can rest assured that your technology <br />
          infrastructure is in capable hands
        </p>
      </div>
      <SinglePackServices />
      <ComboPackages />
      <MegaComboPackages />
    </section>
  );
};

export default Services;
