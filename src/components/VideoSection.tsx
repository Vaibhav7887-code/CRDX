'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion'

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    ["inset(30% 30% 30% 30%)", "inset(0% 0% 0% 0%)"],
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
            <source src="/assets/CrdxFinalAnimVideo.webm" type="video/webm" />
          </video>
        </motion.div>
      </motion.div>
    </section>
  )
}
