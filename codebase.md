# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

# tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# package.json

```json
{
  "name": "staking-practice",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@cosmjs/proto-signing": "^0.32.4",
    "@cosmjs/stargate": "^0.32.4",
    "@cosmos-kit/core": "^2.13.1",
    "@cosmos-kit/keplr": "^2.12.2",
    "@cosmos-kit/react": "^2.18.0",
    "@injectivelabs/exceptions": "^1.14.13",
    "@injectivelabs/sdk-ts": "^1.14.13",
    "@injectivelabs/ts-types": "^1.14.13",
    "@injectivelabs/wallet-ts": "^1.14.13",
    "@interchain-ui/react": "^1.23.31",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@skip-go/widget": "^2.4.11",
    "add": "^2.0.6",
    "axios": "^1.7.7",
    "chain-registry": "^1.63.81",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cosmos-kit": "^2.19.0",
    "d3-scale": "^4.0.2",
    "framer-motion": "^11.4.0",
    "graz": "^0.1.20",
    "injectivejs": "^1.5.0",
    "lucide-react": "^0.438.0",
    "next": "14.2.7",
    "or": "^0.2.0",
    "react": "^18",
    "react-dom": "^18",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "yarn": "^1.22.22"
  },
  "devDependencies": {
    "@types/d3-scale": "^4.0.8",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.7",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

# next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

# .aidigestignore

```
.next
.env.local
.eslintrc.json
.gitignore
yarn-error.log
yarn.lock
node_modules
/docs
/components/staking-dashboard.tsx
```

# public/vercel.svg

This is a file of the type: SVG Image

# public/next.svg

This is a file of the type: SVG Image

# lib/utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

# components/staking-dashboard-inj.tsx

```tsx
'use client';

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { ChevronUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { SwapWidget } from '@skip-go/widget'
import { swapWidgetConfig } from './ui/SwapWidgetConfig'
import { scaleLog } from 'd3-scale'
import Head from 'next/head'
import TintedImage from './process/TintedImage'
import { Dec } from '@keplr-wallet/unit'
import axios from 'axios'
import { 
  MsgDelegate, 
  BaseAccount,
  ChainRestAuthApi,
  createTransaction,
  TxRaw,
  TxRestClient,
  getInjectiveAddress,
  SIGN_MODE_EIP_712
} from "@injectivelabs/sdk-ts"
import { BigNumberInBase } from "@injectivelabs/utils"
import { getStdFee, DEFAULT_BLOCK_TIMEOUT_HEIGHT } from "@injectivelabs/utils"
import { WalletStrategy } from '@injectivelabs/wallet-ts'
import { ChainId, EthereumChainId } from '@injectivelabs/ts-types'
import { Web3Exception } from '@injectivelabs/exceptions'
import { Network, getNetworkEndpoints } from '@injectivelabs/networks'

const REST_ENDPOINT = 'https://rest.cosmos.directory/injective'
const VALIDATOR_ADDRESS = 'injvaloper1f566hkhdhf9s3hskd43nggj7qsc7g0xxtqylr7'
//Sign mode for Keplr not working yet. EIP712 sign mode is implemented, but now SignMode.SIGN_MODE_DIRECT which is better for Keplr.
const network = Network.Mainnet
const endpoints = getNetworkEndpoints(network)

const walletStrategy = new WalletStrategy({
  chainId: ChainId.Mainnet,
  ethereumOptions: {
    ethereumChainId: EthereumChainId.Mainnet,
    rpcUrl: endpoints.ethereumRpcEndpoint
  }
})

export default function StakingDashboard() {
  const [stakeAmount, setStakeAmount] = useState(100)
  const [amountToStake, setAmountToStake] = useState<string>('250')
  const [apr] = useState(13.45)
  const [delegatedInj, setDelegatedInj] = useState<string>('0')
  const [injPrice, setInjPrice] = useState<number | null>(null)
  const [rebateCode, setRebateCode] = useState('')
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [walletConnected, setWalletConnected] = useState(false)

  const fetchInjPrice = async () => {
    try {
      const url = "https://api.coingecko.com/api/v3/simple/price?ids=injective-protocol&vs_currencies=usd"
      const response = await axios.get(url)
      if (response.status !== 200) {
        throw new Error("Error fetching INJ price: " + response.status)
      }
      const data = response.data
      setInjPrice(data['injective-protocol'].usd)
    } catch (error) {
      console.error("Failed to fetch INJ price:", error)
    }
  }

  useEffect(() => {
    fetchInjPrice()
    const intervalId = setInterval(fetchInjPrice, 60000)
    return () => clearInterval(intervalId)
  }, [])
  
  const fetchValidators = async () => {
    try {
      const url = `${REST_ENDPOINT}/cosmos/staking/v1beta1/validators?pagination.limit=1000`
      const response = await axios.get(url)
      if (response.status !== 200) {
        throw new Error(`Error fetching validators data: ${response.status}`)
      }
      return response.data
    } catch (error) {
      console.error("Failed to fetch validators:", error)
      return null
    }
  }

  const fetchLatestBlock = async () => {
    try {
      const url = `${REST_ENDPOINT}/injective/base/tendermint/v1beta1/blocks/latest`
      const response = await axios.get(url)
      if (response.status !== 200) {
        throw new Error(`Error fetching latest block: ${response.status}`)
      }
      return response.data.block.header.height
    } catch (error) {
      console.error("Failed to fetch latest block:", error)
      return null
    }
  }

  useEffect(() => {
    const fetchTotalDelegatedInj = async () => {
      try {
        const url = `${REST_ENDPOINT}/cosmos/staking/v1beta1/validators?pagination.limit=1000`;
        
        console.log('Fetching validators data');
        const response = await axios.get(url);
        
        if (response.status !== 200) {
          throw new Error(`Error fetching validators data: ${response.status}`);
        }

        const validators = response.data.validators;
        const ourValidator = validators.find((v: any) => v.operator_address === VALIDATOR_ADDRESS);

        if (ourValidator) {
          const totalInjAmount = new Dec(ourValidator.tokens).quo(new Dec(1000000000000000000)).round().toString();
          const formattedAmount = parseInt(totalInjAmount).toLocaleString();
          console.log('Total delegated INJ amount:', formattedAmount);
          setDelegatedInj(formattedAmount);
        } else {
          console.log('Validator not found');
          setDelegatedInj('0');
        }
      } catch (error) {
        console.error('Error fetching total delegated INJ:', error);
        setDelegatedInj('0');
      }
    };

    fetchTotalDelegatedInj();
    const intervalId = setInterval(fetchTotalDelegatedInj, 600000);
    return () => clearInterval(intervalId);
  }, []);
  
  const snapPoints = [0, 100, 250, 500, 1000, 5000, 10000, 50000, 100000, 250000]
  
  // Create a logarithmic scale
  const logScale = scaleLog()
    .domain([1, 250000])
    .range([0, 100])

  const handleSliderChange = (value: number[]) => {
    const scaledValue = Math.round(logScale.invert(value[0]))
    const closestSnapPoint = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - scaledValue) < Math.abs(prev - scaledValue) ? curr : prev
    )
    
    // If within 5% of a snap point, snap to it
    if (Math.abs(scaledValue - closestSnapPoint) / closestSnapPoint < 0.05) {
      setStakeAmount(closestSnapPoint)
    } else {
      setStakeAmount(scaledValue)
    }
  }

  const getSliderValue = (amount: number) => {
    return logScale(Math.max(1, amount))
  }

  const handleStakeAmountChange = (value: string) => {
    const numValue = value === '' ? 0 : parseInt(value, 10)
    if (!isNaN(numValue)) {
      setStakeAmount(Math.min(Math.max(0, numValue), 250000))
    }
  }

  useEffect(() => {
    // This effect will run whenever stakeAmount changes
    // You can add any additional logic here if needed
  }, [stakeAmount])

  const calculateProfit = (amount: number, period: 'daily' | 'monthly' | 'yearly') => {
    const periodMultiplier = period === 'daily' ? 1 : period === 'monthly' ? 30 : 365
    return ((amount * apr) / 100 / 365 * periodMultiplier).toFixed(2)
  }

  const connectWallet = async () => {
    try {
      // Instead of using connect(), we directly call getAddresses()
      const addresses = await walletStrategy.getAddresses()

      if (addresses.length === 0) {
        throw new Web3Exception(new Error('There are no addresses linked in this wallet.'))
      }

      // Set the first address as the connected wallet address
      const walletAddress = addresses[0]
      setWalletAddress(walletAddress)
      setWalletConnected(true)

      console.log('Wallet connected:', walletAddress)
    } catch (error) {
      console.error('Error connecting wallet:', error)
      if (error instanceof Web3Exception) {
        console.error('Web3 Error:', error.message)
      }
    }
  }

  const disconnectWallet = async () => {
    try {
      // There's no specific disconnect method, so we just reset the state
      setWalletAddress(null)
      setWalletConnected(false)
      console.log('Wallet disconnected')
    } catch (error) {
      console.error('Error disconnecting wallet:', error)
    }
  }

  const handleWalletConnection = async () => {
    if (walletConnected) {
      await disconnectWallet()
    } else {
      await connectWallet()
    }
  }

  const handleStake = async () => {
    if (!walletAddress) {
      console.error('Wallet not connected')
      return
    }

    try {
      const chainId = "injective-1" // Define the chain ID for Injective mainnet

      const injectiveAddress = walletAddress.startsWith('0x') 
        ? getInjectiveAddress(walletAddress)
        : walletAddress

      console.log('Injective Address:', injectiveAddress)

      const chainRestAuthApi = new ChainRestAuthApi(endpoints.rest)
      const accountDetailsResponse = await chainRestAuthApi.fetchAccount(injectiveAddress)
      console.log('Account Details Response:', accountDetailsResponse)

      const baseAccount = BaseAccount.fromRestApi(accountDetailsResponse)
      console.log('Base Account:', baseAccount)

      const amount = {
        amount: new BigNumberInBase(amountToStake).toWei().toFixed(),
        denom: 'inj'
      }

      const msg = MsgDelegate.fromJSON({
        amount,
        delegatorAddress: injectiveAddress,
        validatorAddress: VALIDATOR_ADDRESS
      })

      console.log('Delegate Message:', msg)

      const { txRaw, signDoc } = createTransaction({
        message: msg,
        memo: rebateCode ? `ONI Staking - Rebate: ${rebateCode}` : 'ONI Staking',
        fee: getStdFee(),
        chainId: network,
        signMode: SIGN_MODE_EIP_712,
        sequence: baseAccount.sequence,
        timeoutHeight: new BigNumberInBase(await chainRestAuthApi.fetchLatestBlockHeight()).plus(DEFAULT_BLOCK_TIMEOUT_HEIGHT).toNumber(),
        pubKey: baseAccount.pubKey,
        accountNumber: baseAccount.accountNumber,
      })

      console.log('TxRaw:', txRaw)
      console.log('SignDoc:', signDoc)

      const signResponse = await walletStrategy.signCosmosTransaction({
        txRaw,
        accountNumber: baseAccount.accountNumber,
        chainId: network,
      }, injectiveAddress)

      console.log('Sign Response:', signResponse)

      const txService = new TxRestClient(endpoints.rest)
      const txResponse = await txService.broadcast(signResponse.txRaw)

      console.log('Transaction Response:', txResponse)

      if (txResponse.code !== 0) {
        throw new Error(`Transaction failed: ${txResponse.rawLog}`)
      }

      console.log('Transaction successful!')
      console.log('Transaction hash:', txResponse.txHash)
      setRebateCode('')

    } catch (error) {
      console.error('Error in handleStake:', error)
      if (error instanceof Error) {
        console.error('Error message:', error.message)
        console.error('Error stack:', error.stack)
      }
    }
  }

  const handleAmountToStakeChange = (value: string) => {
    // Allow only numbers and a single decimal point
    const regex = /^(\d*\.?\d{0,18}|\.\d{0,18})$/;
    if (regex.test(value) || value === '') {
      setAmountToStake(value);
    }
  }

  const handleIncrementDecrementStake = (increment: boolean) => {
    const currentAmount = parseFloat(amountToStake) || 0;
    let step = 0.1;
    if (currentAmount >= 10000) {
      step = 1000;
    } else if (currentAmount >= 5000) {
      step = 500;
    } else if (currentAmount >= 1000) {
      step = 100;
    } else if (currentAmount >= 200) {
      step = 10;
    } else if (currentAmount >= 50) {
      step = 1;
    }

    const newAmount = increment
      ? currentAmount + step
      : Math.max(0, currentAmount - step);

    setAmountToStake(newAmount.toFixed(6));
  }

  const handleIncrementDecrement = (increment: boolean) => {
    let step = 10
    if (stakeAmount >= 10000) {
      step = 2000
    } else if (stakeAmount >= 5000) {
      step = 1000
    } else if (stakeAmount >= 1000) {
      step = 100
    } else if (stakeAmount >= 200) {
      step = 50
    }

    const newAmount = increment
      ? Math.floor(stakeAmount / step) * step + step
      : Math.ceil(stakeAmount / step) * step - step

    setStakeAmount(Math.max(0, newAmount))
  }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Head>
          <title>Oni Staking Dashboard - Injective</title>
          <style jsx global>{`
            @font-face {
              font-family: 'Tokio Noir';
              src: url('/fonts/TokioNoir.otf') format('opentype');
              font-weight: normal;
              font-style: normal;
            }
          `}</style>
        </Head>
        <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-2 sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TintedImage 
                src="/images/shinto-gate.png" 
                alt="Shinto Gate" 
                width={50} 
                height={50} 
                tintColor="#FF4B4B"
              />
              <span className="text-2xl font-bold font-tokio-noir uppercase">ONI VALIDATOR</span>
            </div>
  
          <nav className="hidden md:flex space-x-4">
            {['Staking', 'Protocols', 'Business', 'Blog', 'About Us'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-red-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="flex space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleWalletConnection}
                variant="outline"
                className="bg-transparent border-[#FF4B4B] text-[#FF4B4B] hover:bg-[#FF4B4B] hover:text-white transition-colors"
              >
                {walletConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={handleStake} className="bg-[#FF4B4B] hover:bg-[#FF3B3B] transition-colors">STAKE</Button>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4 pb-16">
        <h1 className="text-4xl font-bold mb-8">EARN INJECTIVE REWARDS</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 flex flex-col p-0 overflow-hidden">
            <CardHeader className="text-center border-b border-gray-700 pb-4">
              <CardTitle className="text-white">SWAP ANY TOKEN TO INJ</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-0">
              <div className="w-full h-full flex items-center justify-center">
                <SwapWidget
                  {...swapWidgetConfig}
                  className="w-full"
                  style={{
                    minHeight: '500px',
                    height: 'auto',
                    borderRadius: '0',
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 relative overflow-hidden flex flex-col min-h-[600px]">
            <Image 
              src="/images/chains/injective-1.jpg" 
              alt="Injective Stake" 
              fill
              className="object-cover opacity-50"
            />
            <CardHeader className="text-center border-b border-gray-700 pb-4 relative z-10">
              <CardTitle className="text-white">STAKE YOUR INJ TO EARN REWARDS</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col flex-grow pt-6">
              <div className="mb-auto">
                <p className="mb-4 text-white">You can safely stake your INJ by following these steps:</p>
                <ol className="list-decimal list-inside mb-4 text-white">
                  <li>Connect your wallet</li>
                  <li>Enter the amount you want to stake</li>
                  <li>Confirm the transaction in your wallet</li>
                </ol>
              </div>
              <div className="mt-auto">
                <div className="mb-4">
                  <Label htmlFor="amountToStake" className="text-lg font-semibold mb-2 block text-white">Amount to stake</Label>
                  <div className="relative w-full">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Image
                        src="/images/logos/inj-logo.png"
                        alt="INJ Logo"
                        width={24}
                        height={24}
                      />
                    </div>
                    <Input
                      id="amountToStake"
                      type="text"
                      inputMode="decimal"
                      value={amountToStake}
                      onChange={(e) => handleAmountToStakeChange(e.target.value)}
                      className="bg-gray-700 text-white pl-12 pr-16 text-2xl h-14 w-full"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col">
                      <button
                        onClick={() => handleIncrementDecrementStake(true)}
                        className="text-gray-400 hover:text-white"
                      >
                        <ChevronUp className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleIncrementDecrementStake(false)}
                        className="text-gray-400 hover:text-white"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* New Rebate Code input */}
                <div className="mb-4">
                  <Label htmlFor="rebateCode" className="text-lg font-semibold mb-2 block text-white">Rebate Code</Label>
                  <div className="relative w-full">
                    <Input
                      id="rebateCode"
                      type="text"
                      value={rebateCode}
                      onChange={(e) => setRebateCode(e.target.value)}
                      className="bg-gray-700 text-white pl-4 pr-4 text-lg h-14 w-full"
                      placeholder="Staking rebate code, if any..."
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.00, rotate: 0.7 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full"
                >
                  <Button 
                    onClick={handleStake} 
                    className="w-full bg-[#FF4B4B] hover:bg-[#FF3B3B] transition-colors text-white font-semibold text-base py-4 px-4 rounded-lg shadow-md h-14"
                  >
                    Stake Now
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 flex flex-col min-h-[600px]">
            <CardHeader className="text-center border-b border-gray-700 pb-4">
              <CardTitle className="text-white">CALCULATE YOUR PROFIT</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow pt-6">
            <div className="w-40 h-40 mx-auto mb-12">
                <motion.div
               whileHover={{ rotate: [0, 5, -5, 5, 0], x: [0, 5, -5, 5, 0] }}
               transition={{ duration: .75 }}
                >
                  <Image
                    src="/images/oni-chan-6.png"
                    alt="Oni-chan caclulating on an abacus"
                    width={160}
                    height={160}
                    layout="responsive"
                  />
                </motion.div>
    </div>
              <div className="text-center">
                <Label htmlFor="stakeAmount" className="text-lg font-semibold mb-4 block text-white">ENTER YOUR AMOUNT</Label>
                <div className="relative max-w-xs mx-auto mb-4">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image
                      src="/images/logos/inj-logo.png"
                      alt="INJ Logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <Input
                    id="stakeAmount"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={`${stakeAmount} INJ`}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      handleStakeAmountChange(value);
                    }}
                    className="bg-gray-700 text-white pl-12 pr-16 text-2xl h-14 text-center"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col">
                    <button
                      onClick={() => handleIncrementDecrement(true)}
                      className="text-gray-400 hover:text-white"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleIncrementDecrement(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <Slider
                  value={[getSliderValue(stakeAmount)]}
                  min={0}
                  max={100}
                  step={0.1}
                  className="max-w-xs mx-auto"
                  onValueChange={handleSliderChange}
                />
              </div>
              <div className="text-sm text-gray-400 mt-2 text-center">ONI FEE: 5%</div>
              <div className="mt-auto space-y-2">
                {['daily', 'monthly', 'yearly'].map((period, index) => (
                  <div key={period}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400 capitalize">{period}</span>
                      <span className="text-xl font-bold">
                        <span className="text-red-600">{calculateProfit(stakeAmount, period as 'daily' | 'monthly' | 'yearly')}</span>
                        <span className="text-sm font-normal ml-1 text-white">INJ</span>
                      </span>
                    </div>
                    {index < 2 && <div className="border-b border-gray-700"></div>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-16 bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logos/inj-logo.png"
                alt="INJ Logo"
                width={24}
                height={24}
              />
              <span className="uppercase">INJECTIVE</span>
            </div>
            <div className="h-6 w-px bg-gray-600"></div>
            <div className="text-sm text-white uppercase">
              TOTAL DELEGATED TO ONI:
              <span className="text-red-600 font-bold ml-2">{delegatedInj} INJ</span>
            </div>
          </div>
          <div className="text-white">
            <p>CONNECTED WALLET ADDRESS</p>
            <p className="text-red-600">{walletAddress || 'Connect wallet to view address'}</p>
          </div>
          <div className="text-white">
            <p>CURRENT INJ PRICE</p>
            <p className="text-red-600">${injPrice ? injPrice.toFixed(2) : 'Loading...'}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
```

# components/staking-dashboard-components.tsx

```tsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Atom, ChevronUp, ChevronDown } from 'lucide-react'
import { useChain } from '@cosmos-kit/react'
import { ChainName } from '@cosmos-kit/core'
import { StdFee } from '@cosmjs/amino'
import Image from 'next/image'
import { SwapWidget } from '@skip-go/widget'
import { swapWidgetConfig } from './ui/SwapWidgetConfig'
import { scaleLog } from 'd3-scale'
import Head from 'next/head'
import TintedImage from './process/TintedImage'
import { Dec } from '@keplr-wallet/unit'
import axios from 'axios'
import { Header } from './cards/Header'
import { Footer } from './cards/Footer'
import { SigningStargateClient } from "@cosmjs/stargate";

const REST_ENDPOINT = 'https://rest.cosmos.directory/cosmoshub'
const VALIDATOR_ADDRESS = 'cosmosvaloper16s96n9k9zztdgjy8q4qcxp4hn7ww98qkrka4zk'

export default function StakingDashboard() {
  const [stakeAmount, setStakeAmount] = useState(100)
  const [amountToStake, setAmountToStake] = useState(250)
  const [apr] = useState(15.12)
  const chainName: ChainName = 'cosmoshub'
  const { connect, disconnect, status, address, getOfflineSigner } = useChain(chainName)

  const [delegatedAtoms, setDelegatedAtoms] = useState<string>('0')
  const [blockHeight, setBlockHeight] = useState<number | null>(null)
  const [atomPrice, setAtomPrice] = useState<number | null>(null);

  const fetchAtomPrice = async () => {
    try {
      const url = "https://api.coingecko.com/api/v3/simple/price?ids=cosmos&vs_currencies=usd"
      const response = await axios.get(url)
      if (response.status !== 200) {
        throw new Error("Error fetching ATOM price: " + response.status)
      }
      const data = response.data
      setAtomPrice(data.cosmos.usd)
    } catch (error) {
      console.error("Failed to fetch ATOM price:", error)
    }
  }

  useEffect(() => {
    fetchAtomPrice()
    const intervalId = setInterval(fetchAtomPrice, 60000) // Update every minute
    return () => clearInterval(intervalId)
  }, [])
  
  const fetchValidators = async () => {
    try {
      const url = `${REST_ENDPOINT}/cosmos/staking/v1beta1/validators?pagination.limit=1000`
      const response = await axios.get(url)
      if (response.status !== 200) {
        throw new Error(`Error fetching validators data: ${response.status}`)
      }
      return response.data
    } catch (error) {
      console.error("Failed to fetch validators:", error)
      return null
    }
  }

  const fetchLatestBlock = async () => {
    try {
      const url = `${REST_ENDPOINT}/cosmos/base/tendermint/v1beta1/blocks/latest`
      const response = await axios.get(url)
      if (response.status !== 200) {
        throw new Error(`Error fetching latest block: ${response.status}`)
      }
      return response.data.block.header.height
    } catch (error) {
      console.error("Failed to fetch latest block:", error)
      return null
    }
  }

  useEffect(() => {
    const fetchTotalDelegatedAtoms = async () => {
      try {
        const url = `${REST_ENDPOINT}/cosmos/staking/v1beta1/validators?pagination.limit=1000`;
        
        console.log('Fetching validators data');
        const response = await axios.get(url);
        
        if (response.status !== 200) {
          throw new Error(`Error fetching validators data: ${response.status}`);
        }

        const validators = response.data.validators;
        const ourValidator = validators.find((v: any) => v.operator_address === VALIDATOR_ADDRESS);

        if (ourValidator) {
          const totalAtomAmount = new Dec(ourValidator.tokens).quo(new Dec(1000000)).round().toString();
          const formattedAmount = parseInt(totalAtomAmount).toLocaleString();
          console.log('Total delegated ATOM amount:', formattedAmount);
          setDelegatedAtoms(formattedAmount);
        } else {
          console.log('Validator not found');
          setDelegatedAtoms('0');
        }
      } catch (error) {
        console.error('Error fetching total delegated ATOM:', error);
        setDelegatedAtoms('0');
      }
    };

    fetchTotalDelegatedAtoms();
    const intervalId = setInterval(fetchTotalDelegatedAtoms, 600000); // Fetch every minute
    return () => clearInterval(intervalId);
  }, []);
  
  const snapPoints = [0, 100, 250, 500, 1000, 5000, 10000, 50000, 100000, 250000]
  
  // Create a logarithmic scale
  const logScale = scaleLog()
    .domain([1, 250000]) // Use 1 as the minimum to avoid log(0)
    .range([0, 100]) // Range from 0 to 100 for percentage-based slider

  const handleSliderChange = (value: number[]) => {
    const scaledValue = Math.round(logScale.invert(value[0]))
    const closestSnapPoint = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - scaledValue) < Math.abs(prev - scaledValue) ? curr : prev
    )
    
    // If within 5% of a snap point, snap to it
    if (Math.abs(scaledValue - closestSnapPoint) / closestSnapPoint < 0.05) {
      setStakeAmount(closestSnapPoint)
    } else {
      setStakeAmount(scaledValue)
    }
  }

  const getSliderValue = (amount: number) => {
    return logScale(Math.max(1, amount))
  }

  const handleStakeAmountChange = (value: string) => {
    const numValue = value === '' ? 0 : parseInt(value, 10)
    if (!isNaN(numValue)) {
      setStakeAmount(Math.min(Math.max(0, numValue), 250000))
    }
  }

  useEffect(() => {
    // This effect will run whenever stakeAmount changes
    // You can add any additional logic here if needed
  }, [stakeAmount])

  const calculateProfit = (amount: number, period: 'daily' | 'monthly' | 'yearly') => {
    const periodMultiplier = period === 'daily' ? 1 : period === 'monthly' ? 30 : 365
    return ((amount * apr) / 100 / 365 * periodMultiplier).toFixed(2)
  }

  const handleWalletConnection = async () => {
    if (status === 'Connected') {
      await disconnect()
    } else {
      await connect()
    }
  }

  const handleStake = async () => {
    if (!address) {
      console.error('Address is undefined');
      return;
    }
  
    try {
      const offlineSigner = await getOfflineSigner(chainName);
      const client = await SigningStargateClient.connectWithSigner(
        'https://rpc.cosmos.directory/cosmoshub', // You might want to use a variable for this URL
        offlineSigner
      );
  
      const fee: StdFee = {
        amount: [{ denom: 'uatom', amount: '5000' }],
        gas: '200000',
      };
  
      const amount = {
        denom: 'uatom',
        amount: (amountToStake * 1000000).toString(),
      };
  
      const result = await client.delegateTokens(
        address,
        VALIDATOR_ADDRESS,
        amount,
        fee,
        'Staking via ONI'
      );
  
      console.log('Transaction hash:', result.transactionHash);
    } catch (error) {
      console.error('Error staking tokens:', error);
    }
  };

  const handleAmountToStakeChange = (value: string) => {
    const numValue = value === '' ? 0 : parseInt(value, 10);
    if (!isNaN(numValue)) {
      setAmountToStake(Math.max(0, numValue));
    }
  }

  const handleIncrementDecrement = (increment: boolean) => {
    let step = 10
    if (stakeAmount >= 10000) {
      step = 2000
    } else if (stakeAmount >= 5000) {
      step = 1000
    } else if (stakeAmount >= 1000) {
      step = 100
    } else if (stakeAmount >= 200) {
      step = 50
    }

    const newAmount = increment
      ? Math.floor(stakeAmount / step) * step + step
      : Math.ceil(stakeAmount / step) * step - step

    setStakeAmount(Math.max(0, newAmount))
  }

  const handleIncrementDecrementStake = (increment: boolean) => {
    let step = 10
    if (amountToStake >= 10000) {
      step = 2000
    } else if (amountToStake >= 5000) {
      step = 1000
    } else if (amountToStake >= 1000) {
      step = 100
    } else if (amountToStake >= 200) {
      step = 50
    }

    const newAmount = increment
      ? Math.floor(amountToStake / step) * step + step
      : Math.ceil(amountToStake / step) * step - step

    setAmountToStake(Math.max(0, newAmount))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Oni Staking Dashboard</title>
        <style jsx global>{`
          @font-face {
            font-family: 'Tokio Noir';
            src: url('/fonts/TokioNoir.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </Head>
      
      <Header 
  status={status} 
  handleWalletConnection={handleWalletConnection} 
  handleStake={handleStake} 
/>

      <main className="container mx-auto mt-8 px-4 pb-16">
        <h1 className="text-4xl font-bold mb-8">EARN ATOM REWARDS</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 flex flex-col p-0 overflow-visible">
            <CardHeader className="text-center border-b border-gray-700 pb-4">
              <CardTitle className="text-white">SWAP ANY TOKEN TO ATOM</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-0">
              <div className="w-full h-full flex items-center justify-center">
              <SwapWidget
  {...swapWidgetConfig}
  className="w-full"
  style={{
    minHeight: '500px',
    height: '100%',
    borderRadius: '0',
  }}
  connectedWallet={{
    cosmos: {
      getAddress: async (chainID) => {
        if (!address) throw new Error('No account connected');
        return address;
      },
      getSigner: async (chainID) => {
        if (!address) throw new Error('No account connected');
        return getOfflineSigner(chainID);
      },
    },
  }}
/>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 relative overflow-hidden flex flex-col min-h-[600px]">
            <Image 
              src="/images/chains/cosmoshub-4.jpg" 
              alt="Cosmos Stake" 
              fill
              className="object-cover opacity-50"
            />
            <CardHeader className="text-center border-b border-gray-700 pb-4 relative z-10">
              <CardTitle className="text-white">STAKE YOUR ATOM TO EARN REWARDS</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col flex-grow pt-6">
              <div className="mb-auto">
                <p className="mb-4 text-white">You can safely stake your ATOM by following these steps:</p>
                <ol className="list-decimal list-inside mb-4 text-white">
                  <li>Connect your wallet</li>
                  <li>Enter the amount you want to stake</li>
                  <li>Confirm the transaction in your wallet</li>
                </ol>
              </div>
              <div className="mt-auto">
                <div className="mb-4">
                  <Label htmlFor="amountToStake" className="text-lg font-semibold mb-2 block text-white">Amount to stake</Label>
                  <div className="relative w-full">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Atom className="h-6 w-6 text-white" />
                    </div>
                    <Input
                      id="amountToStake"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={`${amountToStake} ATOM`}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        handleAmountToStakeChange(value);
                      }}
                      className="bg-gray-700 text-white pl-12 pr-16 text-2xl h-14 w-full"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col">
                      <button
                        onClick={() => handleIncrementDecrementStake(true)}
                        className="text-gray-400 hover:text-white"
                      >
                        <ChevronUp className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleIncrementDecrementStake(false)}
                        className="text-gray-400 hover:text-white"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.00, rotate: 0.7 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full"
                >
                  <Button 
                    onClick={handleStake} 
                    className="w-full bg-[#FF4B4B] hover:bg-[#FF3B3B] transition-colors text-white font-semibold text-base py-4 px-4 rounded-lg shadow-md h-14"
                  >
                    Stake Now
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 flex flex-col min-h-[600px]">
            <CardHeader className="text-center border-b border-gray-700 pb-4">
              <CardTitle className="text-white">CALCULATE YOUR PROFIT</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow pt-6">
            <div className="w-40 h-40 mx-auto mb-12">
                <motion.div
               whileHover={{ rotate: [0, 5, -5, 5, 0], x: [0, 5, -5, 5, 0] }}
               transition={{ duration: .75 }}
                >
                  <Image
                    src="/images/oni-chan-6.png"
                    alt="Oni-chan caclulating on an abacus"
                    width={160}
                    height={160}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </motion.div>
    </div>
              <div className="text-center">
                <Label htmlFor="stakeAmount" className="text-lg font-semibold mb-4 block text-white">ENTER YOUR AMOUNT</Label>
                <div className="relative max-w-xs mx-auto mb-4">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Atom className="h-6 w-6 text-white" />
                  </div>
                  <Input
                    id="stakeAmount"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={`${stakeAmount} ATOM`}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      handleStakeAmountChange(value);
                    }}
                    className="bg-gray-700 text-white pl-12 pr-16 text-2xl h-14 text-center"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col">
                    <button
                      onClick={() => handleIncrementDecrement(true)}
                      className="text-gray-400 hover:text-white"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleIncrementDecrement(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <Slider
                  value={[getSliderValue(stakeAmount)]}
                  min={0}
                  max={100}
                  step={0.1}
                  className="max-w-xs mx-auto"
                  onValueChange={handleSliderChange}
                />
              </div>
              <div className="text-sm text-gray-400 mt-2 text-center">ONI FEE: 5%</div>
              <div className="mt-auto space-y-2">
                {['daily', 'monthly', 'yearly'].map((period, index) => (
                  <div key={period}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400 capitalize">{period}</span>
                      <span className="text-xl font-bold">
                        <span className="text-red-600">{calculateProfit(stakeAmount, period as 'daily' | 'monthly' | 'yearly')}</span>
                        <span className="text-sm font-normal ml-1 text-white">ATOM</span>
                      </span>
                    </div>
                    {index < 2 && <div className="border-b border-gray-700"></div>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer 
        delegatedAtoms={delegatedAtoms} 
        address={address} 
        atomPrice={atomPrice} 
      />
    </div>
  )
}
```

# app/page.tsx

```tsx
'use client';

import StakingDashboard from "@/components/staking-dashboard-components"

export default function Page() {
  return <StakingDashboard />
}
```

# app/layout.tsx

```tsx
'use client';

import * as React from 'react';
import { ChainProvider } from '@cosmos-kit/react'
import { chains, assets } from 'chain-registry'
import { wallets } from "cosmos-kit";
import "@interchain-ui/react/styles";
import { ThemeProvider } from '@interchain-ui/react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const walletConnectOptions = {
  signClient: {
    projectId: 'your_project_id',
    relayUrl: 'wss://relay.walletconnect.org',
    metadata: {
      name: 'Your App Name',
      description: 'Your app description',
      url: 'https://yourapp.com',
      icons: ['https://yourapp.com/icon.png']
    }
  }
}

const cosmosChains = chains.filter((chain) => chain.chain_name === 'cosmoshub');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          themeDefs={[
            {
              name: "custom",
              vars: {
                colors: {
                  primary500: "#FF4B4B",
                },
                // Add more custom variables as needed
              },
            },
          ]}
          customTheme="custom"
        >
          <ChainProvider
            chains={chains} // supported chains
            assetLists={assets} // supported asset lists
            wallets={wallets} // supported wallets
            walletConnectOptions={walletConnectOptions}
          >
            {children}
          </ChainProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

```

# app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
@font-face {
  font-family: 'TokioNoir';
  src: url('/fonts/TokioNoir.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

/* Add this at the end of your globals.css file */
.skip-widget-popup {
  max-height: 200px !important;
  overflow-y: auto !important;
}

.skip-widget-popup::-webkit-scrollbar {
  width: 16px;
}

.skip-widget-popup::-webkit-scrollbar-thumb {
  background-color: #4B5563;
  border-radius: 3px;
}

.skip-widget-popup::-webkit-scrollbar-track {
  background-color: #1F2937;
}

.font-tokio-noir {
  font-family: 'TokioNoir', sans-serif !important;
}

```

# app/favicon.ico

This is a binary file of the type: Binary

# public/images/sunset-warrior.jpeg

This is a binary file of the type: Image

# public/images/stake-lock.png

This is a binary file of the type: Image

# public/images/shintogate-red-bg.jpeg

This is a binary file of the type: Image

# public/images/shinto-ninja.png

This is a binary file of the type: Image

# public/images/shinto-gate.png

This is a binary file of the type: Image

# public/images/oni-chan.png

This is a binary file of the type: Image

# public/images/oni-chan-9.png

This is a binary file of the type: Image

# public/images/oni-chan-8.png

This is a binary file of the type: Image

# public/images/oni-chan-7.png

This is a binary file of the type: Image

# public/images/oni-chan-6.png

This is a binary file of the type: Image

# public/images/oni-chan-5.png

This is a binary file of the type: Image

# public/images/oni-chan-4.png

This is a binary file of the type: Image

# public/images/oni-chan-3.png

This is a binary file of the type: Image

# public/images/oni-chan-2.png

This is a binary file of the type: Image

# public/images/leap-logo.png

This is a binary file of the type: Image

# public/images/keplr-logo.png

This is a binary file of the type: Image

# public/images/cosmos-stake.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381360734.png

This is a binary file of the type: Image

# public/images/HelloIMG1725381360410.png

This is a binary file of the type: Image

# public/images/HelloIMG1725381359946.png

This is a binary file of the type: Image

# public/images/HelloIMG1725381359088.png

This is a binary file of the type: Image

# public/images/HelloIMG1725381355710.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381355327.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381354806.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381354492.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381354168.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381353776.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381353326.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381353023.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381352523.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381352182.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381351813.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381351475.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381351133.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381350783.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381350457.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381350084.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381349560.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381349036.jpeg

This is a binary file of the type: Image

# public/images/HelloIMG1725381348667.jpeg

This is a binary file of the type: Image

# public/fonts/TokioNoir.otf

This is a binary file of the type: Binary

# components/ui/slider.tsx

```tsx
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-700">
      <SliderPrimitive.Range className="absolute h-full bg-[#FF4B4B]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-[#FF4B4B] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
```

# components/ui/label.tsx

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

# components/ui/input.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

```

# components/ui/card.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

# components/ui/button.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

# components/ui/SwapWidgetConfig.tsx

```tsx
import { SwapWidgetProps } from '@skip-go/widget';

export const swapWidgetConfig: SwapWidgetProps = {
   
  theme: {
      backgroundColor: '#1F2937',
      textColor: '#FFFFFF',
      borderColor: '#374151',
      brandColor: '#FF4B4B',
      highlightColor: '#4B5563',
    },
  defaultRoute: {
    srcChainID: 'osmosis-1',
    destChainID: 'cosmoshub-4',
    srcAssetDenom: 'uosmo',
    destAssetDenom: 'uatom',
  },
  filter: {
    source: {
      'osmosis-1': undefined,
      'noble-1': undefined,
      '42161': undefined,
      '1': undefined, // Ethereum
      '43114': undefined, // Avalanche
      'axelar-dojo-1': undefined,
      '8453': undefined, // Base
      '56': undefined, // Binance
      '81457': undefined, // Blast
      'celestia-1': undefined,
      'dydx-mainnet-1': undefined,
      'injective-1': undefined,
      'kaiyo-1': undefined, // Kujira
      'kava_2222-10': undefined,
      'neutron-1': undefined,
      '10': undefined, // Optimism
      '137': undefined, // Polygon
      'pryzm-1': undefined,
      'solana': undefined,
      'stride-1': undefined,
      'wormchain': undefined,
    },
    destination: {
      'cosmoshub-4': ['uatom'], // Only allow ATOM as destination on Cosmos Hub
      'injective-1': ['inj'], // Only allow INJ as destination on Injective
    },
  },
  routeConfig: {
    allowMultiTx: true,
    allowUnsafe: false,
    bridges: ['IBC', 'AXELAR', 'CCTP', 'HYPERLANE'],
  },
  className: 'rounded-lg',
  style: { 
   // width: 'auto', 
    height: 'auto',
    minHeight: '500px', // Adjust this value as needed
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  settings: {
    slippage: 1, // 1% slippage
  },
  onlyTestnet: false,
  persistSwapWidgetState: false,
  onWalletConnected: ({ walletName, chainId, address }) => {
    console.log('Wallet connected:', walletName, chainId, address);
  },
  onWalletDisconnected: ({ chainType }) => {
    console.log('Wallet disconnected:', chainType);
  },
  onTransactionBroadcasted: ({ txHash, chainId, explorerLink }) => {
    console.log('Transaction broadcasted:', txHash, chainId, explorerLink);
  },
  onTransactionComplete: ({ txHash, chainId, explorerLink }) => {
    console.log('Transaction complete:', txHash, chainId, explorerLink);
  },
  onTransactionFailed: ({ error }) => {
    console.error('Transaction failed:', error);
  },
  chainIDsToAffiliates: {
    'akashnet-2': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'akash16jpurfl30z7ejfnfry3l9fv9p65kzq23na2xt5',
      }]
    },
    'archway-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'archway16jpurfl30z7ejfnfry3l9fv9p65kzq23tdm9ce',
      }]
    },
    'axelar-dojo-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'axelar16jpurfl30z7ejfnfry3l9fv9p65kzq236g3fe0',
      }]
    },
    'celestia-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'celestia16jpurfl30z7ejfnfry3l9fv9p65kzq230vk3gr',
      }]
    },
    'chihuahua-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'chihuahua16jpurfl30z7ejfnfry3l9fv9p65kzq23an20nv',
      }]
    },
    'comdex-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'comdex16jpurfl30z7ejfnfry3l9fv9p65kzq23ef9rte',
      }]
    },
    'core-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'persistence16jpurfl30z7ejfnfry3l9fv9p65kzq23s2pju2',
      }]
    },
    'cosmoshub-4': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'cosmos16jpurfl30z7ejfnfry3l9fv9p65kzq237x8pjw',
      }]
    },
    'cudos-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'cudos16jpurfl30z7ejfnfry3l9fv9p65kzq23lhw7vm',
      }]
    },
    'dydx-mainnet-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'dydx16jpurfl30z7ejfnfry3l9fv9p65kzq23hlf9je',
      }]
    },
    'evmos_9001-2': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'evmos1udkeke6hfeahv85fghaajkpgtgzpvza74586ez',
      }]
    },
    'fetchhub-4': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'fetch16jpurfl30z7ejfnfry3l9fv9p65kzq23dmw9se',
      }]
    },
    'genesisl1-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'govgen16jpurfl30z7ejfnfry3l9fv9p65kzq23xlp5mk',
      }]
    },
    'gravity-bridge-3': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'gravity116jpurfl30z7ejfnfry3l9fv9p65kzq233mcpep',
      }]
    },
    'iaa-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'iaa16jpurfl30z7ejfnfry3l9fv9p65kzq23ty8ssl',
      }]
    },
    'injective-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'inj1udkeke6hfeahv85fghaajkpgtgzpvza7aups3j',
      }]
    },
    'juno-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'juno16jpurfl30z7ejfnfry3l9fv9p65kzq23g5y64j',
      }]
    },
    'kaiyo-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'kuji16jpurfl30z7ejfnfry3l9fv9p65kzq23dy9ufh',
      }]
    },
    'kichain-2': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'ki16jpurfl30z7ejfnfry3l9fv9p65kzq230tkwk6',
      }]
    },
    'kyve-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'kyve16jpurfl30z7ejfnfry3l9fv9p65kzq23fg2he2',
      }]
    },
    'mantle-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'mantle16jpurfl30z7ejfnfry3l9fv9p65kzq23qzuydy',
      }]
    },
    'neutron-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'neutron16jpurfl30z7ejfnfry3l9fv9p65kzq236ewrgf',
      }]
    },
    'noble-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'noble16jpurfl30z7ejfnfry3l9fv9p65kzq23k9jf2q',
      }]
    },
    'omniflixhub-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'omniflix16jpurfl30z7ejfnfry3l9fv9p65kzq23rckc9s',
      }]
    },
    'onomy-mainnet-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'onomy16jpurfl30z7ejfnfry3l9fv9p65kzq23y8nhrt',
      }]
    },
    'osmosis-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'osmo16jpurfl30z7ejfnfry3l9fv9p65kzq23ka53yu',
      }]
    },
    'pacific-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'sei16jpurfl30z7ejfnfry3l9fv9p65kzq23n2kh50',
      }]
    },
    'passage-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'pasg16jpurfl30z7ejfnfry3l9fv9p65kzq23a77ml3',
      }]
    },
    'quasar-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'quasar16jpurfl30z7ejfnfry3l9fv9p65kzq23s9ault',
      }]
    },
    'regen-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'regen16jpurfl30z7ejfnfry3l9fv9p65kzq23pyvay2',
      }]
    },
    'saga-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'saga16jpurfl30z7ejfnfry3l9fv9p65kzq23q47n4g',
      }]
    },
    'sentinelhub-2': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'sent16jpurfl30z7ejfnfry3l9fv9p65kzq239a3ckp',
      }]
    },
    'shentu-2.2': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'shentu16jpurfl30z7ejfnfry3l9fv9p65kzq23kjrcqn',
      }]
    },
    'sommelier-3': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'somm16jpurfl30z7ejfnfry3l9fv9p65kzq23j6gdry',
      }]
    },
    'stafihub-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'stafi16jpurfl30z7ejfnfry3l9fv9p65kzq239dhtxk',
      }]
    },
    'stargaze-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'stars16jpurfl30z7ejfnfry3l9fv9p65kzq2326suel',
      }]
    },
    'stride-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'stride16jpurfl30z7ejfnfry3l9fv9p65kzq23ad8axz',
      }]
    },
    'teritori-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'tori16jpurfl30z7ejfnfry3l9fv9p65kzq23ujsgf7',
      }]
    },
    'umee-1': {
      affiliates: [{
        basisPointsFee: '90',
        address: 'umee16jpurfl30z7ejfnfry3l9fv9p65kzq23vs67ku',
      }]
    },
  },
};
```

# components/ui/SwapWidget.tsx

```tsx
import { SwapWidget } from '@skip-go/widget';

const SwapPage = () => {
  return (
    <div
      style={{
        width: '450px',
        height: '820px',
      }}
    >
      <SwapWidget config={swapWidgetConfig} />
    </div>
  );
};
```

# components/process/TintedImage.tsx

```tsx
import Image, { ImageProps } from 'next/image';
import { CSSProperties } from 'react';

interface TintedImageProps extends ImageProps {
  tintColor: string;
}

const TintedImage: React.FC<TintedImageProps> = ({ tintColor, ...props }) => {
  const tintStyle: CSSProperties = {
    filter: `brightness(0) saturate(100%) invert(19%) sepia(92%) saturate(7075%) hue-rotate(359deg) brightness(98%) contrast(100%)`,
  };

  return (
    <div style={{ position: 'relative', width: props.width, height: props.height }}>
      <Image {...props} style={{ ...props.style, ...tintStyle }} />
    </div>
  );
};

export default TintedImage;
```

# components/cards/Header.tsx

```tsx
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import TintedImage from '../process/TintedImage'

interface HeaderProps {
  status: string;
  handleWalletConnection: () => void;
  handleStake: () => void;
}

export function Header({ status, handleWalletConnection, handleStake }: HeaderProps) {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-2 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TintedImage 
            src="/images/shinto-gate.png" 
            alt="Shinto Gate" 
            width={50} 
            height={50} 
            tintColor="#FF4B4B"
          />
          <span className="text-2xl font-bold font-tokio-noir uppercase">ONI VALIDATOR</span>
        </div>

        <nav className="hidden md:flex space-x-4">
          {['Staking', 'Protocols', 'Business', 'Blog', 'About Us'].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="hover:text-red-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="flex space-x-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleWalletConnection}
              variant="outline"
              className="bg-transparent border-[#FF4B4B] text-[#FF4B4B] hover:bg-[#FF4B4B] hover:text-white transition-colors"
            >
              {status === 'Connected' ? 'Disconnect' : 'Connect Wallet'}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={handleStake} className="bg-[#FF4B4B] hover:bg-[#FF3B3B] transition-colors">STAKE</Button>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
```

# components/cards/Footer.tsx

```tsx
import { Atom } from 'lucide-react'

interface FooterProps {
  delegatedAtoms: string;
  address: string | undefined;
  atomPrice: number | null;
}

export function Footer({ delegatedAtoms, address, atomPrice }: FooterProps) {
  return (
    <footer className="mt-16 bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Atom className="h-6 w-6" />
            <span className="uppercase">COSMOS</span>
          </div>
          <div className="h-6 w-px bg-gray-600"></div>
          <div className="text-sm text-white uppercase">
            TOTAL DELEGATED TO ONI:
            <span className="text-red-600 font-bold ml-2">{delegatedAtoms} ATOM</span>
          </div>
        </div>
        <div className="text-white">
          <p>CONNECTED WALLET ADDRESS</p>
          <p className="text-red-600">{address || 'Connect wallet to view address'}</p>
        </div>
        <div className="text-white">
          <p>CURRENT ATOM PRICE</p>
          <p className="text-red-600">${atomPrice ? atomPrice.toFixed(2) : 'Loading...'}</p>
        </div>
      </div>
    </footer>
  )
}
```

# public/images/logos/inj-logo.svg

This is a file of the type: SVG Image

# public/images/logos/inj-logo.png

This is a binary file of the type: Image

# public/images/chains/mars-1.jpg

This is a binary file of the type: Image

# public/images/chains/injective-1.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_f8611bba773846ae9cc3d3fe63cdfff8~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_e9db4f943fa34805b7c83d2c3739dfd8~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_e95cbaec40004bf3adea5b0904d0396c~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_e1cfe241fb0c4bd2a50f8b0eb3f34c1f~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_d3b6805de6ac46d2bf5e6fb17341a629~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_c3022dd103ca4328844c5c6a4c44242f~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_bfd3906c5ba845c885e4014abbcd96dd~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_be0f978267a342c7a4ec470bd5190026~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_8ecd36ac86424530a06074b3a9e6fc08~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_886c96cafc9f4d78915a43e39684ea19~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_83b7082370dd4c43a4e412cccc3d6a22~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_7a1b217c97b34738b2db348b13504918~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_70dddae58e574c0da287831c985ef75d~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_3f694856466343c68c6e1ff682338790~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_1052a41659ef4e5ebf697ecefda9b83a~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/f7673f_073a58a347f04f7ab3052ba909e5a62d~mv2.jpg

This is a binary file of the type: Image

# public/images/chains/cosmoshub-4.jpg

This is a binary file of the type: Image

# public/images/chains/akash-1.jpg

This is a binary file of the type: Image

