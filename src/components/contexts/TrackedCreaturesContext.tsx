import { createContext, useContext, useState } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { ITrackedCreaturesContext } from "../../interfaces/ITrackedCreaturesContext";

export const TrackedCreaturesContext = createContext({} as ITrackedCreaturesContext);

export const TrackedCreaturesProvider = ({ children } : any) => {
    const [trackedCreatures, setTrackedCreatures] = useState([] as unknown as ICreature[]);

    return(
        <TrackedCreaturesContext.Provider value={{trackedCreatures, setTrackedCreatures}}>
            {children}
        </TrackedCreaturesContext.Provider>
    )
    
}
