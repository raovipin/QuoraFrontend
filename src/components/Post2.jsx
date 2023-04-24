import React, { useState } from 'react'
import './css/Post2.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowUpwardOutlined from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlined from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import Modal from 'react-responsive-modal';
// import CloseIcon from '@mui/icons-material/Close';
const Post2 = () => {
 
  return (
    <div className='Post2'>
      <div className='Post2info'>
        <AccountCircleIcon/>
        <h4>UserName</h4>
        <small>10sec ago</small>
      </div>

      <div className='post2body'>
        <span className='post2question'>
            What is this? </span>
            <button  className='post2ansbtn '  >Answer </button>
     
      </div>
     
      <div className='post2footer'>
        <div className='postfooters'>
                <ArrowUpwardOutlined/>
                <ArrowDownwardOutlined/>
        </div>
        <RepeatIcon/>
        <ChatBubbleOutlineIcon/>
        <div className='postfooterleft'>
            <ShareIcon/>
            <MoreHorizIcon/>
        </div>
      </div>

      <p style={{color:"rgba(0,0,0,0.5)",fontSize:"12px",fontWeight:"bold",margin:"10px 0"}} className='noofans'>1 Answer</p>



      <div  style= {{margin:"5px 0px 0px 0px 0px",borderTop:"1px solid lightgray",}} className='post2answer'>



        <div style={{display:"flex",flexDirection:"column",width:"100%",padding:"10px 5px",borderTop:"1px solid lightgray"}} className='post2answercontainer'>


            <div style={{display:"flex",alignItems:"center",marginBottom:"10px",fontSize:"12px",fontWeight:"600",color:"#888"}} 
            className='post2answered'>

            <AccountCircleIcon/>

            <div style={{margin:"0px 10px",}} className='post2infos' >
                <p className='username'>
                    Username
                </p>
                <span className='nooffans'>1min</span>
            </div>
            </div>
            <div className='post2ans'> This is what</div>
        </div>
      </div>
    </div>
  )
}

export default Post2
