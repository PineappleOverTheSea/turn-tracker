import { useContext } from "react";
import { ICreature } from "../interfaces/ICreature";
import { TrackedElementsContext } from "./contexts/TrackedElementsContext";
import Creature from "./Creature/Creature";

const EditCreature = () =>{
    const {trackedElements} = useContext(TrackedElementsContext);
    let elementToDisplay

    const selectedCreature = trackedElements.find(elem => elem.classList.includes("selected"))

    if(selectedCreature)
        elementToDisplay = trackedElements[trackedElements.indexOf(selectedCreature)] as ICreature;

    return(
        <div className="edit-creature">
            <div className="title">Edit existing creature:</div>                   
            {elementToDisplay ? <Creature 
                key={elementToDisplay.id}
                id={elementToDisplay.id}
                classList={elementToDisplay.classList}
                name={elementToDisplay.name}
                strength={elementToDisplay.strength}
                dexterity={elementToDisplay.dexterity}
                constitution={elementToDisplay.constitution}
                inteligence={elementToDisplay.inteligence}
                wisdom={elementToDisplay.wisdom}
                charisma={elementToDisplay.charisma}
                hitPoints={elementToDisplay.hitPoints}
                hitPointsMax={elementToDisplay.hitPointsMax}
                hitPointsTemp={elementToDisplay.hitPointsTemp}
                initiative={elementToDisplay.initiative}
                armorClass={elementToDisplay.armorClass}
                speed={elementToDisplay.speed}/> : <Creature id={-1} placeholder={true} /> }
        </div>
    )
}

export default EditCreature