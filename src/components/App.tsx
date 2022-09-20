import { StrictMode } from "react"
import AddCreature from "./AddCreature"
import { TrackedCreaturesProvider } from "./contexts/TrackedCreaturesContext"
import Creature from "./Creature/Creature"
import EditCreature from "./EditCreature"
import ShowCreatures from "./ShowCreatures"
import Sidebar from "./Sidebar/Sidebar"
import TurnTimeline from "./TurnTimeline"

const App = () => {    
    return(
        <StrictMode>
            <TrackedCreaturesProvider>
                <main>
                    <TurnTimeline />
                    <div className="title-add-creature">Add new creature:</div>
                    <AddCreature />   
                    <div className="title-edit-creature">Edit existing creature:</div>                   
                    <EditCreature />
                </main>
                <Sidebar />
            </TrackedCreaturesProvider>
        </StrictMode>
    )
}



export default App