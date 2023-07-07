import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerCard'>
        <h1 className='footerTitle'>ECOMING AGENCIA DE MARKETING</h1>
          <div className='subCard'>
            <div className='subCarText'>
              <p className='footerSub'>Links</p>
              <p><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} ><button>INFORMACION</button></Link></p>
              <p><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} ><button>SERVICIOS</button></Link></p>
              <p><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} ><button>CARACTERISTICAS</button></Link></p>
              <p><NavLink to="/Contacto" spy={true} smooth={true} offstet={50} duration={500} ><button>CONTACTO</button></NavLink></p>
            </div>
            <div className='subCarText'>
              <p className='footerSub'>Encontranos</p>
              <p className='footerSub'>+54 11 5464 1940</p>
              <p className='footerSub'>info@adamasagencia.com.ar</p>
            </div>
            <div className='subCarText'>
              <p className='footerSub'>Redes</p>
              <p className='footerSub'>Instagram</p>
              <p className='footerSub'>Facebook</p>
            </div>
          </div>
      </div>
      <p className='FooterText'>© 2023 Ecoming | All rights reserved | Privacy | Terms of Use | Desinged By: Satacore</p>
    </div>
  )
}

export default Footer
