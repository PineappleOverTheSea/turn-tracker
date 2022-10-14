import { useContext } from "react"
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext"
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "./reducers/TrackedCreaturesContextReducer"

const TurnTimelineControlls = () => {

    const {dispatchTrackedCreaturesAction} = useContext(TrackedCreaturesContext)

    const nextTurn = () => {
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.TURN_FORWARD, creatureAction: false})
    }

    const previousTurn = () => {
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.TURN_BACKWARD, creatureAction: false})
        
    }

    return (
        <div className="turn-timeline-controls">
            <div className="change-turn">
                <button className="nextTurn" onClick={nextTurn}>Next<br/>Turn</button>
                <button className="previousTurn" onClick={previousTurn}>Previous<br/>Turn</button>
            </div>
        </div>
    )
}

export default TurnTimelineControlls