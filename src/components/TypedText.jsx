import React, { useState, useEffect } from 'react'

const TypedText = ({ strings, typeSpeed = 100, backSpeed = 50, loop = true }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentString = strings[currentStringIndex]
      
      if (isDeleting) {
        setCurrentText(currentString.substring(0, currentText.length - 1))
      } else {
        setCurrentText(currentString.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentStringIndex((currentStringIndex + 1) % strings.length)
      }
    }, isDeleting ? backSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed])

  return (
    <span className="text-purple-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypedText