import React from "react";
import ReactPlayer from "react-player";

const SceneMedia = ({url}) => {
    return <ReactPlayer url={url} playing={true} />
}

export default SceneMedia