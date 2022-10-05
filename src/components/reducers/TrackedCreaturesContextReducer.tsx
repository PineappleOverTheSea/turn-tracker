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
        else return c2.combatStats.initiative - c1.combatStats.initiative
    })
}

export const TrackedCreaturesContextReducer : React.Reducer<(ICreature | IRoundCounterFlag)[], ITrackedCreaturesContextDispatch> = (state, action) : (ICreature | IRoundCounterFlag)[] => {
    if(action.creatureAction && action.creature){
        switch(action.type){
            case TRACKED_CREATURES_CONTEXT_ACTIONS.ADD_CREATURE:{
                const updatedState = [...state, action.creature]
                const roundFlagIndex = updatedState.findIndex(el => isRoundFlag(el))
                sort(updatedState)
                if(roundFlagIndex !== -1 && (updatedState[roundFlagIndex] as IRoundCounterFlag).roundCount === 2){
                    updatedState.splice(roundFlagIndex, 1)
                    updatedState.push({id: generateRandomId(), roundCount: 2})
                }
                else if(roundFlagIndex === -1){
                    updatedState.push({id: generateRandomId(), roundCount: 2})
                }
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
        switch(action.type){
            case TRACKED_CREATURES_CONTEXT_ACTIONS.TURN_FORWARD:{
                const updatedState = [...state]
                const creature = updatedState.shift()
                if(creature)
                    updatedState.push(creature)
                return updatedState
            }
            case TRACKED_CREATURES_CONTEXT_ACTIONS.TURN_BACKWARD:{
                const updatedState = [...state]
                const creature = updatedState.pop()
                if(creature)
                    updatedState.unshift(creature)
                return updatedState
            }
            default: throw Error("Invadlid creatureless action type!")
        }
    }
}