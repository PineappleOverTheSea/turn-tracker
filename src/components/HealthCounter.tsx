import { useEffect, useState } from "react";

const HealthCounter = (props : {hp: number, hpMax: number}) => {
    const [hp, setHp] = useState(props.hp);
    const [hpMax, setHpMax] = useState(props.hpMax);

    const setHitpoints = (e : React.KeyboardEvent<HTMLInputElement>, action : string) => {
        if (e.key=== "Enter"){
            const input = e.target as HTMLInputElement;
            switch (action) {
                case "heal": {
                    if(hp+parseInt(input.value) > hpMax)
                        setHp(hpMax);
                    else
                        setHp(hp+parseInt(input.value));     
                }
                break;
                case "hurt": {
                    setHp(hp-parseInt(input.value));
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
                <input type="number" value={hp} onChange={e => setHp(parseInt(e.target.value))}/>
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