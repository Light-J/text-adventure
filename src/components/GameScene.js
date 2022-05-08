import React from "react";
import Action from "./Action";
import styled from 'styled-components';
import SceneText from "./SceneText";
import SceneMedia from "./SceneMedia";

const SceneScreen = styled.div`
    
    width: 80vw;
    height: 70vh;
    align-items: left;


    @media screen and (max-width: 600px) {
        padding-left: 0;
        height: 80vh;
        margin-left: 0;
    }
`;

const ActionPanel = styled.div`
    @media screen and (max-width: 600px) {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 100vw;
        align-items: center;
    }
`;

const GameScene = ({sceneDetails, updateGameScene}) => {

    console.log(sceneDetails)

    return <div>
            <SceneScreen>
                {(sceneDetails.media) ? <SceneMedia url={sceneDetails.media} /> : null}
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