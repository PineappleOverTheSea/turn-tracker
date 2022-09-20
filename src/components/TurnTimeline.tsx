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
            <div className="title-active-creature">Currently active:</div>
            {trackedCreatures.length ? <Creature 
                key={creature.id}
                id={creature.id}
                name={creature.name}
                stats={creature.stats}
                health={creature.health}
                combatStats={creature.combatStats}
            /> : "" }
            <div className="title-timeline">Coming up:</div>
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
                    <button className="nextTurn">Next<br/>Turn</button>
                    <button className="previousTurn">Previous<br/>Turn</button>
                </div>
            </div>
        </div>
    )
}

export default TurnTimeline