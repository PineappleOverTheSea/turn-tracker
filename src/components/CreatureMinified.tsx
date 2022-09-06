import { ICreature } from "../interfaces/ICreature";

const CreatureMinified = (props : ICreature) => {
    return(
        <div className={`creature-minified ${props.health.hitPoints === 0 && "dead"}`}>
            <div className="creature-minified-name">{props.name}</div>
            <ul>
                <li>
                    <div>Init</div>
                    <div>{props.combatStats.initiative}</div>
                </li>
                <li>
                    <div>HP</div>
                    <div>{props.health.hitPoints}</div>
                </li>
                <li>
                    <div>AC</div>
                    <div>{props.combatStats.armorClass}</div>
                </li>
            </ul>
        </div>
    )
}

export default CreatureMinified