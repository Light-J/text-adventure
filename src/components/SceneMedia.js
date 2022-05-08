import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from 'styled-components';

const MediaContainer = styled.div`
    @media screen and (max-width: 600px) {
        margin-bottom: -10vh;
        margin-top: -5vh;
    }
`;

const SceneMedia = ({url}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])


    return <MediaContainer>
        <ReactPlayer playing width={screenWidth < 600 ? "80vw" : "40vw"} url={url} />
        </MediaContainer>
}

export default SceneMedia;