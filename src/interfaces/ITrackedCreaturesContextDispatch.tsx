import { ICreature } from "./ICreature";

export interface ITrackedCreaturesContextDispatch{
    type: string,
    creature: ICreature
}