import React from 'react'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";
import './Navbar.css'
import Logo3 from '../../assets/Logo3.png'
import { useState } from 'react';


export const Navbar = () => {
  const [hideButtons, setHideButtons] = useState(false);

  const handleClick = () => {
    setHideButtons(true);
  };
  return (
    <header className='headerNav'>
        <NavLink to="/"><img onClick={() => setHideButtons(false)} className='LogoImg' src={Logo3} alt="" /></NavLink>
        <nav className='navBarMain'>
            <p id='infoButton' className={hideButtons ? 'hidden' : 'navLinks'}><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} ><button className={hideButtons ? 'hidden' : 'navButton'}>INFORMACION *</button></Link></p>
            <p id='serviciosButton' className={hideButtons ? `hidden` : `navLinks`}><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} ><button className={hideButtons ? 'hidden' : 'navButton'}>SERVICIOS *</button></Link></p>
            <p id='caracteristicasButton' className={hideButtons ? 'hidden' : 'navLinks'}><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} ><button className={hideButtons ? 'hidden' : 'navButton'}>CARACTERISTICAS *</button></Link></p>
            <p id='contactoButton' className={hideButtons ? 'hidden' : 'navLinks'}><NavLink to="/Contacto" spy={true} smooth={true} offstet={50} duration={500} ><button onClick={handleClick} className={hideButtons ? 'hidden' : 'navButton'}>CONTACTO *</button></NavLink></p>
        </nav>
    </header>
  )
}