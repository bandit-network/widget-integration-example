import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Campaign, RenderArgsType } from '@bandit-network/react'
import { Segment } from './Segment'
export const CampaignComponent = () => {
    return (
        <main>
            <div className="p-20">
                <div className="flex justify-end">
                    <ConnectButton />
                </div>
                <div className=" flex">
                    <Campaign
                        campaignId={118}
                        render={(args: RenderArgsType) => {
                            const { isLoading, campaign, openApp } = args

                            if (isLoading) return <div>Loading...</div>
                            return (
                                <div className="mb-2">
                                    {campaign &&
                                        campaign?.segments.map(
                                            ({ id, actions }) => (
                                                <Segment
                                                    key={id}
                                                    actions={actions}
                                                    openApp={openApp}
                                                />
                                            )
                                        )}
                                </div>
                            )
                        }}
                    />
                </div>
            </div>
        </main>
    )
}
