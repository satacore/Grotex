import React from 'react'
import Servicios from '../Servicios/Servicios.jsx'
import Informacion from '../Informacion/Informacion.jsx'
import Caracteristicas from '../Caracteristicas/Caracteristicas.jsx'
import Home from '../Home/Home.jsx'
import Ceo from '../Ceo/Ceo.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { ToastContainer } from 'react-toastify'


const SPA = () => {
  return (
    <>
    <Navbar/>
    <ToastContainer/>
    <Home />
    {/* About */}
    <Informacion /> 
    {/* Services */}
    <Servicios />
    <Caracteristicas/>
    <Ceo/>
    {/* Login */}
    <Footer/>
    </>
  )
}

export default SPA