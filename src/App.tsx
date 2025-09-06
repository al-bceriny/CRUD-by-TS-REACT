import TodoList from "./components/TodoList";
import "./CSS/App.css"
import {FaClipboardList} from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
        <h1>What To Do Today</h1>
        <FaClipboardList />
        </div>
     
      </div>
      <TodoList />
    </div>
  );
}

export default App;
