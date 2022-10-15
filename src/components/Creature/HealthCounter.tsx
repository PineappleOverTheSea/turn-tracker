import { useContext } from "react";
import { ICreature } from "../../interfaces/ICreature";
import { CREATURE_ACTIONS } from "../reducers/CreatureReducer";
import { TrackedElementsContext } from "../contexts/TrackedElementsContext";
import { TRACKED_ELEMENTS_CONTEXT_ACTIONS } from "../reducers/TrackedElementsContextReducer";

const HealthCounter = (props : {creature : ICreature, updateCreature : (valueType: string, value: string | number) => ICreature}) => {
    const {dispatchTrackedElementsAction: dispatchTrackedElementsAction} = useContext(TrackedElementsContext)

    const [hitPoints, hitPointsMax, hitPointsTemp]  = [props.creature.hitPoints, props.creature.hitPointsMax, props.creature.hitPointsTemp];
    const updateCreature = props.updateCreature

    const onValueChanged = (valueType : string, e : React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber

        const updatedCreature = updateCreature(valueType, value)
        dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [updatedCreature]});
    }

    const onSetHpMaximum = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber

        if(value < hitPoints){
            updateCreature(CREATURE_ACTIONS.SET_HP, value);
        }
        const updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP_MAX, value);

        dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [updatedCreature]});
    }

    const setHitpoints = (valueType : string, e : React.KeyboardEvent<HTMLInputElement>,) => {
        if (e.key === "Enter"){
            const input = e.target as HTMLInputElement;
            let inputValue = Number.parseInt(input.value);
            let updatedCreature;

            if(Number.isNaN(inputValue))
                return 0

            switch (valueType) {
                case "heal": {
                    if(hitPoints + inputValue > hitPointsMax)
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP, hitPointsMax);
                    else
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP, hitPoints + inputValue);
                }
                break;
                case "hurt": {
                    inputValue -= hitPointsTemp;
                    if(inputValue >= 0){
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP_TEMP, 0);
                    }
                    else {
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP_TEMP, Math.abs(inputValue));
                        inputValue = 0;
                    }
                    if(hitPoints - inputValue < 0)
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP, 0);
                    else 
                        updatedCreature = updateCreature(CREATURE_ACTIONS.SET_HP, hitPoints - inputValue);
                }
                break;
                default: throw Error("Invalid change to hitpoints");
            }
            dispatchTrackedElementsAction({type: TRACKED_ELEMENTS_CONTEXT_ACTIONS.UPDATE_ELEMENT, elements: [updatedCreature]});
            input.value = "";
        }
        
    }

    return(
        <ul className="health-counter">
            <li className="wrap-hp-max">
                <label htmlFor="hp-max">Max HP</label> 
                <input type="number" id="hp-max" value={hitPointsMax} min={1} max={9999} onChange={e => onSetHpMaximum(e)}/>
            </li>
            <li className="wrap-hp-temp">
                <label htmlFor="hp-temp">Temp HP</label>
                <input type="number" id="hp-temp" value={hitPointsTemp} min={0} max={9999} onChange={e => onValueChanged(CREATURE_ACTIONS.SET_HP_TEMP, e)}/>
            </li>
            <li className="wrap-hp-current">
                <label htmlFor="">Current HP</label>
                <input type="number" id="hp" value={hitPoints} min={0} max={hitPointsMax} onChange={e => onValueChanged(CREATURE_ACTIONS.SET_HP, e)}/>
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