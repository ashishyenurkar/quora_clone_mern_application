import React, { useState } from 'react'
import "./css/Post.css"
import { Avatar } from '@mui/material'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Modal from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Post() {
    const [isModelOpen, setIsModalOpen] = useState(false);
    const Close = (<CloseIcon />);
  return (
      <div className='post'>
          <div className='post__info'>
              <Avatar />
              <h4>User Name</h4>
              <small>TimeStamp</small>
          </div>
          <div className='post__body'>
              <div className='post__question'>
              <p>This is Test Question</p>
                  <button onClick={() => setIsModalOpen(true)} className='post__btnAnswer'>Answers</button>
                  <Modal open={isModelOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height:"auto",
              },
            }}>
                      <div className='modal__question'>
                          <h1>This is the test Question.</h1>
                          <p>Asked by {" "}<span  className='name'>username</span> on <span className='name'>TimeStamp</span></p>
                      </div>  
                      <div className='modal__answer'>
                          <ReactQuill placeholder='Enter Your answer'/>
                      </div>
                      <div className='modal__buttons'>
                      <button className='cancle' onClick={()=>setIsModalOpen(false)}>
                cancel
              </button>
              <button type='submit' className='add'>
                Add Question
              </button>
                      </div>
                  </Modal>
                  </div>
          </div>
          <div className='post__footer'>
              <div className='post__footerAction'>
                  <ArrowUpwardOutlinedIcon />
                  <ArrowDownwardOutlinedIcon/>
                  
              </div>
              <RepeatOutlinedIcon/>
              <ChatBubbleOutlineOutlinedIcon />
              <div className='post__footerLeft'>
                  <ShareOutlinedIcon />
                  <MoreHorizOutlinedIcon/>
              </div>
          </div>
          <p style={{
              color: "rgba(0,0,0,0.5)",
              fontSize: "12px",
              fontWeight: "bold",
              margin:"10px 0",
          }}>1 Answer</p>
          <div style={{
              margin: "5px 0px 0px 0px",
              padding: "5px 0px 0px 20px",
             borderTop:"1px solid lightgray"
          }} className='post__answer'>
              <div style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  padding: "10px 5px",
                  borderTop:"1px solid lightgray",
              }} className='post-answer-container'>
                  
                  <div style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color:"#888",
                
                 
              }} className='post-answered'>
                      <Avatar />
                      <div style={{
                          margin:"0px 10px",
                      }} className='post-info'>
                          <p>Username</p>
                          <span>TimeStamp</span>
                      </div>
                  </div>
                  <div className='post-answer'>This is Test answer</div>
              </div>
          </div>
    </div>
  )
}

export default Post