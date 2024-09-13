import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { swapWidgetConfig } from '@/utils/SwapWidgetConfig'
import { SwapWidget } from '@skip-go/widget'

export const SwapCard: React.FC = () => {
  return (
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
  )
}
