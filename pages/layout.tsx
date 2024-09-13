import * as React from 'react';
import { Inter } from "next/font/google";
import '../styles/globals.css';
import { ClientProviders } from '../components/ClientProviders';

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <ClientProviders>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ClientProviders>
  );
}