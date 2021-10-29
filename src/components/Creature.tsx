import StatTable from "./StatTable"
import statTypes from "../interfaces/statTypes";
import { useState } from "react"
import HealthCounter from "./HealthCounter";

const Creature = (props : statTypes) => {
    const [name, setName] = useState(props.name);
    const [hp, setHp] = useState(props.hitPoints);
    const [hpMax, setHpMax] = useState(props.hitPointsMax);
    const [hpTemp, setHpTemp] = useState(props.hitPointsTemp)
    const [str, setStr] = useState(props.strength);
    const [dex, setDex] = useState(props.dexterity);
    const [con, setCon] = useState(props.constitution);
    const [int, setInt] = useState(props.inteligence);
    const [wis, setWis] = useState(props.wisdom);
    const [cha, setCha] = useState(props.charisma);

    return(
        <div className="creature">
            <div className="creature-name">{name}</div>
            <HealthCounter {...{hp: hp, hpMax: hpMax, hpTemp: hpTemp}}/>
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