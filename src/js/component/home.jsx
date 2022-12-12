import React, { useState } from "react";
import Tasklist from "./Tasklist.jsx"
import Input from "./Input.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [newTask, setNewTask] = useState("")
	const [todos, setTodos] = useState([])

	const addNewTask = (event) => {
		setNewTask(event.target.value)
	}

	const addToDo = (event) => {
		if(event.key === "Enter"){
		setTodos([...todos, event.target.value]);
		setNewTask("");

		}
	}

	const deleteToDo = (id) =>{
		setTodos(todos.filter((todo, i) => i !== id))
	}

	return (
		<div className="container d-flex justify-content-center flex-column">
			<h1 className="text-center display-2">todos</h1>
			<Input addToDo={addToDo} addNewTask={addNewTask} Task={newTask}/>
			<Tasklist todos={todos} deleteToDo={deleteToDo}/>
		</div>
	);
};

export default Home;
