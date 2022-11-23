import Todo from "./Todo";

function TodoList({ list }) {
    console.log('todolist')
  return (
    <div>
      <h1>ToDoList</h1>
      {list.map((item) => {
        return (
            <Todo content={item}/>
            )
      })}
    </div>
  );
}

export default TodoList;
