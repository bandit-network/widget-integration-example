'use client'
import '@rainbow-me/rainbowkit/styles.css'

import {
    connectorsForWallets,
    getDefaultConfig,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { walletConnectWallet } from '@rainbow-me/rainbowkit/wallets'

import { defineChain } from 'viem'

import { getInjectedConnector, hasInjectedProvider } from '@/lib/rainbowUtils'
import { getWalletConnectConnector, Wallet } from '@rainbow-me/rainbowkit'

export interface MyWalletOptions {
    projectId: string
}

const isEmoneyInjected = hasInjectedProvider({
    namespace: 'enkrypt.providers.ethereum',
})
const shouldUseWalletConnect = !isEmoneyInjected

export const emoneyTestnet = defineChain({
    id: 4544,
    name: 'EMoney Testnet',
    network: 'emoney-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'EMoney',
        symbol: 'EMYC',
    },
    rpcUrls: {
        public: { http: ['https://testnet.emoney.network'] },
        default: { http: ['https://testnet.emoney.network'] },
    },
    blockExplorers: {
        default: {
            name: 'CoreDao',
            url: 'https://explore-stage.emoney.network/',
        },
        etherscan: {
            name: 'CoreDao',
            url: 'https://explore-stage.emoney.network/',
        },
    },
    testnet: true,
})

export const EMoney = ({ projectId }: MyWalletOptions): Wallet => ({
    id: 'emoney-wallet',
    name: 'EMoney Wallet',
    iconUrl:
        'https://imagedelivery.net/6iczWBYEbx_1dYNU7ek_bA/08a2e967-6d0b-4d46-4e24-84e3269c4900/medium',
    iconBackground: '#ffffff',
    downloadUrls: {
        chrome: 'https://chromewebstore.google.com/detail/emoney-chain/ndklagefmdogpfkffimjdnbnplllndic',
        qrCode: 'https://my-wallet/qr',
    },
    mobile: {
        getUri: (uri: string) => uri,
    },
    qrCode: {
        getUri: (uri: string) => uri,
        instructions: {
            learnMoreUrl: 'https://emoney.io/',
            steps: [
                {
                    description:
                        'We recommend putting EMoney Wallet on your home screen for faster access to your wallet.',
                    step: 'install',
                    title: 'Open the EMoney Wallet app',
                },
                {
                    description:
                        'After you scan, a connection prompt will appear for you to connect your wallet.',
                    step: 'scan',
                    title: 'Tap the scan button',
                },
            ],
        },
    },
    extension: {
        instructions: {
            learnMoreUrl: 'https://emoney.io/',
            steps: [
                {
                    description:
                        'We recommend pinning EMoney Wallet to your taskbar for quicker access to your wallet.',
                    step: 'install',
                    title: 'Install the EMoney Wallet extension',
                },
                {
                    description:
                        'Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.',
                    step: 'create',
                    title: 'Create or Import a Wallet',
                },
                {
                    description:
                        'Once you set up your wallet, click below to refresh the browser and load up the extension.',
                    step: 'refresh',
                    title: 'Refresh your browser',
                },
            ],
        },
    },
    createConnector: shouldUseWalletConnect
        ? getWalletConnectConnector({
              projectId,
          })
        : getInjectedConnector({
              namespace: 'enkrypt.providers.ethereum',
          }),
})

const rainbowConfig = getDefaultConfig({
    appName: 'Recommended',
    projectId: '600da6aac724cb2c05d52087cb405879',
    chains: [emoneyTestnet],
    ssr: true,
    wallets: [
        {
            groupName: 'Recommended',
            wallets: [EMoney, walletConnectWallet],
        },
    ],
})

const queryClient = new QueryClient()

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <WagmiProvider config={rainbowConfig as any}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default Providers
