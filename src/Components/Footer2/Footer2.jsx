import React from 'react'
import './Footer2.css'
import footerLogo from '../../assets/FooterLogo.png'


const Footer2 = () => {

  return (
    <>
    <div className='footerContainer'>
      <div className='footerCard'>
        <div>
          <div className='footerHeader'>
          <h1 className='footerTitle' style={{cursor: "default"}}>GROTEX ADS</h1>
        <hr className='hrFooter'></hr>
        </div>
          <div className='subCard'>
            <div className='subCarText'>
              <p className='footerSubTitle'>Encontranos</p>
              <p className='footerSub'>info@grotexads.com</p>
            </div>
            <div className='subCarText'>

            </div>
          </div>
        </div>
      </div>
      <div className='footerImg'>
        <img src={footerLogo} alt="" />
      </div>
    </div>
    <p className='footerText'>© 2023 Grotex | All rights reserved | Privacy | Terms of Use | Desinged By: Satacore</p>

    </>
    
  )
}

export default Footer2
