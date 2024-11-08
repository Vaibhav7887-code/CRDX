'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion'

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024)
      // Check if device is iOS
      setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent))
    }
    checkDevice()

    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkDevice, 100)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    isMobile 
      ? ["inset(0% 20% 0% 20%)", "inset(0% 0% 0% 0%)"]
      : ["inset(0% 30% 0% 30%)", "inset(0% 0% 0% 0%)"],
    { ease: easeInOut }
  )

  return (
    <section 
      ref={sectionRef}
      className="relative h-[calc(100vh-80px)] lg:-mt-32 mt-25"
    >
      <motion.div 
        className="sticky top-0 w-full h-[calc(100vh-80px)] flex items-center justify-center will-change-transform"
      >
        <motion.div
          className="relative w-full h-full will-change-transform"
          style={{ clipPath }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source 
              src={isIOS ? "/assets/CrdxFinalAnimVideoIOS.mp4" : "/assets/CrdxFinalAnimVideo.mp4"} 
              type="video/mp4" 
            />
          </video>
        </motion.div>
      </motion.div>
    </section>
  )
}
