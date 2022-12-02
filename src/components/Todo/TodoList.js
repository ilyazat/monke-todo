import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ list, deleteTodo, toggleTodoHandler }) {
  return (
    <div className={styles.todoListContainer}>
      {!list.length && <h2>Todo list is empty</h2>}

      {list.map((item, index) => {
        return (
          <Todo
            todo={item}
            key={item.id}
            deleteTodo={deleteTodo}
            toggleTodoHandler={toggleTodoHandler}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
