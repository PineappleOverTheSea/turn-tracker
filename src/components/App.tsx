import { StrictMode } from "react"
import AddCreature from "./AddCreature"
import { TrackedCreaturesProvider } from "./contexts/TrackedCreaturesContext"
import Creature from "./Creature/Creature"
import EditCreature from "./EditCreature"
import Sidebar from "./Sidebar/Sidebar"
import TurnTimeline from "./TurnTimeline"

const App = () => {    
    return(
        <StrictMode>
            <TrackedCreaturesProvider>
                <main>
                    <TurnTimeline />
                    <AddCreature />   
                    <EditCreature />
                </main>
                <Sidebar />
            </TrackedCreaturesProvider>
        </StrictMode>
    )
}



export default App