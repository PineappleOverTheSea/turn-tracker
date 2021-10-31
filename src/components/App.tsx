import { hot } from "react-hot-loader"
import { useContext, useState } from "react"
import Creature from "./Creature"
import AddCreature from "./AddCreature"
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext"
import { ICreature } from "../interfaces/ICreature"

const App = () => {
    const [trackedCreatures, setTrackedCreatures] = useState([] as unknown as ICreature[]);

    // const sortedByInitiative = trackedCreatures.sort((creatureA : ICreature, creatureB : ICreature) => creatureA.combatStats.initiative - creatureB.combatStats.initiative)
    
    return(
        <>
            <TrackedCreaturesContext.Provider value={{trackedCreatures, setTrackedCreatures}}>
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
                <AddCreature />
            </TrackedCreaturesContext.Provider>
            
        </>
    )
}



export default hot(module)(App)