import { useState } from "react";
import Creature from "./Creature"

const AddCreatureModal = (props : any) =>{
    const [name, setName] = useState("Creature");
    const [hp, setHp] = useState(10);
    const [str, setStr] = useState(10);
    const [dex, setDex] = useState(10);
    const [con, setCon] = useState(10);
    const [int, setInt] = useState(10);
    const [wis, setWis] = useState(10);
    const [cha, setCha] = useState(10);

    const addCreature = () =>{
        setTrackedCreatures([...trackedCreatures, <Creature
            {...{
                name: name,
                hitPoints: hp,
                strength: str,
                dexterity: dex,
                constitution: con,
                inteligence: int,
                wisdom: wis,
                charisma: cha
            }}/>
        ]);
    }

    const trackedCreatures = props.trackedCreatures;
    const setTrackedCreatures = props.setTrackedCreatures;

    return(
        <div className="add-creature">
            <h3>Pridėti padarą</h3>
            <input type="text" name="creature-name" id="creature-name" defaultValue={name} onChange={e => setName(e.target.value)}/>
            <input type="number" name="hp" id="str" defaultValue={hp} onChange={e => setStr(parseInt(e.target.value))}/>
            <input type="number" name="strength" id="str" defaultValue={str} onChange={e => setStr(parseInt(e.target.value))}/>
            <input type="number" name="dexterity" id="dex" defaultValue={dex} onChange={e => setDex(parseInt(e.target.value))}/>
            <input type="number" name="constitution" id="con" defaultValue={con} onChange={e => setCon(parseInt(e.target.value))}/>
            <input type="number" name="inteligence" id="int" defaultValue={int} onChange={e => setInt(parseInt(e.target.value))}/>
            <input type="number" name="wisdom" id="wis" defaultValue={wis} onChange={e => setWis(parseInt(e.target.value))}/>
            <input type="number" name="charisma" id="chr" defaultValue={cha} onChange={e => setCha(parseInt(e.target.value))}/>
            <button onClick={addCreature}>Add Creature</button>
        </div>
    )
}

export default AddCreatureModal