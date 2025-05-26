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
    return location.pathname === path
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="rekall-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#ff0040", stopOpacity:1}} />
                    <stop offset="50%" style={{stopColor:"#00d4ff", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#ff0040", stopOpacity:1}} />
                  </linearGradient>
                  <filter id="logo-glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Rekall "R" shape */}
                <path d="M8 6L8 34L12 34L12 22L20 22L24 34L28 34L23 21C26 20 28 17 28 13C28 8 25 6 20 6L8 6Z M12 10L20 10C22 10 24 11 24 13C24 15 22 16 20 16L12 16L12 10Z" 
                      fill="url(#rekall-logo-gradient)" 
                      filter="url(#logo-glow)" />
                
                {/* Neural circuit lines */}
                <path d="M30 8L35 8M30 12L35 12M30 16L35 16M30 20L35 20M30 24L35 24M30 28L35 28M30 32L35 32" 
                      stroke="url(#rekall-logo-gradient)" 
                      strokeWidth="1" 
                      opacity="0.6" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="company-name glitch" data-text="REKALL">REKALL</span>
              <span className="tagline">We Can Remember It For You Wholesale</span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Memory Packages
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/faq" 
              className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/booking" 
              className={`nav-link booking-link ${isActive('/booking') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>

          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
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