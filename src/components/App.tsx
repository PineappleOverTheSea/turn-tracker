import { StrictMode } from "react"
import AddCreature from "./AddCreature"
import { TrackedCreaturesProvider } from "./contexts/TrackedCreaturesContext"
import Creature from "./Creature/Creature"
import EditCreature from "./EditCreature"
import { Roller } from "./Roller"
import RoundCounter from "./RoundCounter/RoundCounter"
import Sidebar from "./Sidebar/Sidebar"
import TurnTimeline from "./TurnTimeline"

const App = () => {    
    return(
        <StrictMode>
            <TrackedCreaturesProvider>
                <main>
                    <TurnTimeline />
                    <RoundCounter />
                    <AddCreature />   
                    <EditCreature />
                    <Roller />
                </main>
                <Sidebar />
            </TrackedCreaturesProvider>
        </StrictMode>
    )
}



export default App