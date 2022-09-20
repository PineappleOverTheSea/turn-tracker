import { useContext } from "react"
import { ICreature } from "../interfaces/ICreature";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext"
import Creature from "./Creature/Creature";
import CreatureMinified from "./CreatureMinified";

const TurnTimeline = () => {
    const {trackedCreatures} = useContext(TrackedCreaturesContext);
    const creature = trackedCreatures[0];
    return(
        <div className="turn-timeline">
            {trackedCreatures.length ? <Creature 
                key={creature.id}
                id={creature.id}
                name={creature.name}
                stats={creature.stats}
                health={creature.health}
                combatStats={creature.combatStats}
            /> : "" }
            <div className="minified-creatures">
                {trackedCreatures.map((creature : ICreature) =>
                    <CreatureMinified
                        key={creature.id}
                        name={creature.name}
                        stats={creature.stats}
                        health={creature.health}
                        combatStats={creature.combatStats} 
                    />
                )}
            </div>
            <div className="turn-timeline-controls">
                <div className="change-turn">
                    <button className="previousTurn">{'<'}</button>
                    <button className="nextTurn">{'>'}</button>
                </div>
            </div>
        </div>
    )
}

export default TurnTimeline