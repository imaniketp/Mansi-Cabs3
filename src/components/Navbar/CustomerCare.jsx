import React, { useState } from 'react'
import './CustomerCare.css'
import{IoCall} from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'
import customercareImg from '../../Assets/custocare.png'



function CustomerCare() {
    const [contactshow,setContactshow]= useState(false);
const showcontact=()=>{
   setContactshow(!contactshow);
}
  return (
    <div>
        <div className="circle1"></div>
            <div className="circle2"></div>
            <div onClick={showcontact} > <img className='maincontact' src={customercareImg} alt=''/></div>
            {contactshow && (
              <>
            <div > <a href='https://wa.me/918484846395' ><FaWhatsapp className='mainwhatsap'/></a></div>
             <div > <a href='tel:+91 8484846395' ><IoCall className='maincall'/></a></div> 
             </>
            )}
    </div>
  )
}

export default CustomerCare