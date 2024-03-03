import React from "react";
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom'
import Image2 from "../../assets/OurTeamPicture/our team/UIUX1.jpeg";
import Image3 from "../../assets/OurTeamPicture/our team/uiux 2.jpg";
import Image4 from "../../assets/OurTeamPicture/our team/uiux3.jpg";
import Image5 from "../../assets/OurTeamPicture/our team/uiux4.jpg";
import Image6 from "../../assets/OurTeamPicture/our team/uiux5.jpg";
import Image7 from "../../assets/OurTeamPicture/our team/uiux6.jpg";
import Image8 from "../../assets/OurTeamPicture/our team/uiux7.jpg";
import Image9 from "../../assets/OurTeamPicture/our team/uiux8.jpg";
import Image10 from "../../assets/OurTeamPicture/our team/uiux9.jpg";
import Image11 from "../../assets/OurTeamPicture/our team/wb1.jpg";
import Image12 from "../../assets/OurTeamPicture/our team/shafi.jpg";
import Image13 from "../../assets/OurTeamPicture/our team/polin.jpg";
import Image14 from "../../assets/OurTeamPicture/our team/maheem.jpg";

import Image16 from "../../assets/OurTeamPicture/our team/pieash.jpg";
import Image17 from "../../assets/OurTeamPicture/our team/tonmoy.jpg";
import Image18 from "../../assets/OurTeamPicture/our team/maheem.jpg";
import Image19 from "../../assets/OurTeamPicture/our team/newdev.jpg";
import Image20 from "../../assets/OurTeamPicture/our team/maheem.jpg";
import Image21 from "../../assets/OurTeamPicture/our team/uiux9.jpg";
import Image22 from "../../assets/OurTeamPicture/our team/uiux9.jpg";
import Box1 from "./boxses/Group.svg";
import Box2 from "./boxses/Vector.svg";
import Box3 from "./boxses/Vector(1).svg";
import Box4 from './boxses/Box4.svg'
import Box5 from './boxses/Box5.svg'
import Box6 from './boxses/Box6.svg'
import Box7 from './boxses/Box7.svg'
import Box8 from './boxses/Box8.svg'
import Box9 from './boxses/Box9.svg'
import Abir from './Abir'








const cardData = [
  {
    name: "Arif Raihan Abir",
    department: "UI & UX design department",
    position: "Founder & UI & UX department head",
    image: Image2,
    page:"/abir"

  },
  {
    name: "Salman Rahman Soumik",
    department: "UI Ux  department",
    position: "Ui Ux designer",
    image: Image3,
    page:"/abir"
  },
  {
    name: "Reaz Hossain",
    department: "UI Ux department",
    position: "Head of UI designer Team",
    image: Image4,
    page:"/abir"
  },
  {
    name: "Khadija Tut Tahera",
    department: "UI Ux department",
    position: "Ux designer",
    image: Image5,
    page:"/abir"
  },
  {
    name: "Saleh Ahmed",
    department: "UI Ux department ",
    position: "UI designer",
    image: Image6,
    page:"/abir"
  },
  {
    name: "Mrittika Mou",
    department: "Ui Ux department",
    position: " UI designer",
    image: Image7,
    page:"/abir"
  },
  {
    name: "Rahul dev",
    department: "Ui Ux department",
    position: "Ui designer",
    image: Image8,
    page:"/abir"
  },
  {
    name: "Fayzur Rahman Priad",
    department: "Ui Ux department",
    position: " Ui designer",
    image: Image9,
    page:"/abir"
  },
  {
    name: "Rupa khondokar",
    department: "Ui Ux department",
    position: " Ui designer",
    image: Image10,
    page:"/abir"
  },
];

const cardData2 = [
  {
    name: "Shafi Arnob",
    department: "Web development department",
    position: "web developer",
    image: Image12,
    page:"/abir"
  },
  {
    name: "Golam Rahman Sagor",
    department: "Web development  department",
    position: "Head of Team A ",
    image: Image11,
    page:"/abir"
  },
  {
    name: "Pollin khan",
    department: "Web Development",
    position: "Web developer",
    image: Image13,
    page:"/abir"
  },
  {
    name: "Maheem Shahreear",
    department: "Web development department",
    position: "Web developer",
    image: Image14,
    page:"/abir"
  },
  {
    name: "Sagor Ahmed",
    department: "web development department ",
    position: "Leader of team B",
    image: Image14,
    page:"/abir"
  },
  {
    name: "Md Pieash Ahmed",
    department: "Web development department",
    position: "Web developer ",
    image: Image16,
    page:"/abir"
  },
  {
    name: "Sadman Sakib Tonmoy",
    department: "Web development department",
    position: "WEb developer ",
    image: Image17,
    page:"/abir"
  },
  {
    name: "Md Sayedul Haque",
    department: "Web development department",
    position: "WEb developer ",
    image: Image18,
    page:"/abir"
  },
  {
    name: "Sariot Hossian",
    department: "Web development department",
    position: "WEb developer ",
    image: Image19,
    page:"/abir"
  },
  {
    name: "Md Mahadi Hossain",
    department: "Web development department",
    position: "WEb developer ",
    image: Image20,
    page:"/abir"
  },
  {
    name: "Hamim Hossian",
    department: "Web development department",
    position: "WEb developer ",
    image: Image21,
    page:"/abir"
  },
  {
    name: "Ashrafuj Jaman Tanbin",
    department: "Web development department",
    position: "WEb developer ",
    image: Image22,
    page:"/abir"
  },
];




const Card = ({ name, department, position, image, page }) => {

 const navigate=useNavigate();
 const handleClick=()=> {
  navigate(page);


 };


  return (
    <div className="card">
      <img
        src={image}
        alt={name}
        className="w-[263px] h-[185px] object-cover rounded-[5px] drop-shadow-md "
      />
      <h3 className="text-[16px] font-[500] line-[20px] mt-1">{name}</h3>
      <h3 className="text-[16px] font-[500] line-[20px] mt-1">{department}</h3>
      <h3 className="text-[16px] font-[500] line-[20px] mt-1">{position}</h3>
      <button onClick={handleClick} className="bg-primary-2 hover:bg-blue-700 mt-2 text-white w-[263px] h-[40px] p-[16px] gap-[10px] rounded-[5px] flex justify-center items-center">
        Learn More
      </button>
    </div>
  );
};

const OurTeam = () => {
  return (
    <>
  
      <h3 className="text-[56px] font-[700] line-[80px] mt-20 text-center text-primary-1">
        Transforming <span className="text-blue-900">ideas into reality</span>{" "}
        with our expertise <span className="text-blue-900">team mates</span>
      </h3>
      <p className="text-[#5E5E5E] text-[38px] font-[400] text-center ">
        Our teammates is so dedicated with a passion for problem-solving and
        innovation. Their expertise, combined with a commitment to excellence,
        plays a crucial role in shaping the future of our solutions
      </p>
      <div className="container topline flex flex-row mt-[20px] gap-[-140px]">
        <img src={Box2} className="mr-[-30px]"></img>
        <img src={Box3} className="mr-[-100px]"></img>

        <img src={Box1}></img>
        <div className="textbox flex justify-center items-center bg-stone-200 w-[780px] h-[90px] skew-x-[-28deg] mt-[20px] ml-[-21.20px]">
          <h3 className="text-[#CF1A25] text-[34px] font-[600] skew-x-[28deg] ">
            UI Ux Department
          </h3>
        </div>
      </div>
      <section className="container  grid xl:grid-cols-4 xl:gap-[80px] md:grid-cols-2 gap-3  mt-3 lg:container">
        {cardData.map((card) => (
          <div className="bg-neutral-2 h-[380px] w-[295px] mt-5 rounded-[5px] flex flex-col justify-center items-center  border border-gray-400">
            <Card
              key={card.name}
              name={card.name}
              department={card.department}
              position={card.position}
              image={card.image}
              page={card.page}
            />
          </div>
        ))}
      </section>
      <div className=" container topline flex flex-row mt-[20px] gap-[-140px]">
        <img src={Box4} className="mr-[-30px]"></img>
        <img src={Box5} className="mr-[-100px]"></img>

        <img src={Box6}></img>
        <div className="textbox flex justify-center items-center bg-stone-200 w-[780px] h-[90px] skew-x-[-28deg] mt-[20px] ml-[-21.20px]">
          <h3 className="text-[#EF9D1A] text-[34px] font-[600] skew-x-[28deg] ">
            Web developement Department
          </h3>
        </div>
      </div>
      <section className="container  grid xl:grid-cols-4 xl:gap-[80px] md:grid-cols-2 gap-3  mt-3 lg:container">
        {cardData2.map((card) => (
          <div className="bg-neutral-2 h-[380px] w-[295px] mt-5 rounded-[5px] flex flex-col justify-center items-center  border border-gray-400">
            <Card
              key={card.name}
              name={card.name}
              department={card.department}
              position={card.position}
              image={card.image}
              page={card.page}
            />
          </div>
        ))}
      </section>
      <div className=" container topline flex flex-row mt-[20px] gap-[-140px]">
        <img src={Box7} className="mr-[-30px]"></img>
        <img src={Box8} className="mr-[-100px]"></img>

        <img src={Box9}></img>
        <div className="textbox flex justify-center items-center bg-stone-200 w-[780px] h-[90px] skew-x-[-28deg] mt-[20px] ml-[-21.20px]">
          <h3 className="text-[#5EA628] text-[34px] font-[600] skew-x-[28deg] ">
            App developement Department
          </h3>
        </div>
      </div>
  
    
    
    
    
    
         




    

    
    </>
  );
};

export default OurTeam;
