import React from 'react'
import Servicios from '../Servicios/Servicios.jsx'
import Informacion from '../Informacion/Informacion.jsx'
import Caracteristicas from '../Caracteristicas/Caracteristicas.jsx'
import Home from '../Home/Home.jsx'
import Galery from '../Galery/Galery.jsx'


const SPA = () => {
  return (
    <>
    <Home />
    <Informacion />
    <Servicios />
    <Galery/>
    <Caracteristicas/>
    </>
  )
}

export default SPA