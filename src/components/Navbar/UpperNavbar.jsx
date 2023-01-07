import React from 'react'
import './UpperNavbar.css'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import Marquee from "react-fast-marquee";

function UpperNavbar() {
  return (
    <div className='upperNavContainer'>
      <div className='upperNavLeft'>
      <Marquee className='tagline' speed={100} gradient={false}>
          Bags Bharo Cabs Karo
      </Marquee>
      </div>
        <div className='upperNavRight'>
        <div><FaWhatsapp className='uppernavwhats'/><a href='tel:+91 8484846395'>8484846395 </a></div>
            <div><FiPhoneCall  className='uppernavCall'/><a href='tel:+91 8585857798'>8585857798</a></div>
            
            {/* <div className='socialIcons'>
              <a href='mailto:Support@Mansicabs.com'><FaGooglePlusG className='gmail'/></a>
            
            </div> */}
            <div > <a href='https://wa.me/918484846395' ><FaWhatsapp className='mainwhatsap'/></a></div>
            {/* <div > <a href='tel:+91 8484846395' ><IoCall className='maincall'/></a></div> */}
        </div>
    </div>
  )
}

export default UpperNavbar