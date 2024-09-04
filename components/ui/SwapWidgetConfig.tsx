import { SwapWidgetProps } from '@skip-go/widget';

export const swapWidgetConfig: SwapWidgetProps = {
  theme: {
    backgroundColor: '#1F2937', // Dark background
    textColor: '#FFFFFF', // White text
    borderColor: '#374151', // Lighter border color
    brandColor: '#FF4B4B', // Red color for buttons and highlights
    highlightColor: '#4B5563', // Keep the existing highlight color
  },
  defaultRoute: {
    srcChainID: 'osmosis-1',
    destChainID: 'cosmoshub-4',
    srcAssetDenom: 'uosmo',
    destAssetDenom: 'uatom',
  },
  filter: {
    destination: {
      'cosmoshub-4': ['uatom'], // This restricts the destination to Cosmos Hub and ATOM
    },
  },
  routeConfig: {
    allowMultiTx: true,
    allowUnsafe: false,
    bridges: ['IBC', 'AXELAR', 'CCTP', 'HYPERLANE'],
  },
  className: 'rounded-lg',
  style: { 
    width: '100%', 
  //  height: '100%',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  settings: {
    slippage: 1, // 1% slippage
  },
  onlyTestnet: false,
  persistSwapWidgetState: false,
  onWalletConnected: ({ walletName, chainId, address }) => {
    console.log('Wallet connected:', walletName, chainId, address);
  },
  onWalletDisconnected: ({ chainType }) => {
    console.log('Wallet disconnected:', chainType);
  },
  onTransactionBroadcasted: ({ txHash, chainId, explorerLink }) => {
    console.log('Transaction broadcasted:', txHash, chainId, explorerLink);
  },
  onTransactionComplete: ({ txHash, chainId, explorerLink }) => {
    console.log('Transaction complete:', txHash, chainId, explorerLink);
  },
  onTransactionFailed: ({ error }) => {
    console.error('Transaction failed:', error);
  },
  chainIDsToAffiliates: {
    'akashnet-2': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'akash16jpurfl30z7ejfnfry3l9fv9p65kzq23na2xt5',
      }]
    },
    'archway-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'archway16jpurfl30z7ejfnfry3l9fv9p65kzq23tdm9ce',
      }]
    },
    'axelar-dojo-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'axelar16jpurfl30z7ejfnfry3l9fv9p65kzq236g3fe0',
      }]
    },
    'celestia-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'celestia16jpurfl30z7ejfnfry3l9fv9p65kzq230vk3gr',
      }]
    },
    'chihuahua-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'chihuahua16jpurfl30z7ejfnfry3l9fv9p65kzq23an20nv',
      }]
    },
    'comdex-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'comdex16jpurfl30z7ejfnfry3l9fv9p65kzq23ef9rte',
      }]
    },
    'core-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'persistence16jpurfl30z7ejfnfry3l9fv9p65kzq23s2pju2',
      }]
    },
    'cosmoshub-4': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'cosmos16jpurfl30z7ejfnfry3l9fv9p65kzq237x8pjw',
      }]
    },
    'cudos-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'cudos16jpurfl30z7ejfnfry3l9fv9p65kzq23lhw7vm',
      }]
    },
    'dydx-mainnet-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'dydx16jpurfl30z7ejfnfry3l9fv9p65kzq23hlf9je',
      }]
    },
    'evmos_9001-2': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'evmos1udkeke6hfeahv85fghaajkpgtgzpvza74586ez',
      }]
    },
    'fetchhub-4': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'fetch16jpurfl30z7ejfnfry3l9fv9p65kzq23dmw9se',
      }]
    },
    'genesisl1-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'govgen16jpurfl30z7ejfnfry3l9fv9p65kzq23xlp5mk',
      }]
    },
    'gravity-bridge-3': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'gravity116jpurfl30z7ejfnfry3l9fv9p65kzq233mcpep',
      }]
    },
    'iaa-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'iaa16jpurfl30z7ejfnfry3l9fv9p65kzq23ty8ssl',
      }]
    },
    'injective-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'inj1udkeke6hfeahv85fghaajkpgtgzpvza7aups3j',
      }]
    },
    'juno-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'juno16jpurfl30z7ejfnfry3l9fv9p65kzq23g5y64j',
      }]
    },
    'kaiyo-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'kuji16jpurfl30z7ejfnfry3l9fv9p65kzq23dy9ufh',
      }]
    },
    'kichain-2': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'ki16jpurfl30z7ejfnfry3l9fv9p65kzq230tkwk6',
      }]
    },
    'kyve-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'kyve16jpurfl30z7ejfnfry3l9fv9p65kzq23fg2he2',
      }]
    },
    'mantle-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'mantle16jpurfl30z7ejfnfry3l9fv9p65kzq23qzuydy',
      }]
    },
    'neutron-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'neutron16jpurfl30z7ejfnfry3l9fv9p65kzq236ewrgf',
      }]
    },
    'noble-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'noble16jpurfl30z7ejfnfry3l9fv9p65kzq23k9jf2q',
      }]
    },
    'omniflixhub-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'omniflix16jpurfl30z7ejfnfry3l9fv9p65kzq23rckc9s',
      }]
    },
    'onomy-mainnet-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'onomy16jpurfl30z7ejfnfry3l9fv9p65kzq23y8nhrt',
      }]
    },
    'osmosis-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'osmo16jpurfl30z7ejfnfry3l9fv9p65kzq23ka53yu',
      }]
    },
    'pacific-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'sei16jpurfl30z7ejfnfry3l9fv9p65kzq23n2kh50',
      }]
    },
    'passage-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'pasg16jpurfl30z7ejfnfry3l9fv9p65kzq23a77ml3',
      }]
    },
    'quasar-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'quasar16jpurfl30z7ejfnfry3l9fv9p65kzq23s9ault',
      }]
    },
    'regen-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'regen16jpurfl30z7ejfnfry3l9fv9p65kzq23pyvay2',
      }]
    },
    'saga-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'saga16jpurfl30z7ejfnfry3l9fv9p65kzq23q47n4g',
      }]
    },
    'sentinelhub-2': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'sent16jpurfl30z7ejfnfry3l9fv9p65kzq239a3ckp',
      }]
    },
    'shentu-2.2': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'shentu16jpurfl30z7ejfnfry3l9fv9p65kzq23kjrcqn',
      }]
    },
    'sommelier-3': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'somm16jpurfl30z7ejfnfry3l9fv9p65kzq23j6gdry',
      }]
    },
    'stafihub-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'stafi16jpurfl30z7ejfnfry3l9fv9p65kzq239dhtxk',
      }]
    },
    'stargaze-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'stars16jpurfl30z7ejfnfry3l9fv9p65kzq2326suel',
      }]
    },
    'stride-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'stride16jpurfl30z7ejfnfry3l9fv9p65kzq23ad8axz',
      }]
    },
    'teritori-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'tori16jpurfl30z7ejfnfry3l9fv9p65kzq23ujsgf7',
      }]
    },
    'umee-1': {
      affiliates: [{
        basisPointsFee: '100',
        address: 'umee16jpurfl30z7ejfnfry3l9fv9p65kzq23vs67ku',
      }]
    },
  },
};