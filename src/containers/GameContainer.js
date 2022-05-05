import React, { useCallback, useState } from "react";
import GameScene from "../components/GameScene";
import gameData from "../data/test-game.json"

const GameContainer = () => {
    const [currentScene, setCurrentScene] = useState(1);

    const updateGameScene = (scene) => {
        console.log(scene)
        setCurrentScene(scene)
    }

    return <div>

            <GameScene 
            sceneDetails={gameData.scenes[currentScene]}
            updateGameScene={updateGameScene}
            />
        </div>
}

export default GameContainer