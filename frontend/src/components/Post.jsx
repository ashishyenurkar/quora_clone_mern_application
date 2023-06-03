import React, { useState } from 'react'
import "./css/Post.css"
import { Avatar, dialogClasses } from '@mui/material'
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
import ReactTimeAgo from "react-time-ago";
import axios from 'axios';
import ReactHtmlParser from "html-react-parser"
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';


function LastSeen({date }) {
    return (
        <div>
            <ReactTimeAgo date={date} locale='en-US' timeStyle="round"/>
        </div>
    )
}
function Post({post}) {
    const [isModelOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const Close = (<CloseIcon />);
    const user = useSelector(selectUser)

    const handleQuill = (value) => {
        setAnswer(value);
    };
    const handleSubmit = async() => {
        if (answer.length > 0) { 
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = {
                answer: answer,
                questionId: post?._id,
                user:user,
            };
            await axios
                .post("/api/answers", body, config)
                .then((res) => {
                  
                    alert("Answer added Succesfully");
                    setIsModalOpen(false);
                    window.location.href="/"
                }).catch((e) => {
                console.log(e.message);
            })
        }
    }
  return (
      <div className='post'>
          <div className='post__info'>
              <Avatar src={post?.user?.photo} />
              <h4>{post?.user?.userName }</h4>

              <small><LastSeen date={post?.createdAt}/></small>
          </div>
          <div className='post__body'>
              <div className='post__question'>
              <p>{post?.questionName
}</p>
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
                          <h1>{ post?.questionName
}</h1>
                          <p>Asked by {" "}<span className='name'>{post?.user?.userName }</span> on <span className='name'>{ new Date(post?.createdAt).toLocaleString()}</span></p>
                      </div>  
                      <div className='modal__answer'>
                          <ReactQuill value={answer} onChange={handleQuill} placeholder='Enter Your answer'/>
                      </div>
                      <div className='modal__buttons'>
                      <button className='cancle' onClick={()=>setIsModalOpen(false)}>
                cancel
              </button>
              <button onClick={handleSubmit} type='submit' className='add'>
                Add Answer
              </button>
                      </div>
                  </Modal>
              </div>
              { <img src={post?.questionUrl} alt="questionImg" />}
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
          }}>{post?.allAnswers.length} Answers(s)</p>
          <div style={{
              margin: "5px 0px 0px 0px",
              padding: "5px 0px 0px 20px",
             borderTop:"1px solid lightgray"
          }} className='post__answer'>
              

                  {
                      post?.allAnswers?.map((_a) => (
                          <>
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
                      <Avatar src={_a?.user?.photo} />
                      <div style={{
                          margin:"0px 10px",
                      }} className='post-info'>
                          <p>{_a?.user?.userName }</p>
                                      <span><LastSeen date={_a?.createdAt} /></span>
                      </div>
                      </div>
                              <div className='post-answer'>{ReactHtmlParser( _a?.answer)}</div>
                              </div>        
                          </> 
                      ))
                 } 
                  
              
          </div>
    </div>
  )
}

export default Post