import React, { ReactHTMLElement, ReactInstance, ReducerAction, ReducerState } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { ICreatureDispatch } from "../../interfaces/ICreatureDispatch";

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
    name: defaultName,
    stats: {
        strength: defaultStr,
        dexterity: defaultDex,
        constitution: defaultCon,
        inteligence: defaultInt,
        wisdom: defaultWis,
        charisma: defaultCha
    },
    health: {
        hitPoints: defaultHp,
        hitPointsMax: defaultHpMax,
        hitPointsTemp: defaultHpTemp
    },
    combatStats: {
        initiative: defaultInit,
        armorClass: defaultAc,
        speed: defaultSpd
    }
}

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
    SET_CHA: "SET_CHA"
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
                health: {
                    ...state.health,
                    hitPoints: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_HP_MAX: {
            return {
                ...state,
                health: {
                    ...state.health,
                    hitPointsMax: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_HP_TEMP: {
            return {
                ...state,
                health: {
                    ...state.health,
                    hitPointsTemp: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_INIT: {
            return {
                ...state,
                combatStats:{
                    ...state.combatStats,
                    initiative: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_AC: {
            return {
                ...state,
                combatStats:{
                    ...state.combatStats,
                    armorClass: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_SPD: {
            return {
                ...state,
                combatStats:{
                    ...state.combatStats,
                    speed: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_STR: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    strength: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_DEX: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    dexterity: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_CON: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    constitution: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_INT: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    inteligence: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_WIS: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    wisdom: action.value as number
                }
            }

        }
        case CREATURE_ACTIONS.SET_CHA: {
            return {
                ...state,
                stats:{
                    ...state.stats,
                    charisma: action.value as number
                }
            }

        }
        default: throw Error("Invalid action!");
    }
}