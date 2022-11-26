import Todo from "./Todo";

function TodoList({ list }) {
  return (
    <div>
      {list.map((item, index) => {
        return (
            <Todo content={item} key={index}/>
            )
      })}
    </div>
  );
}

export default TodoList;
