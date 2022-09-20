import { useContext, useReducer } from "react";
import { ICreature } from "../interfaces/ICreature";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext";
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "./reducers/TrackedCreaturesContextReducer";

const CreatureMinified = (props : ICreature) => {
    const creature = {...props}

    const {dispatchTrackedCreaturesAction} = useContext(TrackedCreaturesContext);

    const die = () => {
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.REMOVE_CREATURE, creature: creature})
    }
    return(
        <div className={`creature-minified ${creature.placeholder === true ? "placeholder" : ""} ${props.health.hitPoints === 0 ? "dead" : ""}`}>
            <div className="creature-minified-name">{props.name}</div>
            <button onClick={die}>Kill</button>
            <ul>
                <li>
                    <div>Init</div>
                    <div>{props.combatStats.initiative}</div>
                </li>
                <li>
                    <div>HP</div>
                    <div>{props.health.hitPoints}</div>
                </li>
                <li>
                    <div>AC</div>
                    <div>{props.combatStats.armorClass}</div>
                </li>
            </ul>
        </div>
    )
}

//naudojami tam kad placeholder padarą būtų paprasta pridėti

CreatureMinified.defaultProps = {
    name: "Placeholder",
    stats: {
        strength: 0,
        dexterity: 0, 
        constitution: 0, 
        inteligence: 0,
        wisdom: 0, 
        charisma: 0
    },
    health: {
        hitPoints: 0,
        hitPointsMax: 0,
        hitPointsTemp: 0
    },
    combatStats:{
        initiative: 0,
        armorClass: 0,
        speed: 0
    }
}

export default CreatureMinified