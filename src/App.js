import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';


function App() {

    const [toDoListobject, setToDoList] = useState([])

    function addToDo (todo) {
        if (todo === '') {
            return
        }
        setToDoList(toDoListobject => [...toDoListobject, todo])
    }
    
    function clearTodos () {
        setToDoList(toDoListobject => [])
    }

    return (<div className="App">
        <h1 className='app-h1'>To Do App</h1>
        <TodoForm addToDo={addToDo}/>
        <button>refresh</button>
        <button onClick={clearTodos}>Delete all</button>
        {(toDoListobject.length === 0) && <h2>Todo list is empty</h2>}
        {<TodoList list={toDoListobject}/>}
        {(toDoListobject.length > 0) && <h2>You have {toDoListobject.length} tasks</h2>}
        
        </div>);
}

export default App;
