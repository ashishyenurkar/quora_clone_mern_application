import React from 'react'
import "./css/WidgetContent.css"

function WidgetContent() {
  return (
      <div className='widget__contents'>
          <div className='widget__content'>
              <img src=".\src\assets\mobile.jfif" alt="img" />
              <div className='widget__contentTitle'>
                  <h5>Mobile App Programmer</h5>
                  <p>The best mobile Development component</p>
              </div>
          </div>
    </div>
  )
}

export default WidgetContent