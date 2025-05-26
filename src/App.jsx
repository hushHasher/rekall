import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Booking from './pages/Booking'
import FAQ from './pages/FAQ'
import ParticleSystem from './components/ParticleSystem'
import KonamiCode from './components/KonamiCode'
import GlitchToggle from './components/GlitchToggle'
import MemoryFragments from './components/MemoryFragments'
import './App.css'

function App() {
  const [glitchMode, setGlitchMode] = useState(false)
  const [konamiActivated, setKonamiActivated] = useState(false)

  const handleKonamiActivation = () => {
    setKonamiActivated(true)
    setGlitchMode(true)
    setTimeout(() => setKonamiActivated(false), 3000)
  }

  return (
    <Router>
      <div className={`App ${glitchMode ? 'glitch-mode' : ''}`}>
        <ParticleSystem />
        <MemoryFragments />
        <KonamiCode onActivation={handleKonamiActivation} />
        <GlitchToggle glitchMode={glitchMode} setGlitchMode={setGlitchMode} />
        
        {konamiActivated && (
          <div className="konami-notification">
            <div className="notification-content">
              <h2>NEURAL INTERFACE ACTIVATED</h2>
              <p>Welcome to the machine, Mr. Quaid...</p>
            </div>
          </div>
        )}
        
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 