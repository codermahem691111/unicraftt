import React from "react";
import { sponserhipTypes } from "../../data/Products/ourSponsership";
import { Link } from "react-router-dom";

const SponsorshipCard = ({ title, description, image }) => {
  return (
    <div className="mt-10 rounded-lg shadow-xl w-[350px] flex flex-col items-center bg-[#FCFCFC] p-5">
      <img src={image} alt={title} className="object-cover w-full rounded-lg" />
      <div>
        <h3 className="text-[20px] font-bold my-2">{title}</h3>
        <p className="text-[14px] font-[400] mb-4">{description}</p>
        <Link to="/sponsership-payment">
          <button className="w-full py-3 text-lg font-medium text-white duration-300 rounded-lg bg-btn-primary hover:bg-btn-hover">
            Offer
          </button>
        </Link>
      </div>
    </div>
  );
};

const Sponsership = () => {
  return (
    <section className="h-auto p-10 mb-48 space-y-10 lg:container">
      <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="text-[40px] lg:text-[56px] font-bold text-center">
          Partnership with us through
        </h2>
        <p className="text-primary-1 text-[35px] lg:text-[56px] font-bold">
          your sponsorships?
        </p>
      </div>
      <div className="flex items-center justify-center !mt-[100px]">
        <h2 className="text-[30px] lg:text-[48px] font-bold ">
          Our sponsorship types
        </h2>
        <hr className="hidden sm:flex flex-grow text-primary-1 h-[2px]  ml-4" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-5 lg:grid-cols-2 mt-[100px]">
        {sponserhipTypes.map((sponsorship) => (
          <SponsorshipCard
            key={sponsorship.id}
            title={sponsorship.title}
            description={sponsorship.description}
            image={sponsorship.image}
            className="mt-4"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsership;
