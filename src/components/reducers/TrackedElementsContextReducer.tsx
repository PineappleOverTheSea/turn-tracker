import { useContext } from "react";
import { IElement } from "../../interfaces/IElement";
import { ITrackedElementsContextDispatch } from "../../interfaces/ITrackedElementsContextDispatch";
import { TrackedElementsContext } from "../contexts/TrackedElementsContext";
import RoundCounterFlag from "../RoundCounter/RoundCounterFlag";
import { isCreature, isRoundFlag } from "../utils/typeCheckers";

export const TRACKED_CREATURES_CONTEXT_ACTIONS = {
    ADD_CREATURE: "ADD_CREATURE",
    REMOVE_CREATURE: "REMOVE_CREATURE",
    UPDATE_CREATURE: "UPDATE_CREATURE",
    SELECT_CREATURE: "SELECT_CREATURE",
    TURN_FORWARD: "TURN_FORWARD",
    TURN_BACKWARD: "TURN_BACKWARD",
    SET_ELEMENTS: "SET_ELEMENTS"
}

const creatureMap = new Map()

const findIndex = (state : IElement[], action : ITrackedElementsContextDispatch) : number => {
    return state.findIndex(creature => {
        if(isCreature(creature))
            return creature.id === action.elements[0].id
        else return false
        
    })
}

const sort = (updatedState : IElement[]) =>{
    updatedState.sort((c1, c2) => {
        if(isRoundFlag(c1) || isRoundFlag(c2)) 
            return 0
        else {
            const diff = c2.initiative - c1.initiative
            if(diff !== 0)
                return diff
            const nameDiff = c2.name.localeCompare(c1.name)
            return nameDiff
        }
    })
}

const markDuplicates = (name : string, updatedState : IElement[]) => {
    if(creatureMap.has(name)){
        const creatureExists = updatedState.some(elem => {
                if(isCreature(elem)){
                    if(elem.name === name)
                        return true
                    return false
                }
                return false
            })
        if(creatureExists){
            creatureMap.set(name, creatureMap.get(name) + 1)
            name += creatureMap.get(name)
        }
        else{
            creatureMap.set(name, 0)
        }
        
    }
    else {creatureMap.set(name, 0)}
    return name
}

export const TrackedElementsContextReducer : React.Reducer<IElement[], ITrackedElementsContextDispatch> = (state, action) : IElement[] => {
        switch(action.type){
            case TRACKED_CREATURES_CONTEXT_ACTIONS.ADD_CREATURE:{
                let updatedState = [...state]
                let newCreature = action.elements[0]
                newCreature.name = markDuplicates(newCreature.name, updatedState)
                updatedState.push(newCreature)
                sort(updatedState)
                return updatedState
            }
            case TRACKED_CREATURES_CONTEXT_ACTIONS.REMOVE_CREATURE:{
                const creatureIndex = findIndex(state, action)
                const updatedState = [...state]
                updatedState.splice(creatureIndex, 1)
                return updatedState
            }
            case TRACKED_CREATURES_CONTEXT_ACTIONS.UPDATE_CREATURE:{
                const creatureIndex = findIndex(state, action)
                const updatedState = [...state]
                updatedState.splice(creatureIndex, 1, action.elements[0])
                sort(updatedState)
                return updatedState
            }
            case TRACKED_CREATURES_CONTEXT_ACTIONS.SELECT_CREATURE:{
                const updatedState = [...state]
                const creatureIndex = findIndex(state, action)
                for(const creature of updatedState){
                    if(creature instanceof RoundCounterFlag)
                        continue
                    const filteredClasses = creature.classList?.filter(className => className !== "selected")
                    if(filteredClasses)
                        creature.classList = filteredClasses
                }
                updatedState[creatureIndex].classList.push("selected")
                return updatedState
            }
            case TRACKED_CREATURES_CONTEXT_ACTIONS.SET_ELEMENTS:{
                const updatedState = [...action.elements]
                return updatedState
            }
            default: throw Error("Invadlid action type!")
        }
}