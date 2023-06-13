import React from 'react'
import './Footer.css'
import SataCore from '../../assets/SataCore.png'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <p className='FooterText'>© 2023 Ecoming | Todos los derechos reservados| Contacto | Diseñada por: <img className='SataCoreFooter' src={SataCore} alt="SataCore"/></p>
    </div>
  )
}

export default Footer
