import { useContext } from "react";
import { ICreature } from "../interfaces/ICreature";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext";
import Creature from "./Creature/Creature";

const EditCreature = () =>{
    const {trackedCreatures} = useContext(TrackedCreaturesContext);
    const creature = trackedCreatures[0];
    
    return(
        <div>
            {trackedCreatures.length ? <Creature 
                        key={creature.id}
                        id={creature.id}
                        name={creature.name}
                        stats={creature.stats}
                        health={creature.health}
                        combatStats={creature.combatStats}
                    /> : "" }
        </div>
    );
}

export default EditCreature