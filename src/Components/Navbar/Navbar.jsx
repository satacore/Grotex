import React from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'
import Logo from '../../assets/Logo.png'

export const Navbar = () => {
  return (
    <header>
        <img style={{zIndex:1}} src={Logo} alt=""  />
        <nav>
            <p><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} ><button>INFORMACION</button></Link></p>
            <p><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} ><button>SERVICIOS</button></Link></p>
            <p><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} ><button>CARACTERISTICAS</button></Link></p>
            <p><Link to="Contacto" spy={true} smooth={true} offstet={50} duration={500} ><button>CONTACTO</button></Link></p>
        </nav>
      </header>
  )
}
