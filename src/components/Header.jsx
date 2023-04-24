import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
{
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>}
import './css/Header.css'
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const [ismodalopen,setIsModalOpen]=useState(false)
  const Close = (<CloseIcon/>) 
  return (
 
    <div className='quoraheader'>


    <div className='quoracontent'>
        <div className='quoralogo'>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-d049946241e53481209a8938b70321e0" alt="Logo" />
            </div>
        <div className='quoraicons'>
            <div className='quoraicon'><HomeIcon/></div>
            <div className='quoraicon'><FeaturedPlayListIcon/></div>
            <div className='quoraicon'><AssignmentTurnedInIcon/></div>
            <div className='quoraicon'><PeopleAltIcon/></div>
            <div className='quoraicon'><NotificationsNoneIcon/></div>
        </div>

        <div className='quorasearch'>
            <SearchIcon/>
            <input type="text" placeholder='Search' />
        </div>
        
        <button  className='quoraavatar ' onClick={()=>setIsModalOpen(true)} ><AccountCircleIcon/></button>
        <Modal className='mod'
        open={ismodalopen}
        close={Close} onClose={()=>setIsModalOpen(false)}
        closeOnEsc
        center
        >
       <form>
        <h2>Login</h2>
  <div class="mb-3 inputbox">
    <label for="exampleInputEmail1" class="form-label">Email:</label><br />
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 inputbox">
    <label for="exampleInputPassword1" class="form-label">Password:</label><br />
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary btnsub">Submit</button>
</form>
          
        </Modal>
      <div>
      <button onClick={handleOpen} className='headerbtn'><h5>Add Question</h5></button>
      <div>
    
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box  sx={style}>

        <div className='que'>

        <p className="modal-modal-title">
          Add Question
        </p>
        <p className="modal-modal-title2">
Create Post        </p>
        </div>
        <input className='inp' type="text" placeholder='Write your Question?' />

      <button className='btns'>Post Question</button>

      </Box>
    </Modal>








    

  </div>
    </div>
    </div>
    </div>
  )}

export default Header