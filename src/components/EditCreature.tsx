import { useContext } from "react";
import { ICreature } from "../interfaces/ICreature";
import { TrackedElementsContext } from "./contexts/TrackedElementsContext";
import Creature from "./Creature/Creature";

const EditCreature = () =>{
    const {trackedElements} = useContext(TrackedElementsContext);
    let creatureToDisplay

    const selectedCreature = trackedElements.find(creature => (creature as ICreature).classList?.includes("selected"))

    if(selectedCreature)
        creatureToDisplay = trackedElements[trackedElements.indexOf(selectedCreature)];

    return(
        <div className="edit-creature">
            <div className="title">Edit existing creature:</div>                   
            {creatureToDisplay ? <Creature 
                key={(creatureToDisplay as ICreature).id}
                id={(creatureToDisplay as ICreature).id}
                classList={(creatureToDisplay as ICreature).classList}
                name={(creatureToDisplay as ICreature).name}
                
                
                
            /> : <Creature id={-1} placeholder={true} /> }
        </div>
    )
}

export default EditCreature