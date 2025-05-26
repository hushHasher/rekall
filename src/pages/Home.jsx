import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background scanlines"></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title glow-text glitch" data-text="WELCOME TO REKALL">
              WELCOME TO REKALL
            </h1>
            <p className="hero-subtitle">
              The future of memory is here. Experience adventures beyond your wildest dreams.
            </p>
            <p className="hero-description">
              At Rekall, we specialize in memory implants that are so real, you'll never know the difference. 
              Whether you want to be a secret agent, explore alien worlds, or live a life of luxury, 
              we can make it happen.
            </p>
            <div className="hero-buttons">
              <Link to="/booking" className="retro-button primary">
                Book Your Experience
              </Link>
              <Link to="/services" className="retro-button secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title glow-text">Why Choose Rekall?</h2>
          <div className="features-grid">
            <div className="feature-card neon-border">
              <div className="feature-icon">🧠</div>
              <h3>Advanced Technology</h3>
              <p>State-of-the-art memory implantation technology that creates indistinguishable experiences from reality.</p>
            </div>
            <div className="feature-card neon-border">
              <div className="feature-icon">🌟</div>
              <h3>Unlimited Possibilities</h3>
              <p>From exotic vacations to thrilling adventures, live any life you can imagine in perfect detail.</p>
            </div>
            <div className="feature-card neon-border">
              <div className="feature-icon">⚡</div>
              <h3>Instant Results</h3>
              <p>Experience weeks of memories in just minutes. No travel time, no expenses, just pure experience.</p>
            </div>
            <div className="feature-card neon-border">
              <div className="feature-icon">🔒</div>
              <h3>Safe & Secure</h3>
              <p>Our procedures are completely safe with a 99.9% success rate. Your mind is in expert hands.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title glow-text">Client Experiences</h2>
          <div className="testimonials-grid">
            <div className="testimonial neon-border">
              <p>"I always wanted to climb Mount Everest, but never had the time or physical ability. 
                 Rekall made it possible. The experience was so real, I can still feel the cold wind on my face."</p>
              <cite>- Sarah Chen, Mars Colony Engineer</cite>
            </div>
            <div className="testimonial neon-border">
              <p>"Being a secret agent for two weeks was the most thrilling experience of my life. 
                 The attention to detail was incredible - I remember every mission, every gadget."</p>
              <cite>- Marcus Rodriguez, Corporate Executive</cite>
            </div>
            <div className="testimonial neon-border">
              <p>"I lived as a famous musician for a month. The concerts, the fans, the creative process - 
                 it felt completely authentic. Rekall gave me the life I always dreamed of."</p>
              <cite>- Elena Volkov, Data Analyst</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="glow-text">Ready to Live Your Dreams?</h2>
            <p>Don't let reality limit your experiences. Book your Rekall session today.</p>
            <Link to="/booking" className="retro-button large">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 