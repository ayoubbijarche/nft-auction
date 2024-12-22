"use client"
import { ArrowUpRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NFTCard } from './nft-card'
import Image from 'next/image'
import nftimage from "../assets/nft.png"
import nftimage2 from "../assets/nft2.png"
import gitprofile from "../assets/gitprofile.jpeg"
import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
}

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, delay: 0.5 }
  }
}

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Started</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl font-bold leading-tight">
            Discover{' '}
            <span className="text-primary">Rare Collections</span>{' '}
            Of Art &{' '}
            <span className="relative">
              NFTs
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg font-medium">
            Digital marketplace for crypto collectibles and non-fungible tokens{' '}
            <span className="font-medium">NFTs</span>
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-black text-white gap-2 font-bold rounded-[15px]">
              Discover Artwork
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div variants={itemVariants} className="pt-8">
            <p className="text-sm text-gray-500 mb-4">Created By @ayoubbijarche</p>
            <div className="flex gap-6">
              <Link href="https://github.com/ayoubbijarche">
                <div className="w-8 h-8 bg-gray-200 rounded-full">
                  <Image 
                    src={gitprofile} 
                    alt='creator' 
                    className='rounded-full'
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute top-0 right-0 -z-10">
            <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="flex justify-center">
            <motion.div
              className="absolute z-10 left-3"
              initial={{ rotate: 15, y: -20 }}
              animate={{ rotate: isHovered ? -5 : -15, y: isHovered ? -30 : -20 }}
              transition={{ type: 'spring', stiffness: 100 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <NFTCard
                image={nftimage}
                title="Cosmic Dreams"
                artist="ArtisticVision"
                remainingTime="18h : 45m : 12s"
                highestBid={4.20}
              />
            </motion.div>
            <motion.div
              animate={{ rotate: isHovered ? 5 : 0 }}
              className='relative left-12'
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <NFTCard
                image={nftimage2}
                title="Strange Entity"
                artist="SatoshiNakamoto"
                remainingTime="20h : 35m : 29s"
                highestBid={3.97}
              />
            </motion.div>
          </div>
          <motion.div
            className="absolute top-4 right-4 text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="text-4xl font-bold">1.1k+</div>
            <div className="text-gray-500">Art Work</div>
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-4xl font-bold">34.1k+</div>
            <div className="text-gray-500">Artists</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}





/*
"use client"

import { ArrowUpRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NFTCard } from './nft-card'
import Image from 'next/image'
import nftimage from "../assets/nft.png"
import gitprofile from "../assets/gitprofile.jpeg"
import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
}

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, delay: 0.5 }
  }
}

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Started</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl font-bold leading-tight">
            Discover{' '}
            <span className="text-primary">Rare Collections</span>{' '}
            Of Art &{' '}
            <span className="relative">
              NFTs
              <span className="absolute inset-x-0 bottom-2 h-3 bg-yellow-200 -z-10" />
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-600 text-lg font-medium">
            Digital marketplace for crypto collectibles and non-fungible tokens{' '}
            <span className="font-medium">NFTs</span>
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-black text-white gap-2 font-bold rounded-[15px]">
              Discover Artwork
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div variants={itemVariants} className="pt-8">
            <p className="text-sm text-gray-500 mb-4">Created By @ayoubbijarche</p>
            <div className="flex gap-6">
              <Link href="https://github.com/ayoubbijarche">
                <div className="w-8 h-8 bg-gray-200 rounded-full">
                  <Image 
                    src={gitprofile} 
                    alt='creator' 
                    className='rounded-full'
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute top-0 right-0 -z-10">
            <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="flex justify-center">
            <NFTCard
              image={nftimage}
              title="Strange Entity"
              artist="SatoshiNakamoto"
              remainingTime="20h : 35m : 29s"
              highestBid={3.97}
            />
          </div>
          <motion.div
            className="absolute top-4 right-4 text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="text-4xl font-bold">1.1k+</div>
            <div className="text-gray-500">Art Work</div>
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-4xl font-bold">34.1k+</div>
            <div className="text-gray-500">Artists</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}





/*

import { ArrowUpRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NFTCard } from './nft-card'
import Image from 'next/image'
import nftimage from "../assets/nft.png"
import gitprofile from "../assets/gitprofile.jpeg"
import Link from 'next/link'

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Started</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight">
            Discover{' '}
            <span className="text-primary">Rare Collections</span>{' '}
            Of Art &{' '}
            <span className="relative">
              NFTs
              <span className="absolute inset-x-0 bottom-2 h-3 bg-yellow-200 -z-10" />
            </span>
          </h1>

          <p className="text-gray-600 text-lg font-medium">
            Digital marketplace for crypto collectibles and non-fungible tokens{' '}
            <span className="font-medium">NFTs</span>
          </p>


          <Button  size="lg" className="bg-black text-white gap-2 font-bold rounded-[15px]">
            Discover Artwork
            <ArrowUpRight className="w-4 h-4" />
          </Button>
          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-4">Created By @ayoubbijarche</p>
            <div className="flex gap-6">
              
            <Link href="https://github.com/ayoubbijarche">
              <div className="w-8 h-8 bg-gray-200 rounded-full">
                <Image 
                  src={gitprofile} 
                  alt='creator' 
                  className='rounded-full'
                  />
              </div>
            </Link>
           </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 right-0 -z-10">
            <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="flex justify-center">
            <NFTCard
              image={nftimage}
              title="Strange Entity"
              artist="SatoshiNakamoto"
              remainingTime="20h : 35m : 29s"
              highestBid={3.97}
            />
          </div>
          <div className="absolute top-4 right-4 text-right">
            <div className="text-4xl font-bold">1.1k+</div>
            <div className="text-gray-500">Art Work</div>
          </div>
          <div className="absolute bottom-4 right-4 text-right">
            <div className="text-4xl font-bold">34.1k+</div>
            <div className="text-gray-500">Artists</div>
          </div>
        </div>
      </div>
    </div>
  )
}
*/
