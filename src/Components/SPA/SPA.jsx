import React from 'react'
import Servicios from '../Servicios/Servicios.jsx'
import Informacion from '../Informacion/Informacion.jsx'
import Caracteristicas from '../Caracteristicas/Caracteristicas.jsx'
import Home from '../Home/Home.jsx'
import Galery from '../Galery/Galery.jsx'
import Navbar from '../Navbar/Navbar.jsx'


const SPA = () => {
  return (
    <>
    <Navbar/>
    <Home />
    <Informacion />
    <Servicios />
    <Galery/>
    <Caracteristicas/>
    </>
  )
}

export default SPA