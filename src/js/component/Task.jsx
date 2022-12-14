import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Task(props) {

    const todoElement =  props.todos.map((todo, index) => {
        return(
        <li key={index} id={index}>
            <p>{todo.label}</p>
            <p>
            <FontAwesomeIcon className="icon float-end" icon={faX} onClick={() => props.deleteToDo(index)}/>
            </p>
        </li>)
    })

    return ( 
        <>
        {todoElement}
        </>
    );
}

export default Task;
