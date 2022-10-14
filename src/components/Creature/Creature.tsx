import StatTable from "./StatTable"
import HealthCounter from "./HealthCounter";
import CombatStatTable from "./CombatStatTable";
import { ICreature } from "../../interfaces/ICreature";
import { useContext } from "react";
import { TrackedElementsContext } from "../contexts/TrackedElementsContext";
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "../reducers/TrackedElementsContextReducer";
import { CREATURE_ACTIONS } from "../reducers/CreatureReducer";
import { IElement } from "../../interfaces/IElement";
import { generateRandomId } from "../utils/utils";

const Creature = (props : ICreature) => {
    let creature = {...props}

    const {dispatchTrackedElementsAction: dispatchTrackedCreaturesAction} = useContext(TrackedElementsContext)

    const die = () => {
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.REMOVE_CREATURE, elements: [creature]})
    }

    //PALIKTI KAIP YRA, TURI BŪTI IMPLEMENTUOTA KAIP FUNKCIJA KITAIP ATSIRANDA REDUCER CHAINING

    const updateCreature = (valueType : string, value : string | number) : ICreature => {
        switch (valueType) {
            case CREATURE_ACTIONS.SET_NAME: {
                return creature = {
                    ...creature,
                    name: value as string
                }
            }
            case CREATURE_ACTIONS.SET_HP: {
                return creature = {
                    ...creature,
                    hitPoints: value as number
                }
    
            }
            case CREATURE_ACTIONS.SET_HP_MAX: {
                return creature = {
                    ...creature,
                    hitPointsMax: value as number
                }
    
            }
            case CREATURE_ACTIONS.SET_HP_TEMP: {
                return creature = {
                    ...creature,
                    hitPointsTemp: value as number
                }    
            }
            case CREATURE_ACTIONS.SET_INIT: {
                return creature = {
                    ...creature,
                    initiative: value as number
                }    
            }
            case CREATURE_ACTIONS.SET_AC: {
                return creature = {
                    ...creature,
                    armorClass: value as number
                }    
            }
            case CREATURE_ACTIONS.SET_SPD: {
                return creature = {
                    ...creature,
                    speed: value as number
                }    
            }
            case CREATURE_ACTIONS.SET_STR: {
                return creature = {
                    ...creature,
                    strength: value as number
                }    
            }
            case CREATURE_ACTIONS.SET_DEX: {
                return creature = {
                    ...creature,
                    dexterity: value as number
                }    
            }
            case CREATURE_ACTIONS.SET_CON: {
                return creature = {
                    ...creature,
                    constitution: value as number
                }    
            }
            case CREATURE_ACTIONS.SET_INT: {
                return creature = {
                    ...creature,
                    inteligence: value as number 
                }    
            }
            case CREATURE_ACTIONS.SET_WIS: {
                return creature = {
                    ...creature,
                    wisdom: value as number
                }    
            }
            case CREATURE_ACTIONS.SET_CHA: {
                return creature = {
                    ...creature,
                    charisma: value as number
                }    
            }
            case CREATURE_ACTIONS.SET_CLASSLIST: {
                return{
                    ...creature,
                    classList: [
                        ...creature.classList,
                        value as string
                    ]
                }
            }
            default: throw Error("Invalid creature value update!");
        }
    }
    
    return(
        <div className={`creature${creature.placeholder === true ? " placeholder" : ""}${creature.hitPoints === 0 ? " dead" : ""}`}>
            <div className="creature-nameline">
                <div className="creature-name">{creature.name}</div>
                <button className="kill-creature" onClick={die}>Kill</button>
            </div>
            <HealthCounter creature={creature} updateCreature={updateCreature}/>
            <CombatStatTable creature={creature} updateCreature={updateCreature} />
            <StatTable creature={creature} updateCreature={updateCreature}/>
        </div>
    )
}


//naudojami tam kad placeholder padarą būtų paprasta pridėti

Creature.defaultProps = {
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

export default Creature