import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/Todoitems";
import './App.css';

function App() {
  const todoItems = [
    { name: "kaam", 
      date: "03.09.2025"
    },

    { name: "kaaj",
      date: "06.10.2026" 
    }
  ];


  return (
    <>
      <center className="todo-container">
        <Appname></Appname>
        <AddTodo></AddTodo>
        <TodoItems todoItems = {todoItems}></TodoItems>
      </center>
    </>
  );
}

export default App;
