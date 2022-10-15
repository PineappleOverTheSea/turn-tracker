import { useContext } from "react"
import { TrackedElementsContext } from "../contexts/TrackedElementsContext"

const RoundCounter = (props : any) =>{
    const {trackedElements, roundCount} = useContext(TrackedElementsContext)
    return(
        <div className="round-counter">
            <div>
                Current round:
            </div>
            <div className="round-number">
                {roundCount}
            </div>
        </div>
    )
}

export default RoundCounter