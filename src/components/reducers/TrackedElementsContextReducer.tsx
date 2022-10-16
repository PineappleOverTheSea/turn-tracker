import { IElement } from "../../interfaces/IElement";
import { IRoundCounterFlag } from "../../interfaces/IRoundCounterFlag";
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
    const beforeFlag : IElement[] = []
    const afterFlag : IElement[] = []

    let index = 0
    let el = updatedState[index]
    while(!isFlag(el)){
        beforeFlag.push(el)
        index++
        el = updatedState[index]
    }
    const flag = updatedState[index]
    index++
    el = updatedState[index]
    while(el){
        afterFlag.push(el)
        index++
        el = updatedState[index]
    }

    const sorter = (arr : IElement[]) => {
        arr.sort((c1, c2) => {
            const diff = c2.initiative - c1.initiative
            if(diff !== 0)
                return diff
            const nameDiff = c2.name.localeCompare(c1.name)
            return nameDiff
        })
    }

    sorter(beforeFlag)
    sorter(afterFlag)
    return [...beforeFlag, flag, ...afterFlag]
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
            let flag = updatedState.find(el => isFlag(el)) as IRoundCounterFlag
            newCreature.name = markDuplicates(newCreature.name, updatedState)

            if(updatedState.length === 0 || newCreature.initiative > updatedState[0].initiative && flag?.roundCount > 2)
                updatedState.push(newCreature)
            else updatedState.unshift(newCreature)

            
            if(!flag)
                insertFlag(updatedState)
            updatedState = sort(updatedState)
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
            updatedState = sort(updatedState)
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
            updatedState = [...action.elements]
            updatedState = sort(updatedState)
            return updatedState
        }
        default: throw Error("Invadlid action type!")
    }
}