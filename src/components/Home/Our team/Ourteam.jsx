import React from "react";
import Image1 from "../../../assets/OurTeamPicture/our team/UIUX1.jpeg";
import Image2 from "../../../assets/OurTeamPicture/our team/mr1.jpg";
import Image3 from "../../../assets/OurTeamPicture/our team/ap1.jpg";
import Image4 from "../../../assets/OurTeamPicture/our team/vd1.jpg";
import Image5 from "../../../assets/OurTeamPicture/our team/wb1.jpg";
import Image6 from "../../../assets/OurTeamPicture/our team/wb2.jpg";
import Image7 from "../../../assets/OurTeamPicture/our team/ap2.jpg";
import Image8 from "../../../assets/OurTeamPicture/our team/Gp1.jpg";
import bgLayer from "/images/home/utils/bg-layer.png";
const cardData = [
  {
    name: "Arif Raihan Abir",
    department: "UI & UX design department",
    position: "Founder & UI & UX department head",
    image: Image1,
  },
  {
    name: "Abrar Shakil Mahir",
    department: "Graphics Design department",
    position: "Head of Graphics design",
    image: Image8,
  },
  {
    name: "Utsab Basu",
    department: "Marketing",
    position: "Head of Marketing Team",
    image: Image2,
  },
  {
    name: "Roman Islam",
    department: "App development",
    position: "Head of app development team",
    image: Image3,
  },
  {
    name: "Noor Asfi  Ahmed",
    department: "Video Editing department",
    position: "Video editing department head",
    image: Image4,
  },
  {
    name: "Shaoib Sagor",
    department: "Web development department",
    position: " Head of A team",
    image: Image5,
  },
  {
    name: "Hridoy Shill  Rohan",
    department: "Web development depart",
    position: "Head of web team B",
    image: Image6,
  },
  {
    name: "Mosarof Hossain",
    department: "App development department",
    position: " Head of App team B",
    image: Image7,
  },
];

const carddesigner = [];

const Card = ({ name, department, position, image }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={name}
        className="w-[263px] h-[185px] object-cover rounded-[5px]"
      />
      <h3 className="text-[16px] font-[500] line-[20px] mt-1">{name}</h3>
      <h3 className="text-[16px] font-[500] line-[20px] mt-1">{department}</h3>
      <h3 className="text-[16px] -[500] line-[20px] mt-1">{position}</h3>
      <button className="bg-primary-2 hover:bg-blue-700 mt-2 text-white w-[263px] h-[40px] p-[16px] gap-[10px] rounded-[5px] flex justify-center items-center">
        Learn More
      </button>
    </div>
  );
};

const Ourteam = () => {
  return (
    <div className="bg-gradient-to-r from-[#0061A8] to-[#2D96FF] py-[100px] mt-[200px] relative">
      <div className="absolute top-0 left-0 right-0 w-full h-full bg-[url('/images/home/utils/bg-layer.png')] bg-contain"></div>
      <h3 className="text-[56px] font-[700] line-[80px] text-center text-white">
        Our Main Team Member
      </h3>
      <section className="container grid xl:grid-cols-4 md:grid-cols-2 gap-[80px] mt-3 lg:container relative z-10">
        {cardData.map((card) => (
          <div className="bg-neutral-2 h-[380px] w-[295px] mt-5 rounded-[5px] flex flex-col justify-center items-center  border border-gray-400">
            <Card
              key={card.name}
              name={card.name}
              department={card.department}
              position={card.position}
              image={card.image}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Ourteam;
