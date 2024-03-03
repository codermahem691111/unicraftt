import React from "react";
import { BiSolidAlarmAdd } from "react-icons/bi";
import { comboPackServices } from "../../data/Services/comboPackages";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";

const ComboPackageCard = ({ id, title, item1, item2 }) => {
  return (
    <div className="m-3  shadow-xl   flex flex-col justify-center  bg-[#FCFCFC] rounded-b-[15px]">
      <div className="py-2 text-center rounded-t-[15px] bg-primary-1 text-[32px] font-bold text-white">
        {title}
      </div>
      <div className="ml-3 ">
        <p className="text-[#393939] my-5 text-[24px] font-[700]">
          Services Includes:
        </p>
        <div className="flex mb-2 border-b border-[#e4e4e7] items-center">
          <MdOutlineDone
            size={20}
            className="p-1 text-white bg-green-500 rounded-full"
          />
          <p className="text-[#5d5d5d] ml-2 my-1  text-[20px]">{item1}</p>
        </div>
        <div className="flex mb-2 border-b border-[#e4e4e7] items-center">
          <MdOutlineDone
            size={20}
            className="p-1 text-white bg-green-500 rounded-full"
          />
          <p className="text-[#5d5d5d] ml-2 my-1  text-[20px]">{item2}</p>
        </div>
      </div>
      <div className="text-center">
        <Link to={`/services/${id}`}>
          <button className="w-[90%] py-2 my-3 text-lg font-medium text-white duration-300 rounded-md bg-btn-primary hover:bg-btn-hover">
            Get Services
          </button>
        </Link>
      </div>
    </div>
  );
};

const ComboPackages = () => {
  return (
    <>
      <div className="flex items-center justify-between !mt-[100px]">
        <h2 className="w-1/2 text-[35px] lg:text-[40px] text-primary-1  font-bold ">
          Combo Packages
        </h2>
        <div className="flex flex-col items-center justify-center w-1/2 md:flex-row">
          <button className="bg-[#C71D1C] p-3 mb-3 md:mb-0 rounded-md text-white">
            15% Discount Available
          </button>
          <button className="flex items-center justify-center ml-5 bg-[#FACC3B] p-3 rounded-md">
            <BiSolidAlarmAdd size={25} className="mr-2" />
            96H 32M 10S
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1  xl:grid-cols-3 lg:grid-cols-2 mt-[100px]">
        {comboPackServices.map((pack) => (
          <ComboPackageCard
            key={pack.id}
            id={pack.id}
            title={pack.title}
            item1={pack.item1}
            item2={pack.item2}
            className="mt-4"
          />
        ))}
      </div>
    </>
  );
};

export default ComboPackages;
