import { Atom } from 'lucide-react'

interface FooterProps {
  delegatedAtoms: string
  address: string | undefined
  atomPrice: number | null
}

export const Footer: React.FC<FooterProps> = ({ delegatedAtoms, address, atomPrice }) => {
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
