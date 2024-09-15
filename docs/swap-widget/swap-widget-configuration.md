# Skip Go Widget: Configuration Options

## Summary

This page lists and describes all of the Widget's components and props to allow you to customize the widget to fit your exact user experience needs.

## Component Props

### SwapWidget

The `SwapWidget` component accepts the following props:

```typescript
interface SwapWidgetProps {
  defaultRoute?: {
    amountIn?: number;
    amountOut?: number;
    srcChainID?: string;
    srcAssetDenom?: string;
    destChainID?: string;
    destAssetDenom?: string;
  };
  routeConfig?: {
    experimentalFeatures?: ['hyperlane'];
    allowMultiTx?: boolean;
    allowUnsafe?: boolean;
    bridges?: ('IBC' | 'AXELAR' | 'CCTP' | 'HYPERLANE')[];
    swapVenues?: {
      name: string;
      chainID: string;
    }[];
  };
  filter?: {
    source?: Record<string, string[] | undefined>;
    destination?: Record<string, string[] | undefined>;
  };
  className?: string;
  style?: React.CSSProperties;
  settings?: {
    customGasAmount?: number;
    slippage?: number;
  };
  onlyTestnet?: boolean;
  toasterProps?: {
    position?: ToastPosition;
    toastOptions?: DefaultToastOptions;
    reverseOrder?: boolean;
    gutter?: number;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    children?: (toast: Toast) => JSX.Element;
  };
  endpointOptions?: {
    endpoints?: Record<string, EndpointOptions>;
    getRpcEndpointForChain?: (chainID: string) => Promise<string>;
    getRestEndpointForChain?: (chainID: string) => Promise<string>;
  };
  apiURL?: string;
  theme?: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    brandColor: string;
    highlightColor: string;
  };
  persistSwapWidgetState?: boolean;
  onWalletConnected?: (params: { walletName: string, chainId: string, address?: string }) => void;
  onWalletDisconnected?: (params: { chainType?: string }) => void;
  onTransactionBroadcasted?: (params: { txHash: string, chainId: string, explorerLink: string }) => void;
  onTransactionComplete?: (params: { txHash: string, chainId: string, explorerLink: string }) => void;
  onTransactionFailed?: (params: { error: string }) => void;
  chainIDsToAffiliates: Record<string, ChainAffiliates>;
}
```

### defaultRoute

Customizes the first route that appears on the widget on page load. Use this to direct users to the most important route you expect them to be interested in when they arrive at your dApp.

### routeConfig

Allows full customization of the types of routes enabled when using the widget.

- `allowMultiTx`: Whether to allow routes requiring multiple signing transactions (default: true).
- `allowUnsafe`: Whether to allow unsafe routes (default: false).
- `bridges`: Set of bridges to restrict routing across.
- `swapVenues`: Set of swap venues to restrict routing across.

### filter

Limits the source and destination chains and assets that appear in the widget.

```typescript
filter?: {
  source?: Record<string, string[] | undefined>;
  destination?: Record<string, string[] | undefined>;
};
```

### settings

Sets defaults for user customizable settings in the settings tab on the widget.

- `customGasAmount`: Set gas amount for CosmosSDK chain transactions (default: 200,000).
- `slippage`: Set default slippage percentage for CosmosSDK chain swaps (default: 3%).

### onlyTestnet

Configures the widget to only show testnet data when set to true (default: false).

### toasterProps

Props for the toaster component. Refer to [ToasterProps](https://react-hot-toast.com/docs/toast-options) for more details.

### endpointOptions

Endpoint options to override endpoints. Defaults to Skip proxied endpoints.

### apiURL

Custom API URL to override Skip Go API endpoint.

### theme

Customizes the look of the widget to fit your brand and application's aesthetics.

```typescript
theme?: {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  brandColor: string;
  highlightColor: string;
};
```

### Callback Functions

- `onWalletConnected`
- `onWalletDisconnected`
- `onTransactionBroadcasted`
- `onTransactionComplete`
- `onTransactionFailed`

### chainIDsToAffiliates

Defines fees per chain and which addresses should receive the fees.

```typescript
chainIDsToAffiliates: {
  'noble-1': {
    affiliates: [{
      basisPointsFee: '100',
      address: 'test',
    },
    {
      basisPointsFee: '100',
      address: 'test2',
    }]
  },
  'osmosis-1': {
    affiliates: [{
      basisPointsFee: '200',
      address: 'test',
    }]
  }
}
```

### className

A string to add custom CSS classes to the widget.

### style

React.CSSProperties to add custom inline styles to the widget.

[Source](https://docs.skip.build/go/widget/configuration-options)