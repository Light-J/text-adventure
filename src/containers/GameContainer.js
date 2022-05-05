import React, { useState } from "react";
import GameScene from "../components/GameScene";
import ResetButton from "../components/ResetButton";
import gameData from "../data/test-game.json"
import GameControls from "./ControlsContainer";

const GameContainer = () => {
    const [currentScene, setCurrentScene] = useState("start_scene");
    const [playerStep, setPlayerStep] = useState(1)

    const updateGameScene = (scene) => {
        setPlayerStep(playerStep+1);
        gameData.storySteps.forEach(storyStep => {
          if(storyStep.occursAt === playerStep) {
              setCurrentScene(storyStep.destination)
            } else {
                console.log(scene)
                setCurrentScene(scene)
            }
        }) 
    }

    const resetGame = () => {
        setCurrentScene("start_scene")
        setPlayerStep(1)
    }

    return <div>
            <GameControls
                resetGame={resetGame} />
            <GameScene 
            sceneDetails={gameData.scenes[currentScene]}
            updateGameScene={updateGameScene}
            />
        </div>
}

export default GameContainer