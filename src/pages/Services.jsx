import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Secret Agent",
      duration: "2 weeks",
      price: "₹15,000",
      description: "Live the life of an international spy with dangerous missions, exotic locations, and cutting-edge gadgets.",
      features: [
        "High-stakes missions",
        "Advanced combat training memories",
        "Exotic international locations",
        "State-of-the-art spy gadgets",
        "Romantic encounters"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Mars Vacation",
      duration: "1 week",
      price: "₹12,000",
      description: "Experience the red planet like never before. Explore Martian landscapes and futuristic colonies.",
      features: [
        "Martian landscape exploration",
        "Zero gravity experiences",
        "Futuristic colony life",
        "Alien artifact discoveries",
        "Space travel memories"
      ],
      popular: false
    },
    {
      id: 3,
      title: "Celebrity Lifestyle",
      duration: "1 month",
      price: "₹25,000",
      description: "Live as a world-famous celebrity with all the glamour, fame, and luxury you've ever dreamed of.",
      features: [
        "Red carpet events",
        "Luxury lifestyle",
        "Adoring fans",
        "Private jets and yachts",
        "Award ceremonies"
      ],
      popular: false
    },
    {
      id: 4,
      title: "Historical Adventure",
      duration: "3 weeks",
      price: "₹18,000",
      description: "Travel back in time and experience pivotal moments in history as if you were really there.",
      features: [
        "Ancient civilizations",
        "Historical battles",
        "Meet famous figures",
        "Cultural immersion",
        "Archaeological discoveries"
      ],
      popular: false
    },
    {
      id: 5,
      title: "Superhero Experience",
      duration: "10 days",
      price: "₹20,000",
      description: "Gain superpowers and save the world as your favorite superhero in this action-packed adventure.",
      features: [
        "Superhuman abilities",
        "Save the world missions",
        "Epic battles",
        "Secret identity",
        "Heroic recognition"
      ],
      popular: true
    },
    {
      id: 6,
      title: "Luxury Retreat",
      duration: "2 weeks",
      price: "₹10,000",
      description: "Relax and unwind in the most luxurious resorts and spas across the galaxy.",
      features: [
        "5-star accommodations",
        "Spa treatments",
        "Gourmet dining",
        "Private beaches",
        "Personal butler service"
      ],
      popular: false
    }
  ]

  return (
    <div className="services">
      <div className="container">
        <div className="services-header fade-in">
          <h1 className="page-title glow-text glitch" data-text="OUR SERVICES">
            OUR SERVICES
          </h1>
          <p className="page-subtitle">
            Choose from our premium collection of memory experiences. Each package is carefully crafted 
            to provide the most authentic and thrilling adventures possible.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card neon-border ${service.popular ? 'popular' : ''}`}>
              {service.popular && <div className="popular-badge">Most Popular</div>}
              <div className="service-header">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-meta">
                  <span className="duration">{service.duration}</span>
                  <span className="price">{service.price}</span>
                </div>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to="/booking" className="retro-button service-button">
                Book This Experience
              </Link>
            </div>
          ))}
        </div>

        <div className="services-info">
          <div className="info-section neon-border">
            <h3>How It Works</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>Consultation</h4>
                  <p>Meet with our memory specialists to discuss your desired experience and customize details.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>Preparation</h4>
                  <p>Our technicians prepare the memory implant based on your specifications and preferences.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>Implantation</h4>
                  <p>The memory is safely implanted using our advanced neural interface technology.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h4>Experience</h4>
                  <p>Wake up with vivid memories of your chosen adventure, indistinguishable from reality.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="safety-info neon-border">
            <h3>Safety & Guarantees</h3>
            <ul>
              <li>✓ 99.9% success rate with zero permanent side effects</li>
              <li>✓ FDA-approved neural interface technology</li>
              <li>✓ 24/7 medical monitoring during procedures</li>
              <li>✓ Full memory integration guarantee</li>
              <li>✓ Optional memory removal service available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 