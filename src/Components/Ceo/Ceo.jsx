import React from 'react'
import './Ceo.css'
import ProfilePic from '../../assets/ProfilePicture.png'

const Ceo = () => {
  return (
    <div className='ServiciosContainer'>
        <div id='Servicios' className='generalTextContainer'>
          <div className='titleContainer'>
            <p className='p1'>CEO</p>
            <div className='cardContainer'>
              <div className='boxContainer'>
                <img className='ProfilePic' src={ProfilePic} alt="" />
                <h1 className='s1'>CEO</h1>
                <p className='t1'>Juakka</p>
              </div>
              <div className='boxContainer'>
                <img className='ProfilePic' src={ProfilePic} alt="" />
                <h1 className='s1'>CEO</h1>
                <p className='t1'>Lautaro Bustos</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ceo