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


const SceneText = ({text}) => {
    const [originalTextArray, setOriginalTextArray] = useState(text.split(""));
    const [displayedMessage, setDisplayedMessage] = useState(text.charAt(0));
    const [originalText, setOriginalText] = useState(text);

  useEffect(() => {
    // If the re-render if done by the text changing then we need to reset
    if(text !== originalText) {
        let tmpOriginalTextArray = text.split("");
        setDisplayedMessage(tmpOriginalTextArray.shift())
        setOriginalTextArray(tmpOriginalTextArray)
        
        setOriginalText(text)
    }

    // This is interesting so break it down
    // First we want to set this as a timeout so that it occurs after the specified duration
    // The specified duration is proportional to the text length, therefore longer texts render more quickly
    // We then update the displayed text, useEffect has a dependency on displayed text and so
    // when we update that then this is called again
    // provided that the text array still has some letters in it
    if(originalTextArray.length > 0) setTimeout(
        () => setDisplayedMessage(displayedMessage.concat(originalTextArray.shift())), 600 * 1/text.length);

  }, [displayedMessage, text]);




    return <AnimatedText>{displayedMessage}</AnimatedText>
}

export default SceneText;
