import { useState } from "react";
import statTypes from "../interfaces/statTypes"

const StatTable = ({ strength, dexterity, constitution, inteligence, wisdom, charisma } : statTypes) => {

    const [str, setStr] = useState(strength);
    const [dex, setDex] = useState(dexterity);
    const [con, setCon] = useState(constitution);
    const [int, setInt] = useState(inteligence);
    const [wis, setWis] = useState(wisdom);
    const [cha, setCha] = useState(charisma);
    
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
                        <td><input type="number" name="" id="" defaultValue={str} inputMode="numeric"/></td>
                        <td><input type="number" name="" id="" defaultValue={dex} inputMode="numeric"/></td>
                        <td><input type="number" name="" id="" defaultValue={con} inputMode="numeric"/></td>
                        <td><input type="number" name="" id="" defaultValue={int} inputMode="numeric"/></td>
                        <td><input type="number" name="" id="" defaultValue={wis} inputMode="numeric"/></td>
                        <td><input type="number" name="" id="" defaultValue={cha} inputMode="numeric"/></td>
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

StatTable.defaultProps = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    inteligence: 0,
    wisdom: 0,
    charisma: 0
}

export default StatTable