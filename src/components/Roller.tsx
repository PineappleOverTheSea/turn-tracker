import { useContext, useState } from "react"
import { ICreature } from "../interfaces/ICreature"
import { TrackedElementsContext } from "./contexts/TrackedElementsContext"
import { TRACKED_ELEMENTS_CONTEXT_ACTIONS } from "./reducers/TrackedElementsContextReducer"
import { d20 } from "./utils/dice"
import { isCreature } from "./utils/typeCheckers"


export const Roller = () =>{
    const {trackedElements, dispatchTrackedElementsAction} = useContext(TrackedElementsContext)
    const [activeId, setActiveId] = useState<string>("roll-creatures");
    const elements = [...trackedElements]

    const setActive = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const id = e.currentTarget.id
        setActiveId(id)
    }

    const rollInitiative = () =>{
        // const firstElement = elements.find(el => el.classList.includes("first"))
        // const lastElement = elements.find(el => el.classList.includes("last"))
        // if(firstElement){
        //     const firstIndex = firstElement.classList.findIndex(el => el === "fist")
        //     firstElement.classList.splice(firstIndex, 1)
        //     dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [firstElement]})
        // }
        // if(lastElement){
        //     const lastIndex = lastElement.classList.findIndex(el => el === "last")
        //     lastElement.classList.splice(lastIndex, 1)
        //     dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [lastElement]})
        // }

        switch(activeId){
            case "roll-creatures":{
                for(const element of elements){
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
                for(const element of elements){
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
        dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [updatedCreature]})
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