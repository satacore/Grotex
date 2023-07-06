import './Home.css';
import React from 'react';
import HomeLogo2 from '../../assets/HomeLogo2.png'
import Partners from '../../assets/Partners.png'



const Home = () => {

  return (
  <div className='generalContainer' id='top'>
    <div className='sloganContainer'>
      <h1 className='slogaSubtitle'>ECOMING *</h1>
      <h1 className='slogan'>AGENCY</h1>
      <img className='partnerImg' src={Partners} alt="" />
      <img className='homeImg' src={HomeLogo2} alt="" />
    </div>
  </div>
  )
}

export default Home