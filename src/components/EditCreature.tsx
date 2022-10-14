import { useContext } from "react";
import { ICreature } from "../interfaces/ICreature";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext";
import Creature from "./Creature/Creature";

const EditCreature = () =>{
    const {trackedCreatures} = useContext(TrackedCreaturesContext);
    let creatureToDisplay

    const selectedCreature = trackedCreatures.find(creature => (creature as ICreature).classList?.includes("selected"))

    if(selectedCreature)
        creatureToDisplay = trackedCreatures[trackedCreatures.indexOf(selectedCreature)];

    return(
        <div className="edit-creature">
            <div className="title">Edit existing creature:</div>                   
            {creatureToDisplay ? <Creature 
                key={(creatureToDisplay as ICreature).id}
                id={(creatureToDisplay as ICreature).id}
                classList={(creatureToDisplay as ICreature).classList}
                name={(creatureToDisplay as ICreature).name}
                stats={(creatureToDisplay as ICreature).stats}
                health={(creatureToDisplay as ICreature).health}
                combatStats={(creatureToDisplay as ICreature).combatStats}
            /> : <Creature placeholder={true} /> }
        </div>
    )
}

export default EditCreature