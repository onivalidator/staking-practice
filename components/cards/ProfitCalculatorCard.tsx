import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { Atom } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProfitCalculatorCardProps {
  stakeAmount: number
  handleStakeAmountChange: (value: string) => void
  handleIncrementDecrement: (increment: boolean) => void
  handleSliderChange: (value: number[]) => void
  getSliderValue: (amount: number) => number
  calculateProfit: (amount: number, period: 'daily' | 'monthly' | 'yearly') => string
}

export const ProfitCalculatorCard: React.FC<ProfitCalculatorCardProps> = ({
  stakeAmount,
  handleStakeAmountChange,
  handleIncrementDecrement,
  handleSliderChange,
  getSliderValue,
  calculateProfit
}) => {
  return (
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
              alt="Oni-chan calculating on an abacus"
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
  )
}

