import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";
import homeLogo2 from '../../assets/HomeLogo2.png'
import { useContext } from 'react';
import { handleContext } from '../../Context/handleContext.jsx';


const Footer = () => {
  const {hideButtons, handleClick} = useContext(handleContext)

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
              <p className='footerSubTitle'>Links</p>
              <p className='footerSubIg'><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} >ABOUT</Link></p>
              <p className='footerSubIg'><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} >SERVICES</Link></p>
              <p className='footerSubIg'><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} >FEATURES</Link></p>
              <p onClick={handleClick} className='footerSubIg'><NavLink className="contactLink" to="/Login" spy={true} smooth={true} offstet={50} duration={500} >LOG IN</NavLink></p>
              <p onClick={handleClick} className='footerSubIg'><NavLink className="contactLink" to="/Contacto" spy={true} smooth={true} offstet={50} duration={500} >CONTACT</NavLink></p>
            </div>
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
        <img src={homeLogo2} alt="" />
      </div>
    </div>
    <p className='footerText'>© 2023 Grotex | All rights reserved | Privacy | Terms of Use | Desinged By: Satacore</p>

    </>
    
  )
}

export default Footer
