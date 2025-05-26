import React, { useEffect, useState } from 'react'

const MemoryFragments = () => {
  const [fragments, setFragments] = useState([])

  const memoryTexts = [
    "MEMORY LEAK: Three-breasted woman at the bar...",
    "FRAGMENT: 'Get your ass to Mars'...",
    "RECALL: Kuato says 'Open your mind'...",
    "MEMORY: Melina's kiss in the reactor...",
    "FRAGMENT: Cohaagen's oxygen shutdown...",
    "RECALL: 'Consider that a divorce'...",
    "MEMORY: Benny's taxi betrayal...",
    "FRAGMENT: Mutant resistance hideout...",
    "RECALL: Dr. Edgemar's red pill...",
    "MEMORY: Lori's martial arts attack...",
    "FRAGMENT: 'Two weeks... two weeks'...",
    "RECALL: Venusville red light district...",
    "MEMORY: Hauser's video message...",
    "FRAGMENT: Thumbprint scanner malfunction...",
    "RECALL: 'See you at the party, Richter'...",
    "MEMORY: Mars atmosphere processor...",
    "FRAGMENT: Johnny Cab malfunction...",
    "RECALL: 'I'll be back' - wrong movie...",
    "MEMORY: Subway chase through tunnels...",
    "FRAGMENT: Quaid's construction job...",
    "RECALL: 'Screw you, Benny!'...",
    "MEMORY: Mars Colony administrator office...",
    "FRAGMENT: Richter's pursuit obsession...",
    "RECALL: 'Start the reactor, free Mars'..."
  ]

  useEffect(() => {
    const showRandomFragment = () => {
      const fragment = {
        id: Date.now(),
        text: memoryTexts[Math.floor(Math.random() * memoryTexts.length)],
        top: Math.random() * 60 + 15, // 15% to 75% from top
        left: Math.random() * 60 + 15, // 15% to 75% from left
        type: Math.random() < 0.3 ? 'urgent' : 'normal' // 30% chance for urgent style
      }

      setFragments(prev => [...prev, fragment])

      // Remove fragment after animation
      setTimeout(() => {
        setFragments(prev => prev.filter(f => f.id !== fragment.id))
      }, 3000)
    }

    // Show fragment every 8-15 seconds
    const interval = setInterval(() => {
      if (Math.random() < 0.6) { // 60% chance
        showRandomFragment()
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {fragments.map(fragment => (
        <div
          key={fragment.id}
          className={`memory-fragment ${fragment.type === 'urgent' ? 'urgent' : ''}`}
          style={{
            top: `${fragment.top}%`,
            left: `${fragment.left}%`
          }}
        >
          {fragment.text}
        </div>
      ))}
    </>
  )
}

export default MemoryFragments 