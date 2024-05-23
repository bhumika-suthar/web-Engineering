import React from "react";
import TodoList from "./TodoList"; // Update import statement to import TodoList component
import "./App.css"; // Import any additional stylesheets if needed

function App() {
  return (
    <div className="App"> {/* Add any desired class names or styles to the outer div */}
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <TodoList /> {/* Include the TodoList component here */}
    </div>
  );
}

export default App;
