import StatTable from "./StatTable"
import statTypes from "../interfaces/statTypes";
import { useState } from "react"

const Creature = (props : any) => {
    const [name, setName] = useState(props.name);
    const [str, setStr] = useState(props.strength);
    const [dex, setDex] = useState(props.dexterity);
    const [con, setCon] = useState(props.constitution);
    const [int, setInt] = useState(props.inteligence);
    const [wis, setWis] = useState(props.wisdom);
    const [cha, setCha] = useState(props.charisma);

    return(
        <div className="creature">
            <div>{name}</div>
            <StatTable {...props} />
        </div>
    )
}

Creature.defaultProps = {
    name: "Padaras",
    strength: 0,
    dexterity: 0,
    constitution: 0,
    inteligence: 0,
    wisdom: 0,
    charisma: 0
}

export default Creature