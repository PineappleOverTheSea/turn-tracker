import { useContext, useState } from "react"
import { ICreature } from "../interfaces/ICreature"
import { TrackedElementsContext } from "./contexts/TrackedElementsContext"
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "./reducers/TrackedElementsContextReducer"
import { d20 } from "./utils/dice"
import { isCreature } from "./utils/typeCheckers"


export const Roller = () =>{
    const {trackedElements, dispatchTrackedElementsAction: dispatchTrackedCreaturesAction} = useContext(TrackedElementsContext)

    const [activeId, setActiveId] = useState<string>("roll-creatures");

    const setActive = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const id = e.currentTarget.id
        setActiveId(id)
    }

    const rollInitiative = () =>{
            switch(activeId){
                case "roll-creatures":{
                    for(const element of trackedElements){
                        if(!isCreature(element))
                            continue
                        rollCreatures(element)
                    }

                }
                break;
                case "roll-players":{
                    
                }
                break;
                case "roll-both":{
                    for(const element of trackedElements){
                        if(!isCreature(element))
                            continue
                        rollCreatures(element)
                    }
                }
                break;
                default: throw Error("No active ID!")
            }
           
    }

    const rollCreatures = (element : ICreature) =>{
        const randomInit = d20()
        const initMod = Math.floor((element.dexterity - 10) / 2);
        const updatedCreature = {...element,
            initiative: randomInit + initMod
        }
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.UPDATE_CREATURE, elements: [updatedCreature]})
    }
    const rollPlayers = () =>{

    }

    return(
        <div className="roller">
            <div className="title">Roll initiative:</div>
            <fieldset>
                <div className={activeId === "roll-creatures" ? "active" : ""} id="roll-creatures" onClick={e => setActive(e)}>
                    Creatures
                </div>
                <div className={activeId === "roll-players" ? "active" : ""} id="roll-players" onClick={e => setActive(e)}>
                    Players
                </div>
                <div className={activeId === "roll-both" ? "active" : ""} id="roll-both" onClick={e => setActive(e)}>
                    Both
                </div>
            </fieldset>
            <button onClick={rollInitiative}>Roll</button>
        </div>
    )
    
}