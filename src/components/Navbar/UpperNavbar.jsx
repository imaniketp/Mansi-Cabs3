import React, { useState } from 'react'
import './UpperNavbar.css'
import { FaWhatsapp } from 'react-icons/fa'
import{IoCall} from 'react-icons/io5'
import Marquee from "react-fast-marquee";
import { MdAddIcCall } from 'react-icons/md'
import { FcCellPhone } from 'react-icons/fc';

function UpperNavbar() {
const [contactshow,setContactshow]=useState(false);
const showcontact=()=>{
   setContactshow(!contactshow);
}

  return (
    <div className='upperNavContainer'>
      <div className='upperNavLeft'>
      <Marquee className='tagline' speed={100} gradient={false}>
          Bags Bharo Cabs Karo
      </Marquee>
      </div>
        <div className='upperNavRight'>
            <div><FaWhatsapp className='uppernavwhats'/><FcCellPhone  className='uppernavCall'/><a href='tel:+91 8484846395'>84 84 84 6395 </a></div>
            <div><FaWhatsapp className='uppernavwhats'/><FcCellPhone  className='uppernavCall'/><a href='tel:+91 8585857798'>85 85 85 7798</a></div>

            <div className="circle1"></div>
            <div className="circle2"></div>
            <div onClick={showcontact} > <img className='maincontact' src='custocare.png' alt=''/></div>
            {contactshow && (
              <>
            <div > <a href='https://wa.me/918484846395' ><FaWhatsapp className='mainwhatsap'/></a></div>
             <div > <a href='tel:+91 8484846395' ><IoCall className='maincall'/></a></div> 
             </>
            )}
        </div>
    </div>
  )
}

export default UpperNavbar