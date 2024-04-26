import { BanditContextProvider, SupportedChains } from '@bandit-network/react'
import { ReactNode } from 'react'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { config } from './Provider.tsx'

export const BanditProvider = ({ children }: { children: ReactNode }) => {
    const { openConnectModal } = useConnectModal()
    return (
        <BanditContextProvider
            apiKey="c8a4eaabea66423d853fb039d2965195"
            cluster="devnet"
            walletSettings={{
                evm: {
                    config: config,
                    openConnectModal: () =>
                        openConnectModal && openConnectModal(),
                },
                enabledChains: [SupportedChains.Evm],
            }}
        >
            {children}
        </BanditContextProvider>
    )
}
