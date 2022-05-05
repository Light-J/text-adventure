import React from "react";



const Action = ({text, location, updateGameScene}) => {

    return <div>
        <button onClick={() => updateGameScene(location)}>{text}</button>
    </div>

}

export default Action