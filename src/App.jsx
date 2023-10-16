import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import "./styles/Todo.scss";
import "./styles/AddTodo.scss";
function App() {
  return (
    <>
      <h1>Learn Redux ToolKit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
