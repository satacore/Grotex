import React from 'react'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";
import './Navbar.css'
import Logo3 from '../../assets/Logo3.png'





const Navbar = () => {

  return (
    <header className='headerNav'>
        <NavLink to="/"><img  className='LogoImg' src={Logo3} alt="" /></NavLink>
        <nav className='navBarMain'>
            <p id='infoButton' className='navLinks'><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} ><button className='navButton'>ABOUT</button></Link></p>
            <p id='serviciosButton' className='navLinks'><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} ><button className='navButton'>SERVICIES</button></Link></p>
            <p id='caracteristicasButton' className='navLinks'><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} ><button className='navButton'>FEATURES</button></Link></p>
            <p id='caracteristicasButton' className='navLinks'><NavLink to="/Login" spy={true} smooth={true} offstet={50} duration={500} ><button className='navButton'>LOG IN</button></NavLink></p>
            <p id='contactoButton' className='navLinks'><NavLink to="/Contacto" spy={true} smooth={true} offstet={50} duration={500} ><button className='navButton'>CONTACT</button></NavLink></p>
        </nav>
    </header>
  )
}

export default Navbar