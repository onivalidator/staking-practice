'use client';

import React, { useEffect } from 'react';
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import { wallets } from "cosmos-kit";
import "@interchain-ui/react/styles";
import { ThemeProvider } from '@interchain-ui/react';
import * as d3Scale from 'd3-scale'; // Import d3-scale

const walletConnectOptions = {
  signClient: {
    projectId: 'your_project_id',
    relayUrl: 'wss://relay.walletconnect.org',
    metadata: {
      name: 'Your App Name',
      description: 'Your app description',
      url: 'https://yourapp.com',
      icons: ['https://yourapp.com/icon.png']
    }
  }
};

export function ClientProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Example usage of d3-scale
    const linearScale = d3Scale.scaleLinear().domain([0, 100]).range([0, 1]);
    console.log('D3 Scale example:', linearScale(50)); // This will log 0.5
  }, []);

  return (
    <ThemeProvider
      themeDefs={[
        {
          name: "custom",
          vars: {
            colors: {
              primary500: "#FF4B4B",
            },
          },
        },
      ]}
      customTheme="custom"
    >
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={wallets}
        walletConnectOptions={walletConnectOptions}
      >
        {children}
      </ChainProvider>
    </ThemeProvider>
  );
}