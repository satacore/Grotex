import React from 'react'
import './servicios.css'
import Ejec from '../../assets/Ejecucion.png'
import Estr from '../../assets/Estrategia.png'
import Paso from '../../assets/Pasos.png'

const Servicios = () => {
  return (
    <div className='ServiciosContainer'>
        <div id='Servicios' className='generalTextContainer'>
          <div className='titleContainer'>
            <p className='p1'>OUR SERVICES</p>
            <div className='cardContainer'>
              
              <div className='boxContainer'>
                <img className='ServiciosImg' src={Estr} alt="" />
                <h1 className='s1'>FROM ZERO TO ONE</h1>
                <p className='t1'>We are moving from zero to one, not from one to hundred. That means we are focused on creating new solutions, not copying the existing ones.</p>
              </div>
              <div className='boxContainer'>
                <img className='ServiciosImg' src={Ejec} alt="" />
                <h1 className='s1'>OUR LEVEL UP</h1>
                <p className='t1'>With our dedicated team of professionals, NeptuneAds helps you through the entire process from creative design, placement, tracking and optimization.</p>
              </div>
              <div className='boxContainer'>
                <img className='ServiciosImg' src={Paso} alt="" />
                <h1 className='s1'>YOUR SATISFACTION</h1>
                <p className='t1'>Working with us you will work with professional business developers and media buyers having the vast good experience.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Servicios