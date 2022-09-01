import StatTable from "./StatTable"
import { useReducer } from "react"
import HealthCounter from "./HealthCounter";
import CombatStatTable from "./CombatStatTable";
import { ICreature } from "../../interfaces/ICreature";
import { creatureReducer } from "../actions/CreatureReducer";

const Creature = (props : ICreature) => {
    const [creature, dispatchCreatureAction] = useReducer(creatureReducer, props)

    const die = () => {
        return 0;
    }

    
    
    return(
        <div className={`creature ${creature.health.hitPoints === 0 && "dead"}`}>
            <div className="creature-name">{creature.name}</div>
            {/* <button onClick={die()}>Kill</button> */}
            <HealthCounter health={creature.health} dispatch={dispatchCreatureAction}/>
            <CombatStatTable combatStats={creature.combatStats} dispatch={dispatchCreatureAction}/>
            <StatTable stats={creature.stats} dispatch={dispatchCreatureAction}/>
        </div>
    )
}

export default Creature