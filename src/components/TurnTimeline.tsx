import { useContext, useState } from "react"
import { ICreature } from "../interfaces/ICreature";
import {isCreature, isRoundFlag} from "./utils/typeCheckers"
import { TrackedElementsContext } from "./contexts/TrackedElementsContext"
import Creature from "./Creature/Creature";
import CreatureMinified from "./Creature/CreatureMinified";
import RoundCounterFlag from "./RoundCounter/RoundCounterFlag";
import TurnTimelineControlls from "./TurnTimelineControlls";
import { generateRandomId } from "./utils/utils";
import { IRoundCounterFlag } from "../interfaces/IRoundCounterFlag";
import { IElement } from "../interfaces/IElement";
import { TRACKED_ELEMENTS_CONTEXT_ACTIONS } from "./reducers/TrackedElementsContextReducer";

const TurnTimeline = () => {
    const {trackedElements, dispatchTrackedElementsAction, roundCount} = useContext(TrackedElementsContext);
    const minifiedElements : JSX.Element[] = []
    const initiatives : number[] = []
    const inverseElements : IElement[] = []
    const elements = [...trackedElements]

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
            initiatives.push(element.initiative)
            inverseElements.unshift(element)
        }
    }

    const insertFlag = () =>{
        const flag = <RoundCounterFlag key={"flag"} roundCount={roundCount + 1}/>
        let firstElemIndex = elements.findIndex(el => el.classList.includes("first"))
        let lastElemIndex = elements.findIndex(el => el.classList.includes("last"))

        if(firstElemIndex === -1){
            if(lastElemIndex !== -1){
                if(lastElemIndex !== 0)
                    firstElemIndex = lastElemIndex -1
                else firstElemIndex = elements.length - 1
            }
            else{
                const maxInit = Math.max.apply(Math, initiatives)
                firstElemIndex = inverseElements.findIndex(el => el.initiative === maxInit)
                firstElemIndex = elements.length - 1 - firstElemIndex
            }
            const markedElement = elements[firstElemIndex]
            markedElement.classList = [...markedElement.classList, "first"]
            dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [markedElement]})
        }
        if(lastElemIndex === -1 && trackedElements.length > 1){
            if(firstElemIndex !== -1){
                if(firstElemIndex !== 0)
                    lastElemIndex = firstElemIndex - 1
                else lastElemIndex = elements.length -1
            }
            else{
                const minInit = Math.min.apply(Math, initiatives)
                lastElemIndex = inverseElements.findIndex(el => el.initiative === minInit)
                lastElemIndex = inverseElements.length - 1 - lastElemIndex
            }

            const markedElement = elements[lastElemIndex]

            markedElement.classList = [...markedElement.classList, "last"]
            dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [markedElement]})
        }
        if(firstElemIndex !== -1 && lastElemIndex !== -1){
            minifiedElements.splice(lastElemIndex + 1, 0, flag)
        }
        else{
            minifiedElements.splice(firstElemIndex + 1, 0, flag)
        }

    }

    const adjustMinifiedElements = () =>{
        if(trackedElements.length > 1){
            fillMinifiedElements()
            // insertFlag()
        }
        else if(trackedElements.length > 0){
            fillMinifiedElements()
            // insertFlag()
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
                {minifiedElements.length > 0 ? minifiedElements.slice(1) : <CreatureMinified key={"placeholder-small"} placeholder={true} />}
            </div>
            <TurnTimelineControlls />
        </div>
    );
}

export default TurnTimeline