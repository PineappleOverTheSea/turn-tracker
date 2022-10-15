import { useContext } from "react"
import { TrackedElementsContext } from "./contexts/TrackedElementsContext"
import { TRACKED_ELEMENTS_CONTEXT_ACTIONS } from "./reducers/TrackedElementsContextReducer"

const TurnTimelineControlls = () => {

    const {trackedElements, dispatchTrackedElementsAction, roundCount, setRoundCount} = useContext(TrackedElementsContext)

    const elements = [...trackedElements]

    const nextTurn = () => {
        let el = elements.shift()
        if(el)
            elements.push(el)
        if(elements[0].id === -100){
            el = elements.shift()
            if(el)
                elements.push(el)
            setRoundCount(roundCount+1)
        }
        dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.SET_ELEMENTS, elements: elements})
    }

    const previousTurn = () => {
        if(elements[elements.length - 1].id === -100 && roundCount === 1)
            return 0
            
        let el = elements.pop()
        if(el)
            elements.unshift(el)
        if(elements[0].id === -100){
            el = elements.pop()
            if(el)
                elements.unshift(el)
            setRoundCount(roundCount-1)
        }
        dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.SET_ELEMENTS, elements: elements})
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