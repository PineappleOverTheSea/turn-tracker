import { IElement } from "./IElement";
import { stats } from "./IStatTypes";
import { health } from "./IStatTypes";
import { combatStats } from "./IStatTypes";

export interface ICreature extends IElement{
    placeholder?: boolean,
    strength: number,
    dexterity: number, 
    constitution: number, 
    inteligence: number,
    wisdom: number, 
    charisma: number
    hitPoints: number,
    hitPointsMax: number,
    hitPointsTemp: number
    initiative: number,
    armorClass: number,
    speed: number
}