import { useContext } from "react";
import { ICreature } from "../interfaces/ICreature";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext";
import Creature from "./Creature/Creature";

const EditCreature = () =>{
    const {trackedCreatures} = useContext(TrackedCreaturesContext);
    let creatureToDisplay;

    const selectedCreature = trackedCreatures.find(creature => creature.classList?.includes("selected"))

    if(selectedCreature)
        creatureToDisplay = trackedCreatures[trackedCreatures.indexOf(selectedCreature)];

    return(
        <div className="edit-creature">
            <div className="title-edit-creature">Edit existing creature:</div>                   
            {creatureToDisplay ? <Creature 
                key={creatureToDisplay.id}
                id={creatureToDisplay.id}
                classList={creatureToDisplay.classList}
                name={creatureToDisplay.name}
                stats={creatureToDisplay.stats}
                health={creatureToDisplay.health}
                combatStats={creatureToDisplay.combatStats}
            /> : <Creature placeholder={true} /> }
        </div>
    );
}

export default EditCreature