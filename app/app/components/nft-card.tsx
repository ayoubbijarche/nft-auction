import Image from 'next/image'

interface NFTCardProps {
  image: string
  title: string
  artist: string
  remainingTime: string
  highestBid: number
}

export function NFTCard({
  image,
  title,
  artist,
  remainingTime,
  highestBid,
}: NFTCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform rotate-[-5deg] w-64">
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold">NFT-AYOUB.</span>
          <span className="text-xs text-gray-500 font-semibold">@{artist}</span>
        </div>
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-2">
          <h3 className="text-sm font-bold truncate">{title}</h3>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs">
          <div>
            <div className="font-medium">{remainingTime}</div>
            <div className="text-gray-500">Remaining Time</div>
          </div>
          <div className="text-right">
            <div className="font-bold">{highestBid} SOL</div>
            <div className="text-gray-500">Highest bid</div>
          </div>
        </div>
      </div>
    </div>
  )
}


