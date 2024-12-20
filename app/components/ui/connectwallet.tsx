'use client'
import * as React from "react"
import { Button } from "./button"
import { useAppKit } from '@reown/appkit/react'

export function Walletconnect(){
  const { open } = useAppKit()
  return (
    <>
      <Button variant="outline" className="w-36 bg-black text-white font-bold rounded-[15px]" onClick={() => open()}>Connect wallet</Button>
    </>
  )
}


