import { setCombatStats } from "../../interfaces/IStatSetterTypes"
import { combatStats } from "../../interfaces/IStatTypes"

const CombatStatTable = (props : {combatStats : combatStats, setCombatStats : setCombatStats}) => {
    const [init, setInit] = [props.combatStats.initiative, props.setCombatStats.setInit]
    const [ac, setAc] = [props.combatStats.armorClass, props.setCombatStats.setAC]
    const [spd, setSpd] = [props.combatStats.speed, props.setCombatStats.setSpd]
    
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
                    <td><input type="number" name="" id="" value={ac} min={0} onChange={e => setAc(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" value={spd} min={0} step={5} onChange={e => setSpd(parseInt(e.target.value))}/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default CombatStatTable