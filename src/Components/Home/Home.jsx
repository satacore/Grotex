import './Home.css';
import React from 'react';
import HomeLogo2 from '../../assets/HomeLogo2.png'



const Home = () => {

  return (
  <>
  <div className='generalContainer' id='top'>
    <div className='sloganContainer'>
      <h1 className='slogaSubtitle' style={{cursor: "default"}}>GROTEX</h1>
      <h1 className='slogan' style={{cursor: "default"}}>ADS</h1>
      <img className='homeImg' src={HomeLogo2} alt="" />
    </div>
  </div>
  <hr className='homeDivisor'></hr>
  </>
  )
}

export default Home