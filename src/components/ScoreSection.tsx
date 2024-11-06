'use client'

import Image from 'next/image'
import { Bebas_Neue, Nunito_Sans } from 'next/font/google'
import { motion } from 'framer-motion'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const scoreItems = [
  {
    icon: "/assets/Safe.png",
    text: "Add money"
  },
  {
    icon: "/assets/Wallet.png",
    text: "Direct debit"
  },
  {
    icon: "/assets/Calender.png",
    text: "Automate payments"
  },
  {
    icon: "/assets/Card.png",
    text: "Improve credit score"
  }
]

export default function ScoreSection() {
  return (
    <section id="score" className="w-full py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-32">
        {/* Heading */}
        <motion.h2 
          className={`${bebasNeue.className} text-4xl md:text-5xl lg:text-7xl text-white mb-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          CRDX Score
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          className={`${nunitoSans.className} text-lg md:text-xl text-white mb-16`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          CRDX helps you improve your credit score without any additional effort!
        </motion.p>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {scoreItems.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              {/* Icon */}
              <div className="relative w-24 h-24 mb-6">
                <Image
                  src={item.icon}
                  alt={item.text}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Card */}
              <div 
                className="w-full p-4 rounded-xl text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(217, 217, 217, 0.37) 0%, rgba(115, 115, 115, 0) 100%)',
                  backdropFilter: 'blur(75px)'
                }}
              >
                <span className={`${bebasNeue.className} text-white text-xl`}>
                  {item.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 