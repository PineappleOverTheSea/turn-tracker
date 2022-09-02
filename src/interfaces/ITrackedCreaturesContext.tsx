import { ICreature } from "./ICreature";
import { ITrackedCreaturesContextDispatch } from "./ITrackedCreaturesContextDispatch";

export interface ITrackedCreaturesContext{
    trackedCreatures: ICreature[],
    dispatchTrackedCreaturesAction: React.Dispatch<ITrackedCreaturesContextDispatch>
}