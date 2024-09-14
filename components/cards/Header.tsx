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