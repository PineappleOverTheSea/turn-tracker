import React, { useContext, useState } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { TrackedElementsContext } from "../contexts/TrackedElementsContext";
import { CREATURE_ACTIONS } from "../reducers/CreatureReducer";
import { TRACKED_ELEMENTS_CONTEXT_ACTIONS } from "../reducers/TrackedElementsContextReducer";

const CombatStatTable = (props : {creature : ICreature, updateCreature : (valueType: string, value: string | number) => ICreature}) => {
    const {dispatchTrackedElementsAction: dispatchTrackedCreaturesAction} = useContext(TrackedElementsContext)

    const creature = {...props.creature};
    const updateCreature = props.updateCreature
    const [localInititive, setLocalInitiative] = useState<string | number>(creature.initiative)


    const onValueChanged = (valueType : string, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(e.currentTarget.valueAsNumber) ? "" : e.currentTarget.valueAsNumber

        const updatedCreature = updateCreature(valueType, value)
        dispatchTrackedCreaturesAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [updatedCreature]});
    }

    const onInitChanged = (e : React.ChangeEvent<HTMLInputElement>) =>{
        const value = isNaN(e.currentTarget.valueAsNumber) ? "" : e.currentTarget.valueAsNumber
        setLocalInitiative(value)
    }

    const checkIfUpdate = (e : React.KeyboardEvent<HTMLInputElement>) =>{
        if (e.key !== "Enter")
            return 0
        const value = isNaN(e.currentTarget.valueAsNumber) ? "" : e.currentTarget.valueAsNumber
        const updatedCreature = updateCreature(CREATURE_ACTIONS.SET_INIT, value)
        
        dispatchTrackedCreaturesAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [updatedCreature]});
    }

    const onBlur = () =>{
        setLocalInitiative(creature.initiative)
    }
    
    return(
        <ul className="combat-stat-table">
            <li>
                <label htmlFor="">Initiative</label>
                <input type="number" name="" id="" min={0} max={9999} value={localInititive} onChange={e => onInitChanged(e)} onBlur={onBlur} onKeyDown={e => checkIfUpdate(e)}/>
            </li>
            <li>
                <label htmlFor="">Armor Class</label>
                <input type="number" name="" id="" value={creature.armorClass} min={0} max={9999} onChange={e => onValueChanged(CREATURE_ACTIONS.SET_AC, e)}/>
            </li>
            <li>
                <label htmlFor="">Speed</label>
                <input type="number" name="" id="" value={creature.speed} min={0} max={9999} step={5} onChange={e => onValueChanged(CREATURE_ACTIONS.SET_SPD, e)}/>
            </li>
        </ul>
    )
}

export default CombatStatTable