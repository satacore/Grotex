import React from 'react'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";
import './Navbar.css'
import Logo3 from '../../assets/Logo3.png'


export const Navbar = () => {
  return (
    <header className='headerNav'>
        <NavLink to="/"><img className='LogoImg' src={Logo3} alt="" /></NavLink>
        <nav className='navBarMain'>
            <p className='navLinks'><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} ><button className='navButton'>INFORMACION *</button></Link></p>
            <p className='navLinks'><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} ><button className='navButton'>SERVICIOS *</button></Link></p>
            <p className='navLinks'><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} ><button className='navButton'>CARACTERISTICAS *</button></Link></p>
            <p className='navLinks'><NavLink to="/Contacto" spy={true} smooth={true} offstet={50} duration={500} ><button className='navButton'>CONTACTO *</button></NavLink></p>
        </nav>
    </header>
  )
}