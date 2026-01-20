
import React from 'react'
import { wagmiAdapter } from './config'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function Web3Provider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}
