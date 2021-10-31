import { hot } from "react-hot-loader"
import { useContext, useState } from "react"
import Creature from "./Creature"
import AddCreature from "./AddCreature"
import { creature } from "../interfaces/creature"

const App = () => {
    const [trackedCreatures, setTrackedCreatures] = useState([]);

    const sortedByInitiative = trackedCreatures.sort((creatureA : creature, creatureB : creature) => creatureA.combatStats.initiative - creatureB.combatStats.initiative)
    
    return(
        <>

            <section>
                <h1>Turn Tracker</h1>
            </section>
            <section className="tracked-creatures">
                {
                    trackedCreatures.map((creature : creature) => 
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
            <AddCreature {...{trackedCreatures, setTrackedCreatures}} />
        </>
    )
}



export default hot(module)(App)