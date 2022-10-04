import { ICreature } from "./ICreature";

export interface ITrackedCreaturesContextDispatch{
    type: string,
    creatureAction : boolean,
    creature?: ICreature
}