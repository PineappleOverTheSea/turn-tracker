import { StrictMode } from "react"
import { hot } from "react-hot-loader"
import AddCreature from "./AddCreature"
import { TrackedCreaturesProvider } from "./contexts/TrackedCreaturesContext"
import ShowCreatures from "./ShowCreatures"
import TurnTimeline from "./TurnTimeline"

const App = () => {    
    return(
        <>
        <StrictMode>
            <TrackedCreaturesProvider>
                <TurnTimeline />
                <ShowCreatures />
                <AddCreature />
            </TrackedCreaturesProvider>
        </StrictMode>
        </>
    )
}



export default hot(module)(App)