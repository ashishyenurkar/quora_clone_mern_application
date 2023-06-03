import { Avatar } from '@mui/material'
import React from 'react'
import "./css/QuoraBox.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'
function QuoraBox() {
  const user = useSelector(selectUser)
  return (
      <div className='quoraBox'>
          <div className='quoraBox__info'>
              <Avatar src={user?.photo}/>
          </div>
          <div className='quoraBox__quora'><h5>What is your question or link?</h5></div>
      </div>  
    //   parent div
  )
}

export default QuoraBox