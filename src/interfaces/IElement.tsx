import { ICreature } from "./ICreature";
import { IPlayer } from "./IPlayer";

export interface IElement{
    id: number
    classList: string[]
    name: string
    initiative: number
}