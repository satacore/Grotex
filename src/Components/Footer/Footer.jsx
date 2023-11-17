import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";
import footerLogo from '../../assets/FooterLogo.png'
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
            <div className={hideButtons ? 'hidden' :'subCarText'}>
              <p className='footerSubTitle'>Links</p>
              <p className={hideButtons ? 'hidden' :'footerSubIg'}><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} >INFORMACION</Link></p>
              <p className={hideButtons ? 'hidden' :'footerSubIg'}><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} >SERVICIOS</Link></p>
              <p className={hideButtons ? 'hidden' :'footerSubIg'}><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} >CARACTERISTICAS</Link></p>
              <p onClick={handleClick} className={hideButtons ? 'hidden' :'footerSubIg'}><NavLink className="contactLink" to="/Contacto" spy={true} smooth={true} offstet={50} duration={500} >CONTACTO</NavLink></p>
            </div>
            <div className='subCarText'>
              <p className='footerSubTitle'>Encontranos</p>
              <p className='footerSub'>+54 11 2576 5243</p>
              <p className='footerSub'>contacto@agenciaecoming.com</p>
            </div>
            <div className='subCarText'>
                <p className='footerSubTitleRed'>Redes</p>
              <a className='linkIg' href="https://www.instagram.com/agenciaecoming/"><p className='footerSubIg'>Instagram</p></a>
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
