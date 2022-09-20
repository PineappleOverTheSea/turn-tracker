import { useContext } from "react";
import { ICreature } from "../interfaces/ICreature";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext";
import Creature from "./Creature/Creature";

const EditCreature = () =>{
    const {trackedCreatures} = useContext(TrackedCreaturesContext);
    const creature = trackedCreatures[0];
    
    return(
        <div className="edit-creature">
            <div className="title-edit-creature">Edit existing creature:</div>                   
            {trackedCreatures.length ? <Creature 
                key={creature.id}
                id={creature.id}
                name={creature.name}
                stats={creature.stats}
                health={creature.health}
                combatStats={creature.combatStats}
            /> : <Creature placeholder={true} /> }
        </div>
    );
}

export default EditCreature