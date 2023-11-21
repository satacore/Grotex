import React from 'react'
import './Login.css'
import { Link,NavLink, useNavigate} from "react-router-dom";
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import  Navbar2  from '../Navbar/Navbar2.jsx';
import Footer2 from '../Footer2/Footer2.jsx';
import ReCAPTCHA from "react-google-recaptcha"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';


  
 const onChange = () => {}
 const notifyOk = () => {

    toast.success("Correo enviado con exito.", {
      position: toast.POSITION.TOP_RIGHT
    });

 }
 
 const notifyFail = () => {


  toast.error("Error al enviar el correo, intentelo mas tarde.", {
    position: toast.POSITION.TOP_LEFT
  });
}

  const Contacto = () => {
  const form = useRef()
  const navigate = useNavigate()
  const showPass = () => {
    const input = document.getElementById('pass');
    input.type = input.type === "password" ? "text" : "password";

  }
  const SendEmail = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate('/')
    }, 3000)
    emailjs.sendForm('service_wsabdxf', 'template_aoovj0s', form.current, 'eXlG75zWKkoDql6oH')
      .then((result) => {
        notifyOk()
      },(error) => {
        notifyFail()
      });
  };
  return (
    <>
    <Navbar2/>
    <div className='contactoContainer'>
      <div className='contactFlex'>
      <Link to="/" ><button  className='volverButton'>Volver al Inicio</button></Link>
      </div>
      <ToastContainer/>
      <div className='contactoTitulo'>
        <h1 className='titleForm' style={{cursor: "default"}}> LOG IN <br/><br/><span className='spanForm'>Ingresa tus datos para iniciar sesion.</span></h1>
      </div>
      <br />
      <div className='formContainer'>
            <form ref={form} className='formulario' onSubmit={SendEmail}>
              <label className='labelContainer'>
                <hr style={{marginBottom: 20 , height:2}} className='homeDivisor'></hr>
                
                <p>Correo electronico: </p> 
                <input className='inputEmail' type="email" name='email' placeholder='Ingrese su correo electronico' required size={50}/>
                <br />     
                <br /> 
                <p>Contraseña</p>
                <div className='passwordContainer'>
                  <input id='pass' className='inputName' type="password" name="phone" placeholder='contraseña' required size={50}/>   
                  <p onClick={showPass}>Mostrar</p>
                </div> 

                <br />
                <br />     
               
                <div className='g-recaptcha'>
                  <ReCAPTCHA sitekey="6LdJNOQnAAAAAF728CQrfqlKxVU4ht9bOM_Wmq_a" required onChange={onChange}/>
                </div>
                <br />
                <div className='buttonContainer'>
                <NavLink to="/" spy={true} smooth={true} offstet={50} duration={500}><input className='formButton' type="submit" name='Enviar' value="Enviar mensaje" /></NavLink>
                </div>
                <hr style={{marginTop: 20 , height:2 }} className='homeDivisor'></hr>
              </label>
            </form>
      </div>
    </div>
    <Footer2/>
    </>
    
  )
}

export default Contacto
