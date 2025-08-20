import { cards } from "../../src/index"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Cards = () => {
  const containerRef = useRef(null) 

  useEffect(() => {
    
    //document.body.style.overflow = 'hidden'

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
       console.log(e.clientX)
      const { innerWidth, innerHeight } = window
      
      // Normalize mouse position to -1 to 1 range
      const normalizedX = (clientX / innerWidth) * 2 - 1
      const normalizedY = (clientY / innerHeight) * 2 - 1
      
      // Calculate movement (opposite to mouse movement)
      // Much larger values to reveal images positioned at -100%
      const moveX = -normalizedX * 1000 // Large movement for revealing off-screen images
      const moveY = -normalizedY * 1000
      
      // Animate with GSAP for smooth performance
      gsap.to(container, {
        x: moveX,
        y: moveY,
        duration: 0.8,
        ease: "power2.out"
      })
    }

    // Add hover effects to all images
    const images = container.querySelectorAll('img')
    
    images.forEach((img) => {
      // Mouse enter effect - scale up and increase z-index
      img.addEventListener('mouseenter', () => {
        gsap.to(img, {
          scale: 1.15,
          zIndex: 100,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      // Mouse leave effect - scale back to normal
      img.addEventListener('mouseleave', () => {
        gsap.to(img, {
          scale: 1,
          zIndex: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      
      // Clean up hover event listeners
      images.forEach((img) => {
        img.removeEventListener('mouseenter', () => {})
        img.removeEventListener('mouseleave', () => {}) 
      })
    }
  }, [])

  // Define positions for each card
  const cardPositions = [
    // Main viewport cards (3 cards)
    { top: '20%', left: '15%' },     // Top-left in viewport
    { top: '10%', right: '20%' },    // Center-right in viewport  
    { bottom: '-5%', left: '40%' },  // Bottom-left in viewport
    
    // Left side cards (3 cards) - positioned off-screen to the left
    { top: '40%', left: '-100%' },
    { top: '70%', left: '-80%' },
    { top: '65%', left: '-20%' },

    // Right side cards (3 cards) - positioned off-screen to the right
    { top: '-10%', right: '-100%' },
    { top: '40%', right: '-20%' },
    { top: '70%', right: '-60%' },

    // Top side cards (3 cards) - positioned off-screen at the top
    { top: '-100%', left: '0%' },
    { top: '-40%', left: '40%' },
    { top: '-60%', right: '5%' },
    
    // Bottom side cards (3 cards) - positioned off-screen at the bottom
    { bottom: '-100%', left: '10%' },
    { bottom: '-55%', right: '-10%' },
    { bottom: '-60%', left: '50%' }
  ];

  return (
    <div 
      ref={containerRef}
      className="Cards absolute inset-0 z-20   "
    >
      {cards.map((card, index) => (
        <img 
          className="lg:w-[16vw] lg:h-[28vh] w-[30vw] h-[14vh] rounded-[10px] object-cover absolute z-0 shadow-lg cursor-pointer transition-shadow duration-300 hover:shadow-xl" 
          key={index} 
          src={card.src} 
          alt={card.name}
          style={{
            top: cardPositions[index]?.top,
            left: cardPositions[index]?.left,
            right: cardPositions[index]?.right,
            bottom: cardPositions[index]?.bottom,
          }}
        />
      ))}
    </div>
  )
}

export default Cards