import React from "react";
import Action from "./Action";
import styled from 'styled-components';
import SceneMedia from "./SceneMedia";

const SceneScreen = styled.div`
`;

const ActionPanel = styled.div`
`;

const GameScene = ({sceneDetails, updateGameScene}) => {

    return <div>
            <SceneScreen>
                <p>{sceneDetails.text}</p>
                {(sceneDetails.media) ? <SceneMedia url={sceneDetails.media} /> : null}
            </SceneScreen>
            
            <ActionPanel>
                {sceneDetails.actions.map((action, id) => 
                        <Action 
                        key={id}
                        updateGameScene={updateGameScene}
                        text={action.text}
                        destination={action.destination} />)}
            </ActionPanel>

        </div>
}

export default GameScene