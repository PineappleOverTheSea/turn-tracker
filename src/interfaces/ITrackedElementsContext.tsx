import { IElement } from "./IElement";
import { IRoundCounterFlag } from "./IRoundCounterFlag";
import { ITrackedElementsContextDispatch } from "./ITrackedElementsContextDispatch";

export interface ITrackedElementsContext{
    trackedElements: IElement[],
    dispatchTrackedElementsAction: React.Dispatch<ITrackedElementsContextDispatch>,
    roundCount: number,
    setRoundCount: React.Dispatch<React.SetStateAction<number>>
}