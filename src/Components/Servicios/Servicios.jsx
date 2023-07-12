import React from 'react'
import './servicios.css'
import Ejec from '../../assets/Ejecucion.png'
import Estr from '../../assets/Estrategia.png'
import Inve from '../../assets/Investigacion.png'
import Paso from '../../assets/Pasos.png'

const Servicios = () => {
  return (
    <div className='ServiciosContainer'>
        <div id='Servicios' className='generalTextContainer'>
          <div className='titleContainer'>
            <p className='p1'> <span className='p1Left'>*02* | </span> SERVICIOS</p>
            <div className='cardContainer'>
              <div className='boxContainer'>
                <img className='ServiciosImg' src={Inve} alt="" />
                <h1 className='s1'>INVESTIGACIÓN Y ANÁLISIS *</h1>
                <p className='t1'>Primer instancia de relevamiento completo de la empresa / negocio y su competencia. Entender donde estamos parados.</p>
              </div>
              <div className='boxContainer'>
                <img className='ServiciosImg' src={Estr} alt="" />
                <h1 className='s1'>ESTRATEGIA *</h1>
                <p className='t1'>Armado del plan general. Establecer expectativas y alcance de cada una de las herramientas. Calendarización de las etapas.</p>
              </div>
              <div className='boxContainer'>
                <img className='ServiciosImg' src={Ejec} alt="" />
                <h1 className='s1'>EJECUCIÓN *</h1>
                <p className='t1'>Contamos con un equipo de profesionales que permiten llevar a cabo cada uno de los objetivos planteados.</p>
              </div>
              <div className='boxContainer'>
                <img className='ServiciosImg' src={Paso} alt="" />
                <h1 className='s1'>SEGUIMIENTO *</h1>
                <p className='t1'>Seguimiento personalizado de los resultados, ajuste de las estrategias optimizar el presupuesto y llegar a tus objetivos.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Servicios