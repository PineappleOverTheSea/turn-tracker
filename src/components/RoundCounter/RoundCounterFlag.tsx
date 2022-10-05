import { ICreature } from "../../interfaces/ICreature"
import { IRoundCounterFlag } from "../../interfaces/IRoundCounterFlag"

const RoundCounterFlag = (props : IRoundCounterFlag) =>{
    const roundCount = props.roundCount
    let suffix : string
    
    switch (roundCount) {
        case 2:
            suffix = "nd"
            break
        case 3:
            suffix = "rd"
            break
        default: suffix = "th"
    }

    const renderer = () : string => {
        return `${roundCount}${suffix} round`
    }

    return(
        <div className="round-counter-flag">
            {renderer()}
        </div>
    )
}

export default RoundCounterFlag