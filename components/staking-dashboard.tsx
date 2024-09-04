'use client';

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
import { scaleLog } from 'd3-scale';

export default function StakingDashboard() {
  const [stakeAmount, setStakeAmount] = useState(100)
  const [amountToStake, setAmountToStake] = useState(250) // Default to 250 ATOM
  const [apr] = useState(15.12)
  const chainName: ChainName = 'cosmoshub'
  const { connect, disconnect, openView, status, address, getSigningCosmWasmClient } = useChain(chainName)

  const snapPoints = [0, 100, 250, 500, 1000, 5000, 10000, 50000, 100000, 250000]
  
  // Create a logarithmic scale
  const logScale = scaleLog()
    .domain([1, 250000]) // Use 1 as the minimum to avoid log(0)
    .range([0, snapPoints.length - 1]) // Range from 0 to the number of snap points

  const handleSliderChange = (value: number[]) => {
    const index = Math.round(value[0])
    setStakeAmount(snapPoints[index])
  }

  const getSliderValue = (amount: number) => {
    const index = snapPoints.findIndex(point => point >= amount)
    return index === -1 ? snapPoints.length - 1 : index
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
    if (status !== 'Connected') {
      openView()
      return
    }

    try {
      const client = await getSigningCosmWasmClient()
      if (!client) throw new Error('No signing client')

      const fee: StdFee = {
        amount: [{ denom: 'uatom', amount: '5000' }],
        gas: '200000',
      }

      const result = await client.delegateTokens(
        address,
        'cosmosvaloper16s96n9k9zztdgjy8q4qcxp4hn7ww98qkrka4zkcosmosvaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4epsluffn',
        { denom: 'uatom', amount: (amountToStake * 1000000).toString() },
        fee,
        'Staking via ONI'
      )

      console.log('Transaction hash:', result.transactionHash)
    } catch (error) {
      console.error('Staking failed:', error)
    }
  }

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
      <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/images/shintogate.png" alt="Shinto Gate" width={40} height={40} />
            <span className="text-2xl font-bold">Oni</span>
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

      <main className="container mx-auto mt-8 px-4 pb-16">
        <h1 className="text-4xl font-bold mb-8">EARN ATOM REWARDS</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 flex flex-col p-0 overflow-hidden">
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
              src="/images/cosmos-stake.jpeg" 
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
              <div className="w-40 h-40 mx-auto mb-12 relative">
                <Image
                  src="/images/oni-chan-6.png"
                  alt="Oni-chan caclulating on an abacus"
                  fill
                  className="object-contain"
                />
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
                    value={stakeAmount}
                    onChange={(e) => handleStakeAmountChange(e.target.value)}
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
                  max={snapPoints.length - 1}
                  step={1}
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
              <span className="text-red-600 font-bold ml-2">10,005,000 ATOM</span>
            </div>
          </div>
          <div className="text-white">
            <p>CONNECTED WALLET ADDRESS</p>
            <p className="text-red-600">{address || 'Connect wallet to view address'}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}