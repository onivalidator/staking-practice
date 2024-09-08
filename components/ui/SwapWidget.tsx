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