import { useState } from "react"
import { setCombatStats } from "../interfaces/statSetterTypes"
import { combatStats } from "../interfaces/statTypes"

const CombatStatTable = (props : {combatStats : combatStats, setCombatStats : setCombatStats}) => {
    const [init, setInit] = [props.combatStats.initiative, props.setCombatStats.setInitative]
    const [ac, setAc] = [props.combatStats.armorClass, props.setCombatStats.setArmorClass]
    const [spd, setSpd] = [props.combatStats.speed, props.setCombatStats.setSpeed]
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
                    <td><input type="number" name="" id="" value={init} onChange={e => setInit(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" value={ac} onChange={e => setAc(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" value={spd} onChange={e => setSpd(parseInt(e.target.value))}/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default CombatStatTable