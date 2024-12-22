/*
'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface AuctionItem {
  id: string
  title: string
  creator: string
  handle: string
  image: string
  remainingTime: string
  highestBid: number
}

const allAuctionItems: AuctionItem[] = [
  {
    id: '1',
    title: 'Monkey Icon',
    creator: 'MaikoHatta',
    handle: '@MaikoHatta',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '15h : 01m : 36s',
    highestBid: 15.97
  },
  {
    id: '2',
    title: 'DAY 24',
    creator: 'Mark Rise',
    handle: '@Mark Rise',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '24h : 01m : 19s',
    highestBid: 15.97
  },
  {
    id: '3',
    title: 'Gorilla Mascot',
    creator: 'MaikoHatta',
    handle: '@MaikoHatta',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '20h : 35m : 53s',
    highestBid: 15.97
  },
  {
    id: '4',
    title: 'Cyber Punk',
    creator: 'CyberArtist',
    handle: '@CyberArtist',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '18h : 45m : 22s',
    highestBid: 12.5
  },
  {
    id: '5',
    title: 'Digital Dreams',
    creator: 'DreamMaker',
    handle: '@DreamMaker',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '22h : 15m : 41s',
    highestBid: 18.3
  },
  {
    id: '6',
    title: 'Future Vision',
    creator: 'FutureArt',
    handle: '@FutureArt',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '16h : 30m : 15s',
    highestBid: 14.2
  }
]

const ITEMS_PER_PAGE = 3

export default function TrendingAuctions() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const totalPages = Math.ceil(allAuctionItems.length / ITEMS_PER_PAGE)
  
  const currentItems = allAuctionItems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  )

  const goToNextPage = () => {
    setDirection(1)
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const goToPrevPage = () => {
    setDirection(-1)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0
      };
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">Auctions.</span>
          </h1>
          <p className="text-muted-foreground">Enjoy! the latest hot auctions.</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={goToPrevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border-2 border-black">
                <CardContent className="p-0">
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.handle}</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">Remaining Time</p>
                        <p className="font-mono text-sm">{item.remainingTime}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-0.5">Highest bid</p>
                        <p className="font-mono text-sm">{item.highestBid} SOL</p>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full rounded-[15px]">Place Bid</Button>
                      </DialogTrigger>
                      <DialogContent  className="rounded-[15px]">
                        <DialogHeader>
                          <DialogTitle>Place a Bid</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="bid" className="text-right">
                              Bid Amount
                            </label>
                            <Input
                              id="bid"
                              type="number"
                              step="0.01"
                              min={item.highestBid + 0.01}
                              placeholder="Enter bid amount"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <Button  className="rounded-[15px]" type="submit">Submit Bid</Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

*/


'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface AuctionItem {
  id: string
  title: string
  creator: string
  handle: string
  image: string
  remainingTime: string
  highestBid: number
}

const allAuctionItems: AuctionItem[] = [
  {
    id: '1',
    title: 'Monkey Icon',
    creator: 'MaikoHatta',
    handle: '@MaikoHatta',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '15h : 01m : 36s',
    highestBid: 15.97
  },
  {
    id: '2',
    title: 'DAY 24',
    creator: 'Mark Rise',
    handle: '@Mark Rise',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '24h : 01m : 19s',
    highestBid: 15.97
  },
  {
    id: '3',
    title: 'Gorilla Mascot',
    creator: 'MaikoHatta',
    handle: '@MaikoHatta',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '20h : 35m : 53s',
    highestBid: 15.97
  },
  {
    id: '4',
    title: 'Cyber Punk',
    creator: 'CyberArtist',
    handle: '@CyberArtist',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '18h : 45m : 22s',
    highestBid: 12.5
  },
  {
    id: '5',
    title: 'Digital Dreams',
    creator: 'DreamMaker',
    handle: '@DreamMaker',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '22h : 15m : 41s',
    highestBid: 18.3
  },
  {
    id: '6',
    title: 'Future Vision',
    creator: 'FutureArt',
    handle: '@FutureArt',
    image: '/placeholder.svg?height=400&width=400',
    remainingTime: '16h : 30m : 15s',
    highestBid: 14.2
  }
]

const ITEMS_PER_PAGE = 3

export default function TrendingAuctions() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const totalPages = Math.ceil(allAuctionItems.length / ITEMS_PER_PAGE)
  
  const currentItems = allAuctionItems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  )

  const goToNextPage = () => {
    setDirection(1)
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const goToPrevPage = () => {
    setDirection(-1)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0
      };
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-primary">Auctions.</span>
          </motion.h1>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Enjoy! the latest hot auctions.
          </motion.p>
        </motion.div>
        <motion.div 
          className="flex gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            variant="outline" 
            size="icon"
            onClick={goToPrevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </motion.div>
      </div>
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-2 border-black">
                  <CardContent className="p-0">
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{item.title}</span>
                          <span className="text-xs text-muted-foreground">{item.handle}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="text-xs text-muted-foreground mb-0.5">Remaining Time</p>
                          <p className="font-mono text-sm">{item.remainingTime}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground mb-0.5">Highest bid</p>
                          <p className="font-mono text-sm">{item.highestBid} SOL</p>
                        </div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full rounded-[15px]">Place Bid</Button>
                        </DialogTrigger>
                        <DialogContent className="rounded-[15px]">
                          <DialogHeader>
                            <DialogTitle>Place a Bid</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="bid" className="text-right">
                                Bid Amount
                              </label>
                              <Input
                                id="bid"
                                type="number"
                                step="0.01"
                                min={item.highestBid + 0.01}
                                placeholder="Enter bid amount"
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <Button className="rounded-[15px]" type="submit">Submit Bid</Button>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}


