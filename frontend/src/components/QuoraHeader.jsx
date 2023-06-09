import React, { useState } from 'react'
import axios from "axios"
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, Input } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Modal from "react-responsive-modal"
import "./css/QuoraHeader.css"
import "react-responsive-modal/styles.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { logout, selectUser } from '../feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function QuoraHeader() {
  const [isModelOpen, setIsModalOpen] = useState(false);
  const Close = (<CloseIcon />);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user:user
      };
      // console.log(body)
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          // console.log(res.data)
          alert(res.data.message)
          window.location.href = '/';
        }).catch((e) => {
          console.log(e);
          alert("Error while addding a question !")
      })
    }
  }

  const handleLogout = () => {
    
   if (window.confirm("Are You sure to logout?")) {
     signOut(auth).then(() => {
         dispatch(logout());
        //  console.log("logout succesfully")
       }).catch((e) => {
       console.log(e.message)
     })
   }
 } 
  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img src="https://img.icons8.com/?size=1x&id=81255&format=png" alt="logo" />
          </div>
          <div className='qHeader__icons'>
            <div className='qHeader__icon'><HomeIcon/></div>
            <div className='qHeader__icon'><FeaturedPlayListOutlinedIcon/></div>
            <div className='qHeader__icon'><AssignmentOutlinedIcon/></div>
            <div className='qHeader__icon'><PeopleAltOutlinedIcon/></div>
            <div className='qHeader__icon'><NotificationsActiveOutlinedIcon/></div>
          </div>
          <div className='qHeader__input'>
            < SearchIcon />
            <input type='text' placeholder='Search questions'/>
          </div>
        <div className='qHeader__Rem'>
          <span onClick={handleLogout}><Avatar src={user?.photo} /></span>
          
        <Button onClick={()=>setIsModalOpen(true)}>Add Questions</Button>
        <Modal
          open={isModelOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height:"auto",
              },
            }}
        >
          <div className='modal__title'>
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className='modal__info'>
              < Avatar src={user?.photo} />
              
              <div className='modal__scope'>
                <PeopleAltOutlinedIcon />
                <p>Public</p>
                <ExpandMoreIcon/>
              </div>
            </div>
            <div className='modal__Field'>
              <Input
                onChange={(e) => setQuestion(e.target.value)}
                type='text'
                placeholder="start your question with 'What', 'How', 'Why' etc." />
              <div style={
                {
                  display: 'flex',
                  flexDirection:"column"
                }
              }>
                <input type="text"
                  value={inputUrl}
                  onChange={(e)=>setInputUrl(e.target.value)}
                  style={{
                    margin: "5px 0px",
                    border: "1px, solid lightgray",
                    padding: "10px",
                    outline:"2px solid #000",
                  }}
                  placeholder='Optional: include a link that gives context' />
                {inputUrl !== "" && <img style={{
                  height: "20vh",
                  objectFit:"contain"
                }} src={inputUrl} alt="displayImage" />
                  
                }
                
              </div>
            </div>
            <div className='modal__buttons'>
              <button className='cancle' onClick={()=>setIsModalOpen(false)}>
                cancel
              </button>
              <button onClick={handleSubmit} type='submit' className='add'>
                Add Question
              </button>
            </div>
        </Modal>
        

      </div>
      </div>
    </div>
  )
}

export default QuoraHeader