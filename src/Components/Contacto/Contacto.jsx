import React from 'react'
import './Contacto.css'

 const Contacto = () => {
  return (
    <div className='contactoContainer'>
      <div className='contactoTitulo'>
        <h2 className='titleForm'>QUIRE TRABAJAR CON NOSOTROS? <br /> <br /><span className='spanForm'>CONTÁCTENOS</span></h2>
      </div>
      <br />
      <div className='formContainer'>
            <form className='formulario' action="">
              <label className='labelContainer'>
                Nombre y Apellido: 
                <br />
                <input className='inputName' type="text" name='nombre' placeholder='Ingrese su nombre y apellido' size={50}/>
                <br />
                <br />
                Correo electronico: 
                <br />
                <input className='inputEmail' type="email" name='email' placeholder='Ingrese su correo electronico' size={50}/>
                <br />     
                <br /> 
                Telefono:
                <br />
                <input className='inputPhone' type="phone" name="telefono" placeholder='Ingrese su numero celular' size={50}/>   
                <br />
                <br />     
                Escriba su consulta: 
                <br />
                <input className='inputDescription' type="text" name='descripion' placeholder='Escriba su consulta aquí' size={50} />
                <br />
                <br />
                <div className='buttonContainer'>
                  <input className='formButton' type="button" name='Enviar' value={'Enviar'}/>
                </div>
                
              </label>
            </form>
      </div>
    </div>
  )
}

export default Contacto
