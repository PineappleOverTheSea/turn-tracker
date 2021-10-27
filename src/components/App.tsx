import { hot } from "react-hot-loader"
import { useState } from "react"
import Creature from "./Creature"
import AddCreature from "./AddCreature"

const App = () => {
    const [trackedCreatures, setTrackedCreatures] = useState([<Creature name={"Goblinas"} stats={{strength: 10, dexterity: 10, constitution: 10, inteligence: 10, wisdom: 10, charisma: 10}}/>]);

    const addCreature = () =>{
        console.log(setTrackedCreatures)
        // setTrackedCreatures([...trackedCreatures, <Creature name={"Goblinas"} stats={{strength: 10, dexterity: 10, constitution: 10, inteligence: 10, wisdom: 10, charisma: 10}}/>])
    }

    return(
        <>
            <section>
                <h1>Turn Tracker</h1>
            </section>
            <section className="trackedCreatures">
                {trackedCreatures}
            </section>
            <button onClick={addCreature}>Add creature</button>
            <AddCreature trackedCreatures={trackedCreatures} setTrackedCreatures={setTrackedCreatures}/>
        </>
    )
}



export default hot(module)(App)