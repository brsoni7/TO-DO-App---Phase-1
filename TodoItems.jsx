import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({todoItems}) => {
    return <>
        <div className= {styles.itemContainer}>
        {todoItems.map((item) => (
            <TodoItem 
            tododate = {item.date} 
            todoname = {item.name}>
        </TodoItem>
        ))}
        
        </div>
    </>
}
export default TodoItems;
