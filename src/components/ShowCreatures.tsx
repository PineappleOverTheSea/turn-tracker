import { useContext } from "react"
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext"
import Creature from "./Creature";
import { ICreature } from "../interfaces/ICreature";

const ShowCreatures = () => {
    const {trackedCreatures, setTrackedCreatures} = useContext(TrackedCreaturesContext);
    
    return(
        <>
            <section>
                <h1>Turn Tracker</h1>
            </section>
            <section className="tracked-creatures">
                {
                    trackedCreatures.map((creature : ICreature) => 
                        <Creature 
                            key={creature.id}
                            name={creature.name}
                            stats={creature.stats}
                            health={creature.health}
                            combatStats={creature.combatStats}
                        />
                    )
                }
            </section>
        </>
    )
}

export default ShowCreatures