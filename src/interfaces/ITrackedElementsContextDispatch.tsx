import { IElement } from "./IElement";


export interface ITrackedElementsContextDispatch{
    type: string,
    elements: IElement[]
}