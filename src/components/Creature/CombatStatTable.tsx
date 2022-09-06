import { useContext } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext";
import { CREATURE_ACTIONS } from "../reducers/CreatureReducer";
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "../reducers/TrackedCreaturesContextReducer";

const CombatStatTable = (props : {creature : ICreature, updateCreature : (valueType: string, value: string | number) => ICreature}) => {
    const {dispatchTrackedCreaturesAction} = useContext(TrackedCreaturesContext)

    const combatStats = props.creature.combatStats;
    const updateCreature = props.updateCreature


    const onValueChanged = (valueType : string, e : React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber

        const updatedCreature = updateCreature(valueType, value)
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.UPDATE_CREATURE, creature: updatedCreature});
    }
    
    return(
        <div className="combat-stat-table">
            <div>
                <label htmlFor="">Initiative</label>
                <input type="number" name="" id="" value={combatStats.initiative} min={9999} max={9999} onChange={e => onValueChanged(CREATURE_ACTIONS.SET_INIT, e)}/>
            </div>
            <div>
                <label htmlFor="">Armor Class</label>
                <input type="number" name="" id="" value={combatStats.armorClass} min={0} max={9999} onChange={e => onValueChanged(CREATURE_ACTIONS.SET_AC, e)}/>
            </div>
            <div>
                <label htmlFor="">Speed</label>
                <input type="number" name="" id="" value={combatStats.speed} min={0} max={9999} step={5} onChange={e => onValueChanged(CREATURE_ACTIONS.SET_SPD, e)}/>
            </div>
        </div>
    )
}

export default CombatStatTable