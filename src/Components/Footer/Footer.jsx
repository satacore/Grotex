import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerCard'>
        <div className='footerHeader'>
        <h1 className='footerTitle'>ECOMING AGENCIA DE MARKETING</h1>
        <hr></hr>
        </div>
        
          <div className='subCard'>
            <div className='subCarText'>
              <p className='footerSubTitle'>Links</p>
              <p className='footerSub'><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} >INFORMACION</Link></p>
              <p className='footerSub'><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} >SERVICIOS</Link></p>
              <p className='footerSub'><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} >CARACTERISTICAS</Link></p>
              <p className='footerSub'><NavLink to="/Contacto" spy={true} smooth={true} offstet={50} duration={500} >CONTACTO</NavLink></p>
            </div>
            <div className='subCarText'>
              <p className='footerSubTitle'>Encontranos</p>
              <p className='footerSub'>+54 11 5464 1940</p>
              <p className='footerSub'>contacto@agenciaecoming.com</p>
            </div>
            <div className='subCarText'>
              <p className='footerSubTitle'>Redes</p>
              <a className='linkIg' href="https://www.instagram.com/agenciaecoming/"><p className='footerSubIg'>Instagram</p></a>
              <p className='footerSub'>Facebook</p>
            </div>
          </div>
      </div>
      <p className='FooterText'>© 2023 Ecoming | All rights reserved | Privacy | Terms of Use | Desinged By: Satacore</p>
    </div>
  )
}

export default Footer
