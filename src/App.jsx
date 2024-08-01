import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Go to work",
    "Call dad",
    "Clean the bathroom",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleTodoDelete = (index) => {
    const updateTodos = todos.filter((element, i) => i !== index);
    setTodos(updateTodos);
  };

  const handleMoveDown = (index) => {
    if (index < todos.length - 1) {
      const updateTodos = [...todos];
      [updateTodos[index], updateTodos[index + 1]] = [
        updateTodos[index + 1],
        updateTodos[index],
      ];
      setTodos(updateTodos);
    }
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const updateTodos = [...todos];
      [updateTodos[index], updateTodos[index - 1]] = [
        updateTodos[index - 1],
        updateTodos[index],
      ];
      setTodos(updateTodos);
    }
  };
  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={handleNewTodoChange}
            placeholder="Enter a task..."
          />
          <button className="add-button" type="submit" onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              <span className="text">{todo}</span>
              <button
                className="delete-button"
                onClick={() => handleTodoDelete(index)}
              >
                Delete
              </button>
              <button
                className="move-button"
                onClick={() => handleMoveUp(index)}
              >
                👆
              </button>
              <button
                className="move-button"
                onClick={() => handleMoveDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default App;
