import React from "react";
import Software from "../../assets/Services/Software/software.png";
import SoftwareCTg from '../../assets/Services/Software/sftctr.png'
import tool1 from '../../assets/Services/Software/softwaretools/t1.png'
import tool2 from '../../assets/Services/Software/softwaretools/t2.png'
import tool3 from '../../assets/Services/Software/softwaretools/t3.png'
import tool4 from '../../assets/Services/Software/softwaretools/t4.png'
import tool5 from '../../assets/Services/Software/softwaretools/t5.png'
import po1 from '../../assets/Services/Software/stfportfolio/po1.png'
import po2 from '../../assets/Services/Software/stfportfolio/po2.png'
import po3 from '../../assets/Services/Software/stfportfolio/po3.png'
import po4 from '../../assets/Services/Software/stfportfolio/po4.png'
import po5 from '../../assets/Services/Software/stfportfolio/po5.png'
import po6 from '../../assets/Services/Software/stfportfolio/po6.png'
import po7 from '../../assets/Services/Software/stfportfolio/po7.png'
import po8 from '../../assets/Services/Software/stfportfolio/po8.png'
import po9 from '../../assets/Services/Software/stfportfolio/po9.png'
import {Link} from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";

const SoftwareDevDetails = () => {

  return (
    <>
     
     <Link to="/services">
        <div className=" container  text-[#5E5E5E] font-[400] text-[16px] my-10 flex items-center cursor-pointer">
          <IoIosArrowRoundBack
            size={30}
            className="m-2 border border-[##49617E] rounded-[5px] "
          />
          Back
        </div>
      </Link>
      <h1 className="text-3xl text-center"></h1>
      <img
        className="container  w-full my-[10px] lg:my-[60px] h-[300px] md:h-[500px]"
        src={Software}
      ></img>
      <h1 className="container text-[40px] leading-[60px] font-[400] text-start">
        Software developement
      </h1>
      <p className="container mt-[10px] text-[28px] leading-[42px] font-[400]">
        Software development is the process of designing,creating, testing, and
        maintaining computer programs and applications. It involves a systematic
        approach to building software to meet specific needs, whether for
        businesses, individuals, or organizations.Understanding and documenting
        the needs and specifications of the software to be developed. Creating a
        blueprint or plan for the software based on the gathered
        requirements.Writing code using programming languages on the design
        specifications.Verifying that the software behaves as expected.Testing
        includes unit testing, integration testing and system testing.Releasing
        the software for use by intended users. Software development is the
        process of designing,creating, testing, and maintaining computer
        programs and applications. It involves a systematic approach to building
        software to meet specific needs, whether for businesses, individuals, or
        organizations.Understanding and documenting the needs and specifications
        of the software to be developed. Creating a blueprint or plan for the
        software based on the gathered requirements.Writing code using
        programming languages on the design specifications.Verifying that the
        software behaves as expected.Testing includes unit testing, integration
        testing and system testing.Releasing the software for use by intended
        users.
      </p>
      <div className="container mt-3">
      <button className=" h-[40px] w-[180px] rounded-[8px] mt-[6px] mb-[10px]  text-white bg-primary-2">
              Get Service
            </button>  
      </div>
      <h1 className="container text-[40px] leading-[60px] mt-[100px] font-[700] text-[#0A090B]">Software Development Catagory</h1>   
      <div className="container flex flex-col justify-center items-start">
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Custom Software</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Enterprise Resource Planning (ERP) Software</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Supply Chain Management (SCM) Software</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Content Management Systems (CMS)</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Workflow Management Software</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Project Management Software</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">E-commerce Platforms</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Healthcare Information Systems</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Education Management Systems</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Document Management System (DMS)</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Financial Management System</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Quality Management System (QMS)</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Risk Management System</h1>
       </div>
      

      </div>
      <h1 className="container text-[40px] leading-[60px] font-[700] mt-[100px] text-start text-[#0A090B]">
        Software developement Tools
      </h1>
     <div className="container flex flex-row justify-start items-center space-x-2 mt-2">
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool1}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool2}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool3}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool4}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool5}></img>
     </div>
     <h1 className="container text-[40px] leading-[60px] font-[700] mt-[100px] text-start text-[#0A090B]">
        Software Portfolio
      </h1>
      <div className="container grid xl:grid-cols-3 sm:grid-cols-2 xl:gap-15 sm:gap-10 place-items-center">
       <div className="flex flex-col justify-center items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={po1}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">E-Commerce Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={po2}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Resturant Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={po3}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Task Management Software</h1>
     </div>
     <div className="flex flex-col justify-center items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={po4}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Finance Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={po5}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Service Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={po6}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Rental Software</h1>
     </div>
     <div className="flex flex-col justify-center items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={po7}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Service Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={po8}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Project Managing</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={po9}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Rental Website</h1>
     </div>
      </div>
    </>
  );
};

export default SoftwareDevDetails;
