import React from "react";
import "./ProgressBar.css"

const ProgressBar = ({completed}) => {
    let color =  '#d4edf8';
    let percentage = completed;
    if (percentage > 100){
        color = 'red';
        percentage = 100;
    }
    
    return (
        <div className="ProgressBar" >
            <span className ="LabelStyles">{`${completed}%`}</span>
            <div  className="ProgressFill" style={{width: `${percentage}%`, backgroundColor: color}} >
                
            </div>
        </div>
    )
}

export default ProgressBar;