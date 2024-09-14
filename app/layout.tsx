'use client';

import * as React from 'react';
import { ChainProvider } from '@cosmos-kit/react'
import { chains, assets } from 'chain-registry'
import { wallets } from "cosmos-kit";
import "@interchain-ui/react/styles";
import { ThemeProvider } from '@interchain-ui/react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
}

const cosmosChains = chains.filter((chain) => chain.chain_name === 'cosmoshub');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          themeDefs={[
            {
              name: "custom",
              vars: {
                colors: {
                  primary500: "#FF4B4B",
                },
                // Add more custom variables as needed
              },
            },
          ]}
          customTheme="custom"
        >
          <ChainProvider
            chains={chains} // supported chains
            assetLists={assets} // supported asset lists
            wallets={wallets} // supported wallets
            walletConnectOptions={walletConnectOptions}
          >
            {children}
          </ChainProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
