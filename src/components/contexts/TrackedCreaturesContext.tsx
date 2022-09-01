import { createContext, useState } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { ITrackedCreaturesContext } from "../../interfaces/ITrackedCreaturesContext";

export const TrackedCreaturesContext = createContext({} as ITrackedCreaturesContext);

export const TrackedCreaturesProvider = ({ children } : any) => {
    const [trackedCreatures, setTrackedCreatures] = useState([] as unknown as ICreature[]);

    const addCreature = (creature : ICreature) => {
        setTrackedCreatures([...trackedCreatures, creature])
    }

    const updateCreature = (updatedCreature : ICreature) =>{
        const creatureIndex = trackedCreatures.findIndex(creature => creature.id === updatedCreature.id)
        if(creatureIndex === -1)
            throw Error("No creature by that ID in TrackedCreatures!")
        const updatedCreatures = [...trackedCreatures]
        updatedCreatures[creatureIndex] = updatedCreature
        setTrackedCreatures(updatedCreatures)
        debugger
    }

    return(
        <TrackedCreaturesContext.Provider value={{trackedCreatures, setTrackedCreatures, addCreature, updateCreature}}>
            {children}
        </TrackedCreaturesContext.Provider>
    )
    
}
