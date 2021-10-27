import { PropsWithoutRef, useState } from "react";
import Creature from "./Creature"

const AddCreatureModal = (props : any) =>{
    const [name, setName] = useState("Padaras");
    const [str, setStr] = useState(10);
    const [dex, setDex] = useState(10);
    const [con, setCon] = useState(10);
    const [int, setInt] = useState(10);
    const [wis, setWis] = useState(10);
    const [cha, setCha] = useState(10);

    const addCreature = () =>{
        setTrackedCreatures([...trackedCreatures, <Creature name={name} stats={{
            strength: str, 
            dexterity: dex, 
            constitution: con, 
            inteligence: int,
            wisdom: wis, 
            charisma: cha
        }}/>])
    }

    const trackedCreatures = props.trackedCreatures;
    const setTrackedCreatures = props.setTrackedCreatures;

    return(
        <div>
            <h3>Pridėti padarą</h3>
            <input type="text" name="creature-name" id="creature-name" defaultValue="Pavadinimas" onChange={e => setName(e.target.value)}/>
            <input type="number" name="strength" id="str" defaultValue="10" onChange={e => setStr(parseInt(e.target.value))}/>
            <input type="number" name="dexterity" id="dex" defaultValue="10" onChange={e => setDex(parseInt(e.target.value))}/>
            <input type="number" name="constitution" id="con" defaultValue="10" onChange={e => setCon(parseInt(e.target.value))}/>
            <input type="number" name="inteligence" id="int" defaultValue="10" onChange={e => setInt(parseInt(e.target.value))}/>
            <input type="number" name="wisdom" id="wis" defaultValue="10" onChange={e => setWis(parseInt(e.target.value))}/>
            <input type="number" name="charisma" id="chr" defaultValue="10" onChange={e => setCha(parseInt(e.target.value))}/>
            <button onClick={addCreature}>Add Creature</button>
        </div>
    )
}

export default AddCreatureModal