import React, { useEffect, useState } from "react";
import Tasklist from "./Tasklist.jsx"
import Input from "./Input.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	// Create the User if Needed:
	// User Variable used in Validation & creation.
	const user = "JoseRF"

	//Get the users and check for current user.
	fetch("https://assets.breatheco.de/apis/fake/todos/user")
		.then(response =>{
			// Log the status of the response to the request
			//console.log(response.ok);
			//console.log(response.status);
			// return what is inside of the response.
			return response.json();

		}).then(data =>{
			// Check if user is Already created
			if(data.includes(user)){
				console.log("User already Created")
			} else {
				// Create the user with POST fetch request.
				fetch(`https://assets.breatheco.de/apis/fake/todos/user/${user}`,{
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-type": "application/json"
				}
				}).then(response => {
					console.log("PUT: " + response.ok);
					console.log("PUT: " + response.status)
					console.log("Created the User: " + user)
				}).catch(error => {
					console.log(error)
				})
			}
		}).catch(error =>{
			console.log(error)
		})
	
	// Get the todos from The API: 

	useEffect(() => {
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/${user}`)
		.then(response => {
			console.log("Get ToDos First time: " + response.ok);
			console.log("Get ToDos First time status:" + response.status)
			return response.json()
		}).then(data =>{
			setTodos([...data])
		})
	}, [])

	const [newTask, setNewTask] = useState("")
	const [todos, setTodos] = useState([])

	const addNewTask = (event) => {
		setNewTask(event.target.value)
	}

	// Function that updates the ToDo List
	const addToDo = (event) => {
		if(event.key === "Enter"){	
		setTodos([...todos, {
				"label": event.target.value,
				"done": false
				}
			]);
			setNewTask("")
		};
	}

	// This use effect reacts to ToDo List and Updated when ToDo changes Either when something is added or when something is deleted.
	useEffect(() => {
		
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/${user}`,{
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-type": "application/json"
			}
		})
		.then(response => {
			console.log("Update ToDo: " + response.ok)
			console.log("Update ToDo: "+ response.status)
		})
		.catch(error => {
			console.log(error)
		})
			
	}, [todos])

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
