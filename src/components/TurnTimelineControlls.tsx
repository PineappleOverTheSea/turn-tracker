import { useContext } from "react"
import { TrackedElementsContext } from "./contexts/TrackedElementsContext"
import { TRACKED_ELEMENTS_CONTEXT_ACTIONS } from "./reducers/TrackedElementsContextReducer"

const TurnTimelineControlls = () => {

    const {trackedElements, dispatchTrackedElementsAction, roundCount, setRoundCount} = useContext(TrackedElementsContext)

    const updatedState = [...trackedElements]
        const lastIsFirst = trackedElements[0]?.classList.includes("last")
        const lastIsLast = trackedElements[trackedElements.length-1]?.classList.includes("last")

    const nextTurn = () => {
        const element = updatedState.shift() 
        if(element)
            updatedState.push(element)

        dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.SET_ELEMENTS, elements: updatedState})
        if(updatedState.length < 2 || lastIsFirst)
            setRoundCount(roundCount+1)
    }

    const previousTurn = () => {
        if(!(roundCount === 1 && lastIsLast)){
            const element = updatedState.pop()
            if(element)
                updatedState.unshift(element)
        }
        dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.SET_ELEMENTS, elements: updatedState})

        if((updatedState.length < 2 || lastIsLast) && roundCount > 1){
            setRoundCount(roundCount-1)
        }
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