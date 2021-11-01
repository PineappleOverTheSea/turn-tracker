import { useContext, useState } from "react";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext";

const AddCreatureModal = (props: any) => {
    const {trackedCreatures, setTrackedCreatures} = useContext(TrackedCreaturesContext);

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
        setTrackedCreatures([...trackedCreatures, {
            id: (Math.random()*100).toString(),
            name: name, 
            stats: {
                strength: str,
                dexterity: dex,
                constitution: con,
                inteligence: int,
                wisdom: wis,
                charisma: cha
            },
            health: {
                hitPoints: hp,
                hitPointsMax: hpMax,
                hitPointsTemp: hpTemp
            },
            combatStats: {
                initiative: init + initMod,
                armorClass: ac,
                speed: spd
            }
        }
        ]);
    }
    
    const onSetHpMaximum = (e : React.ChangeEvent<HTMLInputElement>) => {
        const health = parseInt(e.target.value);
        setHpMax(health);
        setHp(health);
    }

    const initMod = Math.floor((dex-10)/2);

    return (
        <div className="add-creature">
            <div className="add-creature-info">
                <div className="stat">
                    <input type="text" name="creature-name" id="creature-name" value={name} onChange={e => setName(e.target.value)} />
                </div>
            </div>
            <div className="add-creature-health">
                <div className="stat">
                    <label htmlFor="">Maximum HP</label>
                    <input type="number" name="hit-point-maximum" id="hp-max" value={hpMax} min={1} onChange={e => onSetHpMaximum(e)} />
                </div>
                <div className="stat">
                    <label htmlFor="">Current HP</label>
                    <input type="number" name="hit-points" id="hp" value={hp} min={0} max={hpMax} onChange={e => setHp(parseInt(e.target.value))} />
                </div>
                <div className="stat">
                    <label htmlFor="">Temporary HP</label>
                    <input type="number" name="hit-points-temporary" id="hp-temp" value={hpTemp} min={0} onChange={e => setHpTemp(parseInt(e.target.value))} />
                </div>
            </div>
            <div className="add-creature-cmbt-stats">
                <div className="stat">
                    <label htmlFor="">Initiative</label>
                    <input type="number" name="initative" id="init" value={init} onChange={e => setInit(parseInt(e.target.value))} />
                    <div>{initMod >=0 ? "+" : "-"} {Math.abs(initMod)} = {init +  initMod}</div> 
                </div>
                <div className="stat">
                    <label htmlFor="">Armor Class</label>
                    <input type="number" name="armor-class" id="ac" value={ac} min={0} onChange={e => setAc(parseInt(e.target.value))}/>
                </div>
                <div className="stat">
                    <label htmlFor="">Speed</label>
                    <input type="number" name="speed" id="spd" value={spd} min={0} step={5} onChange={e => setSpd(parseInt(e.target.value))}/>
                </div>
            </div>
            <div className="add-creature-stats">
                <div className="stat">
                    <label htmlFor="">Strength</label>
                    <input type="number" name="strength" id="str" value={str} min={1} max={30} onChange={e => setStr(parseInt(e.target.value))} />
                </div>
                <div className="stat">
                    <label htmlFor="">Dexterity</label>
                    <input type="number" name="dexterity" id="dex" value={dex} min={1} max={30} onChange={e => setDex(parseInt(e.target.value))} />
                </div>
                <div className="stat">
                    <label htmlFor="">Constitution</label>
                    <input type="number" name="constitution" id="con" value={con} min={1} max={30} onChange={e => setCon(parseInt(e.target.value))} />
                </div>
                <div className="stat">
                    <label htmlFor="">Inteligence</label>
                    <input type="number" name="inteligence" id="int" value={int} min={1} max={30} onChange={e => setInt(parseInt(e.target.value))} />
                </div>
                <div className="stat">
                    <label htmlFor="">Wisdom</label>
                    <input type="number" name="wisdom" id="wis" value={wis} min={1} max={30} onChange={e => setWis(parseInt(e.target.value))} />
                </div>
                <div className="stat">
                    <label htmlFor="">Charisma</label>
                    <input type="number" name="charisma" id="chr" value={cha} min={1} max={30} onChange={e => setCha(parseInt(e.target.value))} />
                </div>
            </div>
            <button onClick={addCreature}>Add Creature</button>
        </div>
    )
}

export default AddCreatureModal