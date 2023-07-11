import React from 'react'
import './Contacto.css'

 const Contacto = () => {
  return (
    <div className='contactoContainer'>
      <div className='contactoTitulo'>
        <h1 className='titleForm'> CONTACTO <br/><br/><span className='spanForm'>Nuestro equipo estará encantado de atenderte de manera personalizada. Puedes contactar con nosotros llenando el formulario de contacto.</span></h1>
      </div>
      <br />
      <div className='formContainer'>
            <form className='formulario' action="">
              <label className='labelContainer'>
                <hr style={{marginBottom: 20 , height:2}} className='homeDivisor'></hr>
                <p>Nombre y Apellido: </p> 
                <input className='inputName' type="text" name='nombre' placeholder='Ingrese su nombre y apellido' size={50}/>
                <br />
                <br />
                <p>Correo electronico: </p> 
                <input className='inputEmail' type="email" name='email' placeholder='Ingrese su correo electronico' size={50}/>
                <br />     
                <br /> 
                <p>Telefono:</p> 
                <input className='inputPhone' type="phone" name="telefono" placeholder='Ingrese su numero celular' size={50}/>   
                <br />
                <br />     
                <p>Escriba su consulta:</p>  
                <input className='inputDescription' type="text" name='descripion' placeholder='Mensaje..' size={50} />
                <br />
                <br />
                <div className='buttonContainer'>
                  <input className='formButton' type="button" name='Enviar' value={'Enviar Mensaje'}/>
                </div>
                <hr style={{marginTop: 20 , height:2 }} className='homeDivisor'></hr>
              </label>
            </form>
      </div>
    </div>
  )
}

export default Contacto
