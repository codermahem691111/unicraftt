import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ThankyouPage = () => {
  return (
    <section className="container">
      <Link to="/services">
        <div className="text-[#5E5E5E] font-[400] text-[16px] my-10 flex items-center cursor-pointer">
          <IoIosArrowRoundBack
            size={30}
            className="m-2 border border-[##49617E] rounded-[5px] "
          />
          Back
        </div>
      </Link>
      <div className="w-full h-auto shadow-lg bg-[#FCFCFC] flex flex-col items-center">
        <div className="px-10 py-5">
          <p className="text-primary-1 text-[56px] font-bold text-center mt-10 mb-5">
            Thank You for connecting with us{" "}
          </p>
          <p className="text-center text-[30px] text-[#5E5E5E]">
            We will contact with you via email
          </p>
          <p className="text-[#0A090B] text-[28px] font-[400] mt-10">
            To provide all types of digital solutions our skilled team is with
            you.Please fill up the form to get any digital service -{" "}
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeAd-jwcI_PWxQjCnmEtJDCwo4guzAWbjAdBEEihavje3PbyQ/viewform">
              <span className="underline text-primary-1"> Visit form</span>
            </Link>
          </p>
          <p className="text-[#0A090B] text-[28px] font-[400] mt-10">
            To Know about our company details click on Unicraft IT Ltd Profile.
          </p>

          <p className="text-[#0A090B] text-[28px] font-[400] ">
            Company Profile -{" "}
            <Link to="https://drive.google.com/file/d/1CCcoPOdHmy_LLmnePalJZ8zd-mgN0a5K/view">
              <span className="underline text-primary-1"> Visit form</span>
            </Link>
          </p>
          <div className="flex items-center justify-center my-5">
            <Link to="/service-payment">
              <button className="px-12 py-2 my-10 text-lg font-medium text-white duration-300 rounded-md bg-btn-primary hover:bg-btn-hover">
                Go to Payment Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankyouPage;
