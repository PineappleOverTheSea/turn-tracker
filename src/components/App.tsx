import { hot } from "react-hot-loader"
import AddCreature from "./AddCreature"
import { CreatureProvider } from "./contexts/CreatureContext"
import { TrackedCreaturesProvider } from "./contexts/TrackedCreaturesContext"
import ShowCreatures from "./ShowCreatures"
import TurnTimeline from "./TurnTimeline"

const App = () => {    
    return(
        <>
            <TrackedCreaturesProvider>
                <CreatureProvider>
                    <TurnTimeline />
                    <ShowCreatures />
                    <AddCreature />
                </CreatureProvider>
            </TrackedCreaturesProvider>
        </>
    )
}



export default hot(module)(App)