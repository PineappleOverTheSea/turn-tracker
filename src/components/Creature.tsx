import StatTable from "./StatTable"
import {stats, health, combatStats} from "../interfaces/statTypes";
import { useState } from "react"
import HealthCounter from "./HealthCounter";

const Creature = ({name, stats, health, combatStats} : {name: string, stats: stats, health: health, combatStats: combatStats}) => {
    return(
        <div className="creature">
            <div className="creature-name">{name}</div>
            <HealthCounter {...health}/>
            <StatTable {...stats} />
        </div>
    )
}

export default Creature