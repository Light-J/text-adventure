import React from "react";
import Action from "./Action";
import styled from 'styled-components';
import ReactPlayer from "react-player";
import SceneText from "./SceneText";

const SceneScreen = styled.div`
    width: 80vw;
    height: 60vh;
`;

const ActionPanel = styled.div`
`;

const GameScene = ({sceneDetails, updateGameScene}) => {

    console.log(sceneDetails)

    return <div>
            <SceneScreen>
                {(sceneDetails.media) ? <ReactPlayer playing url={sceneDetails.media} /> : null}
                {sceneDetails.text.map((text, row) => 
                    <SceneText key={"id" + Math.random().toString(16).slice(2)} text={text} delay={row * 1000}/>
                )}
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