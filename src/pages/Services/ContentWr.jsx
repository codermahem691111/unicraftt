import React from "react";
import Cnt from "../../assets/Services/ContnetWr/cnt.png";
import c1 from "../../assets/Services/ContnetWr/contentwrtools/c1.png";
import c2 from "../../assets/Services/ContnetWr/contentwrtools/c2.png";
import c4 from "../../assets/Services/ContnetWr/contentwrtools/c4.png";
import c3 from "../../assets/Services/ContnetWr/contentwrtools/c3.png";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const ContentWr = () => {
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
        <img src={Cnt} />
      </div>
      <h1 className="container text-[40px] leading-[60px] font-[700]">
        Content Writing
      </h1>
      <p className="container mt-[10px] text-[28px] leading-[42px] font-[400]">
        Content writing involves creating written material for various purposes,
        platforms, and audiences. It's about producing engaging, informative,
        and valuable content that resonates with readers and serves a specific
        purpose, such as educating, entertaining, or persuading.Research and
        understand their target audience's interests, preferences, and pain
        points.Develop a content strategy that aligns with business goals,
        whether it's to increase brand awareness, drive traffic, boost
        engagement, or generate leads.optimize content for search engines (SEO)
        by incorporating relevant keywords naturally within the text to improve
        its visibility and ranking in search results.Various types of content,
        including blog posts, articles, social media posts, website copy,
        whitepapers, case studies, eBooks, product descriptions, and more
      </p>
      <div className="container mt-3">
        <button className=" h-[40px] w-[180px] rounded-[8px] mt-[6px] mb-[10px]  text-white bg-primary-2">
          Get Service
        </button>
      </div>
      <h1 className="container text-[40px] mt-[60px] leading-[60px] font-[700] text-[#0A090B]">
        Content Writing Catagory
      </h1>
      <div className="container flex flex-col justify-center items-start">
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            Blog Writimg
          </h1>
        </div>
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            SEO writing
          </h1>
        </div>
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            Copy Writing
          </h1>
        </div>
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            Technical Writing
          </h1>
        </div>
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            Content Writing
          </h1>
        </div>
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            Social Media Writing
          </h1>
        </div>
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            Academic Writing
          </h1>
        </div>
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            Creative Writing
          </h1>
        </div>
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            Edit Writing
          </h1>
        </div>
        <div className="line1 flex flex-row justify-center items-center">
          <div className="rounded-[50%] h-[20px] w-[20px] bg-gray-700"></div>
          <h1 className="text-[24px] leading-[40px] font-[400] text-gray-800 mx-[20px]">
            Advertise writing
          </h1>
        </div>
      </div>
      <h1 className="container  text-[40px] leading-[60px] font-[700] mt-[60px] text-start text-[#0A090B]">
        Content Writing Tools
      </h1>
      <div className="container   flex flex-row justify-start items-center space-x-2 mt-2">
        <img className="h-[140px] w-[140px]  drop-shadow-sm " src={c1}></img>
        <img className="h-[140px] w-[140px] drop-shadow-sm " src={c2}></img>
        <img className="h-[140px] w-[140px] drop-shadow-sm " src={c3}></img>
        <img className="h-[140px] w-[140px] drop-shadow-sm " src={c4}></img>
      </div>
      <h1 className="container text-[40px] leading-[60px] font-[700] mt-[100px] text-start text-[#0A090B]">
        Content Writing Portfolio
      </h1>
      <h1 className=" container text-[40px] mt-[40px] leading-[50px] font-[700] text-[#F3737F]">
        Blog Writings
      </h1>
      <h1 className="container mx-[20px] mt-[10px] text-[35px] leading-[50px] font-[500]">
        The day after Cyber Monday (Sustainable E-Commerce)-{" "}
        <a
          href="https://docs.google.com/document/d/1fkzChhBsl-GNvTtgOu8sZpHEyqOHOwXu7Ov0gh4RBkU/edit?fbclid=IwAR2KqEDnjnyFgtHtuprxyi1WeQpqRyLVO_2B1MSMKn49YZdzG-D4sR1hpdI#heading=h.2crudfhnrd1e"
          className="text-sky-500 ml-[10px]"
        >
          Visit
        </a>{" "}
      </h1>
      <h1 className="container mx-[20px] mt-[10px] text-[35px] leading-[50px] font-[500]">
        Different Types of Skateboard-{" "}
        <a
          href="https://docs.google.com/document/d/1zwcBvFFVQubXNqhBgDHdSbDiyosv_lfardp5FqGRFoM/edit?fbclid=IwAR0v1-NSCAeSoUDJc5k84NyPideIW4kaEMSVzttj6wFAFUfJ7lGooJXoEQc"
          className="text-sky-500 ml-[10px]"
        >
          Visit
        </a>{" "}
      </h1>
      <h1 className="container mx-[20px] mt-[10px] text-[35px] leading-[50px] font-[500]">
        TLinky : A Powerful Link Management Platform-{" "}
        <a
          href="https://docs.google.com/document/d/16Uxq8IjqD4jw6LqRfh8j_mikNuqCoOvB4-W0G_x7sY8/edit?fbclid=IwAR0kq_LQlKC_FlhFbud416qBi-IiWp4x5aO8_xchCUhIj8vlk79ahdtJ3dM#heading=h.xwrgr8hdmajk"
          className="text-sky-500 ml-[10px]"
        >
          Visit
        </a>{" "}
      </h1>
      <h1 className="container mx-[20px] mt-[10px] text-[35px] leading-[50px] font-[500]">
        7 Abandoned Haunted Places To Experience the Spooky Side of the World-
        <a
          href="https://travelsbird.com/abandoned-haunted-places-in-around-the-world/?fbclid=IwAR0o36dgWgUkHd_nAKfv2dFl6yP1UVVWAS2F2HmhYg9z-ZWBjQnCPaujE18"
          className="text-sky-500 ml-[10px]"
        >
          Visit
        </a>{" "}
      </h1>

      <h1 className=" container text-[40px] mt-[40px] leading-[50px] font-[700] text-[#F3737F]">
        Content Writings
      </h1>
      <h1 className="container mx-[20px] mt-[10px] text-[35px] leading-[50px] font-[500]">
        needed Water Heater Repair Services Should Not Be Ignored-
        <a
          href="https://docs.google.com/document/d/1qyeufqfbYdIEYznQkf2Vvre7Pn1TyGBB/edit"
          className="text-sky-500 ml-[10px]"
        >
          Visit
        </a>{" "}
      </h1>
      <h1 className="container mx-[20px] mt-[10px] text-[35px] leading-[50px] font-[500]">
      Medicare BD-
        <a
          href="https://docs.google.com/document/d/1Zu3E6ZFh685JYnqOgR655OxNRxCCZzujhT_hmh-KJYE/edit?fbclid=IwAR35i1jVQZbBVR-i7vFXGnP56nPKSToI1KnK2Emiybwfd0aPAQVWyVDVhxs"
          className="text-sky-500 ml-[10px]"
        >
          Visit
        </a>{" "}
      </h1>
      <h1 className="container mx-[20px] mt-[10px] text-[35px] leading-[50px] font-[500]">
      Mashrafi Furniture-
        <a
          href="https://docs.google.com/document/d/1oKN79ED68G3JO1R4BdzlkR5RX4M8_ZnwC2dYk_2HPXU/edit?fbclid=IwAR0_SoOdYVUw1-nSx3XcIStMk-_N--IDmgbaeDTXK3Qq78ircRY6vv8_0-Y"
          className="text-sky-500 ml-[10px]"
        >
          Visit
        </a>{" "}
      </h1>
     
    </>
  );
};

export default ContentWr;
