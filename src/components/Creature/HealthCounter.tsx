import { setHealth } from "../../interfaces/IStatSetterTypes";
import { health } from "../../interfaces/IStatTypes";
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext";
import { useContext } from "react";

const HealthCounter = (props : {health : health, setHealth : setHealth, id : any}) => {
    const {trackedCreatures, setTrackedCreatures} = useContext(TrackedCreaturesContext);
    const thisCreature = trackedCreatures.filter(creature => creature.id === props.id)[0];

    const [hp, setHp] = [props.health.hitPoints, props.setHealth.setHp];
    const [hpMax, setHpMax] = [props.health.hitPointsMax, props.setHealth.setHpMax]
    const [hpTemp, setHpTemp] = [props.health.hitPointsTemp, props.setHealth.setHpTemp]

    const onSetHpMaximum = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newHpMax = parseInt(e.target.value);
        if(newHpMax < hp){
            setHp(newHpMax);
            thisCreature.health.hitPoints = newHpMax;
        }
        setHpMax(newHpMax);
        thisCreature.health.hitPointsMax = newHpMax;
        setTrackedCreatures([...trackedCreatures]);
    }

    const onSetHp = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newHp = Number.parseInt(e.target.value);
        setHp(newHp);
        thisCreature.health.hitPoints = newHp;
        setTrackedCreatures([...trackedCreatures]);
    }

    const onSetHpTemp = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newHpTemp = Number.parseInt(e.target.value);
        setHpTemp(newHpTemp);
        thisCreature.health.hitPointsTemp = newHpTemp;
    }

    const calculateHitpoints = (e : React.KeyboardEvent<HTMLInputElement>, action : string) => {
        if (e.key === "Enter"){
            const input = e.target as HTMLInputElement;
            let inputValue = Number.parseInt(input.value);
            switch (action) {
                case "heal": {
                    if(hp + inputValue > hpMax){
                        setHp(hpMax);
                        thisCreature.health.hitPoints = hpMax;
                    }
                    else{
                        const newHp = hp + inputValue
                        setHp(newHp);
                        thisCreature.health.hitPoints = newHp;
                    }     
                }
                break;
                case "hurt": {
                    inputValue -= hpTemp;
                    if(inputValue >= 0){
                        setHpTemp(0);
                        thisCreature.health.hitPointsTemp = 0;
                    }
                    else {
                        const newHpTemp = Math.abs(inputValue);
                        setHpTemp(newHpTemp);
                        thisCreature.health.hitPointsTemp = newHpTemp;
                        inputValue = 0;
                    }
                    if(hp - inputValue < 0){
                        setHp(0);
                        thisCreature.health.hitPoints = 0;
                    }
                    else {
                        const newHp = hp - inputValue;
                        setHp(newHp);
                        thisCreature.health.hitPoints = newHp;
                    }
                }
                break;
            }
            input.value = "";
        }
        setTrackedCreatures([...trackedCreatures]);
    }

    return(
        <div className="health-counter">
            <div className="wrap-hp-max">
                <label htmlFor="hp-max">Max HP</label> 
                <input type="number" id="hp-max" value={hpMax} min={1} onChange={e => onSetHpMaximum(e)}/>
            </div>
            <div className="wrap-hp-temp">
                <label htmlFor="hp-temp">Temp HP</label>
                <input type="number" id="hp-temp" value={hpTemp} min={0} onChange={e => onSetHpTemp(e)}/>
            </div>
            <div className="wrap-hp">
                <label htmlFor="">Current HP</label>
                <input type="number" id="hp" value={hp} min={0} max={hpMax} onChange={e => onSetHp(e)}/>
            </div>
            <div className="wrap-hurt">
                <label htmlFor="">Hurt</label>
                <input type="number" name="" id="" min={0} onKeyPress={e => calculateHitpoints(e, "hurt")}/>
            </div>
            <div className="wrap-heal">
                <label htmlFor="">Heal</label>
                <input type="number" name="" id="" min={0} onKeyPress={e => calculateHitpoints(e, "heal")}/>
            </div>
        </div>
    )
}



export default HealthCounter;