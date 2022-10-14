import { ICreature } from "../../interfaces/ICreature";
import { ICreatureDispatch } from "../../interfaces/ICreatureDispatch";

export const CREATURE_ACTIONS = {
    SET_NAME: "SET_NAME",
    SET_HP: "SET_HP",
    SET_HP_MAX: "SET_HP_MAX",
    SET_HP_TEMP: "SET_HP_TEMP",
    SET_INIT: "SET_INIT",
    SET_AC: "SET_AC",
    SET_SPD: "SET_SPD",
    SET_STR: "SET_STR",
    SET_DEX: "SET_DEX",
    SET_CON: "SET_CON",
    SET_INT: "SET_INT",
    SET_WIS: "SET_WIS",
    SET_CHA: "SET_CHA",

    SET_CLASSLIST: "SET_CLASSLIST"
}

export const creatureReducer : React.Reducer<ICreature, ICreatureDispatch> = (state, action) : ICreature => {
    switch (action.type) {
        case CREATURE_ACTIONS.SET_NAME: {
            return {
                ...state,
                name: action.value as string
            }
        }
        case CREATURE_ACTIONS.SET_HP: {
            return {
                ...state,
                hitPoints: action.value as number
            }

        }
        case CREATURE_ACTIONS.SET_HP_MAX: {
            return {
                ...state,
                hitPointsMax: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_HP_TEMP: {
            return {
                ...state,
                hitPointsTemp: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_INIT: {
            return {
                ...state,
                initiative: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_AC: {
            return {
                ...state,
                armorClass: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_SPD: {
            return {
                ...state,
                speed: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_STR: {
            return {
                ...state,
                strength: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_DEX: {
            return {
                ...state,
                dexterity: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_CON: {
            return {
                ...state,
                constitution: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_INT: {
            return {
                ...state,
                inteligence: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_WIS: {
            return {
                ...state,
                wisdom: action.value as number                
            }

        }
        case CREATURE_ACTIONS.SET_CHA: {
            return {
                ...state,
                charisma: action.value as number                
            }

        }

        case CREATURE_ACTIONS.SET_CLASSLIST: {
            return{
                ...state,
                classList: [
                    ...state.classList,
                    action.value as string
                ]
            }
        }
        default: throw Error("Invalid action!");
    }
}