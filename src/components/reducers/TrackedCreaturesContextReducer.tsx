import { ICreature } from "../../interfaces/ICreature";
import { IRoundCounterFlag } from "../../interfaces/IRoundCounterFlag";
import { ITrackedCreaturesContextDispatch } from "../../interfaces/ITrackedCreaturesContextDispatch";
import RoundCounterFlag from "../RoundCounter/RoundCounterFlag";
import { isCreature, isRoundFlag } from "../utils/typeCheckers";
import { generateRandomId } from "../utils/utils";

export const TRACKED_CREATURES_CONTEXT_ACTIONS = {
    ADD_CREATURE: "ADD_CREATURE",
    REMOVE_CREATURE: "REMOVE_CREATURE",
    UPDATE_CREATURE: "UPDATE_CREATURE",
    SELECT_CREATURE: "SELECT_CREATURE",
    TURN_FORWARD: "TURN_FORWARD",
    TURN_BACKWARD: "TURN_BACKWARD"
}

const creatureMap = new Map()

const findIndex = (state : (ICreature | IRoundCounterFlag)[], action : ITrackedCreaturesContextDispatch) : number => {
    return state.findIndex(creature => {
        if(isCreature(creature))
            return creature.id === action.creature?.id
        else return false
        
    })
}

const sort = (updatedState : (ICreature | IRoundCounterFlag)[]) =>{
    updatedState.sort((c1, c2) => {
        if(isRoundFlag(c1) || isRoundFlag(c2)) 
            return 0
        else {
            const diff = c2.combatStats.initiative - c1.combatStats.initiative
            if(diff !== 0)
                return diff
            const nameDiff = c2.name.localeCompare(c1.name)
            return nameDiff
        }
    })
}

const markDuplicates = (name : string, updatedState : (ICreature | IRoundCounterFlag)[]) => {
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

export const TrackedCreaturesContextReducer : React.Reducer<(ICreature | IRoundCounterFlag)[], ITrackedCreaturesContextDispatch> = (state, action) : (ICreature | IRoundCounterFlag)[] => {
    if(action.creatureAction && action.creature){
        switch(action.type){
            case TRACKED_CREATURES_CONTEXT_ACTIONS.ADD_CREATURE:{
                let updatedState = [...state]
                let newCreature = action.creature
                
                //jei naujo padaro iniciatyva yra didesne nei dabartinio aktyvaus jis dedamas i sekanti raunda
                // if(isCreature(updatedState[0]) && !updatedState[0].classList.includes("placeholder")){
                //     if(action.creature.combatStats.initiative < updatedState[0].combatStats.initiative){
                //         updatedState.unshift(action.creature)
                //     }
                //     else{
                //         updatedState.push(action.creature)
                //     }
                // }
                // else

                newCreature.name = markDuplicates(newCreature.name, updatedState)
                updatedState.push(newCreature)

                //jei pirmas raundas veliava bus nustumiama i gala
                const roundFlagIndex = updatedState.findIndex(el => isRoundFlag(el))
                if(roundFlagIndex !== -1){
                    if((updatedState[roundFlagIndex] as IRoundCounterFlag).roundCount === 2){
                        const oldFlag = updatedState.splice(roundFlagIndex, 1)[0]
                        updatedState.push({id: oldFlag.id, roundCount: 2})
                    }
                }
                //jei veliavos nera ji sukuriama
                else if(roundFlagIndex === -1){
                    updatedState.push({id: generateRandomId(), roundCount: 2})
                }
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
                updatedState.splice(creatureIndex, 1, action.creature)
                sort(updatedState)
                return updatedState
            }
            case TRACKED_CREATURES_CONTEXT_ACTIONS.SELECT_CREATURE:{
                const updatedState = [...state]
                const creatureIndex = findIndex(state, action)
                for(const creature of updatedState){
                    if(creature instanceof RoundCounterFlag)
                        continue
                    const filteredClasses = (creature as ICreature).classList?.filter(className => className !== "selected")
                    if(filteredClasses)
                        (creature as ICreature).classList = filteredClasses
                }
                (updatedState[creatureIndex] as ICreature).classList.push("selected")
                return updatedState
            }
            default: throw Error("Invalid creature action type!")
        }
    }
    else{
        //roundcount keičiasi po du skaičius su strict mode.
        switch(action.type){
            case TRACKED_CREATURES_CONTEXT_ACTIONS.TURN_FORWARD:{
                const updatedState = [...state]
                const element = updatedState.shift() 
                if(isRoundFlag(updatedState[0])){
                    const flag = updatedState.shift()
                    if(isRoundFlag(flag))
                        flag.roundCount++
                    if(element && flag)
                        updatedState.push(element, flag)
                }
                else if(element)
                    updatedState.push(element)
                
                return updatedState
            }
            case TRACKED_CREATURES_CONTEXT_ACTIONS.TURN_BACKWARD:{
                const updatedState = [...state]
                const element = updatedState.pop()

                if(isRoundFlag(element)){
                    if(element.roundCount === 2){
                        return state
                    }
                    element.roundCount--
                    const creature = updatedState.pop()
                    if(element && creature)
                        updatedState.unshift(creature, element)
                }
                else if(element)
                    updatedState.unshift(element)

                return updatedState
            }
            default: throw Error("Invadlid creatureless action type!")
        }
    }
}