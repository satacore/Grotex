import React from 'react'
import {NavLink} from "react-router-dom";
import './Navbar.css'
import Logo3 from '../../assets/Logo3.png'




const Navbar2 = () => {

  return (
    <header className='headerNav'>
        <NavLink to="/"><img  className='LogoImg' src={Logo3} alt="" /></NavLink>
    </header>
  )
}

export default Navbar2
