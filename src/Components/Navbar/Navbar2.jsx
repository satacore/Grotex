import React from 'react'
import {NavLink} from "react-router-dom";
import './navbar2.css'
import Logo3 from '../../assets/Logo3.png'




const Navbar2 = () => {

  return (
    <header className='headerNav'>
        <NavLink to="/"><img  style={{maxWidth: "56%"}} className='LogoImg' src={Logo3} alt="" /></NavLink>
        
    </header>
  )
}

export default Navbar2
