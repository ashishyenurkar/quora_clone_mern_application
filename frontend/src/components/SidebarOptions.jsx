import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import "./css/SidebarOptions.css"

function SidebarOptions() {
  return (
      <div>
          <div className='sidebarOption'>
              <img  src="https://thumbs.dreamstime.com/b/history-etched-old-paper-scroll-feather-quill-compass-30890377.jpg" alt="History" />
              <p>History</p>
          </div>
          <div className='sidebarOption'>
              <img  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
              <p>Business</p>
          </div>
          <div className='sidebarOption' >
              <img src=".\src\assets\psychoimg.jfif" alt="" />
              <p>Psychology</p>
          </div>
          <div className='sidebarOption'>
              <img  src=".\src\assets\cooking.jfif" alt="" />
              <p>Cooking</p>
          </div>
          <div className='sidebarOption'>
              <img  src=".\src\assets\music.jfif" alt="" />
              <p>Music</p>
          </div>
          <div className='sidebarOption'>
              <img  src=".\src\assets\science.jfif" alt="" />
              <p>Science</p>
          </div>
          <div className='sidebarOption' >
              <img src=".\src\assets\health.jfif" alt="" />
              <p>Health</p>
          </div>
          <div className='sidebarOption'>
              <img  src=".\src\assets\movies.jfif" alt="" />
              <p>Movies</p>
          </div>
          <div className='sidebarOption'>
              <img  src=".\src\assets\technologies.jfif" alt="" />
              <p>Technologies</p>
          </div>
          <div className='sidebarOption'>
              <img  src=".\src\assets\education.jfif" alt="" />
              <p>Education</p>
          </div>
          <div className='sidebarOption' >
              {/* <img src="" alt="" /> */}
              <AddIcon/>
              <p>Discover Spaces</p>
          </div>
    </div>
  )
}

export default SidebarOptions