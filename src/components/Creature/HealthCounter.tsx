import { useContext } from "react";
import { ICreatureDispatch } from "../../interfaces/ICreatureDispatch";
import { health } from "../../interfaces/IStatTypes";
import { CREATURE_ACTIONS } from "../actions/CreatureReducer";
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext";

const HealthCounter = (props : {health : health, dispatch : React.Dispatch<ICreatureDispatch>}) => {

    const health = props.health;
    const dispatchCreatureAction = props.dispatch;

    const onSetNumber = (e : React.ChangeEvent<HTMLInputElement>, actionType : string) => {
        const value = parseInt(e.target.value);
        dispatchCreatureAction({type: actionType, value: value});
    }

    const onSetHpMaximum = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if(value < health.hitPoints){
            dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: value});
        }
        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP_MAX, value: value});
    }

    const setHitpoints = (e : React.KeyboardEvent<HTMLInputElement>, action : string) => {
        if (e.key=== "Enter"){
            const input = e.target as HTMLInputElement;
            let inputValue = parseInt(input.value);
            switch (action) {
                case "heal": {
                    if(health.hitPoints + inputValue > health.hitPointsMax)
                        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: health.hitPointsMax});
                    else
                        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: health.hitPoints + inputValue});
                }
                break;
                case "hurt": {
                    inputValue -= health.hitPointsTemp;
                    if(inputValue >= 0)
                        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP_TEMP, value: 0});
                    else {
                        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP_TEMP, value: Math.abs(inputValue)});
                        inputValue = 0;
                    }
                    if(health.hitPoints - inputValue < 0)
                        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: 0});
                    else 
                        dispatchCreatureAction({type: CREATURE_ACTIONS.SET_HP, value: health.hitPoints - inputValue});
                }
                break;
            }
            input.value = "";
        }
    }

    return(
        <div className="health-counter">
            <div className="wrap-hp-max">
                <label htmlFor="hp-max">Max HP</label> 
                <input type="number" id="hp-max" value={health.hitPointsMax} min={1} onChange={e => onSetHpMaximum(e)}/>
            </div>
            <div className="wrap-hp-temp">
                <label htmlFor="hp-temp">Temp HP</label>
                <input type="number" id="hp-temp" value={health.hitPointsTemp} min={0} onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_HP_TEMP)}/>
            </div>
            <div className="wrap-hp">
                <label htmlFor="">Current HP</label>
                <input type="number" id="hp" value={health.hitPoints} min={0} max={health.hitPointsTemp} onChange={e => onSetNumber(e, CREATURE_ACTIONS.SET_HP)}/>
            </div>
            <div className="wrap-hurt">
                <label htmlFor="">Hurt</label>
                <input type="number" name="" id="" min={0} onKeyPress={e => setHitpoints(e, "hurt")}/>
            </div>
            <div className="wrap-heal">
                <label htmlFor="">Heal</label>
                <input type="number" name="" id="" min={0} onKeyPress={e => setHitpoints(e, "heal")}/>
            </div>
        </div>
    )
}



export default HealthCounter;