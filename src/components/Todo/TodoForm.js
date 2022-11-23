function TodoForm ({ addToDo }) {
    console.log('todoform')
    function callAddToDo (event) {
        event.preventDefault()
        addToDo(event.target.todo.value)
        event.target.todo.value = ''
        
        
    }

    return (<div>
        <form onSubmit={callAddToDo}>
            <input type="text" name="todo" placeholder="Enter new todo"/>
            <button type="submit">Submit</button>
        </form>
      
        </div>
    )
}

export default TodoForm