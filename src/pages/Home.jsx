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
              We Can Remember It For You Wholesale
            </p>
            <p className="hero-description">
              At Rekall, we specialize in memory implants that are so real, you'll never know the difference. 
              Whether you want to be a secret agent, take a trip to Mars, or live any fantasy you can imagine, 
              we can make it happen. Why settle for the life you have when you can have the life you want?
            </p>
            <div className="hero-buttons">
              <Link to="/booking" className="retro-button primary large">
                Book Your Memory
              </Link>
              <Link to="/services" className="retro-button secondary large">
                View Packages
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
              <h3>Indistinguishable From Reality</h3>
              <p>Our advanced neural implantation technology creates memories so vivid and detailed that they feel completely real.</p>
            </div>
            <div className="feature-card neon-border">
              <div className="feature-icon">🌟</div>
              <h3>Any Experience Possible</h3>
              <p>From dangerous spy missions to exotic alien worlds, live any adventure you can dream of.</p>
            </div>
            <div className="feature-card neon-border">
              <div className="feature-icon">⚡</div>
              <h3>Quick & Easy</h3>
              <p>Experience weeks of memories in just a few hours. No travel, no danger, just pure experience.</p>
            </div>
            <div className="feature-card neon-border">
              <div className="feature-icon">🔒</div>
              <h3>Completely Safe</h3>
              <p>Our procedures are 100% safe with no side effects. Dr. Edgemar and our team ensure your safety.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title glow-text">Client Experiences</h2>
          <div className="testimonials-grid">
            <div className="testimonial neon-border">
              <p>"I always wanted to be a secret agent, but I'm just a construction worker. 
                 Rekall made it possible. The memories are so real - I can remember every mission, 
                 every beautiful woman, every dangerous moment."</p>
              <cite>- Douglas Q., Construction Worker</cite>
            </div>
            <div className="testimonial neon-border">
              <p>"My trip to Mars was incredible! I remember the red landscape, the underground cities, 
                 even the three-breasted woman at the bar. It felt completely authentic."</p>
              <cite>- Anonymous Client</cite>
            </div>
            <div className="testimonial neon-border">
              <p>"The ego trip package was amazing. For one week, I was the most important person 
                 in the world. Everyone knew my name, everyone wanted to meet me. Absolutely perfect."</p>
              <cite>- M. Rodriguez, Office Worker</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="glow-text">Ready to Live Your Dreams?</h2>
            <p>Don't let reality limit your experiences. At Rekall, we can remember it for you wholesale.</p>
            <Link to="/booking" className="retro-button large">
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 