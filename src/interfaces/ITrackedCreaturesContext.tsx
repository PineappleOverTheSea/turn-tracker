import { ICreature } from "./ICreature";
import { IRoundCounterFlag } from "./IRoundCounterFlag";
import { ITrackedCreaturesContextDispatch } from "./ITrackedCreaturesContextDispatch";

export interface ITrackedCreaturesContext{
    trackedCreatures: (ICreature | IRoundCounterFlag)[],
    dispatchTrackedCreaturesAction: React.Dispatch<ITrackedCreaturesContextDispatch>
}