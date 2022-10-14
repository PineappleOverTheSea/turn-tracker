import { createContext, useReducer, useState } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { ITrackedElementsContext } from "../../interfaces/ITrackedElementsContext";
import { TrackedElementsContextReducer } from "../reducers/TrackedElementsContextReducer";

export const TrackedElementsContext = createContext({} as ITrackedElementsContext);

export const TrackedCreaturesProvider = ({ children } : any) => {
    const [trackedElements, dispatchTrackedElementsAction] = useReducer(TrackedElementsContextReducer, [])
    const [roundCount, setRoundCount] = useState(1)

    return(
        <TrackedElementsContext.Provider value={{trackedElements, dispatchTrackedElementsAction, roundCount, setRoundCount}}>
            {children}
        </TrackedElementsContext.Provider>
    )
}
