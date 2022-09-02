import { ICreature } from "../../interfaces/ICreature";
import { ICreatureDispatch } from "../../interfaces/ICreatureDispatch";
import { combatStats } from "../../interfaces/IStatTypes"
import { ITrackedCreaturesContextDispatch } from "../../interfaces/ITrackedCreaturesContextDispatch";
import { CREATURE_ACTIONS } from "../reducers/CreatureReducer";

const CombatStatTable = (props : {creature : ICreature, dispatch : React.Dispatch<ICreatureDispatch>}) => {
    const combatStats = props.creature.combatStats;
    const dispatchCreatureAction = props.dispatch;

    const onSetNumber = (e : React.ChangeEvent<HTMLInputElement>, actionType : string) => {
        const value = parseInt(e.target.value);
        dispatchCreatureAction({type: actionType, value: value});
    }
    
    return(
        <table className="combat-stat-table">
            <thead>
                <tr>
                    <th>Initiative</th>
                    <th>Armor Class</th>
                    <th>Speed</th>    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="number" name="" id="" value={combatStats.initiative} onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_INIT)}/></td>
                    <td><input type="number" name="" id="" value={combatStats.armorClass} min={0} onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_AC)}/></td>
                    <td><input type="number" name="" id="" value={combatStats.speed} min={0} step={5} onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_SPD)}/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default CombatStatTable