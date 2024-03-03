import React from 'react'
import Icon1 from '../../assets/whychooseus/WHY CHOOSE US/ic1.png';
import Icon2 from '../../assets/whychooseus/WHY CHOOSE US/ic2.png';
import Icon3 from '../../assets/whychooseus/WHY CHOOSE US/ic3.png';
import Icon4 from '../../assets/whychooseus/WHY CHOOSE US/ic4.png';
import Icon5 from '../../assets/whychooseus/WHY CHOOSE US/ic5.png';
import Secimag from '../../assets/whychooseus/marketing.svg'
const data = [
  { icon: Icon1, text1: 'Innovative Solutions', text2: "We make innovative solutions from a idea or problems.we follow many process to reach our goals." },
  { icon: Icon2, text1: 'Client-Centric Approach', text2: "client's needs and goals at the center of our development process" },
  { icon: Icon3, text1: 'Expertise and Experience', text2: "We have 60+ expertise team members and 7  years experienced in the industry." },
  { icon: Icon4, text1: 'Quality Assurance', text2: "We are the best for quality control and testing processes, ensuring the reliability and security of your software." },
  { icon: Icon5, text1: 'Security and Compliance', text2: "We provide data security and regulatory compliance, a critical concern for many clients." }, 
];





const WhyChose = () => {
  return (
    <>

    <h3 className='text-[#202020] text-[56px] font-[700] line-[80px] text-center mt-10'>Why choose <span className='text-primary-1'>Unicraft IT Ltd</span></h3>
    <h3 className='container text-[30px] text-[#5E5E5E] font-[400] line-[40px] text-center'>Our dedicated experts brings years of experience to the table. With a deep understanding of the latest technologies and industry trends, we have the knowledge and skills to create best solutions as your needs</h3>
    <div className='container flex xl:flex-row sm:flex-col justify-center items-center '>
    <div className=" icon-text-section flex flex-col">
      {data.map((item, index) => (
        <div key={index} className="row  flex flex-row mt-10">
          <div className="icon-container">
            <img className='h-[71px] w-[80px] object-cover' src={item.icon}></img> {/* Use a regular div for icons */}
          </div>
          <div className='flex flex-col ml-5'>
          <div className="text-container1">
            <h3 className='text-[30px] text-[#000] font-[500] line-[40px]'>{item.text1}</h3>
          </div>
          <div className="text-container2 text-[24px] text-[#5E5E5E] font-[400]  line-[30px] ">
            {item.text2}
          </div>
          </div>
        </div>
      ))}
    </div>

    <div className='xl:h-[309px] xl:w-[601px] sm:h-[400px] sm:w-[400px] shrink-0 ml-20 mt-10'>
      <img src={Secimag}></img>
    </div>    

    </div>
    </>
  )
}

export default WhyChose;