import React from 'react'
import './Contacto.css'
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { handleContext } from '../../Context/handleContext.jsx';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import Swal from 'sweetalert2'


 const Contacto = () => {
  const form = useRef()
  const {setHideButtons} = useContext(handleContext)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wsabdxf', 'template_aoovj0s', form.current, 'eXlG75zWKkoDql6oH')
      .then((result) => {
        Swal.fire({
          icon: 'success',
          text: 'El correo fue enviado con exito'
      })}, (error) => {
        Swal.fire({
          icon: 'error',
          text: 'El correo no pudo enviarse, intentelo mas tarde'
      })
      });
  };
  return (
    <div className='contactoContainer'>
      <div className='contactFlex'>
        <Link to="/" ><button onClick={() => setHideButtons(false)} className='volverButton'>Volver al Inicio</button></Link>
      </div>
      <div className='contactoTitulo'>
        <h1 className='titleForm'> CONTACTO <br/><br/><span className='spanForm'>Nuestro equipo estará encantado de atenderte de manera personalizada. Puedes contactar con nosotros llenando el formulario de contacto.</span></h1>
      </div>
      <br />
      <div className='formContainer'>
            <form ref={form} className='formulario' onSubmit={sendEmail}>
              <label className='labelContainer'>
                <hr style={{marginBottom: 20 , height:2}} className='homeDivisor'></hr>
                <p>Nombre y Apellido: </p> 
                <input className='inputName' type="text" name='nombre_completo' placeholder='Ingrese su nombre y apellido' size={50}/>
                <br />
                <br />
                <p>Correo electronico: </p> 
                <input className='inputEmail' type="email" name='email' placeholder='Ingrese su correo electronico' size={50}/>
                <br />     
                <br /> 
                <p>Telefono:</p> 
                <input className='inputPhone' type="phone" name="phone" placeholder='Ingrese su numero celular' size={50}/>   
                <br />
                <br />     
                <p>Escriba su consulta:</p>  
                <input className='inputDescription' type="text" name='message' placeholder='Mensaje..' size={50} />
                <br />
                <br />
                <div className='buttonContainer'>
                  <input className='formButton' type="submit" name='Enviar' value="Enviar mensaje"/>
                </div>
                <hr style={{marginTop: 20 , height:2 }} className='homeDivisor'></hr>
              </label>
            </form>
      </div>
    </div>
  )
}

export default Contacto
