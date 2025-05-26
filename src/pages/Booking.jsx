import React, { useState } from 'react'
import './Booking.css'

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    specialRequests: '',
    medicalHistory: '',
    emergencyContact: '',
    emergencyPhone: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { value: 'secret-agent', label: 'Secret Agent - ₹15,000' },
    { value: 'mars-vacation', label: 'Mars Vacation - ₹12,000' },
    { value: 'celebrity-lifestyle', label: 'Celebrity Lifestyle - ₹25,000' },
    { value: 'historical-adventure', label: 'Historical Adventure - ₹18,000' },
    { value: 'superhero-experience', label: 'Superhero Experience - ₹20,000' },
    { value: 'luxury-retreat', label: 'Luxury Retreat - ₹10,000' }
  ]

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Booking submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        specialRequests: '',
        medicalHistory: '',
        emergencyContact: '',
        emergencyPhone: ''
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="booking">
        <div className="container">
          <div className="booking-success fade-in">
            <div className="success-content neon-border">
              <h1 className="glow-text">Booking Confirmed!</h1>
              <p>Thank you for choosing Rekall. Your memory implantation session has been scheduled.</p>
              <p>You will receive a confirmation email shortly with detailed instructions.</p>
              <div className="success-animation">
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="booking">
      <div className="container">
        <div className="booking-header fade-in">
          <h1 className="page-title glow-text glitch" data-text="BOOK YOUR EXPERIENCE">
            BOOK YOUR EXPERIENCE
          </h1>
          <p className="page-subtitle">
            Ready to live your dreams? Fill out the form below to schedule your memory implantation session.
            Our specialists will contact you within 24 hours to confirm your appointment.
          </p>
        </div>

        <form className="booking-form neon-border" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Experience Selection</h3>
            <div className="form-group">
              <label htmlFor="service">Choose Your Experience *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="">Select an experience...</option>
                {services.map(service => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time *</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select a time...</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Additional Information</h3>
            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests or Customizations</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                className="form-textarea"
                rows="4"
                placeholder="Describe any specific details you'd like included in your memory experience..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="medicalHistory">Relevant Medical History</label>
              <textarea
                id="medicalHistory"
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleChange}
                className="form-textarea"
                rows="3"
                placeholder="Please list any medical conditions, medications, or allergies..."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="emergencyContact">Emergency Contact Name *</label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="disclaimer">
              <p>
                <strong>Important:</strong> By submitting this form, you acknowledge that you understand 
                the risks and benefits of memory implantation technology. You confirm that all information 
                provided is accurate and complete. Rekall Corporation is not responsible for any 
                psychological effects that may occur as a result of conflicting memories.
              </p>
            </div>
          </div>

          <button type="submit" className="retro-button submit-button">
            Schedule My Experience
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking 