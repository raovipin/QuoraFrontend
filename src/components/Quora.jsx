import React from 'react'
import Header from './Header'
import Spaces from './Spaces'
import Post from './Post'
import Advertisment from './Advertisment'
import './css/Quora.css'

const Quora = () => {
  return (
    <div className='Quora'>
     
     <Header/>
     <div className ='quoracontents'>
     <div className='quoracontenter'>
      <Spaces/>
      <Post/>
      <Advertisment/>
     </div></div>
    </div>
  )
}

export default Quora
