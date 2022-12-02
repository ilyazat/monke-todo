import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm({ addToDo }) {
  const [text, setText] = useState("");
  function callAddToDo(event) {
    event.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={callAddToDo}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button type="submit" title="Sumbit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
