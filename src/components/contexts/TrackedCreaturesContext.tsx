import { createContext, useReducer, useState } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { ITrackedCreaturesContext } from "../../interfaces/ITrackedCreaturesContext";
import { INITIAL_STATE, TrackedCreaturesContextReducer } from "../reducers/TrackedCreaturesContextReducer";

export const TrackedCreaturesContext = createContext({} as ITrackedCreaturesContext);

export const TrackedCreaturesProvider = ({ children } : any) => {
    const [trackedCreatures, dispatchTrackedCreaturesAction] = useReducer(TrackedCreaturesContextReducer, INITIAL_STATE)

    return(
        <TrackedCreaturesContext.Provider value={{trackedCreatures, dispatchTrackedCreaturesAction}}>
            {children}
        </TrackedCreaturesContext.Provider>
    )
}
