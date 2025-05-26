import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Secret Agent",
      duration: "2 weeks",
      price: "$7,999",
      description: "Live the ultimate spy fantasy with dangerous missions, exotic locations, and sophisticated gadgets. Our most popular package.",
      features: [
        "International espionage missions",
        "Advanced combat training memories",
        "Exotic locations worldwide",
        "High-tech spy equipment",
        "Beautiful women and dangerous encounters"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Mars Vacation",
      duration: "2 weeks",
      price: "$8,999",
      description: "Experience the red planet like a true colonist. Explore the Martian landscape and underground cities of Venusville.",
      features: [
        "Mars colony exploration",
        "Venusville red-light district",
        "Martian mining operations",
        "Alien artifact discoveries",
        "Low gravity adventures"
      ],
      popular: true
    },
    {
      id: 3,
      title: "Ego Trip",
      duration: "1 week",
      price: "$5,999",
      description: "Be the most important person in the world. Experience fame, power, and adoration in this ultimate ego-boosting package.",
      features: [
        "Celebrity status",
        "Worldwide recognition",
        "Luxury lifestyle",
        "Adoring fans",
        "VIP treatment everywhere"
      ],
      popular: false
    },
    {
      id: 4,
      title: "Alien Encounter",
      duration: "1 week",
      price: "$6,999",
      description: "Make first contact with extraterrestrial life. Experience the wonder and terror of meeting beings from another world.",
      features: [
        "First contact scenarios",
        "Alien technology",
        "Interstellar travel",
        "Telepathic communication",
        "Cosmic revelations"
      ],
      popular: false
    },
    {
      id: 5,
      title: "Demure Housewife",
      duration: "1 week",
      price: "$4,999",
      description: "Experience the simple pleasures of domestic life. Perfect for those seeking peace and traditional family values.",
      features: [
        "Suburban lifestyle",
        "Family harmony",
        "Domestic bliss",
        "Community involvement",
        "Simple pleasures"
      ],
      popular: false
    },
    {
      id: 6,
      title: "Sports Hero",
      duration: "2 weeks",
      price: "$7,499",
      description: "Live the dream of athletic greatness. Experience championship victories and the roar of the crowd.",
      features: [
        "Championship victories",
        "Athletic excellence",
        "Stadium crowds",
        "Media attention",
        "Sports immortality"
      ],
      popular: false
    }
  ]

  return (
    <div className="services">
      <div className="container">
        <div className="services-header fade-in">
          <h1 className="page-title glow-text glitch" data-text="REKALL MEMORY PACKAGES">
            REKALL MEMORY PACKAGES
          </h1>
          <p className="page-subtitle">
            Choose from our carefully crafted memory experiences. Each package provides authentic memories 
            that are indistinguishable from reality. Why settle for the life you have when you can have the life you want?
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
                Book This Memory
              </Link>
            </div>
          ))}
        </div>

        <div className="services-info">
          <div className="info-section neon-border">
            <h3>The Rekall Process</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>Consultation</h4>
                  <p>Meet with Dr. Edgemar to discuss your desired memory experience and customize every detail.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>Neural Mapping</h4>
                  <p>Our technicians map your brain's memory centers using advanced scanning technology.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>Memory Implantation</h4>
                  <p>The artificial memories are carefully implanted using our proprietary neural interface.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h4>Integration</h4>
                  <p>Wake up with vivid memories of your adventure, completely integrated with your existing memories.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="safety-info neon-border">
            <h3>Safety & Guarantees</h3>
            <ul>
              <li>✓ Completely safe procedure with no side effects</li>
              <li>✓ Memories are indistinguishable from reality</li>
              <li>✓ 24/7 monitoring during the procedure</li>
              <li>✓ Full satisfaction guarantee</li>
              <li>✓ Experienced medical staff led by Dr. Edgemar</li>
              <li>✓ State-of-the-art facility with the latest technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 