'use client'

import React from 'react'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { Bebas_Neue } from 'next/font/google'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// Update the CardInfo type to include image path
type CardInfo = {
  id: number
  name: string
  nameColor: string
  features: string[]
  image: string
}

// Update the cards array with image paths
const cards: CardInfo[] = [
  {
    id: 1,
    name: "BUILD",
    nameColor: "white",
    image: "/assets/crdxcard1.png",
    features: [
      "Add Money to start your Credit limit from £300",
      "0% interest unless you want to pay in installments in that case 29.8% representative APR (Fixed)",
      "No international fees",
      "No ATM fees",
      "£0 subscription fee"
    ]
  },
  {
    id: 2,
    name: "REPAIR",
    nameColor: "white",
    image: "/assets/crdxcard2.png",
    features: [
      "Add Money to start your Credit limit from £500",
      "0% interest unless you want to pay in installments in that case 29.8% representative APR (Fixed)",
      "No international fees",
      "No ATM fees",
      "£5 subscription fee"
    ]
  },
  {
    id: 3,
    name: "DUAL",
    nameColor: "white",
    image: "/assets/crdxcard3.png",
    features: [
      "Add Money to start your Credit limit from £500",
      "0% interest unless you want to pay in installments in that case 29.8% representative APR (Fixed)",
      "No international fees",
      "No ATM fees",
      "£15 subscription fee",
      "Gadget Insurance",
      "Purchase Protection Insurance",
      "Deals and Vouchers"
    ]
  },
  {
    id: 4,
    name: "AVANGUARD",
    nameColor: "white",
    image: "/assets/crdxcard4.png",
    features: [
      "Add Money to start your Credit limit from £500",
      "0% interest unless you want to pay in installments in that case 29.8% representative APR (Fixed)",
      "No international fees",
      "No ATM fees",
      "£25 subscription fee",
      "Travel Insurance",
      "Gadget Insurance",
      "Purchase Protection Insurance",
      "Cancellation Protection Insurance",
      "Deals and Vouchers"
    ]
  }
]

export default function CardSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [selectedCard, setSelectedCard] = useState(cards[0])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }
    
    const section = sectionRef.current
    const cardElements = document.querySelectorAll('.card-item')
    const totalCards = cardElements.length

    if (!section || !cardElements.length) return

    // Initial stack setup - BUILD on top
    gsap.set(cardElements, {
      x: 0,
      opacity: 1,
      force3D: true,
      transformOrigin: 'bottom left',
      immediateRender: true
    })

    cardElements.forEach((card, index) => {
      gsap.set(card, {
        rotation: index === 0 ? 0 : -(index * 8),
        scale: 1 - (index * 0.05),
        zIndex: totalCards - index,
      })
    })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 1%",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = Math.max(0, Math.min(self.progress * 1.1, 0.99))
          const currentIndex = Math.floor(progress * (totalCards - 0.01))
          const isReversing = self.getVelocity() < 0
          
          if (currentIndex >= 0 && currentIndex < totalCards) {
            setSelectedCard(cards[currentIndex])

            // Set initial z-index for all cards
            cardElements.forEach((card, i) => {
              gsap.set(card, {
                zIndex: isReversing ? 
                  (i >= currentIndex ? totalCards + (totalCards - i) : i) :
                  (i <= currentIndex ? totalCards - (currentIndex - i) : totalCards - (i - currentIndex))
              })
            })

            // Then animate other properties
            gsap.to(cardElements, {
              x: i => i < currentIndex ? -window.innerWidth : 0,
              opacity: 1,
              rotation: i => {
                if (i < currentIndex) return 8
                if (i === currentIndex) return 0
                return -(i - currentIndex) * 8
              },
              scale: i => {
                if (i < currentIndex) return 0.95
                if (i === currentIndex) return 1
                return 1 - ((i - currentIndex) * 0.05)
              },
              duration: 0.2,
              ease: "none",
              overwrite: true
            })
          }
        }
      })
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      {/* Info Cards Section */}
      <section className="w-full py-10 lg:py-20 mt-20 lg:mt-40">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 lg:gap-8">
            {/* Card 1 - Wider */}
            <motion.div 
              className="md:col-span-4 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="relative w-24 h-24"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/assets/setbudget.png"
                  alt="Set Budget"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div 
                className="p-6 rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(217, 217, 217, 0.37) 0%, rgba(115, 115, 115, 0) 100%)',
                  backdropFilter: 'blur(75px)'
                }}
              >
                <h3 className={`${bebasNeue.className} text-2xl text-[#FFD700] mb-4`}>
                  Decide your credit balance
                </h3>
                <p className="text-white text-base leading-relaxed">
                  As soon as you download the CREDIXIO APP we will ask you how much do you want to top up and add to your Credit Card, we know is a weird question but there's no trick you will decide we will advice
                </p>
              </motion.div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="md:col-span-3 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="relative w-24 h-24"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/assets/addmoney.png"
                  alt="Add Money"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div 
                className="p-6 rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(217, 217, 217, 0.37) 0%, rgba(115, 115, 115, 0) 100%)',
                  backdropFilter: 'blur(75px)'
                }}
              >
                <h3 className={`${bebasNeue.className} text-2xl text-[#FFD700] mb-4`}>
                  add money
                </h3>
                <p className="text-white text-base leading-relaxed">
                  Connect as many accounts and debit cards as you want and add your pot money to the CreditCard and the DD Account
                </p>
              </motion.div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="md:col-span-3 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div 
                className="relative w-24 h-24"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/assets/getstarted.png"
                  alt="Get Started"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div 
                className="p-6 rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(217, 217, 217, 0.37) 0%, rgba(115, 115, 115, 0) 100%)',
                  backdropFilter: 'blur(75px)'
                }}
              >
                <h3 className={`${bebasNeue.className} text-2xl text-[#FFD700] mb-4`}>
                  get started
                </h3>
                <p className="text-white text-base leading-relaxed">
                  Your basic account and Build Credit Card are ready as soon as you sign up. For extra perks, choose a premium card with customizable benefits
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Card Animation Section */}
      <section ref={sectionRef} id="card" className="w-full relative h-screen z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[1440px] w-full px-4 md:px-8 lg:px-32">
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-12 pt-[80px] lg:pt-0">
              {/* Left Side - Card Stack */}
              <div className="lg:w-1/2 h-[200px] lg:h-[600px] flex items-center justify-center relative">
                <div ref={cardsRef} className="relative w-[250px] lg:w-[400px] h-[200px] lg:h-[600px] z-20 mx-auto">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="card-item absolute inset-0 w-full h-full"
                      style={{
                        transformOrigin: 'bottom left',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                        perspective: 1000,
                        WebkitFontSmoothing: 'antialiased',
                        position: 'absolute'
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={`CRDX ${card.name} Card`}
                        fill
                        className="object-contain"
                        priority={card.id === selectedCard.id}
                        loading="eager"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Card Info */}
              <div className="lg:w-1/2 min-h-[300px] h-[calc(60vh-80px)] lg:h-[600px] flex items-start lg:items-center">
                <motion.div 
                  className="p-4 lg:p-8 rounded-3xl w-full z-10 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  key={selectedCard.id}
                  style={{
                    background: 'linear-gradient(135deg, rgba(217, 217, 217, 0.37) 0%, rgba(115, 115, 115, 0) 100%)',
                    backdropFilter: 'blur(75px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Fixed Header */}
                  <div className="mb-4">
                    <h2 className={`${bebasNeue.className} text-2xl lg:text-4xl text-white mb-3 lg:mb-6`}>
                      Find the Perfect Credit Card for You
                    </h2>
                    <h3 className={`${bebasNeue.className} text-lg lg:text-2xl`}>
                      <span className="text-[#FFD700]">CRDX</span>
                      <span className="text-white">{selectedCard.name}</span>
                    </h3>
                  </div>

                  {/* Scrollable Content */}
                  <div 
                    className="overflow-y-auto pr-6 h-[calc(100%-140px)]"
                    style={{ 
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#4A4A4A transparent',
                    }}
                  >
                    <style jsx global>{`
                      .overflow-y-auto::-webkit-scrollbar {
                        width: 8px;
                      }
                      .overflow-y-auto::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      .overflow-y-auto::-webkit-scrollbar-thumb {
                        background-color: #4A4A4A;
                        border-radius: 20px;
                        border: 2px solid transparent;
                        background-clip: padding-box;
                      }
                    `}</style>
                    <motion.ul 
                      className="space-y-2 lg:space-y-4 text-sm lg:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {selectedCard.features.map((feature, index) => (
                        <li key={index} className="text-white leading-relaxed">
                          {feature}
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
