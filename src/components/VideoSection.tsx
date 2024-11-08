'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion'

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024)
      // More comprehensive iOS detection
      setIsIOS(
        ['iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      )
    }
    checkDevice()

    // Try to play video after user interaction
    const handleInteraction = () => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Video play error:", error)
          })
        }
      }
    }

    document.addEventListener('touchstart', handleInteraction)
    window.addEventListener('resize', checkDevice)

    return () => {
      document.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('resize', checkDevice)
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
            ref={videoRef}
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source 
              src={isIOS ? "/assets/CrdxFinalAnimVideoH264.mp4" : "/assets/CrdxFinalAnimVideo.mp4"} 
              type="video/mp4" 
            />
          </video>
        </motion.div>
      </motion.div>
    </section>
  )
}
