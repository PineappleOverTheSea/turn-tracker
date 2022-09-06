import { useContext } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { CREATURE_ACTIONS } from "../reducers/CreatureReducer";
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext";
import { TRACKED_CREATURES_CONTEXT_ACTIONS } from "../reducers/TrackedCreaturesContextReducer";

const HealthCounter = (props : {creature : ICreature, updateCreature : (valueType: string, value: string | number) => ICreature}) => {
    const {dispatchTrackedCreaturesAction} = useContext(TrackedCreaturesContext)

    const health = props.creature.health;
    const updateCreature = props.updateCreature

    const onValueChanged = (valueType : string, e : React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber

        const updatedCreature = updateCreature(valueType, value)
        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.UPDATE_CREATURE, creature: updatedCreature});
    }

    const onSetHpMaximum = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber

        if(value < health.hitPoints){
            updateCreature(CREATURE_ACTIONS.SET_HP, value);
        }
        const updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP_MAX, value);

        dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.UPDATE_CREATURE, creature: updatedCreature});
    }

    const setHitpoints = (valueType : string, e : React.KeyboardEvent<HTMLInputElement>,) => {
        if (e.key === "Enter"){
            const input = e.target as HTMLInputElement;
            let inputValue = input.valueAsNumber;
            let updatedCreature;
            switch (valueType) {
                case "heal": {
                    if(health.hitPoints + inputValue > health.hitPointsMax)
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP, health.hitPointsMax);
                    else
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP, health.hitPoints + inputValue);
                }
                break;
                case "hurt": {
                    inputValue -= health.hitPointsTemp;
                    if(inputValue >= 0){
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP_TEMP, 0);
                    }
                    else {
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP_TEMP, Math.abs(inputValue));
                        inputValue = 0;
                    }
                    if(health.hitPoints - inputValue < 0)
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP, 0);
                    else 
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP, health.hitPoints - inputValue);
                }
                break;
                default: throw Error("Invalid change to hitpoints");
            }
            dispatchTrackedCreaturesAction({type: TRACKED_CREATURES_CONTEXT_ACTIONS.UPDATE_CREATURE, creature: updatedCreature});
            input.value = "";
        }
        
    }

    return(
        <ul className="health-counter">
            <li className="wrap-hp-max">
                <label htmlFor="hp-max">Max HP</label> 
                <input type="number" id="hp-max" value={health.hitPointsMax} min={1} max={9999} onChange={e => onSetHpMaximum(e)}/>
            </li>
            <li className="wrap-hp-temp">
                <label htmlFor="hp-temp">Temp HP</label>
                <input type="number" id="hp-temp" value={health.hitPointsTemp} min={0} max={9999} onChange={e => onValueChanged(CREATURE_ACTIONS.SET_HP_TEMP, e)}/>
            </li>
            <li className="wrap-hp-current">
                <label htmlFor="">Current HP</label>
                <input type="number" id="hp" value={health.hitPoints} min={0} max={health.hitPointsTemp} onChange={e => onValueChanged(CREATURE_ACTIONS.SET_HP, e)}/>
            </li>
            <li className="wrap-hurt">
                <label htmlFor="">Hurt</label>
                <input type="number" name="" id="" min={0} max={9999} onKeyPress={e => setHitpoints("hurt", e)}/>
            </li>
            <li className="wrap-heal">
                <label htmlFor="">Heal</label>
                <input type="number" name="" id="" min={0} max={9999} onKeyPress={e => setHitpoints("heal", e)}/>
            </li>
        </ul>
    )
}



export default HealthCounter;