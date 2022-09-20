import { stats } from "./IStatTypes";
import { health } from "./IStatTypes";
import { combatStats } from "./IStatTypes";

export interface ICreature{
    id?: number,
    placeholder?: boolean,
    name: string,
    stats: stats,
    health: health,
    combatStats: combatStats,
}