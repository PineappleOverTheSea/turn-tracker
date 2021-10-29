import { useState } from "react";

const HealthCounter = (props : any) => {
    const [hp, setHp] = useState();

    return(
        <div className="health-counter">
            <div className="main-hp">
                <label htmlFor="">Hit Points</label>
                <input type="number" />
            </div>
            <div className="damage">
                <label htmlFor="">Damage</label>
                <input type="number" name="" id="" />
            </div>
        </div>
    )
}

export default HealthCounter;