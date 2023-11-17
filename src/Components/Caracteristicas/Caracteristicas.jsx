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
                  <h1 className='s1'>PUSH NOTIFICATIONS</h1>
                  <p className='t1'>Earn money from your website, blog or other traffic source. Our push technology does not replace any of your current ad units. It's almost like you are earning daily income in the background with out anyone even knowing.</p>
                </div>
                <div className='boxContainer'> 
                  <h1 className='s1'>LEAD GENERATION</h1>
                  <p className='t1'>We deliver successful campaigns across multiple business sectors including surveys, market research, debt, payday, insurance, business opportunity, education, credit repair, health & beauty and more.</p>
                </div>
                <div className='boxContainer'> 
                  <h1 className='s1'>EMAIL MARKETING</h1>
                  <p className='t1'>Communicate one on one with potential consumers using this highly scalable and cost-effective solution. With data driven targeting and analytics, enjoy leading deliverability and high open email and response rates.</p>
                </div>
                <div className='boxContainer'> 
                  <h1 className='s1'>SURVEY</h1>
                  <p className='t1'>Top EPC Nutra & eCommerce Survey for Email and SMS.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Caracteristicas