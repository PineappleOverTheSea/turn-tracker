import StatTable from "./StatTable"
import {stats, health, combatStats} from "../interfaces/statTypes";
import { setStats, setHealth, setCombatStats } from "../interfaces/statSetterTypes";
import { useState } from "react"
import HealthCounter from "./HealthCounter";
import CombatStatTable from "./CombatStatTable";

const Creature = ({name, stats, health, combatStats} : {name: string, stats: stats, health: health, combatStats: combatStats}) => {
    const [hp, setHp] = useState(health.hitPoints);
    const [hpMax, setHpMax] = useState(health.hitPointsMax);
    const [hpTemp, setHpTemp] = useState(health.hitPointsTemp);

    const [init, setInit] = useState(combatStats.initiative);
    const [ac, setAc] = useState(combatStats.armorClass);
    const [spd, setSpd] = useState(combatStats.speed);

    const [str, setStr] = useState(stats.strength);
    const [dex, setDex] = useState(stats.dexterity);
    const [con, setCon] = useState(stats.constitution);
    const [int, setInt] = useState(stats.inteligence);
    const [wis, setWis] = useState(stats.wisdom);
    const [cha, setCha] = useState(stats.charisma);

    
    const setStats={
        setStrength: setStr,
        setDexterity: setDex,
        setConstitution: setCon,
        setInteligence: setInt,
        setWisdom: setWis,
        setCharisma: setCha
    }
    const setHealth={
        setHitPoints: setHp,
        setHitPointsMax: setHpMax,
        setHitPointsTemp: setHpTemp
    }
    const setCombatStats={
        setInitative: setInit,
        setArmorClass: setAc,
        setSpeed: setSpd
    }
    
    return(
        <div className="creature">
            <div className="creature-name">{name}</div>
            <HealthCounter {...health} {...setHealth}/>
            <StatTable {...stats} {...setStats}/>
            <CombatStatTable {...combatStats} {...setCombatStats}/>
        </div>
    )
}

export default Creature