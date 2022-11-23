import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';


function App() {

    const [toDoListobject, setToDoList] = useState([])

    function addToDo (todo) {
        toDoListobject.push(todo)
        console.log(toDoListobject)
        setToDoList(toDoListobject => [...toDoListobject])
        // return setToDoList
    }
    console.log("app")

    return (<div className="App">
        <TodoForm addToDo={addToDo}/>
        <TodoList list={toDoListobject}/>

        
        </div>);
}

export default App;
