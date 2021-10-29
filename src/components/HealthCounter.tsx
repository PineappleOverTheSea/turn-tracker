import { useEffect, useState } from "react";

const HealthCounter = (props : {hp: number, hpMax: number, hpTemp: number}) => {
    const [hp, setHp] = useState(props.hp);
    const [hpMax, setHpMax] = useState(props.hpMax);
    const [hpTemp, setHpTemp] = useState(props.hpTemp)

    const setHitpoints = (e : React.KeyboardEvent<HTMLInputElement>, action : string) => {
        if (e.key=== "Enter"){
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
                    setHp(hp - inputValue);
                }
                break;
            }
            input.value = "";
        }
    }

    return(
        <div className="health-counter">
            <div className="main-hp">
                <label htmlFor="">Hit Points</label>
                <input type="number" value={hpMax} onChange={e => setHpMax(parseInt(e.target.value))}/>
                <input type="number" value={hp} onChange={e => setHp(parseInt(e.target.value))}/>
                <input type="number" value={hpTemp} onChange={e => setHpTemp(parseInt(e.target.value))}/>
            </div>
            <div className="damage">
                <label htmlFor="">Damage</label>
                <input type="number" name="" id="" onKeyPress={e => setHitpoints(e, "hurt")}/>
            </div>
            <div className="healing">
                <label htmlFor="">Healing</label>
                <input type="number" name="" id="" onKeyPress={e => setHitpoints(e, "heal")}/>
            </div>
        </div>
    )
}



export default HealthCounter;