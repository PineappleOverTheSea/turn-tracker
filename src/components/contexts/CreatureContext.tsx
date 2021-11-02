import { createContext, useState } from "react"
import { stats } from "../../interfaces/IStatTypes";
import { setStats } from "../../interfaces/IStatSetterTypes";
import { health } from "../../interfaces/IStatTypes";
import { setHealth } from "../../interfaces/IStatSetterTypes";
import { combatStats } from "../../interfaces/IStatTypes";
import { setCombatStats } from "../../interfaces/IStatSetterTypes";

export const CreatureContext = createContext({});

export const CreatureProvider = ({children} : any) => {
    const [name, setName] = useState("Creature");

    const [hp, setHp] = useState(10);
    const [hpMax, setHpMax] = useState(10);
    const [hpTemp, setHpTemp] = useState(0);

    const [init, setInit] = useState(0);
    const [ac, setAc] = useState(10);
    const [spd, setSpd] = useState(30);

    const [str, setStr] = useState(10);
    const [dex, setDex] = useState(10);
    const [con, setCon] = useState(10);
    const [int, setInt] = useState(10);
    const [wis, setWis] = useState(10);
    const [cha, setCha] = useState(10);

    const stats:stats = {
        strength: str,
        dexterity: dex,
        constitution: con,
        inteligence: int,
        wisdom: wis,
        charisma: cha
    }
    const setStats:setStats = {
        setStrength: setStr,
        setDexterity: setDex,
        setConstitution: setCon,
        setInteligence: setInt,
        setWisdom: setWis,
        setCharisma: setCha
    }
    const health:health = {
        hitPoints: hp,
        hitPointsMax: hpMax,
        hitPointsTemp: hpTemp
    }
    const setHealth:setHealth = {
        setHitPoints: setHp,
        setHitPointsMax: setHpMax,
        setHitPointsTemp: setHpTemp
    }
    const combatStats:combatStats = {
        armorClass: ac,
        initiative: init,
        speed: spd
    }
    const setCombatStats:setCombatStats = {
        setInitative: setInit,
        setArmorClass: setAc,
        setSpeed: setSpd
    }
    
    return(
        <CreatureContext.Provider value = {{name, setName, stats, setStats, health, setHealth, combatStats, setCombatStats}}>
            { children }
        </CreatureContext.Provider>
    )
}