import React from 'react'
import './Footer.css'
import SataCore from '../../assets/SataCore.png'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <p className='FooterText'>© 2023 Satacore | All rights reserved | Privacy | Terms of Use | Desinged By: <img className='SataCoreFooter' src={SataCore} alt="SataCore"/></p>
    </div>
  )
}

export default Footer
