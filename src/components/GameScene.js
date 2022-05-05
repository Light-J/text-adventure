import React from "react";
import Action from "./Action";


const GameScene = ({sceneDetails, updateGameScene}) => {

    return <div>
            <p>{sceneDetails.text}</p>
            {sceneDetails.actions.map((action, id) => 
                <Action 
                key={id}
                updateGameScene={updateGameScene}
                text={action.text}
                location={action.location} />)}
        </div>
}

export default GameScene