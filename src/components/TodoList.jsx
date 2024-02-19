import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  }
  return (
    <>
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button>Nueva Tarea</button>
      </form>
      <hr />
      <ol
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {todo}
            &nbsp; &nbsp;
            <button onClick={() => handleDelete(index)}>Borrar</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default TodoList;
