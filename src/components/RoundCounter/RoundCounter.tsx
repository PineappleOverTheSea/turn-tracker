import { useContext } from "react"
import { IRoundCounterFlag } from "../../interfaces/IRoundCounterFlag"
import { TrackedElementsContext } from "../contexts/TrackedElementsContext"
import { isRoundFlag } from "../utils/typeCheckers"

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