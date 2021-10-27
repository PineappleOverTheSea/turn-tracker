import { hot } from "react-hot-loader"
import { useState } from "react"
import Creature from "./Creature"
import AddCreature from "./AddCreature"

const App = () => {
    const [trackedCreatures, setTrackedCreatures] = useState();

    return(
        <>
            <section>
                <h1>Turn Tracker</h1>
            </section>
            <section className="trackedCreatures">
                {trackedCreatures}
            </section>
            <AddCreature trackedCreatures={trackedCreatures} setTrackedCreatures={setTrackedCreatures}/>
        </>
    )
}



export default hot(module)(App)