import React from "react";

function Input(props) {
    
    return ( 
        <>
        <input type="text" value={props.Task} onChange={props.addNewTask} onKeyUp={props.addToDo}/>
        </>
    );
}

export default Input;