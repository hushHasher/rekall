import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1 className="glow-text glitch" data-text="REKALL">REKALL</h1>
            <span className="tagline">We Can Remember It For You Wholesale</span>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <Link to="/" className={`nav-link ${isActive('/')}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className={`nav-link ${isActive('/services')}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className={`nav-link ${isActive('/booking')}`}>
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav-link ${isActive('/about')}`}>
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="header-scanlines scanlines"></div>
    </header>
  )
}

export default Header 