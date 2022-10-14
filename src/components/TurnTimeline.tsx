import { useContext } from "react"
import { ICreature } from "../interfaces/ICreature";
import {isCreature, isRoundFlag} from "./utils/typeCheckers"
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext"
import Creature from "./Creature/Creature";
import CreatureMinified from "./CreatureMinified";
import RoundCounterFlag from "./RoundCounter/RoundCounterFlag";
import TurnTimelineControlls from "./TurnTimelineControlls";
import { generateRandomId } from "./utils/utils";
import { IRoundCounterFlag } from "../interfaces/IRoundCounterFlag";

const TurnTimeline = () => {
    const {trackedCreatures} = useContext(TrackedCreaturesContext);
    const minifiedElements : (JSX.Element)[] = []

    const fillMinifiedElements = () =>{
        for(const element of trackedCreatures){
            if(isCreature(element)){
                minifiedElements.push(
                    <CreatureMinified
                        key={element.id}
                        id={element.id}
                        classList={element.classList}
                        name={element.name}
                        stats={element.stats}
                        health={element.health}
                        combatStats={element.combatStats}
                    />
                )
            }
            else if(isRoundFlag(element)){
                minifiedElements.push(
                    <RoundCounterFlag key={element.id} roundCount={element.roundCount} />
                )
            }
        }
    }

    const adjustMinifiedElements = () =>{
        if(trackedCreatures.length > 2){
            fillMinifiedElements()
        }
        else if(trackedCreatures.length > 1){
            fillMinifiedElements()
            minifiedElements.push(<CreatureMinified key={-1} id={-1} placeholder={true} />)
        }
        else minifiedElements.push(<CreatureMinified key={-1} id={-1} placeholder={true} />)
    }

    adjustMinifiedElements()

    return(
        <div className="turn-timeline">
            <div className="title">Currently active:</div>
            <div className="active-creature-holder">
                {trackedCreatures.length ? <Creature {...minifiedElements[0].props} /> : <Creature placeholder={true} /> }
            </div>
            <div className="title">Coming up:</div>
            <div className="minified-creatures">
                {minifiedElements.length > 1 ? minifiedElements.slice(1) : minifiedElements}
            </div>
            <TurnTimelineControlls />
        </div>
    );
}

export default TurnTimeline