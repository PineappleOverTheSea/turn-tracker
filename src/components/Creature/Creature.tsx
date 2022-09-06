import StatTable from "./StatTable"
import HealthCounter from "./HealthCounter";
import CombatStatTable from "./CombatStatTable";
import { ICreature } from "../../interfaces/ICreature";
import { CREATURE_ACTIONS } from "../reducers/CreatureReducer";
import { useContext } from "react";
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext";
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "../reducers/TrackedCreaturesContextReducer";

const Creature = (props : ICreature) => {
    let creature = {...props}

    const {dispatchTrackedCreaturesAction} = useContext(TrackedCreaturesContext)

    const die = () => {
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.REMOVE_CREATURE, creature: creature})
    }

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
                    health: {
                        ...creature.health,
                        hitPoints: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_HP_MAX: {
                return creature = {
                    ...creature,
                    health: {
                        ...creature.health,
                        hitPointsMax: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_HP_TEMP: {
                return creature = {
                    ...creature,
                    health: {
                        ...creature.health,
                        hitPointsTemp: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_INIT: {
                return creature = {
                    ...creature,
                    combatStats:{
                        ...creature.combatStats,
                        initiative: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_AC: {
                return creature = {
                    ...creature,
                    combatStats:{
                        ...creature.combatStats,
                        armorClass: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_SPD: {
                return creature = {
                    ...creature,
                    combatStats:{
                        ...creature.combatStats,
                        speed: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_STR: {
                return creature = {
                    ...creature,
                    stats:{
                        ...creature.stats,
                        strength: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_DEX: {
                return creature = {
                    ...creature,
                    stats:{
                        ...creature.stats,
                        dexterity: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_CON: {
                return creature = {
                    ...creature,
                    stats:{
                        ...creature.stats,
                        constitution: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_INT: {
                return creature = {
                    ...creature,
                    stats:{
                        ...creature.stats,
                        inteligence: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_WIS: {
                return creature = {
                    ...creature,
                    stats:{
                        ...creature.stats,
                        wisdom: value as number
                    }
                }
    
            }
            case CREATURE_ACTIONS.SET_CHA: {
                return creature = {
                    ...creature,
                    stats:{
                        ...creature.stats,
                        charisma: value as number
                    }
                }
    
            }
            default: throw Error("Invalid creature value update!");
        }
    }
    
    return(
        <div className={`creature ${creature.health.hitPoints === 0 ? "dead" : ""}`}>
            <div className="creature-name">{creature.name}</div>
            <button className="kill-creature" onClick={die}>Kill</button>
            <HealthCounter creature={creature} updateCreature={updateCreature}/>
            <CombatStatTable creature={creature} updateCreature={updateCreature} />
            <StatTable creature={creature} updateCreature={updateCreature}/>
        </div>
    )
}

export default Creature