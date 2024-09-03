'use client';

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Atom, ChevronUp, ChevronDown } from 'lucide-react'
import { useChain } from '@cosmos-kit/react'
import { ChainName } from '@cosmos-kit/core'
import { StdFee } from '@cosmjs/amino'
import Image from 'next/image'

export default function StakingDashboard() {
  const [stakeAmount, setStakeAmount] = useState(100)
  const [amountToStake, setAmountToStake] = useState(0)
  const [apr] = useState(15.12)
  const chainName: ChainName = 'cosmoshub'
  const { connect, disconnect, openView, status, address, getSigningCosmWasmClient } = useChain(chainName)

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

  const handleStakeAmountChange = (value: number) => {
    setStakeAmount(Math.max(0, value))
  }

  const handleAmountToStakeChange = (value: number) => {
    setAmountToStake(Math.max(0, value))
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
                className="bg-transparent border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
              >
                {status === 'Connected' ? 'Disconnect' : 'Connect Wallet'}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={handleStake} className="bg-red-600 hover:bg-red-700 transition-colors">STAKE</Button>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-8">EARN ATOM REWARDS</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 overflow-hidden flex flex-col h-full">
            <CardHeader className="text-center border-b border-gray-700 pb-4">
              <CardTitle className="text-white">SWAP ANY TOKEN TO ATOM</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow pt-6">
              {/* Swap module from Skip API goes here */}
              <div>
                {/* Add your Skip API Swap module implementation here */}
                <p className="text-center">Swap module from Skip API will be implemented here</p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 relative overflow-hidden flex flex-col h-full">
            <Image src="/images/cosmos-stake.jpeg" alt="Cosmos Stake" layout="fill" objectFit="cover" className="opacity-50" />
            <CardHeader className="text-center border-b border-gray-700 pb-4 relative z-10">
              <CardTitle className="text-white">STAKE YOUR ATOM TO EARN REWARDS</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col flex-grow pt-6">
              <div className="mb-auto">
                <p className="mb-4 text-white">You can safely stake your COSMOS by following these steps:</p>
                <ol className="list-decimal list-inside mb-4 text-white">
                  <li>Connect your wallet</li>
                  <li>Enter the amount you want to stake</li>
                  <li>Confirm the transaction in your wallet</li>
                </ol>
              </div>
              <div className="mt-auto">
                <div className="mb-4">
                  <Label htmlFor="amountToStake" className="text-lg font-semibold mb-2 block text-white">Amount to stake</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Atom className="h-6 w-6 text-white" />
                    </div>
                    <Input
                      id="amountToStake"
                      type="number"
                      value={amountToStake}
                      onChange={(e) => handleAmountToStakeChange(Number(e.target.value))}
                      className="bg-gray-700 text-white pl-12 pr-4 text-xl h-12"
                      placeholder="Enter ATOM amount..."
                    />
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={handleStake} className="w-full bg-red-600 hover:bg-red-700 transition-colors">STAKE NOW</Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 flex flex-col h-full">
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
                <div className="relative max-w-xs mx-auto">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Atom className="h-6 w-6 text-white" />
                  </div>
                  <Input
                    id="stakeAmount"
                    type="number"
                    value={stakeAmount}
                    onChange={(e) => handleStakeAmountChange(Number(e.target.value))}
                    className="bg-gray-700 text-white pl-12 pr-16 text-2xl h-14 text-center no-spinner"
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
                <div className="text-sm text-gray-400 mt-2">ONI FEE: 5%</div>
              </div>
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
          <div className="flex items-center space-x-2">
            <Atom className="h-6 w-6" />
            <span>COSMOS</span>
          </div>
          <div className="text-sm text-white">
            Total delegated to Oni:
            <span className="text-red-600 font-bold ml-2">10,005,000 ATOM</span>
          </div>
          <div>
            <p>CONNECTED WALLET ADDRESS</p>
            <p className="text-red-600">{address || 'Connect wallet to view address'}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}