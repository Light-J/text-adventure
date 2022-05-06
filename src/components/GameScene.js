import React from "react";
import Action from "./Action";
import styled from 'styled-components';
import ReactPlayer from "react-player";
import SceneText from "./SceneText";

const SceneScreen = styled.div`
`;

const ActionPanel = styled.div`
`;

const GameScene = ({sceneDetails, updateGameScene}) => {

    return <div>
            <SceneScreen>
                {(sceneDetails.media) ? <ReactPlayer playing url={sceneDetails.media} /> : null}
                <SceneText text={sceneDetails.text} />
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