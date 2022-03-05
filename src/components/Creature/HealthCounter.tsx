import { setHealth } from "../../interfaces/IStatSetterTypes";
import { health } from "../../interfaces/IStatTypes";
import { TrackedCreaturesContext } from "../contexts/TrackedCreaturesContext";
import { useContext } from "react";

const HealthCounter = (props : {health : health, setHealth : setHealth, id : any}) => {
    const {trackedCreatures, setTrackedCreatures} = useContext(TrackedCreaturesContext);

    const [hp, setHp] = [props.health.hitPoints, props.setHealth.setHp];
    const [hpMax, setHpMax] = [props.health.hitPointsMax, props.setHealth.setHpMax]
    const [hpTemp, setHpTemp] = [props.health.hitPointsTemp, props.setHealth.setHpTemp]

    const onSetHpMaximum = (e : React.ChangeEvent<HTMLInputElement>) => {
        const health = parseInt(e.target.value);
        if(health < hp)
            setHp(health);
        setHpMax(health);

        //atnaujina tracked creatures state
        let thisCreature = trackedCreatures.filter(creature => creature.id === props.id)[0];

        thisCreature.health.hitPoints = hp;
        thisCreature.health.hitPointsMax = health;
        setTrackedCreatures(trackedCreatures);
    }

    const setHitpoints = (e : React.KeyboardEvent<HTMLInputElement>, action : string) => {
        if (e.key === "Enter"){
            const input = e.target as HTMLInputElement;
            let inputValue = parseInt(input.value);
            switch (action) {
                case "heal": {
                    if(hp + inputValue > hpMax)
                        setHp(hpMax);
                    else
                        setHp(hp + inputValue);     
                }
                break;
                case "hurt": {
                    inputValue -= hpTemp;
                    if(inputValue >= 0)
                        setHpTemp(0);
                    else {
                        setHpTemp(Math.abs(inputValue));
                        inputValue = 0;
                    }
                    if(hp - inputValue < 0)
                        setHp(0);
                    else setHp(hp - inputValue);
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
                <input type="number" id="hp-max" value={hpMax} min={1} onChange={e => onSetHpMaximum(e)}/>
            </div>
            <div className="wrap-hp-temp">
                <label htmlFor="hp-temp">Temp HP</label>
                <input type="number" id="hp-temp" value={hpTemp} min={0} onChange={e => setHpTemp(Number.parseInt(e.target.value))}/>
            </div>
            <div className="wrap-hp">
                <label htmlFor="">Current HP</label>
                <input type="number" id="hp" value={hp} min={0} max={hpMax} onChange={e => {setHp(Number.parseInt(e.target.value)) 

                    let thisCreature = trackedCreatures.filter(creature => creature.id === props.id)[0];

                    let testHealth = Number.parseInt(e.target.value);
                    thisCreature.health.hitPoints = testHealth;
                    setTrackedCreatures([...trackedCreatures]);
                }}/>
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