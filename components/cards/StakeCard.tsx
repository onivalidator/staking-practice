import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Atom, ChevronUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface StakeCardProps {
  amountToStake: number
  handleAmountToStakeChange: (value: string) => void
  handleIncrementDecrementStake: (increment: boolean) => void
  handleStake: () => void
}

export const StakeCard: React.FC<StakeCardProps> = ({
  amountToStake,
  handleAmountToStakeChange,
  handleIncrementDecrementStake,
  handleStake
}) => {
  return (
    <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-red-600 relative overflow-hidden flex flex-col min-h-[600px]">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/chains/cosmoshub-4.jpg" 
          alt="Cosmos Stake" 
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
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
  )
}
