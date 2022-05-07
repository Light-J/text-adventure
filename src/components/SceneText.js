import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AnimatedText = styled.p`
    font-family: "Courier New", Courier, monospace;
    font-size: 23px;
    letter-spacing: 0.4px;
    word-spacing: -3.8px;
    color: #ffffff;
    font-weight: 400;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: none;
`;

const SceneText = ({text, delay = 0}) => {
    const [displayedMessage, setDisplayedMessage] = useState("");
    const [letterPointer, setLetterPointer] = useState(0);
    const [startRendering, setStartRendering] = useState(false)

    setTimeout(() => setStartRendering(true), delay)
    useEffect(() => {
        const updateDisplayedMessage = (letter) => {
            setDisplayedMessage(displayedMessage.concat(letter))
        }

        if (letterPointer < text.length && startRendering){
            let nextLetter = text.charAt(letterPointer)
            setTimeout(() => {
                updateDisplayedMessage(nextLetter)
                setLetterPointer(l => l+1);
            }, 600 * 1/text.length)
        }

    }, [text, delay, displayedMessage, startRendering, letterPointer]);

    return <AnimatedText>{displayedMessage}</AnimatedText>
}

export default SceneText;
