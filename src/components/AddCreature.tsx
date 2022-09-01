import { useContext, useReducer, useState } from "react";
import { creatureReducer, CREATURE_ACTIONS, INITIAL_STATE } from "./actions/CreatureReducer";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext";




const AddCreatureModal = (props: any) => {
    const {trackedCreatures, setTrackedCreatures} = useContext(TrackedCreaturesContext);

    const [newCreature, dispatchCreatureAction] = useReducer(creatureReducer, INITIAL_STATE)

    const initMod = Math.floor((newCreature.stats.dexterity-10)/2);

    const addCreature = () => {
        setTrackedCreatures([...trackedCreatures, {
            ...newCreature,
            id: (Math.floor(Math.random()*100)), //sukurti normalią ID implementaciją
            combatStats: {
                ...newCreature.combatStats,
                initiative: newCreature.combatStats.initiative + initMod
            }
        }
        ]);
    }
    
    const onSetHpMaximum = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: value});
        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP_MAX, value: value});
    }
    const onSetHp = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if(value > newCreature.health.hitPointsMax){
            dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: value});
            dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP_MAX, value: value});
        }
        else dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: value});
    }
    const onSetStringValue = (e : React.ChangeEvent<HTMLInputElement>, actionType : string) => {
        const value = e.target.value;
        dispatchCreatureAction({type: actionType, value: value});
    }
    const onSetNumberValue = (e : React.ChangeEvent<HTMLInputElement>, actionType : string) => {
        const value = parseInt(e.target.value);
        dispatchCreatureAction({type: actionType, value: value});
    }

    return (
        <div className="add-creature">
            <div className="add-creature-info">
                <div className="stat">
                    <input type="text" name="creature-name" id="creature-name" value={newCreature.name} onChange={e => onSetStringValue(e, CREATURE_ACTIONS.SET_NAME)} />
                </div>
            </div>
            <div className="add-creature-health">
                <div className="stat">
                    <label htmlFor="">Maximum HP</label>
                    <input type="number" name="hit-point-maximum" id="hp-max" value={newCreature.health.hitPointsMax} min={1} onChange={e => onSetHpMaximum(e)} />
                </div>
                <div className="stat">
                    <label htmlFor="">Current HP</label>
                    <input type="number" name="hit-points" id="hp" value={newCreature.health.hitPoints} min={0} max={newCreature.health.hitPointsMax} onChange={e => onSetHp(e)} />
                </div>
                <div className="stat">
                    <label htmlFor="">Temporary HP</label>
                    <input type="number" name="hit-points-temporary" id="hp-temp" value={newCreature.health.hitPointsTemp} min={0} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_HP_TEMP)} />
                </div>
            </div>
            <div className="add-creature-cmbt-stats">
                <div className="stat">
                    <label htmlFor="">Initiative</label>
                    <input type="number" name="initative" id="init" value={newCreature.combatStats.initiative} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_INIT)} />
                    <div>{initMod >=0 ? "+" : "-"} {Math.abs(initMod)} = {newCreature.combatStats.initiative +  initMod}</div> 
                </div>
                <div className="stat">
                    <label htmlFor="">Armor Class</label>
                    <input type="number" name="armor-class" id="ac" value={newCreature.combatStats.armorClass} min={0} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_AC)}/>
                </div>
                <div className="stat">
                    <label htmlFor="">Speed</label>
                    <input type="number" name="speed" id="spd" value={newCreature.combatStats.speed} min={0} step={5} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_SPD)}/>
                </div>
            </div>
            <div className="add-creature-stats">
                <div className="stat">
                    <label htmlFor="">Strength</label>
                    <input type="number" name="strength" id="str" value={newCreature.stats.strength} min={1} max={30} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_STR)} />
                </div>
                <div className="stat">
                    <label htmlFor="">Dexterity</label>
                    <input type="number" name="dexterity" id="dex" value={newCreature.stats.dexterity} min={1} max={30} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_DEX)} />
                </div>
                <div className="stat">
                    <label htmlFor="">Constitution</label>
                    <input type="number" name="constitution" id="con" value={newCreature.stats.constitution} min={1} max={30} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_CON)} />
                </div>
                <div className="stat">
                    <label htmlFor="">Inteligence</label>
                    <input type="number" name="inteligence" id="int" value={newCreature.stats.inteligence} min={1} max={30} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_INT)} />
                </div>
                <div className="stat">
                    <label htmlFor="">Wisdom</label>
                    <input type="number" name="wisdom" id="wis" value={newCreature.stats.wisdom} min={1} max={30} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_WIS)} />
                </div>
                <div className="stat">
                    <label htmlFor="">Charisma</label>
                    <input type="number" name="charisma" id="chr" value={newCreature.stats.charisma} min={1} max={30} onChange={e => onSetNumberValue(e, CREATURE_ACTIONS.SET_CHA)} />
                </div>
            </div>
            <button onClick={addCreature}>Add Creature</button>
        </div>
    )
}

export default AddCreatureModal