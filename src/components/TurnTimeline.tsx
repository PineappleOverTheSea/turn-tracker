import { useContext} from "react"
import {isCreature, isFlag, isPlayer} from "./utils/typeCheckers"
import { TrackedElementsContext } from "./contexts/TrackedElementsContext"
import Creature from "./Creature/Creature";
import CreatureMinified from "./Creature/CreatureMinified";
import RoundCounterFlag from "./RoundCounter/RoundCounterFlag";
import TurnTimelineControlls from "./TurnTimelineControlls";


const TurnTimeline = () => {
    const {trackedElements, roundCount} = useContext(TrackedElementsContext);
    const minifiedElements : JSX.Element[] = []
    const elements = [...trackedElements]
    let flagIndex : number

    const fillMinifiedElements = () =>{
        for(const element of elements){
            if(isCreature(element)){
                minifiedElements.push(
                    <CreatureMinified
                        key={element.id}
                        id={element.id}
                        classList={element.classList}
                        name={element.name}
                        strength={element.strength}
                        dexterity={element.dexterity}
                        constitution={element.constitution}
                        inteligence={element.inteligence}
                        wisdom={element.wisdom}
                        charisma={element.charisma}
                        hitPoints={element.hitPoints}
                        hitPointsMax={element.hitPointsMax}
                        hitPointsTemp={element.hitPointsTemp}
                        initiative={element.initiative}
                        armorClass={element.armorClass}
                        speed={element.speed}
                    />
                )
            }
            // else if(isPlayer(element)){

            // }
            else if(isFlag(element)){
                if(minifiedElements.length === 0)
                    flagIndex = 0
                minifiedElements.push(
                    <RoundCounterFlag 
                        key={element.id}
                        id={element.id}
                        name={element.name}
                        initiative={element.initiative}
                        roundCount={roundCount + 1}
                    />
                )
            }
        }
    }

    const moveFlag = () =>{
        if(flagIndex === 0){
            let flag = minifiedElements.shift()
            if(flag)
                minifiedElements.push(flag)
        }
    }

    const adjustMinifiedElements = () =>{
        if(trackedElements.length > 2){
            fillMinifiedElements()
            moveFlag()
        }
        else if(trackedElements.length > 1){
            fillMinifiedElements()
            moveFlag()
            minifiedElements.push(<CreatureMinified key={"placeholder-small"} placeholder={true} />)
        }
    }

    adjustMinifiedElements()

    return(
        <div className="turn-timeline">
            <div className="title">Currently active:</div>
            <div className="active-creature-holder">
                {trackedElements.length > 0 ? <Creature {...minifiedElements[0].props} /> : <Creature key={"placeholder-big"} placeholder={true} /> }
            </div>
            <div className="title">Coming up:</div>
            <div className="minified-creatures">
                {minifiedElements.length > 1 ? minifiedElements.slice(1) : <CreatureMinified key={"placeholder-small"} placeholder={true} />}
            </div>
            <TurnTimelineControlls />
        </div>
    );
}

export default TurnTimeline