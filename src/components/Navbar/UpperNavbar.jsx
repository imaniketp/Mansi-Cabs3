import React from 'react'
import './UpperNavbar.css'
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa'

function UpperNavbar() {
  return (
    <div className='upperNavContainer'>
        <h5>TAG LINE</h5>
        <div className='upperNavRight'>
        <div><a href='tel:+91 8484846395'>+91 8484846395 </a></div>
            <div><a href='tel:+91 8585857798'>+91 8585857798</a></div>
            
            <div className='socialIcons'>
              <a href='mailto:Support@Mansicabs.com'><FaGooglePlusG className='gmail'/></a>
            
            </div>
        </div>
    </div>
  )
}

export default UpperNavbar