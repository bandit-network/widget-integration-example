import { ActionType } from '@bandit-network/react'

export const Action = ({
    action,
    openApp,
}: {
    action: ActionType
    openApp: any
}) => {
    const { status, claimablePoints, name, description, id, app } = action
    return (
        <div
            className="border rounded-xl p-5 cursor-pointer"
            onClick={() => {
                !status?.isCompleted && openApp(id, app)
            }}
        >
            <h1 className="font-bold">{name}</h1>
            <p className="text-xs mb-2">{description}</p>
            {claimablePoints && (
                <div className="font-bold">{claimablePoints} XP</div>
            )}
        </div>
    )
}
