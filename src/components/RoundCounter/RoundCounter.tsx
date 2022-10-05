import { useContext } from "react"
import { IRoundCounterFlag } from "../../interfaces/IRoundCounterFlag"
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext"
import { isRoundFlag } from "../utils/typeCheckers"

const RoundCounter = (props : any) =>{
    const {trackedCreatures} = useContext(TrackedCreaturesContext)
    const roundFlag = trackedCreatures.find(element => isRoundFlag(element)) as IRoundCounterFlag
    return(
        <div className="round-counter">
            <div>
                Current round:
            </div>
            <div>
                {roundFlag?.roundCount - 1 || 1}
            </div>
        </div>
    )
}

export default RoundCounter