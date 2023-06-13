import React from 'react'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";
import './Navbar.css'
import Logo1 from '../../assets/Logo1.png'


export const Navbar = () => {
  return (
    <header>
        <NavLink to="/"><img className='LogoImg' src={Logo1} alt="" /></NavLink>
        <nav className='NavBarContainer'>
          <div className='NavBarItems'>
            <p><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} ><button>INFORMACION</button></Link></p>
            <p><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} ><button>SERVICIOS</button></Link></p>
            <p><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} ><button>CARACTERISTICAS</button></Link></p>
            <p><NavLink to="/Contacto" ><button>CONTACTO</button></NavLink></p>
          </div> 
        </nav>
    </header>
  )
}
