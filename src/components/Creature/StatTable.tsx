import { useContext, useEffect } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { CREATURE_ACTIONS } from "../reducers/CreatureReducer";
import { TrackedElementsContext } from "../contexts/TrackedElementsContext";
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "../reducers/TrackedElementsContextReducer";

const StatTable = (props : {creature : ICreature, updateCreature : (valueType: string, value: string | number) => ICreature}) => {

    const {dispatchTrackedElementsAction: dispatchTrackedCreaturesAction} = useContext(TrackedElementsContext)

    const creature = props.creature;
    const updateCreature = props.updateCreature

    const onValueChanged = (e : React.ChangeEvent<HTMLInputElement>, valueType : string) => {
        const value = isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber

        const updatedCreature = updateCreature(valueType, value)
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.UPDATE_CREATURE, elements: [updatedCreature]});
    }

    return(
        <ul className="stat-table">
            <li>
                <label htmlFor="">STR</label>
                <input type="number" name="" id="" value={creature.strength} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_STR)}/>
                <input type="number" name="" id="" value={modifier(creature.strength)} min={-5} max={10} disabled/>
                
            </li>
            <li>
                <label htmlFor="">DEX</label>
                <input type="number" name="" id="" value={creature.dexterity} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_DEX)}/>
                <input type="number" name="" id="" value={modifier(creature.dexterity)} min={-5} max={10} disabled/>

            </li>
            <li>
                <label htmlFor="">CON</label>
                <input type="number" name="" id="" value={creature.constitution} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_CON)}/>
                <input type="number" name="" id="" value={modifier(creature.constitution)} min={-5} max={10} disabled/>

            </li>
            <li>
                <label htmlFor="">INT</label>
                <input type="number" name="" id="" value={creature.inteligence} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_INT)}/>
                <input type="number" name="" id="" value={modifier(creature.inteligence)} min={-5} max={10} disabled/>

            </li>
            <li>
                <label htmlFor="">WIS</label>
                <input type="number" name="" id="" value={creature.wisdom} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_WIS)}/>
                <input type="number" name="" id="" value={modifier(creature.wisdom)} min={-5} max={10} disabled/>

            </li>
            <li>
                <label htmlFor="">CHA</label>
                <input type="number" name="" id="" value={creature.charisma} min={1} max={30} inputMode="numeric" onChange={e => onValueChanged(e, CREATURE_ACTIONS.SET_CHA)}/>
                <input type="number" name="" id="" value={modifier(creature.charisma)} min={-5} max={10} disabled/>

            </li>
        </ul>
    )
}

const modifier = (value : number) => {
    const modifier = Math.floor((value-10)/2);
    return isNaN(modifier) ? -5 : modifier;
}
export default StatTable