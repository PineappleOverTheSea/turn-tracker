import { ICreature } from "../../interfaces/ICreature";
import { ITrackedCreaturesContextDispatch } from "../../interfaces/ITrackedCreaturesContextDispatch";

export const INITIAL_STATE : ICreature[] = []

export const TRACKED_CREATURES_CONTEXT_ACTIONS = {
    ADD_CREATURE: "ADD_CREATURE",
    REMOVE_CREATURE: "REMOVE_CREATURE",
    UPDATE_CREATURE: "UPDATE_CREATURE",
    SELECT_CREATURE: "SELECT_CREATURE",
}

export const TrackedCreaturesContextReducer : React.Reducer<ICreature[], ITrackedCreaturesContextDispatch> = (state, action) : ICreature[] => {
    switch(action.type){
        case TRACKED_CREATURES_CONTEXT_ACTIONS.ADD_CREATURE:{
            return[
                ...state,
                action.creature
            ]
        }
        case TRACKED_CREATURES_CONTEXT_ACTIONS.REMOVE_CREATURE:{
            const creatureIndex = state.findIndex(creature => creature.id === action.creature.id)
            const updatedState = [...state]
            updatedState.splice(creatureIndex, 1)
            console.log(updatedState);
            return updatedState
        }
        case TRACKED_CREATURES_CONTEXT_ACTIONS.UPDATE_CREATURE:{
            const creatureIndex = state.findIndex(creature => creature.id === action.creature.id)
            const updatedState = [...state]
            updatedState.splice(creatureIndex, 1, action.creature)
            return updatedState
        }
        case TRACKED_CREATURES_CONTEXT_ACTIONS.SELECT_CREATURE:{
            const updatedState = [...state]
            const creatureIndex = state.findIndex(creature => creature.id === action.creature.id)
            for(const creature of updatedState){
                const filteredClasses = creature.classList?.filter(className => className !== "selected")
                if(filteredClasses)
                    creature.classList = filteredClasses
            }
            if(!updatedState[creatureIndex].classList)
                updatedState[creatureIndex].classList = []
            updatedState[creatureIndex].classList?.push("selected")

            return updatedState
        }
        default: throw Error("Invadlid action type!")
    }
}