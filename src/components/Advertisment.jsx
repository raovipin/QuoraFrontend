import React from 'react'
import './css/Advertisment.css'
import AdvertismentContent from './AdvertismentContent'
const Advertisment = () => {
  return (
    <div className='Advertisment'>
      <div className='Advertismentheader'>
        <h5>Advertisment</h5>
      </div>
      <div className='Advertismentcontent'>
        <AdvertismentContent/>
        <AdvertismentContent/>
        <AdvertismentContent/>
        <AdvertismentContent/>
      </div>
    </div>
  )
}

export default Advertisment
