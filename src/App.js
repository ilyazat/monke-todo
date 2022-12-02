import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import TodosActions from "./components/Todo/TodosActions";

function App() {
  const [toDoListobject, setToDoList] = useState([]);

  function addToDo(todo) {
    const newTodo = {
      text: todo,
      isCompleted: false,
      id: uuidv4(),
    };
    if (newTodo.text === "") {
      return;
    }
    setToDoList((toDoListobject) => [...toDoListobject, newTodo]);
  }

  const deleteTodoHandler = (id) => {
    setToDoList(toDoListobject.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setToDoList(
      toDoListobject.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setToDoList([]);
  };

  const deleteCompletedTodosHandler = () => {
    setToDoList(toDoListobject.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = toDoListobject.filter(
    (todo) => todo.isCompleted
  ).length;

  return (
    <div className="App">
      <h1 className="app-h1">To Do App</h1>
      <TodoForm addToDo={addToDo} />
      {toDoListobject.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        list={toDoListobject}
        deleteTodo={deleteTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
      />
      {completedTodosCount > 0 &&
        `You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        }`}
    </div>
  );
}

export default App;
