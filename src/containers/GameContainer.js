import React, { useEffect, useState } from "react";
import GameScene from "../components/GameScene";
import GameControls from "./ControlsContainer";
import axios from "axios";

const GameContainer = () => {
    const [gameData, setGameData] = useState(null)
    const [currentScene, setCurrentScene] = useState("start_scene");
    const [playerStep, setPlayerStep] = useState(1)

    useEffect(() => {
        axios.get('story/test-game.json')
            .then(response => {
                setGameData(response.data);
            })
    }, [])

    const updateGameScene = (scene) => {
        setPlayerStep(playerStep+1);
        gameData.storySteps.forEach(storyStep => {
          if(storyStep.occursAt === playerStep) {
              setCurrentScene(storyStep.destination)
            } else {
                setCurrentScene(scene)
            }
        }) 
    }

    const resetGame = () => {
        setCurrentScene("start_scene")
        setPlayerStep(1)
    }

    if(gameData === null) return <p>Loading game data....</p>

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