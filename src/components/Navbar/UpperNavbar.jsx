import React from 'react'
import './UpperNavbar.css'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaWhatsapp } from 'react-icons/fa'

function UpperNavbar() {
  return (
    <div className='upperNavContainer'>
      <div className='upperNavLeft'>
        <h5>Bags Bharo Cabs Karo</h5>
      </div>
        <div className='upperNavRight'>
        <div><a href='tel:+91 8484846395'>8484846395 </a></div>
            <div><a href='tel:+91 8585857798'>8585857798</a></div>
            
            <div className='socialIcons'>
              <a href='mailto:Support@Mansicabs.com'><FaGooglePlusG className='gmail'/></a>
            
            </div>
            <div > <a href='https://wa.me/918484846395' ><FaWhatsapp className='mainwhatsap'/></a></div>
        </div>
    </div>
  )
}

export default UpperNavbar