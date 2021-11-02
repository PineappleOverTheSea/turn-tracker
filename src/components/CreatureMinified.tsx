import { ICreature } from "../interfaces/ICreature";

const CreatureMinified = (props : ICreature) => {
    return(
        <div className={`creature-minified ${props.health.hitPoints === 0 && "dead"}`}>
            <div className="creature-minified-name">{props.name}</div>
            <table>
                <thead>
                    <tr>
                        <th>Initiative</th>
                        <th>HP</th>
                        <th>AC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.combatStats.initiative}</td>
                        <td>{props.health.hitPoints}</td>
                        <td>{props.combatStats.armorClass}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CreatureMinified