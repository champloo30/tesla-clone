import React from 'react'
import './modelX.scss'

function ModelX() {
  return (
    <div id='3' className='model-X'>
      <div className="model-X-container">
        <div className="top">
          <h1>Model X</h1>
          <a href="/" className='dd-link'>Schedule a Demo Drive</a>
        </div>
        <div className="bottom">
          <div className="btns">
            <button className="btn co">Custom Order</button>
            <button className="btn vi">View Inventory</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelX