import React from "react";
import { Link } from "react-router-dom";
import { paymentTypes } from "../../data/Products/ourPaymentTypes";
import { IoIosArrowRoundBack } from "react-icons/io";

const SponsershipPaymentCard = ({ image }) => {
  return (
    <div className="mt-10 rounded-lg shadow-xl w-[250px] h-[360px] flex flex-col items-center bg-[#FCFCFC] p-5">
      <div className="px-3 h-[80%] flex justify-center items-center">
        <img
          src={image}
          alt="payment-method"
          className="object-cover w-full rounded-lg"
        />
      </div>
      <div className="px-3 w-full h-[20%] flex justify-center items-center">
        <Link to="">
          <button className="px-[50px] py-3 text-lg font-medium text-white duration-300 rounded-lg bg-btn-primary hover:bg-btn-hover">
            Pay Now
          </button>
        </Link>
      </div>
    </div>
  );
};

const SponsershipPayment = () => {
  return (
    <section className="h-auto p-10 mb-48 space-y-10 lg:container">
      <Link to="/memberShip">
        <div className="text-[#5E5E5E] font-[400] text-[16px] flex items-center cursor-pointer">
          <IoIosArrowRoundBack
            size={30}
            className="m-2 border border-[##49617E] rounded-[5px] "
          />
          Back
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="text-[40px] lg:text-[56px] font-bold text-center">
          Pay us for
        </h2>
        <p className="text-primary-1 text-[35px] lg:text-[56px] font-bold">
          Your Sponsership?
        </p>
        <p className="font-bold text-[24px] text-[#0A090B]">
          *** Contact us before any payment***
        </p>
      </div>
      <div className="flex items-center justify-center !mt-[100px]">
        <h2 className="text-[30px] lg:text-[48px] font-bold ">
          Our Payment types
        </h2>
        <hr className="hidden sm:flex flex-grow text-primary-1 h-[2px]  ml-4" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 mt-[100px]">
        {paymentTypes.map((payment) => (
          <SponsershipPaymentCard
            key={payment.id}
            image={payment.image}
            className="mt-4"
          />
        ))}
      </div>
    </section>
  );
};

export default SponsershipPayment;
