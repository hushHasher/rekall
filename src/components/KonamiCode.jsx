import React, { useEffect, useState } from 'react'

const KonamiCode = ({ onActivate }) => {
  const [sequence, setSequence] = useState([])
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ]

  useEffect(() => {
    const handleKeyPress = (event) => {
      const newSequence = [...sequence, event.code].slice(-konamiCode.length)
      setSequence(newSequence)

      if (newSequence.length === konamiCode.length && 
          newSequence.every((key, index) => key === konamiCode[index])) {
        onActivate()
        setSequence([]) // Reset sequence
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [sequence, onActivate])

  return null // This component doesn't render anything
}

export default KonamiCode 