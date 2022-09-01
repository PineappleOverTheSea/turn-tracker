import { useContext, useEffect } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { ICreatureDispatch } from "../../interfaces/ICreatureDispatch";
import {stats} from "../../interfaces/IStatTypes";
import { CREATURE_ACTIONS } from "../actions/CreatureReducer";
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext";

const StatTable = (props : {creature : ICreature, dispatch : React.Dispatch<ICreatureDispatch>}) => {

    const {trackedCreatures, setTrackedCreatures, updateCreature} = useContext(TrackedCreaturesContext)

    const stats = props.creature.stats;
    const dispatchCreatureAction = props.dispatch;

    const onSetNumber = (e : React.ChangeEvent<HTMLInputElement>, actionType : string) => {
        const value = parseInt(e.target.value);
        dispatchCreatureAction({type: actionType, value: value});
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
                    <td><input type="number" name="" id="" value={stats.strength} min={1} max={30} inputMode="numeric" onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_STR)}/></td>
                    <td><input type="number" name="" id="" value={stats.dexterity} min={1} max={30} inputMode="numeric" onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_DEX)}/></td>
                    <td><input type="number" name="" id="" value={stats.constitution} min={1} max={30} inputMode="numeric" onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_CON)}/></td>
                    <td><input type="number" name="" id="" value={stats.inteligence} min={1} max={30} inputMode="numeric" onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_INT)}/></td>
                    <td><input type="number" name="" id="" value={stats.wisdom} min={1} max={30} inputMode="numeric" onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_WIS)}/></td>
                    <td><input type="number" name="" id="" value={stats.charisma} min={1} max={30} inputMode="numeric" onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_CHA)}/></td>
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