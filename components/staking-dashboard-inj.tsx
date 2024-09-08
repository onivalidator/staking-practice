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