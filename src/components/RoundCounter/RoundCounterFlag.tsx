import { ICreature } from "../../interfaces/ICreature"
import { IRoundCounterFlag } from "../../interfaces/IRoundCounterFlag"
import { generateRandomId } from "../utils/utils"

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

    return(
        <div className="round-counter-flag">
            {`${roundCount}${suffix} round`}
        </div>
    )
}

RoundCounterFlag.defaultProps = {
    id: -100,
    classList: ["round-counter-flag"],
    name: "RoundFlag",
    initiative: -1,
    roundCount: 2
}

export default RoundCounterFlag