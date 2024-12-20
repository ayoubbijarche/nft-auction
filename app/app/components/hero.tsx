import { ArrowUpRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NFTCard } from './nft-card'
import Image from 'next/image'
import nftimage from "../assets/nft.jpg"
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


