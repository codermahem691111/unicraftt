import React from "react";
import { Link } from "react-router-dom";
import { membershipTypes } from "../../data/Products/ourMembership";

const MembershipCard = ({ title, description, image, amount, percentage }) => {
  return (
    <div className="mt-10 rounded-lg shadow-xl w-[350px] flex flex-col items-center bg-[#FCFCFC] p-5">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full rounded-lg "
        />
      </div>
      <div className="absolute flex flex-col items-center mt-10 h-[full] justify-center  text-[#FAFAFA] text-[40px] font-bold">
        <h2>{percentage}</h2>
        <h2>Membership</h2>
      </div>
      <div>
        <h3 className="text-[20px] font-bold my-2">{title}</h3>
        <p className="text-[14px] font-[400] mb-4">{description}</p>
        <Link to="/membership-payment">
          <button className="w-full py-3 text-lg font-medium text-white duration-300 rounded-lg bg-btn-primary hover:bg-btn-hover">
            BDT {amount} Tk
          </button>
        </Link>
      </div>
    </div>
  );
};

const Membership = () => {
  return (
    <section className="h-auto p-10 mb-48 space-y-10 lg:container">
      <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="text-[40px] lg:text-[56px] font-bold text-center">
          Partnership with us through
        </h2>
        <p className="text-primary-1 text-[35px] lg:text-[56px] font-bold">
          your membership?
        </p>
      </div>
      <div className="flex items-center justify-center !mt-[100px]">
        <h2 className="text-[30px] lg:text-[48px] font-bold ">
          Our membership types
        </h2>
        <hr className="hidden sm:flex flex-grow text-primary-1 h-[2px]  ml-4" />
      </div>

      <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-3 lg:grid-cols-2 mt-[100px]">
        {membershipTypes.map((membership) => (
          <MembershipCard
            key={membership.id}
            title={membership.title}
            description={membership.description}
            image={membership.image}
            amount={membership.amount}
            percentage={membership.percentage}
            className="mt-4"
          />
        ))}
      </div>
    </section>
  );
};

export default Membership;
