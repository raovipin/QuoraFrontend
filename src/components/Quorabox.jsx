import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './css/Quorabox.css'
const Quorabox = () => {
  return (
    <div className='Quorabox'>
        <div className='Quoraboxinfo'>
    <AccountCircleIcon/>
    

        </div>
      <div className='QuoraboxQuestion'>
        <h5>What is your question?</h5>
      </div>
    </div>
  )
}

export default Quorabox
