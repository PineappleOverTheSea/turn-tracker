import { useContext } from "react"
import { ICreature } from "../interfaces/ICreature";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext"
import CreatureMinified from "./CreatureMinified";

const TurnTimeline = () => {
    const {trackedCreatures, dispatchTrackedCreaturesAction} = useContext(TrackedCreaturesContext);

    return(
        <div className="turn-timeline">
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
    )
}

export default TurnTimeline