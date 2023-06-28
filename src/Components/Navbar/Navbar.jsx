import React from 'react'
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";
import './Navbar.css'
import Logo1 from '../../assets/Logo1.png'


export const Navbar = () => {
  return (
    <header>
        <NavLink to="/"><img className='LogoImg' src={Logo1} alt="" /></NavLink>
        <nav>
            <p><Link to="aboutus" spy={true} smooth={true} offstet={50} duration={500} ><button>ABOUT US</button></Link></p>
            <p><Link to="work" spy={true} smooth={true} offstet={50} duration={500} ><button>WORK</button></Link></p>
            <p><Link to="clients" spy={true} smooth={true} offstet={50} duration={500} ><button>CLIENTS</button></Link></p>
            <p><Link to="contact" spy={true} smooth={true} offstet={50} duration={500} ><button>CONTACT</button></Link></p>
        </nav>
    </header>
  )
}
