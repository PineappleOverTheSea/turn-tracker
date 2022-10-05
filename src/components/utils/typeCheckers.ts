import { ICreature } from "../../interfaces/ICreature"
import { IRoundCounterFlag } from "../../interfaces/IRoundCounterFlag"

//Type checking'as kad būtų galima patikrint koks elementas ištrauktas iš masyvo
export const isCreature = (obj : any) : obj is ICreature => {
    return obj && "name" in obj && "stats" in obj && "health" in obj && "combatStats" in obj
}
export const isRoundFlag = (obj : any) : obj is IRoundCounterFlag => {
    return obj && "roundCount" in obj
}
