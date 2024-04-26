import { ActionType } from '@bandit-network/react'
import { Action } from './Action'

export const Segment = ({
    actions,
    openApp,
}: {
    actions: Array<ActionType>
    openApp: any
}) => {
    return (
        <div className="flex">
            {actions.map((action: ActionType) => (
                <Action key={action.id} action={action} openApp={openApp} />
            ))}
        </div>
    )
}
