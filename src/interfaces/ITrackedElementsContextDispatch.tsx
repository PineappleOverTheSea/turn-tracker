import { IElement } from "./IElement";


export interface ITrackedElementsContextDispatch{
    type: string,
    elementAction : boolean,
    element?: IElement
}