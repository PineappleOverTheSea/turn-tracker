import StatTable from "./StatTable"
import statTypes from "../interfaces/statTypes"

const Creature = ({name, stats} : {name: string, stats: statTypes}) => {
    return(
        <div>
            <h3>{name}</h3>
            <StatTable {...stats} />
        </div>
    )
}

Creature.defaultProps = {
    name: "Padaras",
    stats:{
        strength: 0,
        dexterity: 0,
        constitution: 0,
        inteligence: 0,
        wisdom: 0,
        charisma: 0
    }
}
export default Creature