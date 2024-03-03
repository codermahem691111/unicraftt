import React from "react";
import Button from "../../../shared/btn/Button";
import { useEffect,useRef } from "react";
import {gsap,Power3} from "gsap";
import './hero.css'
import Numberbg from '../../../../public/images/home/banner/Numberbg.png'
const LeftHeroSection = () => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // Create a timeline that repeats indefinitely

    tl.to(p1Ref.current, { opacity: 1, y: 0, duration: 1, ease: Power3.easeOut })
      .to(p1Ref.current, { opacity: 0, y: -50, duration: 1, ease: Power3.easeIn })
      .to(p2Ref.current, { opacity: 1, y: 0, duration: 1, ease: Power3.easeOut })
      .to(p2Ref.current, { opacity: 0, y: -50, duration: 1, ease: Power3.easeIn })
      .to(p3Ref.current, { opacity: 1, y: 0, duration: 1, ease: Power3.easeOut })
      .to(p3Ref.current, { opacity: 0, y: -50, duration: 1, ease: Power3.easeIn });

    return () => {
      tl.kill(); // Cleanup when the component unmounts
    };
  }, []);
 
  return (
    <div className="w-1/2 h-full  space-y-10 pt-[82px]" >
       
       <div className="w-30 mx-auto xl:mb-[210px] mb-[200px] text-start">
      <p ref={p1Ref} className="opacity-0 absolute w-1/3 text-primary-1 text-[56px] font-Groteskt font-[700] leading-[70px]">
      Innovative ideas will
shape the future
      </p>
      <p ref={p2Ref} className="opacity-0 absolute w-1/3 text-primary-1 text-[50px] font-Groteskt font-[700] leading-[70px]">
        Innovate Solutions For A Dynamic World
      </p>
      <p ref={p3Ref} className="opacity-0 absolute w-1/3  text-primary-1 text-[56px] font-Groteskt font-[700] leading-[70px]">
        Embrace The Future With Our Solutions
      </p>
    </div>
      <p className="text-2xl ">
        Ideas are the seeds of innovation, where possibilities take root and
        creativity flourishes.
      </p>
      <Button>Buy Membership</Button>

      <div id='numberplate' className="w-full h-[180px] ml-[-130px] border border-neutral-1/50 rounded-[5px] mt-auto flex items-center justify-evenly" >
        <p className="text-center ">
          <span className="block text-5xl text-white  font-bold mb-4">100+</span>
          <span className="font-[20px]  leading-[30px] text-white"> Innovative Ideas</span>
        </p>
        <p className="text-center">
          <span className="block text-5xl text-white  font-bold mb-4">60+</span>
          <span className="font-[20px] leading-[30px] text-white">Client Projects</span>
        </p>
        <p className="text-center">
          <span className="block text-5xl text-white font-bold mb-4">500+</span>
          <span className="font-[20px] leading-[30px] text-white">Digital Products</span>
        </p>
        <p className="text-center">
          <span className="block text-5xl text-white font-bold mb-4">50+</span>
          <span className="font-[20px] leading-[30px] text-white">Team Members</span>
        </p>
      </div>
    </div>
  );
};

export default LeftHeroSection;
