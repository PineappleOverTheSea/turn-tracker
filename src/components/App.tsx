import { hot } from "react-hot-loader"
import AddCreature from "./AddCreature"
import { TrackedCreaturesProvider } from "./contexts/TrackedCreaturesContext"
import ShowCreatures from "./ShowCreatures"

const App = () => {    
    return(
        <>
            <TrackedCreaturesProvider>
                <ShowCreatures />
                <AddCreature />
            </TrackedCreaturesProvider>
        </>
    )
}



export default hot(module)(App)