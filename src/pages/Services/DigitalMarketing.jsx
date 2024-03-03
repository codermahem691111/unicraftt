import React from "react";
import Digi from "../../assets/Services/digi.png";
import d1 from '../../assets/Services/DigitalMarketing/digitools/d1.png'
import d2 from '../../assets/Services/DigitalMarketing/digitools/d2.png'
import d3 from '../../assets/Services/DigitalMarketing/digitools/d3.png'
import d4 from '../../assets/Services/DigitalMarketing/digitools/d4.png'
import d5 from '../../assets/Services/DigitalMarketing/digitools/d5.png'
import se1 from '../../assets/Services/DigitalMarketing/digitools/googleseo/se1.png'
import se2 from '../../assets/Services/DigitalMarketing/digitools/googleseo/se2.png'
import se3 from '../../assets/Services/DigitalMarketing/digitools/googleseo/se3.png'
import sc1 from '../../assets/Services/DigitalMarketing/digitools/SocialMedia/sc1.png'
import sc2 from '../../assets/Services/DigitalMarketing/digitools/SocialMedia/sc2.png'
import sc4 from '../../assets/Services/DigitalMarketing/digitools/SocialMedia/sc4.png'
import sc5 from '../../assets/Services/DigitalMarketing/digitools/SocialMedia/sc5.png'
import sc6 from '../../assets/Services/DigitalMarketing/digitools/SocialMedia/sc6.png'
import {Link} from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";


const DigitalMarketing = () => {

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
      
      <div className="container w-full my-[10px] lg:my-[60px] h-[300px] md:h-[500px]">
        <img src={Digi} />
      </div>

      <h1 className="container text-[40px] font-[700] leading-[60px]">
        DigitalMarketing
      </h1>
      <p className="container mt-[10px] text-[28px] leading-[42px] font-[400]">
        Digital marketing is a multifaceted field that leverages online channels
        and strategies to promote products, services, or brands. It encompasses
        various tactics to reach and engage with target audiences, drive
        traffic, generate leads, and ultimately, convert leads into
        customers.Optimizing websites and content to rank higher in search
        engine results pages (SERPs) organically. This involves keyword
        research, content optimization, technical improvements, and link
        building to increase visibility and traffic.Utilizing social media
        platforms (like Facebook, Instagram, Twitter, LinkedIn) to connect and
        engage with the audience. Strategies involve posting content, running
        ads, engaging with users, and building a community around the brand.
      </p>
      <div className="container mt-3">
        <button className=" h-[40px] w-[180px] rounded-[8px] mt-[6px] mb-[10px]  text-white bg-primary-2">
          Get Service
        </button>
        </div>
        <h1 className="container text-[40px] mt-[60px] leading-[60px] font-[700] text-[#0A090B]">Digital Marketing Catagory</h1>
        <div className="container flex flex-col justify-center items-start">
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Custome Website</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Inbound Marketing</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Outbound Marketing</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Social Media Marketing (SMM)</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Content Marketing</h1>

       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Search Engine Marketing (SEM)</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Search Engine Optimization (SEO</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Email Marketing</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Affiliate Marketing</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Mobile App Marketing</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Video Marketing</h1>
       </div>
       <div className="line1 flex flex-row justify-center items-center">
         <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
         <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">Local Marketing</h1>
       </div>
      
      </div>
      <h1 className="container  text-[40px] leading-[60px] font-[700] mt-[60px] text-start text-[#0A090B]">
      Digital Marketing Tools
      </h1>
      <div className="container   flex flex-row justify-start items-center space-x-2 mt-2">
      <img className="h-[140px] w-[140px]  drop-shadow-sm " src={d1}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={d2}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={d3}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={d4}></img>
      <img className="h-[140px] w-[140px] drop-shadow-sm " src={d5}></img>
     </div>
     <h1 className="text-[40px] mt-[10px] leading-[50px] text-primary-1 text-center font-[700]">Google Seo</h1>
    <div className="flex mt-[10px] flex-col items-center space-x-4 space-y-5">
    <div className="flex flex-col items-center border-[0.5px] border-[#F9AA4B] ">
    <img src={se1}  className="w-[1210px] h-[610px] "></img>
    </div>
    <div className="flex flex-col items-center border-[0.5px] border-[#18b797] ">
    <img src={se1}  className="w-[1210px] h-[610px] "></img>
    </div>
    <div className="flex flex-col items-center border-[0.5px] border-[#F3737F] ">
    <img src={se1}  className="w-[1210px] h-[610px] "></img>
    </div>

    </div>
    <h1 className="container text-[40px] leading-[50px] mt-[30px] text-primary-1 text-center font-[700]">Social Media Marketing</h1>
    <div className="container grid xl:grid-cols-2 mt-[30px] sm:grid-cols-1 gap-3 ">
     <img className="w-[608px] h-[528px]  border-[0.5px] border-blue-500 " src={sc1}></img>
     <img className="w-[524px] h-[388px]  border-[0.5px] border-[#18B797] " src={sc2}></img>
     <img className="w-[605px] h-[287px]  border-[0.5px] border-[#F9AA4B]  " src={sc5}></img>
     <img className="w-[542px] h-[392px]   border-[0.5px] border-[#F3737F] mt-[-120px]" src={sc6}></img>
    


    </div>
    <img className="container mt-[20px] w-[1210px] border-[0.5px] border-[#18B797] h-[420px]" src={sc4}></img> 
    
    </>
  );
};

export default DigitalMarketing;
