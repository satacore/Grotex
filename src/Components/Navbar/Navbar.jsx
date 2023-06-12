import React from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'
export const Navbar = () => {
  return (
    <header>
        <img src="" alt="" />
        <nav>
            <p><Link to="Informacion" spy={true} smooth={true} offstet={50} duration={500} ><button>ABOUT US</button></Link></p>
            <p><Link to="Servicios" spy={true} smooth={true} offstet={50} duration={500} ><button>SERVICES</button></Link></p>
            <p><Link to="Caracteristicas" spy={true} smooth={true} offstet={50} duration={500} ><button>CLIENTS</button></Link></p>
            <p><Link to="Contacto" spy={true} smooth={true} offstet={50} duration={500} ><button>CONTACT</button></Link></p>
        </nav>
      </header>
  )
}
