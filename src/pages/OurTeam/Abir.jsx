import React from 'react'
import {useNavigate} from 'react-router-dom'
const Abir = () => {
 const navigate2=useNavigate();
 const goBack=()=>{
     navigate2(-1);



 };

  return (
    <>
     <h1 className='text-blue-500 text-center text-[50px]'>This is Abirs Page</h1>
    
       
    </>
  )
}

export default Abir