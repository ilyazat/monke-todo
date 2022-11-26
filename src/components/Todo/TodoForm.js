import styles from './TodoForm.module.css'

function TodoForm ({ addToDo }) {
    function callAddToDo (event) {
        event.preventDefault()
        addToDo(event.target.todo.value)
        event.target.todo.value = ''
        
        
    }

    return (<div className={styles.todoFormContainer}>
        <form onSubmit={callAddToDo}>
            <input type="text" name="todo" placeholder="Enter new todo"/>
            <button type="submit">Submit</button>
        </form>
      
        </div>
    )
}

export default TodoForm