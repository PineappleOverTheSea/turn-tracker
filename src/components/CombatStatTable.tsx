import { useState } from "react"
import { setCombatStats } from "../interfaces/statSetterTypes"
import { combatStats } from "../interfaces/statTypes"

const CombatStatTable = (combatStats : combatStats, setCombatStats : setCombatStats) => {
    const [init, setInit] = [combatStats.initiative, setCombatStats.setInitative]
    const [ac, setAc] = [combatStats.armorClass, setCombatStats.setArmorClass]
    const [spd, setSpd] = [combatStats.speed, setCombatStats.setSpeed]
    return(
        <table className="combat-stat-table">
            <thead>
                <th>Initiative</th>
                <th>Armor Class</th>
                <th>Speed</th>
            </thead>
            <tbody>
                <td><input type="number" name="" id="" value={init} onChange={e => setInit(parseInt(e.target.value))}/></td>
                <td><input type="number" name="" id="" value={ac} onChange={e => setAc(parseInt(e.target.value))}/></td>
                <td><input type="number" name="" id="" value={spd} onChange={e => setSpd(parseInt(e.target.value))}/></td>
            </tbody>
        </table>
    )
}

export default CombatStatTable