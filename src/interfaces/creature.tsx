import { stats } from "./statTypes";
import { health } from "./statTypes";
import { combatStats } from "./statTypes";

export interface creature{
    id?: string,
    name: string;
    stats: stats;
    health: health;
    combatStats: combatStats;
}