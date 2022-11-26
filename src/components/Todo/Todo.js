import styles from './Todo.module.css'

function Todo({ content }) {
  return(<>
  <div className={styles.todo_card}>
  
  <p>{content}</p></div>
  </>);
}

export default Todo;
