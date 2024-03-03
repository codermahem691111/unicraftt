// import React from "react";
// import logo from "/Unicraft-IT-LTD-Logo.svg";
// import download from "/images/utils/download-icon.png";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="mt-[317px] w-full max-w-[1440px] mx-auto">
//         <div className="grid  md:grid-cols-5 md:px-[100px] gap-2 px-4">
//           <div className="col-span-2 mb-4 md:mb-0">
//             <img
//               className="w-[152px] h-[38px] md:mb-[24px] mb-[16px]"
//               src={logo}
//               alt=""
//             />
//             <p className="md:h-[64px] text-[#828282] mb-[19px] md:text-[18px] leading-8">
//               We develop solutions from innovative ideas <br />
//               which will change peoples future life.
//             </p>
//             <div className="flex gap-5 items-center mt-4">
//               <Link to="https://drive.usercontent.google.com/u/0/uc?id=1CCcoPOdHmy_LLmnePalJZ8zd-mgN0a5K&export=download">
//                 <img
//                   src={download}
//                   className="h-[60px] w-[60px]"
//                   alt="download"
//                 />
//               </Link>
//               <div className="">
//                 <h6 className="text-[#828282] text-xl font-bold">
//                   Company Deck
//                 </h6>
//                 <p className="text-[#828282] text-sm">PDF -1 MB</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="font-bold">
//           <h3 className="md:mb-[20px] mb-3">Company</h3>
//           <div className="md:space-y-[18px]">
            // <p><Link to='/about-us' className="md:text-[16px] font-light text-[#828282]">About Us</Link></p>
            // <p><Link to='/testimonials' className="md:text-[16px] font-light text-[#828282]">
            //   Testimonials
            // </Link></p>
            // <p><Link to='/terms-of-service' className="md:text-[16px] font-light text-[#828282]">
            //   Terms of Service
            // </Link></p>
            // <p><Link to='/blogs' className="md:text-[16px] font-light text-[#828282]">
            //   Blog
            // </Link></p>
            // <p><Link to='/privacy-policy' className="md:text-[16px] font-light text-[#828282]">
            //   Privacy Policy
            // </Link></p>

//           </div>
//           <div className="font-bold">
//             <h3 className="md:mb-[20px] mb-3">Service</h3>
//             <div className="md:space-y-[18px]">
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 Software Development
//               </p>
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 Web Development
//               </p>
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 App Development
//               </p>
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 UIUX Design
//               </p>
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 Graphic Designy
//               </p>
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 Digital Marketing
//               </p>
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 Video Editing
//               </p>
//             </div>
//           </div>
//           <div className="font-bold">
//             <h3 className="md:mb-[20px] mb-3">Contact</h3>
//             <div className="md:space-y-[18px]">
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 Email: www.infounicraft @gmail.com
//               </p>
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 Call: +8801866764063
//               </p>
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 Website: www.unicraftitltd.com
//               </p>
//               <p className="md:text-[16px] font-light text-[#828282]">
//                 Location: Rampura,Dhaka,Bangladesh
//               </p>
//               <div className="grid grid-cols-3 md:w-[152px] w-[150px] md:gap-3">
//                 <p className="bg-[#F95F00] rounded-full w-[40px] h-[40px] items-center justify-center flex text-white">
//                   <FaFacebookF></FaFacebookF>
//                 </p>
//                 <p className="rounded-full w-[40px] h-[40px] items-center justify-center flex text-[#F95F00] border-2 border-[#F95F00] hover:bg-[#F95F00] hover:text-white duration-500">
//                   <FaLinkedinIn></FaLinkedinIn>
//                 </p>
//                 <p className="rounded-full w-[40px] h-[40px] items-center justify-center flex text-[#F95F00] border-2 border-[#F95F00] border-[text-[#F95F00] hover:bg-[#F95F00] hover:text-white duration-500">
//                   <FaSquareXTwitter></FaSquareXTwitter>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#056dd6]">
//         <p className=" md:py-[26px] md:ps-[106px] p-4 text-white font-light mt-[84px] max-w-[1440px] mx-auto">
//           © {new Date().getFullYear()} — Copyright Reserved to Unicraft IT Ltd
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import logo from "/Unicraft-IT-LTD-Logo.svg";
import download from "/images/utils/download-icon.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="mt-[317px] w-full max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-5 md:px-[100px] gap-2 px-4">
          <div className="col-span-2 mb-4 md:mb-0">
            <img
              className="w-[152px] h-[38px] md:mb-[24px] mb-[16px]"
              src={logo}
              alt=""
            />
            <p className="md:h-[64px] text-[#828282] mb-[19px] md:text-[18px] leading-8">
              We develop solutions from innovative ideas <br />
              which will change peoples future life.
            </p>
            <div className="flex gap-5 items-center mt-4">
              <Link to="https://drive.usercontent.google.com/u/0/uc?id=1CCcoPOdHmy_LLmnePalJZ8zd-mgN0a5K&export=download">
                <img
                  src={download}
                  className="h-[60px] w-[60px]"
                  alt="download"
                />
              </Link>
              <div className="">
                <h6 className="text-[#828282] text-xl font-bold">
                  Company Deck
                </h6>
                <p className="text-[#828282] text-sm">PDF -1 MB</p>
              </div>
            </div>
          </div>
          <div className="font-bold">
            <h3 className="md:mb-[20px] mb-3">Company</h3>
            <div className="md:space-y-[18px]">
            <p><Link to='/about-us' className="md:text-[16px] font-light text-[#828282]">About Us</Link></p>
            <p><Link to='/testimonials' className="md:text-[16px] font-light text-[#828282]">
              Testimonials
            </Link></p>
            <p><Link to='/terms-of-service' className="md:text-[16px] font-light text-[#828282]">
              Terms of Service
            </Link></p>
            <p><Link to='/blogs' className="md:text-[16px] font-light text-[#828282]">
              Blog
            </Link></p>
            <p><Link to='/privacy-policy' className="md:text-[16px] font-light text-[#828282]">
              Privacy Policy
            </Link></p>
            </div>
          </div>
          <div className="font-bold">
            <h3 className="md:mb-[20px] mb-3">Service</h3>
            <div className="md:space-y-[18px]">
              <p className="md:text-[16px] font-light text-[#828282]">
                Software Development
              </p>
              <p className="md:text-[16px] font-light text-[#828282]">
                Web Development
              </p>
              <p className="md:text-[16px] font-light text-[#828282]">
                App Development
              </p>
              <p className="md:text-[16px] font-light text-[#828282]">
                UIUX Design
              </p>
              <p className="md:text-[16px] font-light text-[#828282]">
                Graphic Designy
              </p>
              <p className="md:text-[16px] font-light text-[#828282]">
                Digital Marketing
              </p>
              <p className="md:text-[16px] font-light text-[#828282]">
                Video Editing
              </p>
            </div>
          </div>
          <div className="font-bold">
            <h3 className="md:mb-[20px] mb-3">Contact</h3>
            <div className="md:space-y-[18px]">
              <p className="md:text-[16px] font-light text-[#828282]">
                Email: www.infounicraft @gmail.com
              </p>
              <p className="md:text-[16px] font-light text-[#828282]">
                Call: +8801866764063
              </p>
              <p className="md:text-[16px] font-light text-[#828282]">
                Website: www.unicraftitltd.com
              </p>
              <p className="md:text-[16px] font-light text-[#828282]">
                Location: Rampura,Dhaka,Bangladesh
              </p>
              <div className="grid grid-cols-3 md:w-[152px] w-[150px] md:gap-3">
                <p className="bg-[#F95F00] rounded-full w-[40px] h-[40px] items-center justify-center flex text-white">
                  <FaFacebookF></FaFacebookF>
                </p>
                <p className="rounded-full w-[40px] h-[40px] items-center justify-center flex text-[#F95F00] border-2 border-[#F95F00] hover:bg-[#F95F00] hover:text-white duration-500">
                  <FaLinkedinIn></FaLinkedinIn>
                </p>
                <p className="rounded-full w-[40px] h-[40px] items-center justify-center flex text-[#F95F00] border-2 border-[#F95F00] border-[text-[#F95F00] hover:bg-[#F95F00] hover:text-white duration-500">
                  <FaSquareXTwitter></FaSquareXTwitter>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#056dd6]">
        <p className=" md:py-[26px] md:ps-[106px] p-4 text-white font-light mt-[84px] max-w-[1440px] mx-auto">
          © {new Date().getFullYear()} — Copyright Reserved to Unicraft IT Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;