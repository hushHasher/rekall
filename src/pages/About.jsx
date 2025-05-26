import React from 'react'
import './About.css'

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Edgemar",
      position: "Chief Psychiatrist & Founder",
      bio: "Leading expert in memory implantation technology and the founder of Rekall Corporation. Dr. Edgemar has revolutionized the field of artificial memory creation.",
      specialization: "Memory Architecture"
    },
    {
      name: "Dr. Lull",
      position: "Chief Technician",
      bio: "Head of technical operations, Dr. Lull oversees all memory implantation procedures and ensures the highest quality standards.",
      specialization: "Neural Interface Technology"
    },
    {
      name: "McClane",
      position: "Memory Specialist",
      bio: "Senior memory specialist responsible for crafting detailed and believable memory experiences for our clients.",
      specialization: "Experience Design"
    },
    {
      name: "Nurse",
      position: "Medical Supervisor",
      bio: "Experienced medical professional who monitors all procedures and ensures client safety throughout the memory implantation process.",
      specialization: "Medical Safety"
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
            "We can remember it for you wholesale" - The leader in memory implantation technology.
          </p>
        </div>

        <section className="company-story">
          <div className="story-content neon-border">
            <h2 className="section-title glow-text">Our Story</h2>
            <div className="story-text">
              <p>
                Founded in the early 21st century, Rekall Corporation emerged from groundbreaking research 
                in neural science and memory manipulation. Under the visionary leadership of Dr. Edgemar, 
                we have perfected the art of creating artificial memories that are completely indistinguishable 
                from real experiences.
              </p>
              <p>
                Our revolutionary technology allows us to implant detailed, vivid memories directly into the 
                human brain. These memories include not just visual and auditory experiences, but complete 
                sensory data, emotions, and even muscle memory. The result is a perfect artificial experience 
                that feels absolutely real.
              </p>
              <p>
                Today, Rekall serves clients worldwide who want to experience adventures they could never 
                have in real life. From exotic vacations to dangerous missions, we make the impossible possible 
                through the power of artificial memory.
              </p>
            </div>
          </div>
        </section>

        <section className="technology">
          <h2 className="section-title glow-text">Our Technology</h2>
          <div className="tech-grid">
            <div className="tech-card neon-border">
              <div className="tech-icon">🧠</div>
              <h3>Neural Implantation</h3>
              <p>
                Our proprietary neural implantation technology creates direct pathways to the brain's 
                memory centers, allowing for precise insertion of artificial memories.
              </p>
            </div>
            <div className="tech-card neon-border">
              <div className="tech-icon">⚡</div>
              <h3>Memory Synthesis</h3>
              <p>
                Advanced computer systems generate incredibly detailed memory experiences with full 
                sensory data, emotional responses, and contextual information.
              </p>
            </div>
            <div className="tech-card neon-border">
              <div className="tech-icon">🔬</div>
              <h3>Brain Mapping</h3>
              <p>
                Sophisticated scanning technology maps each client's unique neural pathways to ensure 
                perfect integration of artificial memories.
              </p>
            </div>
            <div className="tech-card neon-border">
              <div className="tech-icon">🛡️</div>
              <h3>Safety Protocols</h3>
              <p>
                Comprehensive safety measures and monitoring systems ensure that every procedure is 
                completely safe with no risk of side effects.
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
                "At Rekall, we believe that everyone deserves to live their dreams. Our advanced memory 
                implantation technology makes it possible to experience any adventure, any lifestyle, 
                any fantasy - all without leaving our facility. Why settle for the mundane when you 
                can have the extraordinary?"
              </blockquote>
              <cite>- Dr. Edgemar, Founder & Chief Psychiatrist</cite>
            </div>
          </div>
        </section>

        <section className="stats">
          <h2 className="section-title glow-text">By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number glow-text">10,000+</div>
              <div className="stat-label">Successful Procedures</div>
            </div>
            <div className="stat-card">
              <div className="stat-number glow-text">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number glow-text">25+</div>
              <div className="stat-label">Years of Research</div>
            </div>
            <div className="stat-card">
              <div className="stat-number glow-text">50+</div>
              <div className="stat-label">Memory Packages</div>
            </div>
          </div>
        </section>

        <section className="certifications">
          <h2 className="section-title glow-text">Safety & Credentials</h2>
          <div className="cert-content">
            <div className="cert-list">
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>Licensed Medical Facility</span>
              </div>
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>Board Certified Psychiatrists</span>
              </div>
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>Advanced Neural Technology</span>
              </div>
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>Comprehensive Insurance Coverage</span>
              </div>
              <div className="cert-item">
                <span className="cert-badge">✓</span>
                <span>24/7 Medical Monitoring</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 