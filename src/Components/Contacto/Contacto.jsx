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
                <input type="text" name='nombre' placeholder='Ingrese su nombre y apellido' size={40}/>
                <br />
                <br />
                Correo electronico: 
                <br />
                <input type="email" name='email' placeholder='Ingrese su correo electronico' size={40}/>
                <br />     
                <br /> 
                Telefono:
                <br />
                <input type="phone" name="telefono" placeholder='Ingrese su numero celular' size={40}/>   
                <br />
                <br />     
                Escriba su consulta: 
                <br />
                <input className='inputDescription' type="text" name='descripion' placeholder='Escriba su consulta aquí' size={80} />
                <br />
                <br />
                <input type="button" name='Enviar' value={'Enviar'}/>
              </label>
            </form>
      </div>
    </div>
  )
}

export default Contacto
