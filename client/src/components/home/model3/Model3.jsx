import { KeyboardArrowDown } from '@mui/icons-material'
import React from 'react'
import './model3.scss'

function Model3() {
  return (
    <div id='3' className='model-3'>
      <div className="model-3-container">
        <div className="top">
          <h1>Model 3</h1>
          <p>Leasing starting at $349/mo</p>
        </div>
        <div className="bottom">
          <div className="btns">
            <button className="btn co">Custom Order</button>
            <button className="btn dd">Demo Drive</button>
          </div>
          <KeyboardArrowDown sx={{color: '#424242', fontSize: 35, cursor: 'pointer'}} />
        </div>
      </div>
    </div>
  )
}

export default Model3