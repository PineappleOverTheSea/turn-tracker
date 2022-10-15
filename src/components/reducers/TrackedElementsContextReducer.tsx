import { IElement } from "../../interfaces/IElement";
import { ITrackedElementsContextDispatch } from "../../interfaces/ITrackedElementsContextDispatch";
import RoundCounterFlag from "../RoundCounter/RoundCounterFlag";
import { isFlag } from "../utils/typeCheckers";

export const TRACKED_ELEMENTS_CONTEXT_ACTIONS = {
    ADD_ELEMENT: "ADD_ELEMENT",
    REMOVE_ELEMENT: "REMOVE_ELEMENT",
    UPDATE_ELEMENT: "UPDATE_ELEMENT",
    SELECT_ELEMENT: "SELECT_ELEMENT",
    TURN_FORWARD: "TURN_FORWARD",
    TURN_BACKWARD: "TURN_BACKWARD",
    SET_ELEMENTS: "SET_ELEMENTS"
}

const creatureMap = new Map()

const findIndex = (state : IElement[], action : ITrackedElementsContextDispatch) : number => {
    return state.findIndex(creature => {
        return creature.id === action.elements[0].id
    })
}

const sort = (updatedState : IElement[]) =>{
    updatedState.sort((c1, c2) => {
        if(isFlag(c1) || isFlag(c2))
            return 0
        const diff = c2.initiative - c1.initiative
        if(diff !== 0)
            return diff
        const nameDiff = c2.name.localeCompare(c1.name)
        return nameDiff
    })
}

const markDuplicates = (name : string, updatedState : IElement[]) => {
    if(creatureMap.has(name)){
        const creatureExists = updatedState.some(elem => {
                if(elem.name === name)
                    return true
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

const insertFlag = (updatedElements : IElement[]) =>{
    const flag = RoundCounterFlag.defaultProps
    updatedElements.push(flag)
}

export const TrackedElementsContextReducer : React.Reducer<IElement[], ITrackedElementsContextDispatch> = (state, action) : IElement[] => {
    let updatedState = [...state]
    switch(action.type){
        case TRACKED_ELEMENTS_CONTEXT_ACTIONS.ADD_ELEMENT:{
            let newCreature = action.elements[0]
            newCreature.name = markDuplicates(newCreature.name, updatedState)

            if(updatedState.length === 0 || newCreature.initiative > updatedState[0].initiative)
                updatedState.push(newCreature)
            else updatedState.unshift(newCreature)

            
            if(updatedState.findIndex(el => isFlag(el)) === -1)
                insertFlag(updatedState)
            sort(updatedState)
            return updatedState
        }
        case TRACKED_ELEMENTS_CONTEXT_ACTIONS.REMOVE_ELEMENT:{
            const creatureIndex = findIndex(state, action)
            updatedState.splice(creatureIndex, 1)
            if(isFlag(updatedState[0])){
                const flag = updatedState.shift()
                if(flag && updatedState.length !== 0)
                    updatedState.push(flag)
            }
            return updatedState
        }
        case TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT:{
            const creatureIndex = findIndex(state, action)
            updatedState.splice(creatureIndex, 1, action.elements[0])
            sort(updatedState)
            return updatedState
        }
        case TRACKED_ELEMENTS_CONTEXT_ACTIONS.SELECT_ELEMENT:{
            const creatureIndex = findIndex(state, action)
            for(const creature of updatedState){
                const filteredClasses = creature.classList.filter(className => className !== "selected")
                if(filteredClasses)
                    creature.classList = filteredClasses
            }
            updatedState[creatureIndex].classList.push("selected")
            return updatedState
        }
        case TRACKED_ELEMENTS_CONTEXT_ACTIONS.SET_ELEMENTS:{
            const updatedState = [...action.elements]
            return updatedState
        }
        default: throw Error("Invadlid action type!")
    }
}