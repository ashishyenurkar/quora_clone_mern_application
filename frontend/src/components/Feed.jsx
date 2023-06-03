import React, { useEffect, useState } from 'react'
import QuoraBox from './QuoraBox'
import "./css/Feed.css"
import Post from './Post'
import axios from 'axios'
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
       
        setPosts(res.data.reverse((a,b)=>{return a-b}));
      }).catch((e) =>{
      console.log(e)
    })
  },[])
  return (
      <div className='feed'>
      <QuoraBox />
      {
        posts.map((post, i) => (
          <Post key={i} post={post} />
        )
        )
      }
          {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post/> */}
    </div>
  )
}

export default Feed