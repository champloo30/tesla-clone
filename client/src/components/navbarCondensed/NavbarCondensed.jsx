import React from 'react'
import './navbar.scss'
import Logo from '../../assets/tesla-logo.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-container">
        <div className="left">
          <a href="/"><img className='tesla' src={Logo} alt="" /></a>
        </div>
        <div className="right">
          <span>US</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar