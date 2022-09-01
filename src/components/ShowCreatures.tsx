import { useContext } from "react"
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext"
import Creature from "./Creature/Creature";
import { ICreature } from "../interfaces/ICreature";

const ShowCreatures = () => {
    const {trackedCreatures, setTrackedCreatures} = useContext(TrackedCreaturesContext);

    return(
        <>
            <section className="tracked-creatures">
                {
                    trackedCreatures.map((creature : ICreature) => 
                        <Creature 
                            key={creature.id}
                            id={creature.id}
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