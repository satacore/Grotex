import React from 'react'
import Servicios from '../Servicios/Servicios.jsx'
import Informacion from '../Informacion/Informacion.jsx'
import Caracteristicas from '../Caracteristicas/Caracteristicas.jsx'
import Home from '../Home/Home.jsx'

const SPA = () => {
  return (
    <>
    <Home />
    <Informacion />
    <Servicios />
    <Caracteristicas/>
    </>
  )
}

export default SPA