import { useState } from "react";
import Creature from "./Creature"

const AddCreatureModal = (props: any) => {
    const trackedCreatures = props.trackedCreatures;
    const setTrackedCreatures = props.setTrackedCreatures;

    const [name, setName] = useState("Creature");
    const [hp, setHp] = useState(10);
    const [hpMax, setHpMax] = useState(10);
    const [hpTemp, setHpTemp] = useState(0);

    const [init, setInit] = useState(0);
    const [ac, setAc] = useState(10);
    const [spd, setSpd] = useState(30);

    const [str, setStr] = useState(10);
    const [dex, setDex] = useState(10);
    const [con, setCon] = useState(10);
    const [int, setInt] = useState(10);
    const [wis, setWis] = useState(10);
    const [cha, setCha] = useState(10);

    const addCreature = () => {
        setTrackedCreatures([...trackedCreatures, <Creature key={10} name={name} 
            stats={{
                strength: str,
                dexterity: dex,
                constitution: con,
                inteligence: int,
                wisdom: wis,
                charisma: cha
            }}
            health={{
                hitPoints: hp,
                hitPointsMax: hpMax,
                hitPointsTemp: hpTemp
            }}
            combatStats={{
                initiative: init,
                armorClass: ac,
                speed: spd
            }}
            />
        ]);
    }
    
    const onSetHpMaximum = (e : React.ChangeEvent<HTMLInputElement>) => {
        const health = parseInt(e.target.value)
        console.log(health);
        setHpMax(health);
        setHp(health);
        console.log(hp);
    }

    return (
        <div className="add-creature">
            <h3>Pridėti padarą</h3>
            <div className="stat">
                <label htmlFor="">Name</label>
                <input type="text" name="creature-name" id="creature-name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="stat">
                <label htmlFor="">Hit Point Maximum</label>
                <input type="number" name="hit-point-maximum" id="hp-max" value={hpMax} onChange={e => onSetHpMaximum(e)} />
            </div>
            <div className="stat">
                <label htmlFor="">Hit Points</label>
                <input type="number" name="hit-points" id="hp" value={hp} onChange={e => setHpTemp(parseInt(e.target.value))} />
            </div>
            <div className="stat">
                <label htmlFor="">Temporary Hit Points</label>
                <input type="number" name="hit-points-temporary" id="hp-temp" value={hpTemp} onChange={e => setHp(parseInt(e.target.value))} />
            </div>
            <div className="stat">
                <label htmlFor="">Strength</label>
                <input type="number" name="strength" id="str" value={str} onChange={e => setStr(parseInt(e.target.value))} />
            </div>
            <div className="stat">
                <label htmlFor="">Dexterity</label>
                <input type="number" name="dexterity" id="dex" value={dex} onChange={e => setDex(parseInt(e.target.value))} />
            </div>
            <div className="stat">
                <label htmlFor="">Constitution</label>
                <input type="number" name="constitution" id="con" value={con} onChange={e => setCon(parseInt(e.target.value))} />
            </div>
            <div className="stat">
                <label htmlFor="">Inteligence</label>
                <input type="number" name="inteligence" id="int" value={int} onChange={e => setInt(parseInt(e.target.value))} />
            </div>
            <div className="stat">
                <label htmlFor="">Wisdom</label>
                <input type="number" name="wisdom" id="wis" value={wis} onChange={e => setWis(parseInt(e.target.value))} />
            </div>
            <div className="stat">
                <label htmlFor="">Charisma</label>
                <input type="number" name="charisma" id="chr" value={cha} onChange={e => setCha(parseInt(e.target.value))} />
            </div>
            <div className="stat">
                <label htmlFor="">Initiative</label>
                <input type="number" name="initative" id="init" value={init} onChange={e => setInit(parseInt(e.target.value))} />
            </div>
            <div className="stat">
                <label htmlFor="">Armor Class</label>
                <input type="number" name="armor-class" id="ac" value={ac} onChange={e => setAc(parseInt(e.target.value))}/>
            </div>
            <div className="stat">
                <label htmlFor="">Speed</label>
                <input type="number" name="speed" id="spd" value={spd} onChange={e => setSpd(parseInt(e.target.value))}/>
            </div>
            <button onClick={addCreature}>Add Creature</button>
        </div>
    )
}

export default AddCreatureModal