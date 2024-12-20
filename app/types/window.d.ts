interface Window {
  ethereum?: {
    request: (args: { method: string }) => Promise<string[]>
  }
  solarflare?: {
    request: (args: { method: string }) => Promise<string[]>
  }
} 