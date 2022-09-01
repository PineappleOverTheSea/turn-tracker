import { ICreature } from "./ICreature";

export interface ITrackedCreaturesContext{
    trackedCreatures: ICreature[],
    setTrackedCreatures: React.Dispatch<React.SetStateAction<ICreature[]>>,
    addCreature: any,
    updateCreature: any
}