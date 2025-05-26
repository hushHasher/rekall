import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Is memory implantation safe?",
      answer: "Absolutely! Our advanced neural implantation technology has been perfected over decades. Dr. Edgemar and our medical team ensure every procedure is completely safe with no permanent side effects."
    },
    {
      id: 2,
      question: "How real do the implanted memories feel?",
      answer: "The memories feel completely real because to your mind, they ARE real. Our technology creates perfect memory sequences with full sensory data, emotions, and experiences that integrate seamlessly with your existing memories."
    },
    {
      id: 3,
      question: "Can I choose specific details for my experience?",
      answer: "Yes! During your consultation, our memory architects will work with you to customize every aspect of your experience, from locations and characters to specific events and outcomes."
    },
    {
      id: 4,
      question: "How long does the procedure take?",
      answer: "The actual implantation process takes only 15-30 minutes. However, we recommend allowing 2-3 hours for the complete session including preparation, implantation, and recovery monitoring."
    },
    {
      id: 5,
      question: "Will I remember my real life during the experience?",
      answer: "Your real memories remain intact and accessible. The implanted memories integrate as additional experiences, creating a rich tapestry of both real and artificial memories."
    },
    {
      id: 6,
      question: "Can memories be removed if I don't like them?",
      answer: "Yes, we offer optional memory removal services. However, 99.7% of our clients are completely satisfied with their experiences and choose to keep their implanted memories permanently."
    },
    {
      id: 7,
      question: "Are there any age restrictions?",
      answer: "Clients must be 18 years or older. For clients over 65, we require additional medical clearance to ensure optimal neural compatibility."
    },
    {
      id: 8,
      question: "How much do the experiences cost?",
      answer: "Our experiences range from ₹10,000 to ₹25,000 depending on complexity and duration. We also offer payment plans and corporate packages for multiple sessions."
    },
    {
      id: 9,
      question: "What happens if something goes wrong?",
      answer: "Rekall Corporation carries comprehensive insurance and our medical team is trained to handle any rare complications. We've never had a serious incident in over 50,000 procedures."
    },
    {
      id: 10,
      question: "Can I share my experience with others?",
      answer: "While the memories are yours alone, we can create shared experience packages for couples or groups who want to have interconnected adventures together."
    }
  ]

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  return (
    <div className="faq">
      <div className="container">
        <div className="faq-header fade-in">
          <h1 className="page-title glow-text glitch" data-text="FREQUENTLY ASKED QUESTIONS">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="page-subtitle">
            Everything you need to know about memory implantation technology and our services.
          </p>
        </div>

        <div className="faq-content">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item neon-border ${openQuestion === faq.id ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleQuestion(faq.id)}
              >
                <span className="question-text">{faq.question}</span>
                <span className="question-icon">{openQuestion === faq.id ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact neon-border">
          <h3>Still have questions?</h3>
          <p>Our memory specialists are available 24/7 to answer any additional questions you may have.</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>1-800-REKALL-1</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>info@rekall-corp.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💬</span>
              <span>Live Chat Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ 