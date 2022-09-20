import { useContext, useReducer, useState } from "react";
import { creatureReducer, CREATURE_ACTIONS, INITIAL_STATE } from "./reducers/CreatureReducer";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext";
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "./reducers/TrackedCreaturesContextReducer";




const AddCreatureModal = () => {
    const {dispatchTrackedCreaturesAction} = useContext(TrackedCreaturesContext);

    const [newCreature, dispatchCreatureAction] = useReducer(creatureReducer, INITIAL_STATE)

    const initMod = Math.floor((newCreature.stats.dexterity - 10) / 2);

    const addCreature = () => {
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.ADD_CREATURE, creature: {
                ...newCreature,
                id: (Math.floor(Math.random() * 100)), //sukurti normalią ID implementaciją
                combatStats: {
                    ...newCreature.combatStats,
                    initiative: newCreature.combatStats.initiative + initMod
                }
            }
        })
    }
    
    const onSetHpMaximum = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber

        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: value});
        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP_MAX, value: value});
    }

    const onSetHp = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber

        if(value > newCreature.health.hitPointsMax){
            dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: value});
            dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP_MAX, value: value});
        }
        else dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: value});
    }

    const onSetStringValue = (actionType : string, e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        dispatchCreatureAction({type: actionType, value: value});
    }

    const onSetNumberValue = (actionType : string, e : React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber

        dispatchCreatureAction({type: actionType, value: value});
    }

    return (
        <div className="add-creature">
            <div className="add-creature-name">
                <div className="stat">
                    <input type="text" name="creature-name" id="creature-name" value={newCreature.name} onChange={e => onSetStringValue(CREATURE_ACTIONS.SET_NAME, e)} />
                </div>
            </div>
            <ul className="add-creature-health">
                <li className="stat">
                    <label htmlFor="">Maximum HP</label>
                    <input type="number" name="hit-point-maximum" id="hp-max" value={newCreature.health.hitPointsMax} min={1} max={9999} onChange={e => onSetHpMaximum(e)} />
                </li>
                <li className="stat">
                    <label htmlFor="">Current HP</label>
                    <input type="number" name="hit-points" id="hp" value={newCreature.health.hitPoints} min={0} max={newCreature.health.hitPointsMax} onChange={e => onSetHp(e)} />
                </li>
                <li className="stat">
                    <label htmlFor="">Temporary HP</label>
                    
                    <input type="number" name="hit-points-temporary" id="hp-temp" value={newCreature.health.hitPointsTemp} min={0} max={9999} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_HP_TEMP, e)} />
                </li>
            </ul>
            <ul className="add-creature-cmbt-stats">
                <li className="stat">
                    <label htmlFor="">Initiative</label>
                    <input type="number" name="initative" id="init" value={newCreature.combatStats.initiative} min={-9999} max={9999} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_INIT, e)} />
                    <div>{initMod >=0 ? "+" : "-"} {Math.abs(initMod)} = {newCreature.combatStats.initiative + initMod}</div> 
                </li>
                <li className="stat">
                    <label htmlFor="">Armor Class</label>
                    <input type="number" name="armor-class" id="ac" value={newCreature.combatStats.armorClass} min={0} max={9999} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_AC, e)}/>
                </li>
                <li className="stat">
                    <label htmlFor="">Speed</label>
                    <input type="number" name="speed" id="spd" value={newCreature.combatStats.speed} min={0} step={5} max={9999} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_SPD, e)}/>
                </li>
            </ul>
            <ul className="add-creature-stats">
                <li className="stat">
                    <label htmlFor="">Strength</label>
                    <input type="number" name="strength" id="str" value={newCreature.stats.strength} min={1} max={30} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_STR, e)} />
                </li>
                <li className="stat">
                    <label htmlFor="">Dexterity</label>
                    <input type="number" name="dexterity" id="dex" value={newCreature.stats.dexterity} min={1} max={30} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_DEX, e)} />
                </li>
                <li className="stat">
                    <label htmlFor="">Constitution</label>
                    <input type="number" name="constitution" id="con" value={newCreature.stats.constitution} min={1} max={30} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_CON, e)} />
                </li>
                <li className="stat">
                    <label htmlFor="">Inteligence</label>
                    <input type="number" name="inteligence" id="int" value={newCreature.stats.inteligence} min={1} max={30} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_INT, e)} />
                </li>
                <li className="stat">
                    <label htmlFor="">Wisdom</label>
                    <input type="number" name="wisdom" id="wis" value={newCreature.stats.wisdom} min={1} max={30} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_WIS, e)} />
                </li>
                <li className="stat">
                    <label htmlFor="">Charisma</label>
                    <input type="number" name="charisma" id="chr" value={newCreature.stats.charisma} min={1} max={30} onChange={e => onSetNumberValue(CREATURE_ACTIONS.SET_CHA, e)} />
                </li>
            </ul>
            <button onClick={addCreature}>Add Creature</button>
        </div>
        
    )
}

export default AddCreatureModal