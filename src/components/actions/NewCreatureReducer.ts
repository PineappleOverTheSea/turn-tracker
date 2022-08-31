import React, { ReactHTMLElement, ReactInstance, ReducerAction, ReducerState } from "react";
import { ICreature } from "../../interfaces/ICreature";

const defaultName = "Creature";
const defaultHp = 10;
const defaultHpMax = 10;
const defaultHpTemp = 0;
const defaultInit = 0;
const defaultAc = 10;
const defaultSpd = 30;
const defaultStr = 10;
const defaultDex = 10;
const defaultCon = 10;
const defaultInt = 10;
const defaultWis = 10;
const defaultCha = 10;

export const INITIAL_STATE: ICreature = {
    name: String(defaultName),
    stats: {
        strength: Number(defaultStr),
        dexterity: Number(defaultDex),
        constitution: Number(defaultCon),
        inteligence: Number(defaultInt),
        wisdom: Number(defaultWis),
        charisma: Number(defaultCha)
    },
    health: {
        hitPoints: Number(defaultHp),
        hitPointsMax: Number(defaultHpMax),
        hitPointsTemp: Number(defaultHpMax)
    },
    combatStats: {
        initiative: Number(defaultInit),
        armorClass: Number(defaultAc),
        speed: Number(defaultSpd)
    }
}

export const NEW_CREATURE_ACTIONS = {
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
    SET_CHA: "SET_CHA"
}

export const newCreatureReducer: React.Reducer<ICreature, any> = (state: ICreature, action) => {
    switch (action.type) {
        case NEW_CREATURE_ACTIONS.SET_NAME: {
            return {
                ...state,
                name: action.value
            }
        }
        case NEW_CREATURE_ACTIONS.SET_HP: {
            return {
                ...state,
                health: {
                    ...state.health,
                    hitPoints: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_HP_MAX: {
            return {
                ...state,
                health: {
                    ...state.health,
                    hitPointsMax: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_HP_TEMP: {
            return {
                ...state,
                health: {
                    ...state.health,
                    hitPointsTemp: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_INIT: {
            return {
                ...state,
                combatStats:{
                    ...state.combatStats,
                    initiative: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_AC: {
            return {
                ...state,
                combatStats:{
                    ...state.combatStats,
                    initiative: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_SPD: {
            return {
                ...state,
                combatStats:{
                    ...state.combatStats,
                    initiative: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_STR: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    strength: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_DEX: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    dexterity: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_CON: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    constitution: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_INT: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    inteligence: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_WIS: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    wisdom: action.value
                }
            }

        }
        case NEW_CREATURE_ACTIONS.SET_CHA: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    charisma: action.value
                }
            }

        }
        default: throw Error("Invalid action!");
    }
}