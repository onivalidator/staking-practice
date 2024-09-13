'use client';

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head';
import Image from 'next/image'
import { useChain } from '@cosmos-kit/react'
import { ChainName } from '@cosmos-kit/core'
import { StdFee } from '@cosmjs/amino'
import { Dec } from '@keplr-wallet/unit'
import { scaleLog } from 'd3-scale';
import { Atom, ChevronUp, ChevronDown } from 'lucide-react'
import axios from 'axios';

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SwapCard } from '@/components/cards/SwapCard'
import { StakeCard } from '@/components/cards/StakeCard'
import { ProfitCalculatorCard } from '@/components/cards/ProfitCalculatorCard'
import { TintedImage } from '@/components/TintedImage';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

const REST_ENDPOINT = 'https://rest.cosmos.directory/cosmoshub';
const VALIDATOR_ADDRESS = 'cosmosvaloper16s96n9k9zztdgjy8q4qcxp4hn7ww98qkrka4zk';

export default function StakingDashboard() {
  const [stakeAmount, setStakeAmount] = useState(100)
  const [amountToStake, setAmountToStake] = useState(250)
  const [apr] = useState(15.12)
  const chainName: ChainName = 'cosmoshub'
  const { connect, disconnect, openView, status, address, getSigningStargateClient } = useChain(chainName)

  const [delegatedAtoms, setDelegatedAtoms] = useState<string>('0')
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

  useEffect(() => {
    const fetchTotalDelegatedAtoms = async () => {
      try {
        const url = `${REST_ENDPOINT}/cosmos/staking/v1beta1/validators?pagination.limit=1000`;
        const response = await axios.get(url);
        if (response.status !== 200) {
          throw new Error(`Error fetching validators data: ${response.status}`);
        }
        const validators = response.data.validators;
        const ourValidator = validators.find((v: any) => v.operator_address === VALIDATOR_ADDRESS);
        if (ourValidator) {
          const totalAtomAmount = new Dec(ourValidator.tokens).quo(new Dec(1000000)).round().toString();
          const formattedAmount = parseInt(totalAtomAmount).toLocaleString();
          setDelegatedAtoms(formattedAmount);
        } else {
          setDelegatedAtoms('0');
        }
      } catch (error) {
        console.error('Error fetching total delegated ATOM:', error);
        setDelegatedAtoms('0');
      }
    };

    fetchTotalDelegatedAtoms();
    const intervalId = setInterval(fetchTotalDelegatedAtoms, 600000); // Fetch every 10 minutes
    return () => clearInterval(intervalId);
  }, []);

  const snapPoints = [0, 100, 250, 500, 1000, 5000, 10000, 50000, 100000, 250000]
  const logScale = scaleLog().domain([1, 250000]).range([0, 100])

  const handleSliderChange = (value: number[]) => {
    const scaledValue = Math.round(logScale.invert(value[0]))
    const closestSnapPoint = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - scaledValue) < Math.abs(prev - scaledValue) ? curr : prev
    )
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
      const client = await getSigningStargateClient()
      if (!client) throw new Error('No signing client')

      const fee: StdFee = {
        amount: [{ denom: 'uatom', amount: '5000' }],
        gas: '200000',
      }

      const result = await client.delegateTokens(
        address,
        VALIDATOR_ADDRESS,
        { denom: 'uatom', amount: (amountToStake * 1000000).toString() },
        fee,
        'Staking via ONI'
      )

      console.log('Transaction hash:', result.transactionHash)
    } catch (error) {
      console.error('Error staking tokens:', error)
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
        address={address} 
      />

      <main className="container mx-auto mt-8 px-4 pb-16">
        <h1 className="text-4xl font-bold mb-8">EARN ATOM REWARDS</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <SwapCard />
          <StakeCard 
            amountToStake={amountToStake}
            handleAmountToStakeChange={handleAmountToStakeChange}
            handleIncrementDecrementStake={handleIncrementDecrementStake}
            handleStake={handleStake}
          />
          <ProfitCalculatorCard 
            stakeAmount={stakeAmount}
            handleStakeAmountChange={handleStakeAmountChange}
            handleIncrementDecrement={handleIncrementDecrement}
            handleSliderChange={handleSliderChange}
            getSliderValue={getSliderValue}
            calculateProfit={calculateProfit}
          />
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