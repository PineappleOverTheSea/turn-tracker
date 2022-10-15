import { IPlayer } from "../../interfaces/IPlayer";
import { generateRandomId } from "../utils/utils";


export const Player = (props : IPlayer) =>{
    let player = {...props}

    

    const updatePlayer = (valueType : string, value : string | number) =>{

    }

    return(
        <div className="player">
            <div className="player-name">
                {player.name}
            </div>
            <div className="player-initiative">{player.initiative}</div>
        </div>
    )
}

Player.defaultProps = {
    classList: [],
    id: generateRandomId(),
    name: "Player",
    initiative: 0
}