import React from "react";
import styled from 'styled-components';
import ResetButton from "../components/ResetButton";

const GameControlRibbon = styled.div`
    position: fixed;
    top: 00px;
    right: 25px;
    align-items: center;
    display: inline-flexbox;
    justify-content: center;
    line-height: 1;
    padding: 10px 0;
`;

const GameControls = ({resetGame}) => {

    return <GameControlRibbon>
        <h5>A text adventure game</h5>
        <ResetButton onReset={resetGame} />

    </GameControlRibbon>

}

export default GameControls;