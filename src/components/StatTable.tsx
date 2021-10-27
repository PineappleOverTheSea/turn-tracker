import { useState } from "react";
import statTypes from "../interfaces/statTypes";

const StatTable = (props : statTypes) => {

    const [str, setStr] = useState(props.strength);
    const [dex, setDex] = useState(props.dexterity);
    const [con, setCon] = useState(props.constitution);
    const [int, setInt] = useState(props.inteligence);
    const [wis, setWis] = useState(props.wisdom);
    const [cha, setCha] = useState(props.charisma);
    
    return(
        <table>
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
                    <td><input type="number" name="" id="" defaultValue={str} inputMode="numeric" onChange={e => setStr(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" defaultValue={dex} inputMode="numeric" onChange={e => setDex(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" defaultValue={con} inputMode="numeric" onChange={e => setCon(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" defaultValue={int} inputMode="numeric" onChange={e => setInt(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" defaultValue={wis} inputMode="numeric" onChange={e => setWis(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" defaultValue={cha} inputMode="numeric" onChange={e => setCha(parseInt(e.target.value))}/></td>
                </tr>
                <tr>
                    <td>{modifier(str)}</td>
                    <td>{modifier(dex)}</td>
                    <td>{modifier(con)}</td>
                    <td>{modifier(int)}</td>
                    <td>{modifier(wis)}</td>
                    <td>{modifier(cha)}</td>
                </tr>
            </tbody>
        </table>
    )
}

const modifier = (value : number) => {
    const modifier = Math.floor((value-10)/2);
    return modifier;
}
export default StatTable