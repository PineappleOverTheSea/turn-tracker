import { useContext, useEffect } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { CREATURE_ACTIONS } from "../reducers/CreatureReducer";
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext";
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "../reducers/TrackedCreaturesContextReducer";

const StatTable = (props : {creature : ICreature, updateCreature : (valueType: string, value: string | number) => ICreature}) => {

    const {dispatchTrackedCreaturesAction} = useContext(TrackedCreaturesContext)

    const stats = props.creature.stats;
    const updateCreature = props.updateCreature

    const onValueChanged = (e : React.ChangeEvent<HTMLInputElement>, valueType : string) => {
        const value = e.target.valueAsNumber
        const updatedCreature = updateCreature(valueType, value)
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.UPDATE_CREATURE, creature: updatedCreature});
    }

    return(
        <table className="stat-table">
            <thead>
                <tr>
                    <th>STR</th>
                    <th>DEX</th>
                    <th>CON</th>
                    <th>INT</th>
                    <th>WIS</th>
                    <th>CHA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="number" name="" id="" value={stats.strength} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_STR)}/></td>
                    <td><input type="number" name="" id="" value={stats.dexterity} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_DEX)}/></td>
                    <td><input type="number" name="" id="" value={stats.constitution} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_CON)}/></td>
                    <td><input type="number" name="" id="" value={stats.inteligence} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_INT)}/></td>
                    <td><input type="number" name="" id="" value={stats.wisdom} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_WIS)}/></td>
                    <td><input type="number" name="" id="" value={stats.charisma} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_CHA)}/></td>
                </tr>
                <tr className="modifiers">
                    <td><input type="number" name="" id="" value={modifier(stats.strength)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(stats.dexterity)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(stats.constitution)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(stats.inteligence)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(stats.wisdom)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(stats.charisma)} disabled/></td>
                </tr>
            </tbody>
        </table>
    )
}

const modifier = (value : number) => {
    const modifier = Math.floor((value-10)/2);
    return isNaN(modifier) ? -5 : modifier;
}
export default StatTable