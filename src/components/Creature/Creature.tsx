import StatTable from "./StatTable"
import { useContext, useReducer } from "react"
import HealthCounter from "./HealthCounter";
import CombatStatTable from "./CombatStatTable";
import { ICreature } from "../../interfaces/ICreature";
import { creatureReducer } from "../actions/CreatureReducer";
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext";

const Creature = (props : ICreature) => {

    const [creature, dispatchCreatureAction] = useReducer(creatureReducer, props)

    const die = () => {
        return 0;
    }

    
    
    return(
        <div className={`creature ${creature.health.hitPoints === 0 && "dead"}`}>
            <div className="creature-name">{creature.name}</div>
            {/* <button onClick={die()}>Kill</button> */}
            <HealthCounter creature={creature} dispatch={dispatchCreatureAction}/>
            <CombatStatTable combatStats={creature.combatStats} dispatch={dispatchCreatureAction}/>
            <StatTable creature={creature} dispatch={dispatchCreatureAction}/>
        </div>
    )
}

export default Creature