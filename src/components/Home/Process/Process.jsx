import React from 'react'
import Icon1  from '../../../../public/images/home/our process/icon1.svg'
import Icon2  from '../../../../public/images/home/our process/icon2.svg'
import Icon3  from '../../../../public/images/home/our process/icon3.svg'
import Icon4  from '../../../../public/images/home/our process/icon4.svg'
import Icon5  from '../../../../public/images/home/our process/icon5.svg'
import Icon6  from '../../../../public/images/home/our process/icon6.svg'
import arrow from '../../../../public/images/home/our process/arrow.png'
import arrowup from '../../../../public/images/home/our process/arrowup.png'
import { useEffect,useState } from 'react'
const ColorChangingDiv = ({ timeout ,children}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [bgColorClass, setBgColorClass] = useState("bg-blue-500");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prevState => !prevState);
    }, timeout); // Change color based on the provided timeout
    
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [timeout]);

  useEffect(() => {
    setBgColorClass(isVisible ? "bg-blue-500" : "bg-transparent");
  }, [isVisible]);

  return (
    <div className={`border-4 border-[#202020] rounded-[50%] h-[219px] w-[219px] flex flex-col justify-center items-center ${bgColorClass}`}>
      
     {children} 
      
      {/* Content of the div */}
    </div>
  );
};




const Process = () => {

  return (
    <>

    <h3 className='container  text-[48px] font-[700] text-primary-1 text-start mt-10 ml-3 line-[80px]'>Our Process</h3>
    <div className='container grid xl:grid-cols-6 xl:gap-[160px] md:grid-cols-4 md:gap-3 sm:grid-cols-2 sm:gap-2 justify-center gap-5 items-center '>
      <div>
        
        <ColorChangingDiv timeout={1000} >
        <img src={Icon1} className='h-[24.144px] w-[32.632px] shrink-0'></img>
         <h3 className='text-[24px] font-[500] text-center text-[#202020]'>Idea Generation</h3>
        </ColorChangingDiv>

      </div>
      <div className='flex flex-col'>
      <img className='w-[145px] h-[100px] transform rotate-[-40deg] shrink-0' src={arrowup}></img> 
      <ColorChangingDiv timeout={1500} >
         <img src={Icon2} className='h-[24.144px] w-[32.632px] shrink-0'></img>
         <h3 className='text-[24px] font-[500] text-center text-[#202020]'>Gather Requirement</h3>
        </ColorChangingDiv>
      </div>
      <div className='flex flex-col'>
      <ColorChangingDiv timeout={2000} >
         <img src={Icon3} className='h-[24.144px] w-[32.632px] shrink-0'></img>
         <h3 className='text-[24px] font-[500] text-center text-[#202020]'>Design</h3>
        </ColorChangingDiv> 
        <img className='w-[100px] h-[100px] transform rotate-[-159.293deg] shrink-0' src={arrow}></img> 
      </div>
      <div className='flex flex-col'>
      <img className='w-[145px] h-[100px] transform rotate-[-40deg] shrink-0' src={arrowup}></img> 
      <ColorChangingDiv timeout={1200}>
         <img src={Icon4} className='h-[24.144px] w-[32.632px] shrink-0'></img>
         <h3 className='text-[24px] font-[500] text-center text-[#202020]'>Development</h3>
        </ColorChangingDiv>

      </div>
      <div className='flex flex-col'>
      <ColorChangingDiv timeout={700}>
         <img src={Icon5} className='h-[24.144px] w-[32.632px] shrink-0'></img>
         <h3 className='text-[24px] font-[500] text-center text-[#202020]'>Testing</h3>
        </ColorChangingDiv> 
        <img className='w-[100px] h-[100px] transform rotate-[-159.293deg] shrink-0' src={arrow}></img>   
        


      </div>

      <div  className='flex flex-col'>
      <img className='w-[145px] h-[100px] transform rotate-[-40deg] shrink-0' src={arrowup}></img> 
      <ColorChangingDiv timeout={1600} >
         <img src={Icon6} className='h-[24.144px] w-[32.632px] shrink-0'></img>
         <h3 className='text-[24px] font-[500] text-center text-[#202020]'>Delivery</h3>
        </ColorChangingDiv>
  

      </div>
    </div>

    </>
  );
};

export default Process;
