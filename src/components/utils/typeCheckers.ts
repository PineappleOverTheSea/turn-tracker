import { ICreature } from "../../interfaces/ICreature"
import { IPlayer } from "../../interfaces/IPlayer"
import { IRoundCounterFlag } from "../../interfaces/IRoundCounterFlag"
import Creature from "../Creature/Creature"

//Type checking'as kad būtų galima patikrint koks elementas ištrauktas iš masyvo
export const isCreature = (obj : Object) : obj is ICreature => {
    obj.isPrototypeOf(Creature)
    return obj && "speed" in obj
}
export const isPlayer = (obj: any) : obj is IPlayer =>{
    return false
}
export const isFlag = (obj : any) : obj is IRoundCounterFlag => {
    return obj && "roundCount" in obj
}
