import React from "react";
import Web from "../../assets/Services/webdev/web.png";
import tool1 from '../../assets/Services/Software/softwaretools/t1.png'
import tool2 from '../../assets/Services/Software/softwaretools/t2.png'
import tool3 from '../../assets/Services/Software/softwaretools/t3.png'
import tool4 from '../../assets/Services/Software/softwaretools/t4.png'
import tool5 from '../../assets/Services/Software/softwaretools/t5.png'
import p1 from '../../assets/Services/webdev/webportfolio/p1.png'
import p2 from '../../assets/Services/webdev/webportfolio/p2.png'
import p3 from '../../assets/Services/webdev/webportfolio/p3.png'
import p4 from '../../assets/Services/webdev/webportfolio/p4.png'
import p5 from '../../assets/Services/webdev/webportfolio/p5.png'
import p6 from '../../assets/Services/webdev/webportfolio/p6.png'
import p7 from '../../assets/Services/webdev/webportfolio/p7.png'
import p8 from '../../assets/Services/webdev/webportfolio/p8.png'
import p9 from '../../assets/Services/webdev/webportfolio/p9.png'
import {Link} from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
const WebDev = () => {
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
    

      <img
        className="container  w-full my-[10px] lg:my-[60px] h-[300px] md:h-[500px]"
        src={Web}
      ></img>
      <h1 className="container text-[40px] leading-[60px] font-[700]">
        Web Development
      </h1>
      <p className="container mt-[10px] text-[28px] leading-[42px] font-[400]">
        Web development involves creating websites or web applications that can
        be accessed via the internet. It includes both the front-end and
        back-end development aspects.This focuses on the user interface and user
        experience.Languages like HTML, CSS, and JavaScript along with
        frameworks like React, Angular, or Vue.js to build the visual elements
        of a website that users interact with directly in their browsers.
        Back-end work on the logic, databases, and server
        configurations.Languages such as Python, Ruby, PHP, or JavaScript,
        Node.js along with frameworks like Django, Ruby on Rails, Laravel, or
        Express.js to build the server-side functionalities.
      </p>
      <div className="container mt-3">
        <button className=" h-[40px] w-[180px] rounded-[8px] mt-[6px] mb-[10px]  text-white bg-primary-2">
          Get Service
        </button>
      </div>
      <h1 className="container text-[40px] mt-[100px] leading-[60px] font-[700] text-[#0A090B]">Web Development Catagory</h1>   
      <div className="container flex flex-col justify-center items-start">
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Custome Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">E-commerce Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Blogs Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Portfolio Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Business/Corporate Website</h1>

       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Educational Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Media and Entertainment Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Social Networking Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Forums and Community Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Government Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Personal Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Wiki Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Wordpress Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Shofify Website</h1>
       </div>
      


      </div>
      <h1 className="container  text-[40px] leading-[60px] font-[700] mt-[100px] text-start text-[#0A090B]">
        Web developement Tools
      </h1>
      <div className="container flex flex-row justify-start items-center space-x-2 mt-2">
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool1}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool2}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool3}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool4}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={tool5}></img>
     </div>
     <h1 className="container text-[40px] leading-[60px] font-[700] mt-[100px] text-start text-[#0A090B]">
        Webiste development Portfolio
      </h1>
      <div className="container grid xl:grid-cols-3 sm:grid-cols-2 xl:gap-15 sm:gap-10 place-items-center">
       <div className="flex flex-col justify-center items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={p1}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">E-Commerce Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={p2}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Resturant Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={p3}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Task Management Software</h1>
     </div>
     <div className="flex flex-col justify-center items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={p4}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Finance Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={p5}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Service Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={p6}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Rental Software</h1>
     </div>
     <div className="flex flex-col justify-center items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={p7}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Service Software</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={p8}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Project Managing</h1>
     </div>
     <div className="flex flex-col items-center">
        <img className="xl:w-[350px] h-[270px] sm:w-[270px] rounded-[8px] mt-[20px]" src={p9}></img>
         <h1 className="text-[24px] leading-[60px] font-[600]">Rental Website</h1>
     </div>
      </div>
    </>
  );
};

export default WebDev;
