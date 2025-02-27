'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { Bebas_Neue } from 'next/font/google'
import OfferSection from '@/components/OfferSection'
import VideoSection from '@/components/VideoSection'
import CardSection from '@/components/CardSection'
import ScoreSection from '@/components/ScoreSection'
import DownloadSection from '@/components/DownloadSection'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#1A1E1C] overflow-hidden">
      <Image 
        src="/assets/PageThread.png"
        alt="Background Thread"
        fill
        className="object-cover object-top opacity-50"
        style={{ transform: 'scale(1)', transformOrigin: 'top' }}
        priority
      />
      
      <Navbar />
      
      {/* Desktop Hero - Hidden on mobile */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto px-4 md:px-8 lg:px-32 min-h-screen items-center">
        <div className="flex flex-row gap-0">
          {/* Left Content */}
          <motion.div 
            className="max-w-[600px] px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`${bebasNeue.className} text-7xl leading-tight text-white mb-6`}>
              Decide your own credit; control your limits!
            </h1>
            <p className="text-[#ADB2B1] text-xl leading-relaxed">
              Discover the power of our <span className="text-[#FFD700]">SECURED CREDIT CARDS WITH REWARDS</span>. 
              Explore our range of credit cards and take control of your finances today.
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="relative w-[140%] -mr-[80%] h-auto overflow-visible -mt-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Blur */}
            <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[100%] h-[200px] bg-[#979797] blur-[800px]" />
            
            {/* Phone */}
            <motion.div
              className="absolute left-[70%] -top-[10%] z-10 w-[40%]"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            >
              <Image 
                src="/assets/HeroPhone.png"
                alt="Hero Phone"
                width={1800}
                height={1800}
                priority
                className="w-full h-auto scale-150"
                unoptimized
              />
            </motion.div>

            {/* Card */}
            <motion.div
              className="absolute left-[10%] -top-[0%] z-20 w-[100%]"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            >
              <Image 
                src="/assets/HeroCard.png"
                alt="Hero Card"
                width={3000}
                height={1876}
                priority
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Hero - Hidden on desktop */}
      <div className="lg:hidden max-w-[1440px] mx-auto px-4 min-h-[calc(100vh-80px)] flex items-center">
        <div className="flex flex-col gap-8 pt-20">
          {/* Mobile Images */}
          <motion.div 
            className="relative w-full h-[260px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Blur */}
            <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[100%] h-[200px] bg-[#979797] blur-[800px]" />
            
            {/* Phone */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-[20px] z-10 w-[120px]"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            >
              <Image 
                src="/assets/HeroPhone.png"
                alt="Hero Phone"
                width={1800}
                height={1800}
                priority
                className="w-full h-auto scale-125"
                unoptimized
              />
            </motion.div>

            {/* Card */}
            <motion.div
              className="absolute left-[10%] -translate-x-1/2 top-[40px] z-20 w-[250px]"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            >
              <Image 
                src="/assets/HeroCard.png"
                alt="Hero Card"
                width={3000}
                height={1876}
                priority
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Mobile Content */}
          <motion.div 
            className="w-full px-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`${bebasNeue.className} text-3xl sm:text-4xl leading-tight text-white mb-4 text-center`}>
              Decide your own credit; control your limits!
            </h1>
            <p className="text-[#ADB2B1] text-sm sm:text-base leading-relaxed text-center">
              Discover the power of our <span className="text-[#FFD700]">SECURED CREDIT CARDS WITH REWARDS</span>. 
              Explore our range of credit cards and take control of your finances today.
            </p>
          </motion.div>
        </div>
      </div>

      <VideoSection />
      <CardSection />
      <ScoreSection />
      <OfferSection />
      <DownloadSection />
    </main>
  )
}
