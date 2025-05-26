import React from 'react'
import './About.css'

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Edgemar",
      position: "Chief Memory Architect",
      bio: "Pioneer in neural interface technology with over 20 years of experience in memory manipulation and consciousness research.",
      specialization: "Memory Implantation"
    },
    {
      name: "Dr. Lull",
      position: "Director of Operations",
      bio: "Former neurosurgeon turned memory specialist, ensuring the highest safety standards in all procedures.",
      specialization: "Neural Safety"
    },
    {
      name: "McClane",
      position: "Experience Designer",
      bio: "Creative director responsible for crafting immersive and believable memory experiences across all service categories.",
      specialization: "Experience Crafting"
    },
    {
      name: "Quaid",
      position: "Quality Assurance",
      bio: "Former test subject turned quality controller, ensuring every memory implant meets our exacting standards.",
      specialization: "Memory Validation"
    }
  ]

  return (
    <div className="about">
      <div className="container">
        <div className="about-header fade-in">
          <h1 className="page-title glow-text glitch" data-text="ABOUT REKALL">
            ABOUT REKALL
          </h1>
          <p className="page-subtitle">
            Leading the future of human experience through advanced memory implantation technology.
          </p>
        </div>

        <section className="company-story">
          <div className="story-content neon-border">
            <h2 className="section-title glow-text">Our Story</h2>
            <div className="story-text">
              <p>
                Founded in 2084, Rekall Corporation emerged from the visionary work of Dr. Edgemar and his team 
                of neuroscientists who believed that human experience shouldn't be limited by physical, financial, 
                or temporal constraints. What started as a small research facility has grown into the galaxy's 
                premier memory implantation service.
              </p>
              <p>
                Our breakthrough came with the development of the Neural Interface Matrix (NIM), a revolutionary 
                technology that allows us to seamlessly integrate artificial memories into the human consciousness. 
                These memories are so detailed and authentic that they become indistinguishable from real experiences.
              </p>
              <p>
                Today, Rekall serves thousands of clients across the solar system, from Mars colonies to Earth's 
                megacities, providing them with the experiences they've always dreamed of but never had the 
                opportunity to live.
              </p>
            </div>
          </div>
        </section>

        <section className="technology">
          <h2 className="section-title glow-text">Our Technology</h2>
          <div className="tech-grid">
            <div className="tech-card neon-border">
              <div className="tech-icon">🧠</div>
              <h3>Neural Interface Matrix</h3>
              <p>
                Our proprietary NIM technology creates a direct interface with the brain's memory centers, 
                allowing for precise implantation of complex memory structures.
              </p>
            </div>
            <div className="tech-card neon-border">
              <div className="tech-icon">⚡</div>
              <h3>Quantum Memory Processing</h3>
              <p>
                Advanced quantum computers generate incredibly detailed memory experiences with full 
                sensory data, emotional responses, and contextual information.
              </p>
            </div>
            <div className="tech-card neon-border">
              <div className="tech-icon">🔬</div>
              <h3>Synaptic Integration</h3>
              <p>
                Our patented synaptic integration process ensures that implanted memories form natural 
                connections with existing neural pathways.
              </p>
            </div>
            <div className="tech-card neon-border">
              <div className="tech-icon">🛡️</div>
              <h3>Memory Validation</h3>
              <p>
                Every memory undergoes rigorous testing to ensure authenticity, consistency, and 
                psychological safety before implantation.
              </p>
            </div>
          </div>
        </section>

        <section className="team">
          <h2 className="section-title glow-text">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card neon-border">
                <div className="member-avatar">
                  <div className="avatar-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-specialization">
                    <span>Specialization: {member.specialization}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mission">
          <div className="mission-content neon-border">
            <h2 className="section-title glow-text">Our Mission</h2>
            <div className="mission-text">
              <blockquote>
                "To democratize human experience by making any adventure, any life, any dream accessible 
                to everyone, regardless of their circumstances. We believe that memories shape who we are, 
                and everyone deserves to have the memories they desire."
              </blockquote>
              <cite>- Dr. Edgemar, Founder & CEO</cite>
            </div>
          </div>
        </section>

        <section className="stats">
          <h2 className="section-title glow-text">By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number glow-text">50,000+</div>
              <div className="stat-label">Successful Procedures</div>
            </div>
            <div className="stat-card">
              <div className="stat-number glow-text">99.9%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number glow-text">15</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number glow-text">200+</div>
              <div className="stat-label">Experience Categories</div>
            </div>
          </div>
        </section>

        <section className="certifications">
          <h2 className="section-title glow-text">Certifications & Safety</h2>
          <div className="cert-content">
            <div className="cert-list">
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>FDA Approved Neural Interface Technology</span>
              </div>
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>ISO 9001:2084 Quality Management Certification</span>
              </div>
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>Galactic Medical Council Accreditation</span>
              </div>
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>Neural Safety Institute Compliance</span>
              </div>
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>Memory Ethics Board Approval</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 