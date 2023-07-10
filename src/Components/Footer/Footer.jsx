import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";
import footerLogo from '../../assets/FooterLogo.png'

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
      <div className='footerCard'>
        <div>
          <div className='footerHeader'>
          <h1 className='footerTitle'>ECOMING AGENCIA DE MARKETING</h1>
        <hr className='hrFooter'></hr>
        </div>
          <div className='subCard'>
            <div className='subCarText'>
              <p className='footerSubTitle'>Links</p>
              <p className='footerSubIg'><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} >INFORMACION</Link></p>
              <p className='footerSubIg'><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} >SERVICIOS</Link></p>
              <p className='footerSubIg'><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} >CARACTERISTICAS</Link></p>
              <p className='footerSubIg'><NavLink className="contactLink" to="/Contacto" spy={true} smooth={true} offstet={50} duration={500} >CONTACTO</NavLink></p>
            </div>
            <div className='subCarText'>
              <p className='footerSubTitle'>Encontranos</p>
              <p className='footerSub'>+54 11 5464 1940</p>
              <p className='footerSub'>contacto@agenciaecoming.com</p>
            </div>
            <div className='subCarText'>
              <p className='footerSubTitle'>Redes</p>
              <a className='linkIg' href="https://www.instagram.com/agenciaecoming/"><p className='footerSubIg'>Instagram</p></a>
            </div>
          </div>
        </div>
      </div>
      <div className='footerImg'>
        <img src={footerLogo} alt="" />
      </div>
    </div>
    <p className='footerText'>© 2023 Ecoming | All rights reserved | Privacy | Terms of Use | Desinged By: Satacore</p>

    </>
    
  )
}

export default Footer
