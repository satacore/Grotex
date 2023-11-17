import React from 'react'
import './Caracteristicas.css'

const Caracteristicas = () => {
  return (
    <div className='CaracteristicasContainer'>
        <div id='Caracteristicas' className='generalTextContainer'>
          <div className='titleContainer'>
            <p className='p1'>CARACTERÍSTICAS</p>
              <div className='cardContainer'>
                <div className='boxContainer'> 
                  <h1 className='s1'>SOCIAL MEDIA *</h1>
                  <p className='t1'>Estrategia integral para redes: Instagram, Facebook, Tik Tok, Linkedin, Youtube.</p>
                </div>
                <div className='boxContainer'> 
                  <h1 className='s1'>ADWORDS *</h1>
                  <p className='t1'>Pauta en Google. Obtención de ventas y leads. Search, Google shopping, Display y Remarketing.</p>
                </div>
                <div className='boxContainer'> 
                  <h1 className='s1'>SEO *</h1>
                  <p className='t1'>Fomentar y mejorar el posicionamiento orgánico de tu web. Blog, alt, kw, términos de búsqueda.</p>
                </div>
              </div>
              <div className='cardContainer'>
                <div className='boxContainer'> 
                  <h1 className='s1'>EMAIL MKT *</h1>
                  <p className='t1'>Campañas inteligentes de Email mkt para crear vínculos sólidos con los consumidores.</p>
                </div>
                <div className='boxContainer'> 
                  <h1 className='s1'>MERCADO LIBRE *</h1>
                  <p className='t1'>Somos Mercado Libre Partners. Desarrollamos estrategias integrales para crecer en ventas.</p>
                </div>
                <div className='boxContainer'> 
                  <h1 className='s1'>ECOMMERCE *</h1>
                  <p className='t1'>Diseño, maquetado y programación de ecommerce. Desarrollos en diferentes plataformas.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Caracteristicas