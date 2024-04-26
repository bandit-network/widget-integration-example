import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
    Campaign,
    Leaderboard,
    Referral,
    RenderArgsType,
} from '@bandit-network/react'

export const Home = () => {
    return (
        <main className="p-20">
            <div className="flex justify-end">
                <ConnectButton />
            </div>

            <div className="mt-6">
                <Leaderboard
                    id={'41d14912921a410dbb7cfef6e49a053a'}
                    render={(args) => {
                        const { leaderboardQuery, userQuery } = args
                        const data = leaderboardQuery?.data
                        console.log(data)

                        function getTotalPoints() {
                            return data?.pages ? data.pages[0].totalXp : 0
                        }

                        function getTotalUsers() {
                            return data?.pages ? data.pages[0].totalUser : 0
                        }

                        const leaderBoardList = data?.pages[0].leaderboard || []
                        return (
                            <div className="mt-6">
                                <div className="flex">
                                    <div className="rounded-xl border-2 p-6 shadow-xl">
                                        <h1>Total points</h1>
                                        <p className="text-xl font-bold">
                                            {getTotalPoints()}
                                        </p>
                                    </div>
                                    <div className="rounded-xl border-2 p-6 shadow-xl ml-2">
                                        <h1>Total users</h1>
                                        <p className="text-xl font-bold">
                                            {getTotalUsers()}
                                        </p>
                                    </div>
                                    <div className="rounded-xl border-2 p-6 shadow-xl ml-2">
                                        <h1>My Rank</h1>
                                        <p className="text-xl font-bold">
                                            {userQuery?.data?.rank}
                                        </p>
                                    </div>
                                    <div className="rounded-xl border-2 p-6 shadow-xl ml-2">
                                        <h1>My Total XP</h1>
                                        <p className="text-xl font-bold">
                                            {userQuery?.data?.xp}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <h1 className="text-xl mb-8 font-bold">
                                        Leaderboard
                                    </h1>
                                    <div className="p-8 border-2 rounded-xl shadow-xl">
                                        <table className="border-collapse table-fixed w-full text-sm">
                                            <thead>
                                                <tr>
                                                    <th className="border-b font-medium p-4 pl-8 pt-0 pb-3  text-left">
                                                        Rank
                                                    </th>
                                                    <th className="border-b font-medium p-4 pl-8 pt-0 pb-3  text-left">
                                                        User
                                                    </th>
                                                    <th className="border-b font-medium p-4 pl-8 pt-0 pb-3  text-left">
                                                        Xp
                                                    </th>
                                                </tr>
                                            </thead>
                                            {leaderBoardList.map((entry) => (
                                                <tr>
                                                    <td className="border-b border-slate-100  p-4 pl-8  ">
                                                        {entry.rank}
                                                    </td>
                                                    <td className="border-b border-slate-100  p-4 pl-8  ">
                                                        {entry.walletAddress}
                                                    </td>
                                                    <td className="border-b border-slate-100  p-4 pl-8  ">
                                                        {entry.xp}
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                        <div className="flex justify-center cursor-pointer">
                                            <button
                                                className="mt-4"
                                                onClick={() => {
                                                    leaderboardQuery.fetchNextPage()
                                                }}
                                            >
                                                Load more
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                />
            </div>

            <div className="py-10 ">
                <h1 className="text-xl font-bold mb-8">Campaigns</h1>
                <div className="flex">
                    <Campaign
                        campaignId={118}
                        render={(args: RenderArgsType) => {
                            const { isLoading, campaign, openApp } = args

                            if (isLoading) return <div>Loading...</div>
                            return (
                                <a href="/campaign">
                                    <div className="p-10 border-2 rounded-xl shadow-xl cursor-pointer">
                                        {/*//@ts-ignore,*/}
                                        <div className="flex">
                                            {/*//@ts-ignore,*/}
                                            <img
                                                src={`${campaign?.profile?.image?.profile}/small`}
                                            />
                                            {/*//@ts-ignore,*/}
                                            <div className="flex flex-col justify-center">
                                                {/*//@ts-ignore,*/}
                                                <h1 className="ml-1 font-bold text-lg">
                                                    {campaign.profile.name}
                                                </h1>
                                                {/*//@ts-ignore,*/}
                                                <p className="ml-1 text-xs">
                                                    {
                                                        campaign.profile
                                                            .description
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        }}
                    />
                </div>
            </div>
            <div className="py-20 ">
                <h1 className="text-xl font-bold mb-8">Referral</h1>
                <div className="">
                    <Referral id="2642f7b4abf94e109d6ff0a83be49429" />
                </div>
            </div>
        </main>
    )
}
