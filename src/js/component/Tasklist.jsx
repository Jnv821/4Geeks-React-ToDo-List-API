import React from 'react';
import Task from "./Task.jsx"


function Tasklist(props) {

    return (
        <ul>
            <Task todos={props.todos} deleteToDo={props.deleteToDo} />
        </ul>
    );
}

export default Tasklist ;
