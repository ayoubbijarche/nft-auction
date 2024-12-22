'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {Walletconnect} from "@/components/ui/connectwallet";
import { useAppKit , useAppKitAccount , useDisconnect } from '@reown/appkit/react'
import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import SignClient from '@walletconnect/sign-client'
import { Core } from '@walletconnect/core'

const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})

const projectId = '7da33be4867b0f505ea58b982f6105e7'

const metadata = {
  name: 'ayoubnft',
  description: 'solana nft auction',
  url: 'https://ayoubnftauction.com', 
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true
  }
})


function shrinkString(input: string, startLength: number, endLength: number): string {
    if (startLength + endLength >= input.length) {
        return input; 
    }
    const start = input.slice(0, startLength); 
    const end = input.slice(-endLength); 
    return `${start}...${end}`;
}


export function Header() {
  const accountdata  = useAppKitAccount()
  const {disconnect} = useDisconnect()   
    return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold">NFT-AYOUB.</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/marketplace" className="text-sm font-semibold hover:text-primary flex items-center gap-1">
                Marketplace
              <span className="px-1.5 py-0.5 text-xs font-semibold bg-primary rounded">
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
            <div className="relative pr-0">
              {accountdata.isConnected ? (
                <div className="flex items-center gap-2">
                  <h1>{shrinkString(accountdata.address?.toString() , 3 , 4)}</h1>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={disconnect}
                    >
                      Disconnect
                    </Button>
                </div>
              ) : (
                <Walletconnect/>
              )}
              </div>
        </div>
      </div>
    </header>
  )
}


