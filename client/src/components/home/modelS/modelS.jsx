import React from 'react'
import './modelS.scss'

function ModelS() {
  return (
    <div id='3' className='model-S'>
      <div className="model-S-container">
        <div className="top">
          <h1>Model S</h1>
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

export default ModelS