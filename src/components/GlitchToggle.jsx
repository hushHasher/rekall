import React from 'react'
import './GlitchToggle.css'

const GlitchToggle = ({ isGlitchMode, onToggle }) => {
  return (
    <div className="glitch-toggle-container">
      <button 
        className={`glitch-toggle ${isGlitchMode ? 'active' : ''}`}
        onClick={onToggle}
        title="Toggle Glitch Mode"
      >
        <span className="toggle-icon">⚡</span>
        <span className="toggle-text">GLITCH MODE</span>
      </button>
    </div>
  )
}

export default GlitchToggle 