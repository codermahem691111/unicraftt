import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import dataEntry from "../../assets/Services/DataEntry/Group 163239.png";
import { FaCircle } from "react-icons/fa6";
import { dataEntryCategory } from "../../data/Services/dataEntry";
import excel from "../../assets/Services/DataEntry/Group 163306.png";
import adobe from "../../assets/Services/DataEntry/Group 163307.png";
import portfolio1 from "../../assets/Services/DataEntry/Screenshot (67)1 1.png";
import portfolio2 from "../../assets/Services/DataEntry/Screenshot (66)1 1.png";
import portfolio3 from "../../assets/Services/DataEntry/Screenshot (68)1 1.png";

const DataEntryDetails = () => {
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
      <div className="w-full my-[10px] lg:my-[60px]  h-[300px] md:h-[500px]">
        <img src={dataEntry} alt="dataEntry" />
      </div>
      <h3 className="mt-0 md:mt-10 mb-5 text-[40px] font-bold">Data Entry</h3>
      <p className="text-[16px] md:text-[28px] text-[#0A090B] text-justify">
        Data entry involves inputting, updating, and managing information into a
        computerized database, spreadsheet, or system. It's a fundamental task
        that requires accuracy, attention to detail, and proficiency in using
        various software tools.Input information from various sources, such as
        handwritten documents, electronic files, forms, or records, into digital
        databases or spreadsheets.Organizing and formatting data according to
        specific guidelines or standards.Updating and maintaining databases or
        systems by adding new data, modifying existing entries, or deleting
        outdated or incorrect information.
      </p>
      <Link to="/thanks">
        <button className="px-12 py-2 my-10 text-lg font-medium text-white duration-300 rounded-md bg-btn-primary hover:bg-btn-hover">
          Get Service
        </button>
      </Link>
      <h3 className="mt-10 mb-5 text-[40px] font-bold">Data Entry Category</h3>
      <div className="mb-10">
        {dataEntryCategory.map((item, index) => (
          <div key={index} className="flex items-center my-8">
            <FaCircle color="#5D5D5D" />
            <p className="text-[#0A090B] font-[400] text-[20px] md:text-[32px] ml-5 leading-6">
              {item}
            </p>
          </div>
        ))}
      </div>
      <h3 className="mt-[100px] mb-10 text-[40px] font-bold">
        Data Entry Tools
      </h3>
      <div className="w-[300px] flex items-center justify-between">
        <img src={excel} alt="exel" />
        <img src={adobe} alt="adobe" />
      </div>

      <h3 className="mt-[100px] mb-10 text-[40px] font-bold">
        Data Entry Portfolio
      </h3>
      <div className="w-full  border-4 rounded-lg  border-[#F9AA4B]">
        <img src={portfolio1} alt="portfolio1" className="p-2" />
      </div>
      <div className="w-full  border-4 rounded-lg  my-10  border-[#F3737F]">
        <img src={portfolio2} alt="portfolio1" className="p-2" />
      </div>
      <div className="w-full  border-4 rounded-lg   border-[#18B797]">
        <img src={portfolio3} alt="portfolio1" className="p-2" />
      </div>
    </section>
  );
};

export default DataEntryDetails;
