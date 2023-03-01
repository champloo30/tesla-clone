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
        <div className="center">
          <ul className='center-list'>
            <li><a href="/">Model S</a></li>
            <li><a href="/">Model 3</a></li>
            <li><a href="/">Model X</a></li>
            <li><a href="/">Model Y</a></li>
            <li><a href="/">Solar Roof</a></li>
            <li><a href="/">Solar Panels</a></li>
          </ul>
        </div>
        <div className="right">
          <ul className='right-list'>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Account</a></li>
            <li><a href="/">Menu</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar