import React, { useContext, useReducer } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { TrackedElementsContext } from "../contexts/TrackedElementsContext";
import { TRACKED_ELEMENTS_CONTEXT_ACTIONS } from "../reducers/TrackedElementsContextReducer";
import { generateRandomId } from "../utils/utils";

const CreatureMinified = (props : ICreature) => {
    const creature = {...props}

    const {dispatchTrackedElementsAction} = useContext(TrackedElementsContext);

    const die = () => {
        dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.REMOVE_ELEMENT, elements: [creature]})
    }

    const select = (e : React.MouseEvent) => {
        if(!(e.target instanceof HTMLButtonElement))
        dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.SELECT_ELEMENT, elements: [creature]})
    }

    const setClassNames = () => {
        const names = creature.classList
        let nameString = "";
        if(names)
            for(const cname of names){
                nameString += ` ${cname}`;
            }
        return nameString
    }

    return(
        <div className={`creature-minified${creature.placeholder === true ? " placeholder" : ""}${creature.hitPoints === 0 ? " dead" : ""}${setClassNames()}`} onClick={e => select(e)}>
            <div className="creature-nameline">
                <div className="creature-minified-name">{props.name}</div>
                <button onClick={die}>Kill</button>
            </div>
            <ul>
                <li>
                    <div>Init</div>
                    <div>{props.initiative}</div>
                </li>
                <li>
                    <div>HP</div>
                    <div>{props.hitPoints}</div>
                </li>
                <li>
                    <div>AC</div>
                    <div>{props.armorClass}</div>
                </li>
            </ul>
        </div>
    )
}

//naudojami tam kad placeholder padarą būtų paprasta pridėti

CreatureMinified.defaultProps = {
    classList: [],
    id: generateRandomId(),
    name: "Creature",
    strength: 10,
    dexterity: 10, 
    constitution: 10, 
    inteligence: 10,
    wisdom: 10, 
    charisma: 10,
    hitPoints: 10,
    hitPointsMax: 10,
    hitPointsTemp: 0,
    initiative: 0,
    armorClass: 10,
    speed: 30
}

export default CreatureMinified