import { useContext } from "react"
import { TrackedElementsContext } from "./contexts/TrackedElementsContext"
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "./reducers/TrackedElementsContextReducer"

const TurnTimelineControlls = () => {

    const {trackedElements, dispatchTrackedElementsAction, roundCount, setRoundCount} = useContext(TrackedElementsContext)

    const nextTurn = () => {
        dispatchTrackedElementsAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.TURN_FORWARD, elementAction: false})
        if(trackedElements[0].initiative < trackedElements[1].initiative)
            setRoundCount(roundCount+1)
    }

    const previousTurn = () => {
        dispatchTrackedElementsAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.TURN_BACKWARD, elementAction: false})
        if(trackedElements[0].initiative > trackedElements[trackedElements.length - 1].initiative && roundCount > 1)
            setRoundCount(roundCount-1)
        
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